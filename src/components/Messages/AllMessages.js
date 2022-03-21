export default function AllMessages({ threads }) {
  const chat = (event) => {
    event.preventDefault()
    window.location.replace('/chat')
  }

  return (
    <>
      <div className="relative py-8 bg-white overflow-hidden">
        <div>
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-y-1/2 translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-emerald-100" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/4 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-emerald-100" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
          </div>
        </div>
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Your Matches</h2>
          </div>

          <div className="mt-8 lg:max-w-2xl md:max-w-xl sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 border border-emerald-600 px-4 shadow sm:rounded-lg sm:px-10">

              <ul role="list" className="-my-5 divide-y divide-gray-200">
                {threads.map((thread, index) => (
                  <li key={index} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-medium text-gray-900 truncate">{thread.text}</p>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={chat}
                          className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-slate-100 hover:bg-gray-50"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>

    </>
  )
};

