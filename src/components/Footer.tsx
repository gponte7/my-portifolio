import { EnvelopeSimple } from '@phosphor-icons/react/dist/ssr/EnvelopeSimple'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr/GithubLogo'
import { InstagramLogo } from '@phosphor-icons/react/dist/ssr/InstagramLogo'
import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr/LinkedinLogo'
import { Users } from '@phosphor-icons/react/dist/ssr/Users'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr/WhatsappLogo'
import Image from 'next/image'

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

export default function Footer() {
  return (
    <footer className="bg-zinc-800 py-10 lg:py-10 text-zinc-100" id="contact">
      <div>
        <h1 className="text-3xl font-bold text-center mb-10">Contato</h1>
      </div>
      <div className="flex flex-col justify-between gap-10 lg:grid lg:grid-cols-2">
        <div className="grid grid-cols-1 gap-10 items-start mb-6 lg:order-2 lg:mb-0 lg:place-content-between">
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
                      title="Enviar Email"
                      target="_blank"
                    >
                      {topic.link}
                    </a>
                  ) : (
                    <a
                      href="https://wa.me/5524992078862"
                      title="Enviar Whatsapp"
                      target="_blank"
                    >
                      {topic.link}
                    </a>
                  )}
                </button>
              </div>
            )
          })}
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center  gap-2">
            <Users size={22} />
            <h3 className="font-extrabold">Redes Sociais</h3>
          </div>
          <Image
            alt=""
            src="https://github.com/gponte7.png"
            width={412}
            height={412}
            quality={100}
            className="rounded-full border-2 border-zinc-100 p-1 w-36"
          />
          <div className="flex items-center justify-center gap-6">
            <button>
              <a
                href="https://www.linkedin.com/in/guilhermeponte7/"
                title="LinkedIn"
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
              <a
                href="https://github.com/gponte7"
                title="Github"
                target="_blank"
              >
                <GithubLogo
                  size={36}
                  weight="fill"
                  className="hover:text-zinc-300 transition duration-100 cursor-pointer"
                />
              </a>
            </button>

            <button>
              <a
                href="https://www.instagram.com/gponte7/"
                title="Instagram"
                target="_blank"
              >
                <InstagramLogo
                  size={36}
                  className="hover:text-zinc-300 transition duration-100 cursor-pointer"
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
