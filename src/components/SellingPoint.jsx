import backgroundImage from '../images/paying_with_card.jpg'
import React, { useEffect, useRef } from 'react';


export function SellingPoint({ refProp }) {

  return (
    <div className="bg-white py-12 sm:py-8 flex justify-center">
      <div className="max-w-7xl bg-pageColors-1 p-10 sm:mx-20 m-6 rounded-3xl" >
        <div className="mx-auto max-w-7xl xxs:px-6 lg:px-8">
          <div className="mx-auto flex xxs:max-w-4xl sm:max-w-2xl flex-col gap-10 lg:pl-6 py-16 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:pl-10" ref={refProp}>
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-10">Reduce costs by 10000x</h2>
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-3xl text-opacity-30 mb-10">Yes literally 10000x.</h2>

              <p className="mt-6 text-lg leading-8 text-gray-300 mb-10">
                A customer service specialist usually charges between $2 per reply.
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-3xl mb-10">We charge 0.0002$</h2>
            </div>
            <img
                className="h-96 rounded-3xl w-full flex-none object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-md xl:max-w-lg"
                src={backgroundImage}
                alt=""
              />
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
