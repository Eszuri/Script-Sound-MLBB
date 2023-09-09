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
                linkYT=''
                bnkFile='sfx_2001.bnk'
                sizebnkFile='287 KB'
            />
        </>
    )
}
