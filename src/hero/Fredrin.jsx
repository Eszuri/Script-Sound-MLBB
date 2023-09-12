import React from 'react'
import Navigasi from '../components/Navigasi'
import HeroDetail from '../components/HeroDetail'

export default function Fredrin() {
    return (
        <>
            <Navigasi />
            <HeroDetail
                namaHero="Hero - Fredrin"
                mod1='⦿ saat ulti suara berubah jadi "SIKATT" '
                skin1='⦿ No Skin / Skin Basic'
                skin2='⦿ Skin Elit'
                expired='Sampai update selanjutnya (mungkin)'
                linkYT='https://www.youtube.com/embed/9XG_nhvrBfI?si=fg8x0d9kNsf2wZx_'
                bnkFile='Fredrin-Ulti-Sikatt.zip'
                sizebnkFile='392 KB'
                bnkFileBU='Sound-Fredrin-Original.zip'
                sizebnkFileBU='395 KB'
                dateMake='12 Sepetember 2023'
            />
        </>
    )
}
