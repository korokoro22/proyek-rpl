import React from 'react'
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'
import HeroKegiatan from '@/Components/Berita/Kegiatan/HeroKegiatan'
import KegiatanLainnya from '@/Components/Berita/Kegiatan/KegiatanLainnya'
import KegiatanContainer from '@/Components/Berita/Kegiatan/KegiatanContainer'
import ContentKegiatan from '@/Components/Berita/Kegiatan/KegiatanContent/ContentKegiatan'

const KegiatanContent = () => {
  return (
    <div className='bg-[#E9E9E9]'>
        <Header />
        <HeroKegiatan />
        <ContentKegiatan />
        <KegiatanLainnya />
        <KegiatanContainer />
        <Footer />
    </div>
  )
}

export default KegiatanContent