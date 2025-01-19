import Link from 'next/link'
import React from 'react'

export function Header() {
  return (
    <header className='flex bg-blue-400/70 h-16 justify-center'>
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
