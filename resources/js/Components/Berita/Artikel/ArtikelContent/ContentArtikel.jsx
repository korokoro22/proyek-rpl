import React from 'react'
import Sosial from "../../../../assets/Layanan/sosial.jpg"
const ContentArtikel = () => {
  return (
    <div className="xl:w-[70em] lg:w-[60em] md:w-[45em] w-[21em] m-auto flex flex-col py-10 gap-y-10 font-inter">
            <h1 className="text-center font-bold md:text-4xl text-2xl">Psikologi Pasca Bencana</h1>
            <div className="w-fit m-auto">
                <img
                    src={Sosial}
                    alt=""
                    className="w-[60em] object-cover rounded-xl"
                />
                <div className="flex font-semibold text-base mt-2 gap-2 ">
                    <p className="border-r-[3px] border-black h-[1.4em] pr-2">20 Februari 2018</p>
                    <p>Admin</p>
                </div>
            </div>
            <p className="text-justify lg:w-[60em] md:w-[45em] m-auto">
                {" "}
                Setelah lima tahun terus berinovasi dan mengembangkan layanan
                untuk warga Makassar dan sekitarnya, mulai Juli layanan
                Mallsampah sudah dapat digunakan oleh warga Jakarta. Official
                launching webinar Mallsampah di Jakarta dilakukan via Zoom Cloud
                Meeting pada hari Sabtu, 10 Juli 2021 dan dihadiri berbagai CEO
                dan Founder startup, yayasan, dan komunitas lingkungan berskala
                nasional. <br />
                <br />
                Sejak berdiri sebagai komunitas di tahun 2015, kemudian
                menjadi perseroan terbatas di tahun 2017, lalu meluncurkan
                aplikasi di android dan iOS di tahun 2019, Mallsampah terus
                berupaya untuk memberikan dampak yang lebih luas bagi
                masyarakat. Ekspansi Mallsampah ke ibukota Indonesia merupakan
                harapan bagi Indonesia untuk menaikkan angka daur ulang nasional
                dan mencegah sampah masuk ke laut. <br />
                <br />
                Dalam menggambarkan permasalahan sampah di ibukota, CEO dan
                founder Mallsampah, Adi Saifullah Putra, mengilustrasikan Sungai
                Ciliwung. “Di tahun 1700 Sungai Ciliwung digunakan sebagai poros
                transportasi laut dan tempat terjadinya transaksi perdagangan.
                Namun di tahun 2010 kondisi Sungai Ciliwung dipenuhi sampah
                sehingga warna sungai berubah menjadi coklat. Di tahun 2050,
                tampak Sungai Ciliwung yang bersih, tepian sungai yang rindang
                dan airnya kembali biru. Untuk mewujudkan Sungai Ciliwung yang
                kembali asri, salah satu cara yang dilakukan adalah mencegah
                sampah masuk ke sungai.” Layanan Mallsampah di Jakarta akan
                melibatkan 500 pengepul dan pemulung lokal yang siap menjemput
                sampah ke tempat user. “Pemulung berseragam Mallsampah akan
                menjemput sampahmu”, terang Adi.
            </p>
        </div>
  )
}

export default ContentArtikel