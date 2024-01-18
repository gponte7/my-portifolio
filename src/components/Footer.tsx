import { EnvelopeSimple } from '@phosphor-icons/react/dist/ssr/EnvelopeSimple'
import { GithubLogo } from '@phosphor-icons/react/dist/ssr/GithubLogo'
import { InstagramLogo } from '@phosphor-icons/react/dist/ssr/InstagramLogo'
import { LinkedinLogo } from '@phosphor-icons/react/dist/ssr/LinkedinLogo'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr/WhatsappLogo'

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
      <div className="flex flex-col justify-between gap-10">
        <div>
          <h1 className="text-3xl font-bold text-center">Contato</h1>
        </div>

        <div className="grid grid-cols-1 gap-10 items-start">
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
  )
}
