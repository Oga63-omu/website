export default function Page() {
  return (
    <>
      <title>アレックスについて | フリーランス写真家</title>
      <meta
        name="description"
        content="ポートランドを拠点とするフリーランス写真家アレックスについて。風景写真とストリートフォトグラフィーを愛しています。"
      />
      <meta
        property="og:title"
        content="アレックスについて | フリーランス写真家"
      />
      <meta
        property="og:description"
        content="ポートランドを拠点とするフリーランス写真家アレックスについて。風景写真とストリートフォトグラフィーを愛しています。"
      />
      <main className="mx-auto flex min-h-[calc(100vh-132px)] max-w-2xl flex-col items-center justify-center px-6 py-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            アレックスについて
          </h1>
          <p className="mt-6 text-lg text-balance text-base-content/70 sm:text-xl">
            アレックスはポートランドを拠点とするフリーランス写真家です。風景写真とストリートフォトグラフィーを愛し、日常の光と街の表情を切り取っています。
          </p>
        </section>

        <form className="mt-12 w-full space-y-4">
          <label className="form-control w-full">
            <span className="label-text">名前</span>
            <input
              type="text"
              name="name"
              className="input input-bordered mt-2 w-full"
            />
          </label>
          <label className="form-control w-full">
            <span className="label-text">メールアドレス</span>
            <input
              type="email"
              name="email"
              className="input input-bordered mt-2 w-full"
            />
          </label>
          <label className="form-control w-full">
            <span className="label-text">メッセージ</span>
            <textarea
              name="message"
              className="textarea textarea-bordered mt-2 min-h-36 w-full"
            ></textarea>
          </label>
          <button type="submit" className="btn btn-primary w-full sm:w-auto">
            送信
          </button>
        </form>
      </main>
    </>
  )
}
