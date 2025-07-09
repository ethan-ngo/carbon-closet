export function Hero() {
  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      <div className="relative z-10 flex flex-col gap-6 items-center max-w-2xl mx-auto text-center px-4">
        {/* Visible, weighted heading for SEO and clarity */}
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
          Carbon Closet
        </h1>

        {/* Gradient headline for punch */}
        <p
          className="text-3xl lg:text-4xl font-semibold leading-tight 
                  bg-clip-text text-transparent 
                  bg-gradient-to-r from-green-400 to-blue-500"
        >
          Responsibly level up your wardrobe
        </p>

        {/* Action line, bold keywords, larger text, subtle hover underline */}
        <p className="text-xl lg:text-2xl">
          <span>
            <strong>Shop</strong>
          </span>
          ,&nbsp;
          <span>
            <strong>Donate</strong>
          </span>
          ,&nbsp;
          <span>
            <strong>Spin</strong>
          </span>
          &nbsp;for rewards.
        </p>
      </div>

      {/* Soft background accents */}
      <div
        className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-green-200 opacity-20 rounded-full
                  transform -translate-x-1/2 -translate-y-1/3"
      ></div>
      <div
        className="absolute bottom-0 right-1/2 w-[400px] h-[400px] bg-blue-200 opacity-20 rounded-full
                  transform translate-x-1/2 translate-y-1/3"
      ></div>
    </section>
  );
}
