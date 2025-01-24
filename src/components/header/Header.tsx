import Link from 'next/link'
import React from 'react'
import NextImage from '/public/next.svg'
import Image from "next/image";

export function Header() {
  return (
    <header className='flex sticky top-0 bg-blue-300 h-16 justify-center'>
      {/* <Image className='absolute bottom-0 left-6 h-14 top-auto' alt="Next Logo"  src={NextImage}/> */}
        <div className='flex'>
            {[
                ['Home', '/'],
                ['Users', '/users'],
                ['Posts', '/posts'],
                ['Todos', '/todos'],
            ].map(([title, url]) => (
                <Link key={url}  href={url} className="hover:bg-blue-400/90 transition-hover duration-300 text-2xl mx-10 p-2 content-center">{title}</Link>
            ))}
        </div>
    </header>
  )
}
