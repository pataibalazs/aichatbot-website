import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import backgroundImage from '../images/logo_yellow_black.png'
import { useRef } from 'react'


const navigation = [
  { name: 'Benefits', href: '#benefits' },
  { name: 'Usage', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'FAQs', href: '#' },
  { name: 'Contact', href: '#' },
]

export function Navbar({
  scrollToSellingPoint,
  scrollToHowToUse,
  scrollToWhyToUse,
  scrollToPricing,
  scrollToFAQ,
  scrollToContact,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // A mapping of section names to their scrollTo functions
  const scrollFunctions = {
    "Benefits": scrollToSellingPoint,
    "Usage": scrollToHowToUse,
    "Features": scrollToWhyToUse,
    "Pricing": scrollToPricing,
    "FAQs": scrollToFAQ,
    "Contact": scrollToContact,
  };

  return (
    <header className="bg-[#ffd451] pb-2">
      <nav
        className="mx-auto flex max-w-7xl items-center px-6 pt-6 lg:px-8 z-400000000"
        aria-label="Global"
      >
        <div>
          <img
            className="rounded-3xl w-auto h-16 transition ease-in-out hover:scale-110"
            src={backgroundImage}
            alt=""
          />
        </div>
        <div className="flex-grow lg:flex lg:items-center lg:justify-center">
          <div className="hidden lg:flex lg:gap-x-14">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={scrollFunctions[item.name]} // Here we use the appropriate function based on item name
                className="text-lg font-semibold leading-6 text-pageColors-1 transition ease-in-out hover:text-gray-500 hover:scale-110"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-red-700 lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={backgroundImage}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="">
              <div className="space-y-2 py-6">

                {navigation.map((item) => (
              <button
                key={item.name}
                onClick={scrollFunctions[item.name]} // Here we use the appropriate function based on item name
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </button>
            ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
