import path from 'path'
import * as fs from 'fs'

export const getPostPaths = (filePath: string[] = []): string[][] => {
  const currentPath = path.join('_posts', ...filePath)
  const postFiles = fs.readdirSync(currentPath)

  const filePaths: string[][] = []
  const mdRgx = '\.md$'

  for (const postFile of postFiles) {
    if (postFile.match(mdRgx) === null) { // 폴더일 경우
      filePaths.push(...getPostPaths([...filePath, postFile]))
      continue
    }

    filePaths.push([...filePath, postFile])
  }
  return filePaths
}

export const readPosts = () => getPostPaths().map(postPath => fs.readFileSync(path.join('_posts', ...postPath), 'utf8'))
