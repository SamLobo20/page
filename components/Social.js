import Link from 'next/link'
import Image from 'next/image'

const Social = () => {
  return (
    <div className="absolute right-8">
      <ul className="flex flex-col gap-4">
        <li>
          <Link href="https://web.facebook.com/SamLobo72">
            <a target="_blank" rel="noopener noreferrer nofollow">
              <Image src="/social/facebook.png" width={40} height={40} alt="Facebook"></Image>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://instagram.com/sam_kota72">
            <a target="_blank" rel="noopener noreferrer nofollow">
              <Image src="/social/instagram.png" width={40} height={40} alt="Instagram"></Image>
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/SamLobo20">
            <a target="_blank" rel="noopener noreferrer nofollow">
              <Image src="/social/github.png" width={40} height={40} alt="Github"></Image>
            </a>
          </Link>
        </li >
      </ul >
    </div >
  )
}

export default Social
