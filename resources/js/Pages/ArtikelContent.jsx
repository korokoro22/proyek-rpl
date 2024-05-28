import ArtikelContainer from '@/Components/Berita/Artikel/ArtikelContainer'
import ContentArtikel from '@/Components/Berita/Artikel/ArtikelContent/ContentArtikel'
import ArtikelLainnya from '@/Components/Berita/Artikel/ArtikelLainnya'
import HeroArtikel from '@/Components/Berita/Artikel/HeroArtikel'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

const ArtikelContent = () => {
  return (
    <div className='bg-[#E9E9E9]'>
        <Header />
        <HeroArtikel />
        <ContentArtikel />
        <ArtikelLainnya />
        <ArtikelContainer />
        <Footer />
    </div>
  )
}

export default ArtikelContent