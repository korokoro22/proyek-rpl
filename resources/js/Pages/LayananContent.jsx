import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import HeroContent from '@/Components/LayananKonten/HeroContent'
import ContainerKonten from '@/Components/LayananKonten/Konten/ContainerKonten'
import React from 'react'

const LayananContent = () => {
  return (
    <div>
        <Header />
        <HeroContent />
        <ContainerKonten />
        <Footer />
    </div>
  )
}

export default LayananContent