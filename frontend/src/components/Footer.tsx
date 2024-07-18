// import React from 'react'

import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="mt-12 flex flex-col items-center gap-8">
      <div className="text-center pb-8 text-4xl font-light uppercase tracking-[8px] font-mono">Contact</div>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-4xl font-mono my-4 tracking-[8px] font-bold">Book a quick call</p>
        <button className="bg-cyan-900 rounded-full py-4 px-8 flex justify-center items-center font-sans font-bold text-lg hover:bg-cyan-950" ><Link to={'https://calendly.com/priyanshuu_eth/30min'} target="_blank">Book Call</Link></button>
      </div>
      <div className="my-4 flex flex-col justify-center items-center gap-4">
        <p className="text-4xl">OR</p>
        <p className="text-xl font-normal">Drop a mail at <span className="hover:underline">priyanshu16181389@gmail.com</span></p>
      </div>
      <div className="text-3xl mt-8 font-mono ">Connect with me on Socials</div>
      <div className="flex gap-8">
        <ul><li><Link to="https://github.com/priyanshu07222" target="_blank"><BsGithub size={30}/></Link></li></ul>
        <ul><li><Link to="https://x.com/priyanshuu_eth" target="_blank"><BsTwitter size={30}/></Link></li></ul>
        <ul><li><Link to="https://www.linkedin.com/in/priyanshueth/" target="_blank"><BsLinkedin size={30}/></Link></li></ul>
        <ul><li><Link to="https://www.instagram.com/priyanshuu.eth/" target="_blank"><BsInstagram size={30}/></Link></li></ul>
        <ul><li><Link to='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new'
            onClick={(e) => {
                window.location.href = 'priyanshu16181389@gmail.com';
                e.preventDefault();
            }} target="_blank"><MdEmail size={30}/></Link></li></ul>
      </div>
      

      <div className="my-8 ">Developed & Designed by Priyanshu</div>
    </div>
  )
}
