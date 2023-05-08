import React from 'react'
import Hero from '@/components/Hero'

import  {  Inter  }  from  'next/font/google'
import { NextSeo } from 'next-seo'
import Footer from '@/components/Footer'
const  inter  =  Inter ( {  subsets: [ 'latin' ]  } )

export default function Home () {
  return (
    <div className='bg-[#000000]'>
      <NextSeo 
      title='Home Jufra'
      description='Welcome to Jufraas homepage'
      />
      <Hero />
      <Footer />
    </div>
  )
}
