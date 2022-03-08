import { GetStaticPaths, GetStaticProps } from 'next'
import MarkdownPost from '../../src/service/markdownPost'
import { getPostPaths, readPosts } from '../../src/service/markdownPost/readMarkdown'
import { nanoid } from 'nanoid'

type PostPropsType = {
  markdownPostsContent: string[]
}

const Post = ({ markdownPostsContent }: PostPropsType) => {
  const markdownPosts = markdownPostsContent.map(postContent => MarkdownPost.of(postContent))
  const a = markdownPosts[0]
  return (
    <div>
      {a.getTitleList().map(title => <div key={nanoid()}>{title}</div>)}
    </div>
  )
}

type ParamsType = {
  filePath: string[]
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const paramsType = params as ParamsType
  const markdownPostsContent = readPosts()

  // todo: 링크, 고유 값으로 현재 페이지 조회, 현재 내가 속한 폴더 정렬, 전체 정렬
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