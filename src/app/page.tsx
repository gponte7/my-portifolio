import { Header } from '@/components/Header'
import { LinkShortenerBox } from '@/components/LinkShortenerBox'
import { StatisticsCard } from '@/components/StatisticsCard'
import { FacebookLogo } from '@phosphor-icons/react/dist/ssr/FacebookLogo'
import { InstagramLogo } from '@phosphor-icons/react/dist/ssr/InstagramLogo'
import { PinterestLogo } from '@phosphor-icons/react/dist/ssr/PinterestLogo'
import { TwitterLogo } from '@phosphor-icons/react/dist/ssr/TwitterLogo'
import { Waypoints, GaugeCircle, PencilRuler } from 'lucide-react'
import Image from 'next/image'

const footerTopics = [
  {
    title: 'Features',
    links: ['Link Shortening', 'Branded Links', 'Analytics'],
  },
  {
    title: 'Resources',
    links: ['Blog', 'Developers', 'Support'],
  },
  {
    title: 'Company',
    links: ['About', 'Our Team', 'Careers', 'Contact'],
  },
]

export default function Home() {
  return (
    <div>
      <div className="mx-auto min-h-screen w-full max-w-[1600px] p-10">
        <Header />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-20">
          <div className="flex flex-col items-center lg:items-start gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-7xl font-bold">
                More than just shorter links
              </h1>
              <p className="text-lg text-zinc-400">
                {`Build your brand's recognition and get detailed insights on how your
            links are performing`}
              </p>
            </div>
            <button className="flex items-center justify-center px-6 py-2 rounded-full bg-cyan-500 text-white text-lg font-semibold hover:bg-cyan-400 transition duration-100">
              Get started
            </button>
          </div>
          <div>
            <Image
              src="/working-illustration.svg"
              alt=""
              width={800}
              height={800}
              className="hidden lg:block"
            />
          </div>
        </div>

        <LinkShortenerBox />
      </div>
      <div className="mt-16 bg-zinc-200 pt-10 pb-20">
        <div className="flex flex-col items-center justify-center px-16">
          <h2 className="font-extrabold text-3xl mb-2 text-center">
            Advanced Statistics
          </h2>
          <p className="text-zinc-400 text-center text-sm lg:text-base">
            Track how yout links are performing across the web with
          </p>
          <p className="text-zinc-400 text-center text-sm lg:text-base">
            our advanced statistics dashboard
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-16 mt-16 px-10 mx-auto w-full max-w-[1600px]">
          <StatisticsCard
            icon={Waypoints}
            title="Brand Recognition"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste officia nobis mollitia fugiat molestias quia quidem! Deleniti quasi delectus voluptate vitae, cum inventore maiores laudantium unde omnis quo tenetur sequi?"
          />
          <StatisticsCard
            icon={GaugeCircle}
            title="Detailed Records"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste officia nobis mollitia fugiat molestias quia quidem! Deleniti quasi delectus voluptate vitae, cum inventore maiores laudantium unde omnis quo tenetur sequi?"
          />
          <StatisticsCard
            icon={PencilRuler}
            title="Fully Customizable"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste officia nobis mollitia fugiat molestias quia quidem! Deleniti quasi delectus voluptate vitae, cum inventore maiores laudantium unde omnis quo tenetur sequi?"
          />
        </div>
      </div>

      <footer className="bg-zinc-800 py-10 lg:py-20 text-zinc-100">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start lg:px-10 lg:mx-auto lg:w-full lg:max-w-[1600px]">
          <div>
            <h1 className="text-3xl font-bold text-center">Shortly</h1>
          </div>

          <div className="grid grid-cols-1 gap-10 items-start lg:grid-cols-3">
            {footerTopics.map((topic) => {
              return (
                <div
                  key={topic.title}
                  className="flex flex-col gap-4 items-center justify-center"
                >
                  <div>
                    <h3 className="font-extrabold">{topic.title}</h3>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    {topic.links.map((link) => {
                      return (
                        <button
                          key={link}
                          className="text-zinc-400 hover:text-zinc-300 transition duration-100"
                        >
                          <a href="">{link}</a>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex items-center justify-center gap-6">
            <FacebookLogo
              size={36}
              weight="fill"
              className="hover:text-zinc-300 transition duration-100 cursor-pointer"
            />
            <TwitterLogo
              size={36}
              weight="fill"
              className="hover:text-zinc-300 transition duration-100 cursor-pointer"
            />
            <PinterestLogo
              size={36}
              weight="fill"
              className="hover:text-zinc-300 transition duration-100 cursor-pointer"
            />
            <InstagramLogo
              size={36}
              className="hover:text-zinc-300 transition duration-100 cursor-pointer"
            />
          </div>
        </div>
      </footer>
    </div>
  )
}
