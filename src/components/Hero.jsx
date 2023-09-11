
import backgroundImage from '../images/heropic.png'

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Automate customer service with GPT-4.0
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Improve sales, increase efficiency and decrease costs by using an AI that helps the customer 0-24!
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-xl bg-indigo-600 px-8 py-3 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start now!
            </a>
          </div>
        </div>
        <div className="ml-4">
        <img
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
