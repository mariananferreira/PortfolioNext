import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'

import logo from '@/images/logo.png'
import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="primaryBack fixed inset-0 " />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-[rgba(0,0,0,0.3)] p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#aboutme">About Me</MobileNavLink>
            <MobileNavLink href="#projects">Projects</MobileNavLink>
            <MobileNavLink href="#whatido">What I do?</MobileNavLink>
            <MobileNavLink href="#technologies">Technologies</MobileNavLink>
            <MobileNavLink href="#contacts">Contacts</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  return (
    <header
      className="fixed top-0 z-50 flex w-full flex-wrap items-center justify-between bg-[rgba(0,0,0,0.3)] px-4 py-3 font-bold shadow-md shadow-slate-900/5 transition duration-500 sm:px-6  lg:px-8 
    "
    >
      <div className="mr-6 flex lg:hidden">
        <MobileNavigation />
      </div>
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="relative flex flex-grow basis-0 items-center">
            <Link href="#" aria-label="Home">
            </Link>
            <div className="hidden space-x-4 sm:ml-6 lg:block">
              <NavLink href="#aboutme">About Me</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#whatido">What I do?</NavLink>
              <NavLink href="#technologies">Technologies</NavLink>
              <NavLink href="#contacts">Contacts</NavLink>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
