
import Image from 'next/image'

const projects = [
  {
    title: "Face Recognition System",
    description: "A face detection project is a computer science project that uses algorithms to find human faces in images or videos. Face detection is a type of computer vision technology",
    image: "/face.jpeg",
    technologies: ["Python", "Ultralytics YOLO"]
  },
  {
    title: "Attendance Management System",
    description: "An attendance management project is a software-based project that tracks attendance data for students",
    image: "/att.jpeg",
    technologies: ["Python", "MS Excel"]
  },
  {
    title: "Distance Tracker",
    description: "An Arduino Uno distance sensor project uses an ultrasonic sensor to measure the distance between an Arduino board and an object. The sensor sends out a sound wave and measures how long it takes to return, which is then used to calculate the distance",
    image: "/dis.jpeg",
    technologies: ["Arduino Uno ", "C"]
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gray-200 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

