"use client";
import { useState } from "react";
import Image from "next/image";
import { batch1, batch2,batch3 } from '../api/data/data.js';
import Link from "next/link";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [batch, setBatch] = useState('');
  const [error, setError] = useState('');
  const [link,setLink] = useState('')
  const [pop , setPop] = useState(Boolean)

  const checkBatch = () => {
    setError('');
    
    // Corrected data usage
    if (batch1.includes(email)) {
      setBatch('Your part of Batch 1');
      setLink('https://app.streamflow.finance/airdrop/solana/mainnet/H7FpvyY6eQTMfKcH8CYV2e9ofUPqdQ1dpoVaSAaBt9CT')
      setPop(true)
    } else if (batch2.includes(email)) {
      setBatch(' Your part of Batch 2 ');
      setLink('https://app.streamflow.finance/airdrop/solana/mainnet/DQn4W3UA52z2ZMGDmkaBpUv1QXpgv1DbQdzngZVM9MXV')
      setPop(true)
    }else if (batch3.includes(email)) {
      setBatch(' Your part of Batch 3 ');
      setLink('https://app.streamflow.finance/airdrop/solana/mainnet/BJGv8KnPNFgjiBkRrRjyvAfue5gGDFomng7a9FhdmwNC')
      setPop(true)
     } else {
      setError('Email not found wait for next batch.');
      setBatch('Your Batch is Not found')
      setLink('No link for this Round')
      setPop(false)

    }
  };
  return (
    <main className="flex items-center justify-center h-[100vh] flex-col">
      <header className="  absolute top-0 w-full items-center flex px-[10px] py-[20px] justify-center bg-[#fff]">
      <Image
                                                src="/Logo2.png"
                                                alt="logo"
                                                width={112}
                                                height={112}
                                                className=""
                                            />
      </header>


      <div className=" max-w-[300px] lg:max-w-[500px] w-full item-center justify-center  flex flex-col mx-[20px]  ">

        <div className="bg-[#1111] p-[20px] rounded-xl ">
        <div className="text-[18px] lg:text-[24px] font-bold">Confrim Batch to claim</div>
        <input type="email" className=" my-[15px] h-[45px] w-full rounded-lg px-[10px] " placeholder="Enter Email here" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        <div className=" bg-[#008080] py-[10px] cursor-pointer flex items-center justify-center rounded-lg text-[#fff] hover:opacity-85" onClick={checkBatch}>Submit</div>

        </div>
      

      </div>
      { pop && 
      <div className="max-w-[300px] lg:max-w-[500px] w-full h-[150px] rounded-xl bg-[#1111] my-[50px] p-[20px] flex-wrap mx-[20px] ">
        <h1 className="text-[18px] lg:text-[24px] font-bold"> {batch}</h1>
        <p className="mb-[15px]">Use this link to Claim 👇🏽 </p>
        <Link href={link} className="w-auto h-[35px] rounded-[6px] bg-[#fff] text-[#851b1b]  p-[10px] cursor-pointer hover:opacity-80">https://app.streamflow.finance...</Link>
      </div>
      }
      
      {error && <p className="py-[20px]" style={{ color: 'red' }}>🚫 {error}</p>}
      <footer className="absolute bottom-0 py-[20px]">
      <p className="text-[12px] lg:text-[18px]">Copyright © {currentYear} DigiCask.Finance All rights reserved.</p>
    </footer>

        
    </main>
  );
}
