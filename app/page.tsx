
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <Image
          src="/photo.jpeg?height=150&width=150"
          alt="Kinjal Surve"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Kinjal Surve</h1>
        <p className="text-xl text-gray-600">Computer Science Engineering Student</p>
        <p className="text-xl text-gray-600">School of Engineering & Technology</p>
        <Image
          src="/pcu.webp?height=150&width=150"
          alt="Kinjal Surve"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="mb-4">
          I'm a passionate computer engineering student with a focus on Java. 
          This portfolio showcases my projects, skills, and experiences in the field of computer engineering.
        </p>
        <Link href="/projects" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          View My Projects
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <li className="bg-gray-100 p-2 rounded">C/C++ Programming</li>
          <li className="bg-gray-100 p-2 rounded">DSA</li>
          <li className="bg-gray-100 p-2 rounded">Java Programming</li>
          <li className="bg-gray-100 p-2 rounded">HTML/CSS </li>
          <li className="bg-gray-100 p-2 rounded">JavaScript</li>
          <li className="bg-gray-100 p-2 rounded">Python</li>
        </ul>
      </section>
    </div>
  )
}

