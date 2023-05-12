import Image from 'next/image'
import { NavLink } from '@/components/NavLink'
import { Container } from '@/components/Container'
import Link from 'next/link'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="secondary relative overflow-hidden py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <p className="secondaryTextNotSelected mt-4 text-lg tracking-tight">
            Your business is not just a job, it is a journey. Embrace the
            challenges, learn from the failures, and enjoy the successes along
            the way.
          </p>
          <Link
            href="#contacts"
            className="buttonStyle mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            Get Started Today
          </Link>
        </div>
      </Container>
    </section>
  )
}
