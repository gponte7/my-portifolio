import Image from 'next/image'

interface ProjectsProps {
  imageSource: string
  title: string
  description: string
  link: string
}

export function ProjectCard({
  imageSource,
  title,
  description,
  link,
}: ProjectsProps) {
  return (
    <div className="h-[410px] lg:h-[500px] flex flex-col items-center justify-between gap-4 p-6 border-2 border-zinc-500 rounded-tl-3xl rounded-br-3xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] shadow-slate-900">
      <div className="flex flex-col items-center gap-6">
        <div className="w-full lg:h-44">
          <Image
            alt=""
            src={imageSource}
            width={1920}
            height={916}
            quality={100}
            className="w-full"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold p-1 border-2 border-transparent border-b-sky-800">
            {title}
          </h3>
        </div>
        <div>
          <p className="text-sm text-zinc-200">{description}</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-start">
        <a href={link} target="_blank">
          <button className="px-6 py-1 bg-transparent border lg:border-2 rounded-full border-sky-800 text-sm hover:bg-slate-800 transition duration-200">
            Ver mais
          </button>
        </a>
      </div>
    </div>
  )
}
