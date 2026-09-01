export default function Project() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32" id="project">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-400">
          Projects
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          My Recent Work
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
              className="size-full object-cover object-top rounded-l-4xl"
            />
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
              className="w-full max-lg:max-w-xs"
            />
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
              className="h-[min(152px,40cqw)] object-cover"
            />
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
          </div>
          <div className="relative lg:row-span-2">
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
              className="h-[min(152px,40cqw)] object-cover"
            />
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
