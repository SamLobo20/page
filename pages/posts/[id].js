import { useEffect, useState } from 'react'
import Head from 'next/head'
import Nav from '../../components/Nav.js'
import { fetchPost } from '../../lib/fetchPost.js'
import { useRouter } from 'next/dist/client/router'

const Post = () => {
  const router = useRouter()
  const { id } = router.query
  const [post, setPost] = useState([])

  const fetchData = async (id) => {
    const postData = await fetchPost(id)
    setPost(postData)
  }

  useEffect(() => {
    fetchData(id)
  }, [id])

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

          <div className="shadow p-8 mb-6">
            <p className="mb-4"><span className="font-bold">ID: </span>{post.id}</p>
            <p className="mb-4"><span className="font-bold">Title: </span>{post.title}</p>
            <p className="mb-4"><span className="font-bold">Content: </span>{post.body}</p>
          </div>

        </div>
      </main>
    </div>

  )
}

export default Post
