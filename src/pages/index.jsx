import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import  Hero  from '@/components/Hero'
import { AboutMe } from '@/components/AboutMe'
import { Projects } from '@/components/Projects'
import { WhatCanDo } from '@/components/WhatCanDo'
import Technologies from '@/components/Technologies'
import { Contacts } from '@/components/Contacts'


export default function Home() {
  return (
    <>
      <Head>
        <title>Mariana&apos;s Portfolio</title>
      </Head>
      <Header />
      <main className='primaryBack'>
        <Hero />
        <AboutMe />
        <Projects />
        <WhatCanDo />
        <CallToAction />
        <Technologies />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
