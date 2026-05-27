'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import type { UserProfile } from '@auth0/nextjs-auth0/client'
import BookIcon from '@/components/atoms/Icons/BookIcon'
import LogoutIcon from '@/components/atoms/Icons/Logout'
import SunIcon from '@/components/atoms/Icons/SunIcon'
import MoonIcon from '@/components/atoms/Icons/MoonIcon'
import { getClientName } from '@/utils/sharedFunctions'
import { useLanguage, type Locale } from '@/context/LanguageContext'
import {
  getAvatarButtonClass,
  getAvatarImageClass,
  getAvatarInitialsClass,
  getLanguageOptionClass,
  getLanguageSkeletonClass,
  getThemeOptionClass,
  getThemeSkeletonClass,
  menuSectionLabel,
  userMenuStyles,
} from './styles'

type ThemeOption = 'light' | 'dark'

const languageOptions: { value: Locale; label: string }[] = [
  { value: 'es', label: 'Español' },
  { value: 'en', label: 'English' },
]

interface UserMenuProps {
  user: UserProfile
  jobTitle?: string | null
}

const themeOptions: { value: ThemeOption; label: string; icon: ReactNode }[] = [
  { value: 'light', label: 'Light', icon: <SunIcon width={18} height={18} /> },
  { value: 'dark', label: 'Dark', icon: <MoonIcon width={18} height={18} /> },
]

export default function UserMenu({ user, jobTitle }: UserMenuProps) {
  const router = useRouter()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [imageError, setImageError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const displayName = getClientName(user)
  const initials = displayName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const activeTheme: ThemeOption = theme === 'dark' ? 'dark' : 'light'

  const isDark = mounted && resolvedTheme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && theme === 'system') {
      setTheme('light')
    }
  }, [mounted, theme, setTheme])

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const handleLogout = () => {
    setOpen(false)
    router.push('/api/auth/logout')
  }

  return (
    <div ref={containerRef} className={userMenuStyles.root}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={getAvatarButtonClass(isDark, open)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`Menú de ${displayName}`}
      >
        {user.picture && !imageError ? (
          <Image
            src={user.picture}
            alt=""
            width={40}
            height={40}
            className={getAvatarImageClass(isDark)}
            onError={() => setImageError(true)}
          />
        ) : (
          <span className={getAvatarInitialsClass(isDark)}>{initials}</span>
        )}
      </button>

      {open && (
        <div role="menu" className={userMenuStyles.panel}>
          <div className={userMenuStyles.userHeader}>
            <p className={userMenuStyles.userName}>{displayName}</p>
            {jobTitle && <p className={userMenuStyles.userJob}>{jobTitle}</p>}
            {user.email && <p className={userMenuStyles.userEmail}>{user.email}</p>}
          </div>

          <div className={userMenuStyles.section}>
            <p className={menuSectionLabel}>Apariencia</p>
            {mounted ? (
              <div
                className={userMenuStyles.themeGrid}
                role="group"
                aria-label="Tema del dashboard"
              >
                {themeOptions.map((option) => {
                  const isActive = activeTheme === option.value
                  return (
                    <button
                      key={option.value}
                      type="button"
                      role="menuitemradio"
                      aria-checked={isActive}
                      onClick={() => setTheme(option.value)}
                      className={getThemeOptionClass(isActive)}
                    >
                      {option.icon}
                      <span>{option.label}</span>
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className={userMenuStyles.themeGrid}>
                {themeOptions.map((option) => (
                  <div key={option.value} className={getThemeSkeletonClass()} />
                ))}
              </div>
            )}
            {mounted && resolvedTheme && (
              <p className={userMenuStyles.themeHint}>
                Activo: {resolvedTheme === 'dark' ? 'Dark' : 'Light'}
              </p>
            )}
          </div>

          <div className={userMenuStyles.languageSection}>
            <p className={menuSectionLabel}>Idioma</p>
            {mounted ? (
              <div
                className={userMenuStyles.languageGrid}
                role="group"
                aria-label="Idioma del dashboard"
              >
                {languageOptions.map((option) => {
                  const isActive = locale === option.value
                  return (
                    <button
                      key={option.value}
                      type="button"
                      role="menuitemradio"
                      aria-checked={isActive}
                      onClick={() => setLocale(option.value)}
                      className={getLanguageOptionClass(isActive)}
                    >
                      {option.label}
                    </button>
                  )
                })}
              </div>
            ) : (
              <div className={userMenuStyles.languageGrid}>
                {languageOptions.map((option) => (
                  <div key={option.value} className={getLanguageSkeletonClass()} />
                ))}
              </div>
            )}
          </div>

          <div className={userMenuStyles.actions}>
            <a
              href="/guide"
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              onClick={() => setOpen(false)}
              className={userMenuStyles.guideLink}
            >
              <span className={userMenuStyles.guideIcon}>
                <BookIcon />
              </span>
              Guía — About this site
            </a>
            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              className={userMenuStyles.logoutButton}
            >
              <LogoutIcon width={18} height={18} />
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
