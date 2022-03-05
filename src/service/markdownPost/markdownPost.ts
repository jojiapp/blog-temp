import path from 'path'
import * as fs from 'fs'

class MarkdownPost {

  getFiles (): string[] {
    const a = path.join('_posts')
    const files = fs.readdirSync(a)
    return files
  }

}

export default MarkdownPost