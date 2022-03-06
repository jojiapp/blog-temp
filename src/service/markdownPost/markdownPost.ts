import path from 'path'
import * as fs from 'fs'

class MarkdownPost {

  private constructor () {}

  private static INSTANCE = new MarkdownPost()

  static getInstance (): MarkdownPost {
    return MarkdownPost.INSTANCE
  }

  getAllFilePaths (filePath: string[] = []): string[][] {
    const currentPath = path.join('_posts', ...filePath)
    const postFiles = fs.readdirSync(currentPath)

    const filePaths: string[][] = []
    const mdRgx = '\.md$'

    for (const postFile of postFiles) {
      if (postFile.match(mdRgx) === null) { // 폴더일 경우
        filePaths.push(...this.getAllFilePaths([...filePath, postFile]))
        continue
      }

      const filename = postFile.split('.')[0]
      filePaths.push([...filePath, filename])
    }
    return filePaths
  }

}

export default MarkdownPost