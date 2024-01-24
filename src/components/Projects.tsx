import { Files } from '@phosphor-icons/react/dist/ssr/Files'
import { ProjectCard } from './ProjectCard'

const projects = [
  {
    imageSource: '/spotify-app.png',
    title: 'Spotify Search',
    description:
      'Utilize o Spotify Search para buscar os álbuns de seus artistas favoritos e abrí-los diretamente em seu spotify!',
    link: 'https://spotify-app-pied.vercel.app/',
  },

  {
    imageSource: '/coffee-delivery.png',
    title: 'Coffee Delivery',
    description:
      'Coffee Delivery é um e-commerce que lhe dá a possibilidade de pedir seus cafés favoritos de onde você estiver!',
    link: 'https://github.com/gponte7/coffee-delivery',
  },

  {
    imageSource: '/github-blog.png',
    title: 'Github Blog',
    description:
      'Github Blog reune as issues de todos os seus repositórios existentes em sua conta no Github.',
    link: 'https://github.com/gponte7/github-blog',
  },
]

export default function Projects() {
  return (
    <div className="pt-24 pb-20 2xl:min-h-screen">
      <div className="flex items-start justify-center gap-2">
        <Files size={36} className="flex 2xl:hidden" />
        <Files size={40} className="hidden 2xl:flex" />
        <h2 className="font-extrabold text-3xl mb-2 text-center 2xl:text-4xl">
          Projetos
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-14 mt-16">
        {projects.map((project) => {
          return (
            <div key={project.title}>
              <ProjectCard
                imageSource={project.imageSource}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
