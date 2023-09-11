import { CloudArrowUpIcon, CheckCircleIcon,DocumentPlusIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Login',
    description:
      'We have built a website specificly for our customers, where they can feed the AI with information.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Add documents',
    description:
      'Enter any information in pdf format that you want the AI to know. You can extend this any time.',
    href: '#',
    icon: DocumentPlusIcon,
  },
  {
    name: 'Enjoy',
    description:
      'After you added some documents your AI will be instantly trained, and will know all the details.',
    href: '#',
    icon: CheckCircleIcon,
  },
]

export function HowToUse() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to use
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex flex-col items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-14 w-14 flex-none text-indigo-600" aria-hidden="true" />
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
