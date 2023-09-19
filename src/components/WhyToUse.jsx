import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

import React, { useEffect, useRef } from 'react';


import backgroundImage from '../images/1girl.jpg'

const features = [
  {
    name: 'Boosting sales.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Save yourself time.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Decrease costs.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ArrowPathIcon,
  },
]

export function WhyToUse({ refProp }) {

  return (
    <div className="bg-white py-12 sm:py-8 flex justify-center">
      <div className="max-w-7xl bg-pageColors-2 rounded-3xl p-10 sm:mx-20 m-6 hatter-2" ref={refProp}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="sm:m-2 pb-10 text-3xl font-bold tracking-tight text-pageColors-1 sm:text-6xl">Why use AI chatbot?</p>
          </div>
        </div>
        <div className="flex justify-center">
        <img
                className="md:h-96 rounded-3xl w-full flex-none object-cover shadow-xl lg:h-auto lg:max-w-3xl"
                src={backgroundImage}
                alt=""
              />
        </div>
 
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none xxs:justify-center xxs:items-center xxs:flex">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 xxs:gap-y-8 sm:gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center border-black border-2 rounded-xl w-12/12 p-10 bg-white transition ease-in-out hover:bg-pageColors-3 hover:scale-110">
                <dt className="flex flex-col items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-14 w-14 flex-none text-pageColors-1" aria-hidden="true" />
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
  )
}
