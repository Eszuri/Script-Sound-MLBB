import React from 'react'
import Navigasi from '../components/Navigasi'
import HeroDetail from '../components/HeroDetail'

export default function Brody() {
    return (
        <>
            <Navigasi />
            <HeroDetail
                namaHero="Hero - Brody"
                mod1='⦿ Bassic Attack saat hit menjadi suara "TOT" '
                mod2='⦿ Skill 2 saat hit menjadi "Ahhh" '
                skin1='⦿ No Skin / Skin Basic'
                skin2='⦿ Skin Special'
                skin3='⦿ Skin Starlight'
                skin4='⦿ Skin MPL'
                expired='Sampai update selanjutnya (mungkin)'
                linkYT='https://www.youtube.com/embed/9XG_nhvrBfI?si=fg8x0d9kNsf2wZx_'
                bnkFile='Sound-Brody-TOT-AHhh.zip'
                sizebnkFile='278 KB'
                bnkFileBU='Sound-Brody-Original.zip'
                sizebnkFileBU='304 KB'
                dateMake='9 Sepetember 2023'
            />
        </>
    )
}
