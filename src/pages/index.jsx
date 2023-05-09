import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Projects } from '@/components/Projects'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import Technologies, { Testimonials } from '@/components/Testimonials'
import { Contacts } from '@/components/Contacts'


export default function Home() {
  return (
    <>
      <Head>
        <title>Mariana Portfolio</title>
      </Head>
      <Header />
      <main className='primaryBack'>
        <Hero />
        <PrimaryFeatures />
        <Projects />
        <SecondaryFeatures />
        <CallToAction />
        <Technologies />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
