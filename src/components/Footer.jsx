import backgroundImage from '../images/logo_yellow_black.png'

export function Footer() {
  return (
    <footer className="bg-slate-100">
      <div className="mx-auto max-w-xs overflow-hidden px-6 py-20 sm:py-24 lg:px-8 flex-col justify-center">
        <img className=""
        src={backgroundImage}>
        </img>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 NeuChat, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}