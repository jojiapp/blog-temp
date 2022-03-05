import { GetStaticPaths, GetStaticProps } from 'next'
import { nanoid } from 'nanoid'
import MarkdownPost from '../../src/service/markdownPost'

type TestProps = {
  files: string[]
}

const Post = ({ files }: TestProps) => (
  // <div>post</div>
  files.map(f => <div key={nanoid()}>{f}</div>
  )
)

type Propsss = {
  filePath: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let markdownPost = new MarkdownPost()

  const filePath = params as Propsss
  const files = [markdownPost.getFiles()]
  return {
    props: {
      files
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { filePath: ['a', 'b'] } },
      { params: { filePath: ['c'] } }
    ],
    fallback: false
  }
}

// === Styled === //

export default Post