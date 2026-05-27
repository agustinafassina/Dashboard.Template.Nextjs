import Link from 'next/link'
import {
  siteGuideIntro,
  siteGuideSections,
} from '@/config/siteGuide'
import { guidePageStyles } from './styles'

export const metadata = {
  title: 'Guía — About this site',
  description: siteGuideIntro.description,
}

export default function GuidePage() {
  return (
    <div className={guidePageStyles.page}>
      <article className={guidePageStyles.article}>
        <header className={guidePageStyles.header}>
          <p className={guidePageStyles.eyebrow}>Guía</p>
          <h1 className={guidePageStyles.title}>{siteGuideIntro.title}</h1>
          <p className={guidePageStyles.description}>{siteGuideIntro.description}</p>
          <Link href="/home/dashboard" className={guidePageStyles.backLink}>
            ← Volver al dashboard
          </Link>
        </header>

        <nav className={guidePageStyles.toc} aria-label="Índice de la guía">
          <p className={guidePageStyles.tocLabel}>Secciones</p>
          <ul className={guidePageStyles.tocList}>
            {siteGuideSections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className={guidePageStyles.tocLink}>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={guidePageStyles.sections}>
          {siteGuideSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={guidePageStyles.section}
            >
              <h2 className={guidePageStyles.sectionTitle}>{section.title}</h2>
              <div className={guidePageStyles.sectionBody}>
                {section.content.split('\n\n').map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </div>
  )
}
