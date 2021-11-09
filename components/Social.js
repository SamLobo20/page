import Link from 'next/link'
import Image from 'next/image'

const Social = () => {
  return (
    <div className="absolute right-8">
      <ul className="flex flex-col gap-4">
        <li className=''>
          <Link href="https://web.facebook.com/SamLobo72">
            <a className="" target="_blank">
              <Image src="/social/facebook.png" width={40} height={40} alt="Facebook"></Image>
            </a>
          </Link>
        </li>
        <li className=''>
          <Link href="https://instagram.com/SamLobo72">
            <a className="" target="_blank">
              <Image src="/social/instagram.png" width={40} height={40} alt="Instagram"></Image>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Social
