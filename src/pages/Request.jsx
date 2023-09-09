import React, { useEffect, useState } from 'react'
import faunadb, { query as q } from 'faunadb';
import { Check } from '../components/Check';
import Navigasi from '../components/Navigasi';

const client = new faunadb.Client({
    secret: import.meta.env.VITE_API_KEY
});

export default function Request() {
    useEffect(() => {
        document.getElementById('request').classList.add("bg-blue-800");
    });
    const [name, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [komentar, setKomentar] = useState('');
    // Kirim ke Fauna
    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById('check').style.visibility = "visible";
        client.query(
            q.Create(
                q.Collection('Request-Script-Sound-MLBB'),
                { data: { Nama: name, Email: email, Komentar: komentar } }
            )
        )
            .then(function () {
                alert("TERKIRIM OK");
                document.getElementById('check').style.visibility = "hidden";
                document.getElementById("nama").value = "";
                document.getElementById("email").value = "";
                document.getElementById("komentar").value = "";
            })
            .catch(function (err) { console.log(err); alert("GAGAL TERKIRIM MEN"); document.getElementById('check').style.visibility = "hidden"; })
    };

    return (
        <>
            <Check />
            <Navigasi />
            <section className="mt-5 pb-5 text-white bg-purple-950 w-[80%] mr-auto ml-auto">
                <div className='w-[95%] mr-auto ml-auto'>
                    <h1 className='text-center font-bold text-xl'>Request sound yg kalian mau</h1>
                    <form action="" onSubmit={handleSubmit} className="pt-5">
                        <div className="flex max-[639px]:block">
                            <div className="w-full pr-[2%] max-[639px]:pr-[0%]">
                                {/* nama */}
                                <label htmlFor="nama" className="font-semibold">
                                    Nama :
                                </label>
                                <input
                                    type="text"
                                    name="nama"
                                    id="nama"
                                    className="font-semibold bg-slate-300 outline outline-1 rounded w-full flex focus:outline-[#1B74E4] focus:outline-4 text-black p-2 caret-[#1B74E4] placeholder:font-medium placeholder:text-slate-600"
                                    placeholder="Ketikkan nama disini"
                                    onChange={(e) => setNama(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="w-full pl-[2%] max-[639px]:pl-[0%] max-[639px]:mt-5">
                                {/* email */}
                                <label htmlFor="email" className="font-semibold">
                                    Email :
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="font-semibold bg-slate-300 outline outline-1 rounded w-full flex focus:outline-[#1B74E4] focus:outline-4 text-black p-2 caret-[#1B74E4] placeholder:font-medium placeholder:text-slate-600"
                                    placeholder="Ketikkan email disini"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        {/* Saran */}
                        <div className="mt-5 w-full">
                            <label htmlFor="komentar" className="font-semibold">
                                Saran atau Pendapat :
                            </label>
                            <textarea
                                name="saran"
                                id="komentar"
                                cols={30}
                                rows={10}
                                className="font-semibold bg-slate-300 outline outline-1 rounded w-full flex focus:outline-[#1B74E4] focus:outline-4 text-black p-2 caret-[#1B74E4] placeholder:font-medium placeholder:text-slate-600"
                                placeholder="Ketikan Request anda disini"
                                spellCheck="true"
                                onChange={(e) => setKomentar(e.target.value)}
                                defaultValue={""}
                                required
                            />
                            {/* button kirim */}
                            <button
                                type="submit"
                                className="w-full bg-[#1B74E4] rounded text-white h-10 text-2xl hover:bg-[#1063c8] max-[639px]:text-xl mt-5"
                            >
                                Kirim
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};
