import Head from 'next/head'
import Nav from '../../components/Nav.js'

const Post = ({ post }) => {
  return (
    <div>
      <Head>
        <title>Posts | Sam Kota Private</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="w-full px-8">
        <div className="flex flex-col items-center justify-content">
          <h1 className="text-4xl mb-8">Post</h1>
          <div className="shadow p-8 mb-6 bg-gray-50">
            <p className="mb-4"><span className="font-bold">ID: </span>{post.id}</p>
            <p className="mb-4"><span className="font-bold">Title: </span>{post.title}</p>
            <p className="mb-4"><span className="font-bold">Content: </span>{post.body}</p>
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
