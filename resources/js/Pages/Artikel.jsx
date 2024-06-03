import ArtikelContainer from '@/Components/Berita/Artikel/ArtikelContainer'
import ArtikelHeadline from '@/Components/Berita/Artikel/ArtikelHeadline'
import ArtikelLainnya from '@/Components/Berita/Artikel/ArtikelLainnya'
import HeroArtikel from '@/Components/Berita/Artikel/HeroArtikel'
import { cobaPaginator } from '@/utils/paginator'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

const coba = cobaPaginator()

// const nama = coba.filter( (cob) => cob.id < 5)
// console.log(nama)

const Artikel = () => {
  return (
    <div>
        <Header />
        <HeroArtikel />
        <ArtikelHeadline />
        <ArtikelLainnya />
        <ArtikelContainer cobas={coba} />
        <Footer />
    </div>
  )
}

export default Artikel