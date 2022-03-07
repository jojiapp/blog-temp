import { GetStaticPaths, GetStaticProps } from 'next'
import MarkdownPost from '../../src/service/markdownPost'
import { getPostPaths, readPosts } from '../../src/service/markdownPost/readMarkdown'

type PostPropsType = {
  markdownPostsContent: string[]
}

const Post = ({ markdownPostsContent }: PostPropsType) => {
  const markdownPosts = markdownPostsContent.map(postContent => MarkdownPost.of(postContent))
  const a = markdownPosts[0]
  return (
    <div>{a.getContent()}</div>
  )
}

type ParamsType = {
  filePath: string[]
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const paramsType = params as ParamsType
  const markdownPostsContent = readPosts()
  return {
    props: {
      markdownPostsContent
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { filePath: string[] } }[] = []

  getPostPaths().forEach(filePath => paths.push({ params: { filePath } }))
  return {
    paths,
    fallback: false
  }
}

// === Styled === //

export default Post