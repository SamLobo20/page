import Head from 'next/head'
import Nav from '../../components/Nav.js'
import Link from 'next/link'

const Post = ({ post }) => {

  const { id, body, title, userId } = post

  return (
    <div>
      <Head>
        <title>Posts | Sam Kota Private</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="w-full px-8">

        <Link href={{ pathname: '/posts', query: { postsVisible: 'true' } }}>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute h-12 w-12 rounded hover:cursor-pointer hover:bg-brand hover:text-white transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
        </Link>

        <div className="flex flex-col items-center justify-content">
          <h1 className="text-4xl mb-8">Post</h1>
          <div className="shadow p-8 mb-6 bg-gray-50">
            <p className="mb-4"><span className="font-bold">ID: </span>{id}</p>
            <p className="mb-4"><span className="font-bold">Title: </span>{title}</p>
            <p className="mb-4"><span className="font-bold">Content: </span>{body}</p>
            <p className="mb-4"><span className="font-bold">User: </span>{userId}</p>
          </div>
        </div>
      </main>
    </div>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(ctx) {

  const id = ctx.params.id
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await response.json()

  return {
    props: {
      post,
    }
  }
}

// This function gets called at build time on server
export async function getStaticPaths() {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const posts = await response.json()

  const paths = posts.map((p) => {
    return ({
      params: { id: `${p.id}` },
    })
  })

  return {
    paths,
    fallback: false,
  };
}

export default Post
