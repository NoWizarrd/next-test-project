"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import NextImage from '/public/next.svg'
import Image from "next/image";
import { usePathname } from 'next/navigation';

export function Header() {
  
  const pathname = usePathname();
  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
  const links = [
      ['Home', '/'],
      ['Users', '/users'],
      ['Posts', '/posts'],
      ['Todos', '/todos'],
  ];

  return (
    <header className='flex sticky top-0 bg-blue-300 h-16 justify-center'>
      {/* <Image className='absolute bottom-0 left-6 h-14 top-auto' alt="Next Logo"  src={NextImage}/> */}
        <div className='flex'>
            {links.map(([title, url]) => {
                const isActive = pathname === url;
                return (
                    <Link
                        key={url}
                        href={url}
                        className={`transition-hover duration-300 text-2xl mx-10 p-2 content-center ${
                            isActive ? 'bg-blue-500 text-white' : 'hover:bg-blue-400/90'
                        }`}
                    >
                        {title}
                    </Link>
                );
            })}
        </div>
        <button onClick={toggleTheme}>
            change theme
        </button>
    </header>
  )
}
