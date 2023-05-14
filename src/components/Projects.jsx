import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import marig from '@/images/marig.png'
import portfolio from '@/images/portf.jpg'
import realestate from '@/images/rstate.jpg'
import shop from '@/images/shopi.jpg'
import vfx from '@/images/vfxira.jpg'
import map from '@/images/maps.jpg'

const features = [
  {
    title: 'Real Estate Website',
    description:
      'This website includes a serie of pictures of the new apartments, a description of the building and its amenities, information about the area involved and a contact form.',
    image: realestate,
  },
  {
    title: 'Online presence',
    description:
      'Having a website is crucial for any business looking to expand its online presence. By creating this website, the nutricionist could reach a wider audience and attract more potential customers',
    image: marig,
  },
  {
    title: '3D Models',
    description:
      'With Three.js is possible to incorporate a 3D Model in a website. In this one is possible to see a Portugal city in 3D with the respective points of interest, it has a link to virtual tours in each point.',
    image: map,
  },

  {
    title: 'Informative website',
    description:
      "Informative website developed to be used in an interactive table. It provides information about the city's points of interest, historical references, a timeline of events and 3D models of the city.",
    image: vfx,
  },

  {
    title: 'E-commerce website',
    description:
      'Mago shop is a store of tech products, where it is possible to login, see the best selling products, evaluate and leave comments, put the products in the cart and make the payment.',
    image: shop,
  },
  {
    title: 'Portfolio',
    description:
      'A portfolio can be easily shared with a global audience through various platforms. This can help you reach a wider audience and potentially attract more clients.',
    image: portfolio,
  },
]

export function Projects() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section id="projects" aria-label="" className="">
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="sectionTitles text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="sectionTitles mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            I’ve worked on a few little projects over the years but these are
            the most important ones. Many of them are open-source, so if you see
            something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="secondary mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg [&:not(:focus-visible)]:focus:outline-none',
                            selectedIndex === featureIndex
                              ? 'secondaryTitles'
                              : 'secondaryTitlesNotSelected hover:text-white '
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'secondaryText'
                            : 'secondaryTextNotSelected group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="secondaryText relative mx-auto max-w-2xl text-base sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="secondary mt-10 overflow-hidden rounded-xl shadow-xl shadow-purple-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
