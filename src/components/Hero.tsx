import Image from 'next/image'

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-12 pt-6 min-h-screen lg:pt-0 2xl:pt-28">
      <div className="flex flex-col gap-8 lg:w-full lg:flex lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-2 lg:w-1/2">
          <h2 className="uppercase text-sm lg:text-base font-semibold text-sky-800">
            Desenvolvedor Front-end
          </h2>
          <h1 className="text-5xl 2xl:text-6xl font-semibold">
            Guilherme Ponte
          </h1>
          <p className="text-lg 2xl:text-xl text-zinc-400">
            Técnico em tecnologia da informação com mais de um ano de
            experiência focado em desenvolvimento front-end.
          </p>
          <button className="hidden lg:flex lg:w-80 lg:mt-6 items-center justify-center px-6 py-2 rounded-lg bg-transparent border lg:border-2 border-sky-800 text-zinc-100 text-lg hover:bg-slate-800 transition duration-200">
            <a href="GuilhermePonte.pdf" download>
              Baixar currículo
            </a>
          </button>
        </div>
        <div>
          <Image
            src="/hero.png"
            alt=""
            width={2000}
            height={2000}
            quality={100}
            className="lg:hidden"
          />
          <Image
            src="/hero.png"
            alt=""
            width={500}
            height={500}
            quality={100}
            className="hidden lg:flex"
          />
        </div>
      </div>
      <button className="flex lg:hidden items-center justify-center px-6 py-2 rounded-lg bg-transparent border border-sky-800 text-zinc-100 text-lg hover:bg-slate-900 transition duration-100">
        <a href="GuilhermePonte.pdf" download>
          Baixar currículo
        </a>
      </button>
    </div>
  )
}
