import Link from 'next/link'

const Nav = () => {

    const links = [
        { name: "Home", link: "/" },
        { name: "Posts", link: "/posts" },
        { name: "Contact", link: "/contact" },
        { name: "Video", link: "/video" },
    ]
    return (
        <ul className="flex space-x-6 my-4 ml-4">
            {links.map((l) => {
                return (
                    <li key={l.name}><Link href={l.link}><a>{l.name}</a></Link></li>
                )
            })}
        </ul>
    )
}

export default Nav
