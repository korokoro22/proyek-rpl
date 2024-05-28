import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import HeroContent from '@/Components/LayananKonten/HeroContent'
import ContainerKonten from '@/Components/LayananKonten/Konten/ContainerKonten'
import React from 'react'
import { layananContent } from "@/utils/layananContent";


const LayananContent = () => {

  const konten = layananContent()

  return (
    <div>
        <Header />
        <HeroContent  />
        <ContainerKonten kontens={konten} />
        <Footer />
    </div>
  )
}

export default LayananContent