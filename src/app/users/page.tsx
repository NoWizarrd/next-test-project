"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import ImageNext from '/public/next.svg'

export default function UsersPage() {

    const {push} = useRouter()
    // push('/')
    return(
        <>
            <h1 className="mb-5">Страница пользователей</h1>
            <Image src={ImageNext} alt="test image"/>
        </>
    )
}