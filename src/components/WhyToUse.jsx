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

export function WhyToUse() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="bg-pageColors-2 m-10 rounded-3xl p-10 animation" ref={sectionRef}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <p className="m-2 pb-10 text-3xl font-bold tracking-tight text-pageColors-1 sm:text-6xl">Why use AI chatbot?</p>
          </div>
        </div>
        <div className="flex justify-center">
        <img
                className="h-96 rounded-3xl w-full flex-none object-cover shadow-xl lg:h-auto lg:max-w-4xl"
                src={backgroundImage}
                alt=""
              />
        </div>
 
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
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
