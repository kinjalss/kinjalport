
import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image
            src="/photo.jpeg?height=300&width=300"
            alt="John Doe"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-2/3">
          <p className="mb-4">
            Hello! I'm Kinjal Surve, a computer science engineering student passionate about creating innovative solutions 
            to real-world problems. My journey in the world of technology began when I wrote my first computer 
            program at the age of 15, and since then, I've been fascinated by the endless possibilities in this field.
          </p>
          <p className="mb-4">
            Currently, I'm pursuing my Bachelor's degree in Computer Science Engineering at Pimpri Chinchwad  University, where I'm 
            focusing on Java , AI and Web technologies. I believe these areas have 
            the potential to revolutionize how we interact with the world around us.
          </p>
          <p className="mb-4">
            Outside of my studies, I'm an active member of the university's Project Club and have participated 
            in several hackathons. These experiences have not only sharpened my technical skills but also taught 
            me the importance of teamwork and creative problem-solving.
          </p>
          <p>
            I'm always eager to learn and take on new challenges. Feel free to explore my projects and get in 
            touch if you'd like to collaborate or just chat about technology!
          </p>
        </div>
      </div>
    </div>
  )
}

