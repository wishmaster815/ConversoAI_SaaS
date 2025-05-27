import Image from "next/image"
import Link from "next/link"

interface CardProps {
  id: string,
  name: string,
  topic: string,
  subject: string,
  duration: number,
  color: string
}
const Card = ({ id, name, topic, subject, duration, color }: CardProps) => {
  return (
    <article className="companion-card " style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center" >
        <div className="subject-badge" >{subject}</div>
        <button>
          <Image src="/icons/bookmark.svg" alt="bookmark" width={12.5} height={15}
          />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image src="/icons/clock.svg" alt="duration" width={13.5} height={13.5} />
        <p className="text-sm">{duration} minutes</p>
      </div>
      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">
          Launch Lesson
        </button>
      </Link>
    </article >
  )
}

export default Card