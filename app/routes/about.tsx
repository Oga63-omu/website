export default function Page() {
  return (
    <>
      <title>ダビドコンチャについて | フリーランス写真家</title>
      <meta
        name="description"
        content="スペイン拠点のフリーランス写真家ダビドコンチャ。サッカーボールと旅の瞬間を撮影します。"
      />
      <meta
        property="og:title"
        content="ダビドコンチャについて | フリーランス写真家"
      />
      <meta
        property="og:description"
        content="スペイン拠点のフリーランス写真家ダビドコンチャ。サッカーボールと旅の瞬間を撮影します。"
      />
      <nav className="mx-auto mb-10 flex max-w-2xl items-center justify-center gap-3 rounded-full border border-base-300 bg-base-200/90 p-4 text-base-content shadow-lg shadow-base-300/20 sm:justify-between">
        <a href="/" className="btn btn-sm btn-primary">
          ホーム
        </a>
        <a href="/about" className="btn btn-sm btn-ghost">
          概要
        </a>
      </nav>
      <main className="mx-auto flex min-h-[calc(100vh-132px)] max-w-2xl flex-col items-center justify-center px-6 py-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            ダビドコンチャについて
          </h1>
          <p className="mt-6 text-lg text-balance text-base-content/70 sm:text-xl">
            スペイン拠点のフリーランス写真家。サッカーボールが好きで、旅先のストーリーを写真で伝えます。
          </p>
        </section>
      </main>
    </>
  )
}
