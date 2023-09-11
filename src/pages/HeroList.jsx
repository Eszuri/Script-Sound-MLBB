import React, { useEffect } from 'react'
import Navigasi from '../components/Navigasi'
import { Link } from 'react-router-dom';

export default function HeroList() {
    useEffect(() => {
        document.getElementById('list').classList.add("bg-blue-800");
        document.getElementById('heroShow').innerText = document.getElementById('hero').children.length;
        document.getElementById('heroShow').style.color = "yellow";
    });
    return (
        <>
            <Navigasi />
            <div className='w-[80%] mr-auto ml-auto mt-5 bg-purple-950 rounded-sm'>
                <div className='w-[95%] mr-auto ml-auto text-2xl' id='hero'>
                    <Link to="/ireng" className='hover:bg-purple-800 w-full inline-block border-2 border-green-600 p-2 rounded mt-3'>Brody</Link>
                    <Link to="/change" className='hover:bg-purple-800 w-full inline-block border-2 border-green-600 p-2 rounded mt-3'>Change</Link>
                </div>
                <p className='text-center'>Jumlah semua hero yg Tersedia saat ini : <span id='heroShow'></span>  dari 121 Hero</p>
            </div>
        </>
    )
}

