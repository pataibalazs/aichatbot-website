import { CheckBadgeIcon, CpuChipIcon, DocumentPlusIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useRef } from 'react';
import backgroundImage from '../images/hatter1.png'


const features = [
  {
    name: 'Add to your website',
    description:
      'After you added some documents your AI will be instantly trained, and will know all the details.',
    href: '#',
    icon: CpuChipIcon,
  },
  {
    name: 'Add documents',
    description:
      'We have built a website specificly for our customers, where they can feed the AI via PDFs, or just pasting your website URL!',
    href: '#',
    icon: DocumentPlusIcon,
  },
  {
    name: 'Enjoy!',
    description:
      'Self-explainatory.',
    href: '#',
    icon: CheckBadgeIcon,
  }

]

export function HowToUse({ refProp }) {
  return (
    <div className="bg-white py-12 sm:py-8 flex justify-center" ref={refProp}>
      <div className="max-w-7xl hatter-1 p-10 sm:mx-20 m-6 rounded-3xl" >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="mt-2 text-3xl sm:text-6xl font-bold tracking-tight text-pageColors-1 ">
              How to use
            </h1>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none xxs:justify-center xxs:items-center xxs:flex">
            <dl className="grid max-w-xl grid-cols-1 xxs:gap-y-8 md:gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex bg-white flex-col items-center border-black border-2 lg:mx-4 rounded-xl w-12/12 lg:p-4 xl:py-10 xxs:p-4 hover:scale-110 hover:shadow-2xl transition ease-in-out group">
                  <dt className="flex flex-col items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 ">
                    <feature.icon className="h-14 w-14 flex-none text-pageColors-3 group-hover:text-pageColors-2" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>

                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

    </div>
  )
}
