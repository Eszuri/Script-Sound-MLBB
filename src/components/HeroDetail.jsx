import React from 'react'
import "../Global.css"
import bnkLogo from "/bnk.png"
import downloadLogo from "/logodownload.jpg"
import { Link } from 'react-router-dom'

export default function HeroDetail(props) {
  return (
    <>
      <div className='w-[80%] mr-auto ml-auto mt-5 pb-3 bg-purple-950 rounded-sm'>
        <h1 className='text-center font-bold text-3xl pt-10 mb-10'>{props.namaHero}</h1>
        <div className='w-[90%] mr-auto ml-auto'>
          <h1 className='font-bold'>Apa Sound Effect Yg Berubah ?</h1>
          <ul className='mt-2 mb-10 text-green-500'>
            <li>{props.mod1}</li>
            <li>{props.mod2}</li>
            <li>{props.mod3}</li>
            <li>{props.mod4}</li>
            <li>{props.mod5}</li>
          </ul>
          <h1 className='font-bold'>Skin Apa Saja Yg Berlaku ?</h1>
          <ul className='mt-2 mb-10 text-green-500'>
            <li>{props.skin1}</li>
            <li>{props.skin2}</li>
            <li>{props.skin3}</li>
            <li>{props.skin4}</li>
            <li>{props.skin5}</li>
            <li>{props.skin6}</li>
            <li>{props.skin7}</li>
            <li>{props.skin8}</li>
            <li>{props.skin9}</li>
            <li>{props.skin10}</li>
          </ul>
          <h1 className='font-bold'>Sampai Kapan Script Berlaku ?</h1>
          <ul className='mt-2 mb-10 text-green-500'>
            <li>{props.expired}</li>
          </ul>
          <h1 className='font-bold'>Video Lengkapnya</h1>
          <div className='w-full bg-black mb-10 mt-1'>
            <iframe src={props.linkYT} className='w-full h-[50vh]' allowFullScreen></iframe>
          </div>
          <div className='w-full flex flex-wrap justify-between'>
            <div className='w-[48%] max-md:w-full border-2 border-green-600 p-2'>
              <h1 className='font-bold'>Link Download {"(Script)"}</h1>
              <img src={bnkLogo} alt="download bnk" />
              <ul className='mt-2 mb-2 text-green-500'>
                <p className='mt-2'><span className='text-white font-bold'>Nama File:</span> <span className='text-lg'>{props.bnkFile}</span> </p>
                <p className='mt-2'><span className='text-white font-bold'>Ukuran File :</span> <span className='text-lg'>{props.sizebnkFile}</span> </p>
              </ul>
              <a className='inline-block' href={props.bnkFile} download><img src={downloadLogo} alt='logo download' className='w-44' /></a>
            </div>
            <div className='w-[48%] max-md:w-full max-md:mt-10 border-2 border-green-600 p-2'>
              <h1 className='font-bold'>Link Download {"(File Backup)"}</h1>
              <img src={bnkLogo} alt="download bnk" />
              <ul className='mt-2 mb-2 text-green-500'>
                <p className='mt-2'><span className='text-white font-bold'>Nama File:</span> <span className='text-lg'>{props.bnkFileBU}</span> </p>
                <p className='mt-2'><span className='text-white font-bold'>Ukuran File :</span> <span className='text-lg'>{props.sizebnkFileBU}</span> </p>
              </ul>
              <a className='inline-block' href={props.bnkFileBU} download><img src={downloadLogo} alt='logo download' className='w-44' /></a>
            </div>
          </div>
          <footer className='text-center mt-20'>Dibuat Oleh <Link className='text-yellow-400 font-bold' target='_blank' to="https://youtube.com/@Eszuri">Eszuri</Link> pada tanggal <span className='font-extrabold'>{props.dateMake}</span></footer>
        </div>
      </div>
    </>
  )
}
