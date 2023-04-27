import React from 'react'
import Header from '@/components/Header.tsx'
import  {  Inter  }  from  'next/font/google'
const  inter  =  Inter ( {  subsets: [ 'latin' ]  } )

export default function Home() {
  return (
    <main>
      <Header />
    </main>
  )
}
