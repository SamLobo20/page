import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'

const Nav = () => {

    const router = useRouter()
    const links = [
        { name: "Home", url: "/" },
        { name: "Posts", url: "/posts" },
        { name: "Contact", url: "/contact" },
        { name: "Video", url: "/video" },
    ]

    return (
        <ul className="flex space-x-6 my-4 ml-4 mb-12">
            {links.map((l) => {
                return (
                    <li key={l.name} className='w-16'>
                        <Link href={l.url}>
                            <a className={`${router.pathname === l.url ? 'active-nav' : ''}`}>
                                {l.name}
                            </a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Nav
