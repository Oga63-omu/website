export default function Page() {
  return (
    <>
      <title>アレックス | フリーランス写真家</title>
      <meta
        name="description"
        content="ポートランドを拠点に、風景、ポートレート、街の自然な瞬間を撮影するフリーランス写真家アレックスのサイトです。"
      />
      <meta property="og:title" content="アレックス | フリーランス写真家" />
      <meta
        property="og:description"
        content="ポートランドを拠点に、風景、ポートレート、街の自然な瞬間を撮影するフリーランス写真家アレックスのサイトです。"
      />
      <main className="flex min-h-[calc(100vh-132px)] items-center justify-center px-6 py-16">
        <section className="mx-auto max-w-4xl text-center">
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            こんにちは、ダビドコンチャです
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-balance text-base-content/70 sm:text-xl">
            ポートランド拠点のフリーランス写真家。風景・ポートレート・街の瞬間を撮影します。
          </p>
        </section>
      </main>
    </>
  )
}
