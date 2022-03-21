import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const faqs = [
  {
    question: "What does Polari mean?",
    answer:
      "According to the article, \"Rediscovering Polari: How This Secret Gay Language Helped Create LGBT Culture\" by Eleanor tremeer, Polari was a secret dialect used by gay men in the UK from 1920-1970. It allowed them to communicate safely about their identity during a time when they could be persecuted for their sexual orientation.",
  },
  {
    question: "Why can't I message anyone?",
    answer:
      "Thank you for being an early user of Polari! At this time, you can not message your matches. However, this will be fixed in the next iteratin of the app soon.",
  },
  {
    question: "How can I delete my account?",
    answer:
      "Please email polari.attachments@gmail.com and someone will reach out to you within 24 hours.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Faq() {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto ">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <p className="text-center mt-8 text-lg text-gray-500">
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a href="mailto:polari.attachments@gmail.com" className="font-medium text-emerald-600 hover:text-emerald-500">
                customer support
              </a>{' '}
              team.
            </p>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
