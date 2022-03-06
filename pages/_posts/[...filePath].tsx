import { GetStaticPaths, GetStaticProps } from 'next'
import MarkdownPost from '../../src/service/markdownPost'

type TestProps = {
  files: string[]
}

const Post = ({ files }: TestProps) => (
  <div>{files}</div>
)

type Propsss = {
  filePath: string[]
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filePath = params as Propsss
  const files = filePath.filePath
  return {
    props: {
      files
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const markdownPost = MarkdownPost.getInstance()
  const paths: { params: { filePath: string[] } }[] = []

  markdownPost.getAllFilePaths().forEach(filePath => paths.push({ params: { filePath } }))
  return {
    paths,
    fallback: false
  }
}

// === Styled === //

export default Post