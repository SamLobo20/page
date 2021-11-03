import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../../components/Nav.js'
import { fetchPosts } from '../../lib/fetchPosts.js'

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [postsVisible, setPostsVisible] = useState(false)

    async function togglePosts() {
        const posts = await fetchPosts()
        setPosts(posts)
        setPostsVisible(!postsVisible)
    }

    return (
        <div>
            <Head>
                <title>Posts | Sam Kota Private</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />

            <main className="w-screen px-8">

                <div className="flex flex-col items-center justify-content text-center">
                    <h1 className="text-4xl">Posts</h1>
                    <button onClick={togglePosts} className="border-1 bg-brand px-8 py-4 w-48 text-white rounded shadow-2xl hover:shadow transition-all my-8">
                        {!postsVisible ? `Show posts` : `Hide posts`}
                    </button>

                    {postsVisible &&

                        posts.map((post) => {
                            const { body, id, title, userId } = post
                            return (
                                <Link href={`/posts/${id}`} key={id}>
                                    <a className="shadow p-8 bg-gray-100 rounded mb-6 hover:shadow-none">
                                        <p className="csc">{id}</p>
                                        <p className="csc">{title}</p>
                                        <p className="dcsdc">{body}</p>
                                    </a>
                                </Link>
                            )
                        })
                    }

                </div>
            </main>
        </div>
    )
}

export default Posts
