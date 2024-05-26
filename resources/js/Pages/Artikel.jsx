import ArtikelContainer from '@/Components/Berita/Artikel/ArtikelContainer'
import ArtikelHeadline from '@/Components/Berita/Artikel/ArtikelHeadline'
import ArtikelLainnya from '@/Components/Berita/Artikel/ArtikelLainnya'
import HeroArtikel from '@/Components/Berita/Artikel/HeroArtikel'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

const Artikel = () => {
  return (
    <div>
        <Header />
        <HeroArtikel />
        <ArtikelHeadline />
        <ArtikelLainnya />
        <ArtikelContainer />
        <Footer />
    </div>
  )
}

export default Artikel