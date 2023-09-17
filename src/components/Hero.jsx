import backgroundImage from '../images/girlWithLaptop.jpg'

export function Hero() {
  return (
    <div id="heroId" className="relative overflow-hidden bg-pageColors-2 z-0">
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-20 gap-10 z-30">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-pageColors-1 sm:text-6xl">
            Automate customer service with GPT-4.0
          </h1>
          <p className="mt-6 text-lg leading-8 text-pageColors-1 font-medium">
            Improve sales, increase efficiency and decrease costs by using an AI that helps the customer 0-24!
          </p>
          <div className="mt-10 flex items-center gap-x-6 ">
            <a
              href="#"
              className="rounded-2xl bg-pageColors-4 px-8 py-3 text-2xl font-semibold text-pageColors-1 shadow-sm transition ease-in-out hover:bg-pageColors-3 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start now!
            </a>
          </div>
        </div>
        <div className="">
          <img className="rounded-3xl"
            width={1000}
            height={800}
            src={backgroundImage}
            alt=""
          />
        </div>
      </div>

    </div>
  )
}
