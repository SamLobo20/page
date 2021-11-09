import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../../components/Nav.js'

const Posts = ({ posts }) => {

    const [postsVisible, setPostsVisible] = useState(false)

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
                    <button onClick={() => setPostsVisible(!postsVisible)} className='button'>
                        {!postsVisible ? `Show posts` : `Hide posts`}
                    </button>

                    {postsVisible &&
                        <div className='flex flex-col'>
                            {posts.map((post) => {
                                const { body, id, title, userId } = post
                                return (
                                    <Link href={`/posts/${id}`} key={id}>
                                        <a className="shadow p-8 bg-gray-50 rounded mb-6 hover:shadow-none">
                                            <p className="csc">{id}</p>
                                            <p className="csc">{title}</p>
                                            <p className="dcsdc">{body}</p>
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>
                    }

                </div>
            </main>
        </div>
    )
}


// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps(ctx) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const posts = await response.json()

    return {
        props: {
            posts,
        }
    }
}

export default Posts
