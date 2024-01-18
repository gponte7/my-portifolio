import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import Hero from '@/components/Hero'
import { SkillCard } from '@/components/SkillCard'
import { CodeSimple } from '@phosphor-icons/react/dist/ssr/CodeSimple'

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

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="mx-auto min-h-screen w-full max-w-[1366px] px-10"
      >
        <Header />
        <Hero />
        <div className="pt-24 pb-20 2xl:min-h-screen" id="skills">
          <div className="flex items-start justify-center gap-2">
            <CodeSimple weight="bold" size={36} className="flex 2xl:hidden" />
            <CodeSimple weight="bold" size={40} className="hidden 2xl:flex" />
            <h2 className="font-extrabold text-3xl mb-2 text-center 2xl:text-4xl">
              Skills
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-20 mt-16 lg:grid lg:grid-cols-3 lg:place-items-center 2xl:pt-12">
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
      </div>
      <Footer />
    </>
  )
}
