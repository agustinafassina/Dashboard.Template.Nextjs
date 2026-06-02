import { rmSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()
const targets = ['.next']

for (const dir of targets) {
  rmSync(join(root, dir), { recursive: true, force: true })
  console.log(`Removed ${dir}/`)
}
