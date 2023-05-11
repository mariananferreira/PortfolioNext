import Image from 'next/image'
import backgroundImage from '@/images/imgbanner.png'


export function Banner() {
  return (
    <main className="overflow-x-hidden primaryBack">
      <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover"
            src={backgroundImage}
            alt=""
            priority
          />
        </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block heading">Welcome</span>
              <span className="block headingSecondary">To my porfolio</span>
            </h1>

          </div>
        </div>
    </main>
  )
}
