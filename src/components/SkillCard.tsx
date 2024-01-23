import Image from 'next/image'

interface StatisticsCardProps {
  imageSource: string
  title: string
}

export function SkillCard({ imageSource, title }: StatisticsCardProps) {
  return (
    <div className="flex flex-col lg:w-52 lg:h-52 items-center justify-center gap-4">
      <h3 className="text-base uppercase">{title}</h3>
      {title === 'Next JS' ? (
        <Image
          src={imageSource}
          alt=""
          width={1000}
          height={1000}
          quality={100}
          className={`w-40 h-24 mt-9`}
        />
      ) : (
        <Image
          src={imageSource}
          alt=""
          width={1000}
          height={1000}
          quality={100}
          className={`w-40 h-40`}
        />
      )}

      {title === 'HTML' && (
        <div className="mt-4 w-full h-2 rounded-full bg-zinc-800">
          <div className="w-10/12 rounded-full bg-[#e44d25] h-2" />
        </div>
      )}

      {title === 'CSS' && (
        <div className="mt-4 w-full h-2 rounded-full bg-zinc-800">
          <div className="w-10/12 rounded-full bg-[#1e62ad] h-2" />
        </div>
      )}

      {title === 'Tailwind CSS' && (
        <div className="mt-4 w-full h-2 rounded-full bg-zinc-800">
          <div className="w-3/5 rounded-full bg-[#39bcf9] h-2" />
        </div>
      )}

      {title === 'React JS' && (
        <div className="mt-4 w-full h-2 rounded-full bg-zinc-800">
          <div className="w-3/4 rounded-full bg-[#00d8ff] h-2" />
        </div>
      )}

      {title === 'Next JS' && (
        <div className="mt-11 w-full h-2 rounded-full bg-zinc-800">
          <div className="w-3/5 rounded-full bg-zinc-100 h-2" />
        </div>
      )}

      {title === 'Typescript' && (
        <div className="mt-4 w-full h-2 rounded-full bg-zinc-800">
          <div className="w-3/4 rounded-full bg-[#3179c7] h-2" />
        </div>
      )}
    </div>
  )
}
