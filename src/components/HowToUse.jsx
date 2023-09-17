import { CheckBadgeIcon, CpuChipIcon,DocumentPlusIcon } from '@heroicons/react/20/solid'
import React, { useEffect, useRef } from 'react';
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

export function HowToUse() {
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 animation" ref={sectionRef}>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-pageColors-1 sm:text-6xl">
            How to use
          </h1>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center border-black border-2 rounded-xl w-12/12 p-10 hover:scale-110 hover:shadow-2xl transition ease-in-out group">
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
  )
}
