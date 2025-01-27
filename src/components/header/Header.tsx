"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import NextImage from '/public/next.svg'
import Image from "next/image";
import { useParams, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

export function Header() {
  
  const pathname = usePathname();
  const params = useParams()
  const { theme, setTheme } = useTheme()
  // const toggleTheme = () => {
  //   if (document.documentElement.classList.contains('dark')) {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem('theme', 'light');
  //   } else {
  //     document.documentElement.classList.add('dark');
  //     localStorage.setItem('theme', 'dark');
  //   }
  // }
  const toggleTheme = () => {
    if (theme === 'light' || theme === undefined || theme === null) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const links = [
      ['Home', '/'],
      ['Users', '/users'],
      ['Posts', '/posts'],
      ['Todos', '/todos'],
  ];

  return (
    <header className='flex sticky top-0 z-10 bg-blue-300 dark:bg-[var(--darkGray)] text-foreground h-16 justify-center'>
      {/* <Image className='absolute bottom-0 left-6 h-14 top-auto' alt="Next Logo"  src={NextImage}/> */}
        <div className='flex'>
            {links.map(([title, url]) => {
                const isActive = pathname.replace('/' + params.id, '') === url;
                return (
                    <Link
                        key={url}
                        href={url}
                        className={`transition-hover  duration-300 text-2xl mx-10 p-2 content-center max-lg:text-base
                          max-lg:mx-5 ${
                            isActive ? 'bg-blue-500 text-white dark:bg-gray-700 ' : 'hover:bg-blue-400/90 dark:hover:bg-gray-600/90'
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
