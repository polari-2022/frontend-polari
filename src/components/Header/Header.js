export default function Header() {
    return (
        <>
      <div className="relative bg-teal-700">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-top"
            src="https://images.unsplash.com/photo-1596529840530-83900a28cfc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div className="absolute inset-0" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-teal-700 sm:text-5xl lg:text-6xl">Polari</h1>
          <p className="mt-6 text-xl text-teal-800 max-w-3xl">
            Welcome to Polari, an LGBTQIA+ dating app that uses attachment theory to educate and empower people to form stronger relationships of all kinds.
          </p>
        </div>
      </div>
      </>
    )
  }