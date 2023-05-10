import Image from 'next/image'

import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden secondary py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src=""
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="sectionTitles sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight secondaryText">
            Your business is not just a job, it is a journey. Embrace the challenges, learn from the failures, and enjoy the successes along the way.
          </p>
        </div>
      </Container>
    </section>
  )
}
