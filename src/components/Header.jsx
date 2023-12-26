export function Header() {
  return (
    <>
      <header className="text-center py-5">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            スワン式除脂肪メソッド
          </span>
        </h1>
        <div className="mt-10">
          <p className="">体重と体脂肪を入力してね！</p>
        </div>
        <div className="">
          <p className="">あなただけの除脂肪メソッドを計算するよ！</p>
        </div>
      </header>
    </>
  );
}
