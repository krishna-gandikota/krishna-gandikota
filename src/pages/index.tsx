import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import Footer from '@/components/footer.'
import Format from '@/layout/format'
import Section1 from '@/components/section1'
import Section2 from '@/components/section2'
import Section3 from '@/components/section3'
import Section4 from '@/components/section4'

export default function Home() {
  return (
   <div>
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />

    <Footer />
    <Format />
   </div>
  )
}
