import { Header } from '@/components/Header'
import { SkillCard } from '@/components/SkillCard'
import { CodeSimple } from '@phosphor-icons/react/dist/ssr/CodeSimple'
import { EnvelopeSimple } from '@phosphor-icons/react/dist/ssr/EnvelopeSimple'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr/GithubLogo'
import { InstagramLogo } from '@phosphor-icons/react/dist/ssr/InstagramLogo'
import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr/LinkedinLogo'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr/WhatsappLogo'
import Image from 'next/image'

const skills = [
  {
    imageSource: '/html.png',
    title: 'HTML',
  },

  {
    imageSource: '/css.png',
    title: 'CSS',
  },

  {
    imageSource: '/tailwind.png',
    title: 'Tailwind CSS',
  },

  {
    imageSource: '/react.png',
    title: 'React JS',
  },

  {
    imageSource: '/next.png',
    title: 'Next JS',
  },

  {
    imageSource: '/typescript2.png',
    title: 'Typescript',
  },
]

const footerTopics = [
  {
    title: 'Email',
    link: 'guilhermescponte@hotmail.com',
  },
  {
    title: 'Celular',
    link: '(24) 99207-8862',
  },
]

export default function Home() {
  return (
    <div id="home">
      <Header />
      <div className="mx-auto min-h-screen w-full max-w-[1600px] p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-20">
          <div className="flex flex-col items-center lg:items-start gap-12">
            <div className="flex flex-col gap-2">
              <h2 className="uppercase text-sm font-semibold text-sky-800">
                Desenvolvedor Front-end
              </h2>
              <h1 className="text-5xl font-semibold">Guilherme Ponte</h1>
              <p className="text-lg text-zinc-400">
                Técnico em tecnologia da informação com mais de um ano de
                experiência focado em desenvolvimento front-end.
              </p>
            </div>
            <div>
              <Image
                src="/hero.png"
                alt=""
                width={2000}
                height={2000}
                quality={100}
              />
            </div>
            <button className="flex items-center justify-center px-6 py-2 rounded-md bg-transparent border border-sky-800 text-zinc-100 text-lg hover:bg-slate-900 transition duration-100">
              <a href="GuilhermePonte.pdf" download>
                Baixar currículo
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-28 pb-20" id="skills">
        <div className="flex items-start justify-center gap-2">
          <CodeSimple weight="bold" size={36} />
          <h2 className="font-extrabold text-3xl mb-2 text-center">Skills</h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-20 mt-16">
          {skills.map((skill) => {
            return (
              <SkillCard
                key={skill.title}
                imageSource={skill.imageSource}
                title={skill.title}
              />
            )
          })}
        </div>
      </div>

      <footer className="bg-zinc-800 py-10 lg:py-20 text-zinc-100" id="contact">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start lg:px-10 lg:mx-auto lg:w-full lg:max-w-[1600px]">
          <div>
            <h1 className="text-3xl font-bold text-center">Contato</h1>
          </div>

          <div className="grid grid-cols-1 gap-10 items-start lg:grid-cols-3">
            {footerTopics.map((topic) => {
              return (
                <div
                  key={topic.title}
                  className="flex flex-col gap-4 items-center justify-center"
                >
                  <div className="flex items-center gap-2">
                    {topic.title === 'Email' ? (
                      <EnvelopeSimple size={22} />
                    ) : (
                      <WhatsappLogo size={22} />
                    )}
                    <h3 className="font-extrabold">{topic.title}</h3>
                  </div>
                  <button
                    key={topic.title}
                    className="text-zinc-400 hover:text-zinc-300 transition duration-100"
                  >
                    {topic.title === 'Email' ? (
                      <a
                        href="mailto:guilhermescponte@hotmail.com"
                        target="_blank"
                      >
                        {topic.link}
                      </a>
                    ) : (
                      <a href="https://wa.me/5524992078862" target="_blank">
                        {topic.link}
                      </a>
                    )}
                  </button>
                </div>
              )
            })}
          </div>
          <div className="flex items-center justify-center gap-6">
            <button>
              <a
                href="https://www.linkedin.com/in/guilhermeponte7/"
                target="_blank"
              >
                <LinkedinLogo
                  size={36}
                  weight="fill"
                  className="hover:text-zinc-300 transition duration-100 cursor-pointer"
                />
              </a>
            </button>
            <button>
              <a href="https://github.com/gponte7" target="_blank">
                <GithubLogo
                  size={36}
                  weight="fill"
                  className="hover:text-zinc-300 transition duration-100 cursor-pointer"
                />
              </a>
            </button>

            <button>
              <a href="https://www.instagram.com/gponte7/" target="_blank">
                <InstagramLogo
                  size={36}
                  className="hover:text-zinc-300 transition duration-100 cursor-pointer"
                />
              </a>
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
