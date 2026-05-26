import { Building2Icon, MountainIcon, UserRoundIcon } from 'lucide-react'

export default function Page() {
  return (
    <>
      <title>プロジェクト | アレックス</title>
      <meta
        name="description"
        content="アレックスの写真プロジェクト。風景、ポートレート、ストリートフォトグラフィーのシリーズを紹介します。"
      />
      <meta property="og:title" content="プロジェクト | アレックス" />
      <meta
        property="og:description"
        content="アレックスの写真プロジェクト。風景、ポートレート、ストリートフォトグラフィーのシリーズを紹介します。"
      />
      <main className="mx-auto min-h-[calc(100vh-132px)] max-w-6xl px-6 py-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            プロジェクト
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-base-content/70">
            アレックスが撮り続けている、光と場所と人のシリーズ。
          </p>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {Projects.map((project) => (
            <article
              key={project.title}
              className="card border border-base-300 bg-base-200 shadow-sm transition-shadow hover:shadow-xl"
            >
              <figure className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <project.icon className="size-8 text-primary" />
                <h2 className="card-title text-xl">{project.title}</h2>
                <p className="text-base-content/70">{project.description}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}

const Projects = [
  {
    icon: MountainIcon,
    title: '風景',
    description: '山や森の静かな光を追い、自然の奥行きと季節の表情を写します。',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    alt: '山と森の風景写真',
  },
  {
    icon: UserRoundIcon,
    title: 'ポートレート',
    description:
      'スタジオ撮影と自然光のポートレートで、その人らしい空気を残します。',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
    alt: '自然光で撮影されたポートレート',
  },
  {
    icon: Building2Icon,
    title: 'ストリートフォトグラフィー',
    description: '都市生活のリズムや、通りに生まれる自然な瞬間を切り取ります。',
    image:
      'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
    alt: '都市の通りを写したストリートフォト',
  },
]
