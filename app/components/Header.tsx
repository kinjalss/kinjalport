import Link from 'next/link'

const Header = () => {
  'use client'
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Kinjal Surve</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link href="/projects" className="hover:text-gray-300">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

