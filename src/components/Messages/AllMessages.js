export default function AllMessages({ threads }) {
  const chat = (event) => {
    event.preventDefault()
    window.location.replace('/chat')
  }

  return (
    <>
      <div className="mt-8 mb-20 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Matches</h2>
      </div>

          <div>
            <div className="flow-root m-20">
              <ul role="list" className="-my-5 divide-y divide-gray-200">
                {threads.map((thread, index) => (
                  <li key={index} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{thread.text}</p>
                      </div>
                      <div>
                        <button
                          onClick={chat}
                          className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
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
      
    </>
  )
};

