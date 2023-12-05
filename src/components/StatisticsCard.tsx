interface StatisticsCardProps {
  icon: React.ElementType
  title: string
  description: string
}

export function StatisticsCard({
  icon: Icon,
  title,
  description,
}: StatisticsCardProps) {
  return (
    <div className="bg-zinc-50 p-8 rounded-lg">
      <div className="bg-indigo-950 rounded-full w-fit p-5 -mt-14 mb-4">
        <Icon className="text-cyan-500" size={30} />
      </div>
      <h3 className="text-lg font-extrabold">{title}</h3>
      <p className="text-sm text-zinc-400">{description}</p>
    </div>
  )
}
