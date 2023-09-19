import backgroundImage from '../images/logo_yellow_black.png'

export function Footer() {

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <footer className="bg-slate-100">
      <div className="mx-auto max-w-xs overflow-hidden px-6 py-20 sm:py-24 lg:px-8 flex-col justify-center items-center">
        <div className="flex flex-row justify-center mb-6">
          <button className="p-4 rounded-xl font-semibold flex bg-pageColors-2" onClick={scrollToTop}>
            Back to top        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18" />
            </svg>
          </button>

        </div>


        <img className="" onClick={scrollToTop}
          src={backgroundImage}>
        </img>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 NeuChat, Inc. All rights reserved.
        </p>

      </div>

    </footer>
  )
}