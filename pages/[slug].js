// import {
//   GetStaticPaths,
//   GetStaticPropsContext,
//   InferGetStaticPropsType,
// } from 'next'
// import { FormatedPost, PostFile } from '@shared/types'
import { getPosts } from '@shared/get-posts'
import hydrate from 'next-mdx-remote/hydrate'
import PostLayout from '@layouts/post'
import { POSTS_DIR } from 'config'
import mdxComponents from '@shared/mdx-components'

export default function Post({ mdxContent, frontMatter }) {
  const content = hydrate(mdxContent, { components: mdxComponents })

  return <PostLayout frontMatter={frontMatter}>{content}</PostLayout>
}

export const getStaticPaths = async () => {
  const posts = await getPosts(POSTS_DIR)

  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const posts = await getPosts(POSTS_DIR)

  const { mdx, frontMatter } = posts.find(
    ({ slug: routeSlug }) => routeSlug === slug
  )

  return {
    props: {
      mdxContent: mdx,
      frontMatter,
    },
  }
}
