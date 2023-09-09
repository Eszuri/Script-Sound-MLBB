import React, { useEffect } from 'react'
import "../Global.css"
import Navigasi from '../components/Navigasi'

export default function Home() {
    useEffect(() => {
        document.getElementById('home').classList.add("bg-blue-800");
    })
    return (
        <>
            <Navigasi />
            <div className='w-[80%] mr-auto ml-auto mt-5 pb-5 bg-purple-950 rounded-sm'>
                <h1 className='text-xl text-center font-bold mb-2 pt-10'>Perkenalan singkat</h1>
                <p className='text-center'>Haiii, Selamat datang di website saya</p>
                <h1 className='text-xl text-center font-bold mt-20'>Q&A</h1><br />
                <div className='w-[90%] mr-auto ml-auto '>
                    <p className='font-bold'>Q: Aman atau Tidak ?</p>
                    <p>A: Aman. karena bersifat lokal. maksud dari lokal berarti file yg sudah kalian ganti dengan script buatan saya hanya terlihat oleh kalian saja, tidak akan terlihat oleh orang lain</p><br />
                    <p className='font-bold'>Q: KeBanned Atau Tidak ?</p>
                    <p>A: Tidak. Karena tidak merugikan orang lain. Jika terkena <span className='font-bold'>Banned</span>, saya yakin bukan dari script buatan saya. mungkin saja kalian menggunakan pihak ketiga seperti map hack, dll.</p><br />
                    <p className='font-bold'>Q: Bikin Script Sendiri Atau Reupload punya orang lain ?</p>
                    <p>A: Saya buat sendiri. tapi bukan berarti dari 0. saya mengambil file dari data aslinya lalu saya buat ulang dengan sound sesuai selera saya.</p>
                </div>
            </div>
        </>
    )
}
