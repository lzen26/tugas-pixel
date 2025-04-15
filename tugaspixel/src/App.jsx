
import React from 'react'
import './App.css'


import Photo from "../src/assets/Photo.png"


function App() {


  return (

    <>


      {/* <div className='GreyBackground'> */}
      <body className='GreyBackground'>


        <div className='background'>




          <div>
            <p className='kecerdasanVisual'>Kecerdasan visual</p>

            <p className='LihatDunia'>Lihat dunia dari lensa yang baru.</p>

            <p className='GunakanKecerdasanVisual'>Gunakan <span className='span'>kecerdasan visual</span><br />
              melalui Kontrol Kamera untuk<br />
              langsung mempelajari tentang<br />
              semua hal yang Anda liat.<br />
              Cukup <span className='span'> arahkan iPhone 16 Pro<br />
                Anda untuk menemukan lebih</span><br />
              atau berinteraksi dengan<br />
              sesuatu di depan Anda. Cari<br />
              tahu di mana tempat membeli<br />
              barang baru yang Anda lihat,<br />
              identifikasikan tanaman dan hewan, dan<br />
              banyak lagi.</p>
          </div>

          <div>
            <img className='Gambarnya' src={Photo} alt='Photo' />
          </div>




        </div>


      </body>
    </>
  )
}

export default App
