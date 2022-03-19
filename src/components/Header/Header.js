import './header.css';

export default function Header() {
  return (
    <>
      <div className="relative bg-teal-700">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover object-center"
            src="https://user-images.githubusercontent.com/87889660/158710407-b80ca364-222b-4be7-9b87-badecbaba16c.jpg"
            alt=""
          />
          <div className="absolute inset-0" aria-hidden="true" />
        </div>
        <div className="relative text-center max-w-7xl mx-auto py-24 px-4 flex flex-col items-center sm:py-32 sm:px-6 lg:px-8">
          <h1 className="header text-4xl font-extrabold tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">Polari</h1>
          <p className="about-blurb mt-6 text-xl font-medium xl:text-2xl text-stone-50 max-w-3xl">
            Welcome to Polari, an LGBTQIA+ dating app that uses attachment theory to educate and empower people to form stronger relationships of all kinds.
          </p>
        </div>
      </div>
    </>
  )
}