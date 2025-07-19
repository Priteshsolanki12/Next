"use client"
import style from '../../page.module.css'
import { useParams,useRouter } from 'next/navigation'
import Link from "next/link"

function page() {
  const { slug } = useParams();
  const router = useRouter();
  return (
    <div className={style.page}>
        <h1>Dynamic Routing</h1>
        <h4>FIlght Name :{slug}</h4>
        {/* <Link href="/Flight">Back</Link> */}
        <button onClick={()=>{router.push("/Flight")}}>back</button>
    </div>
  )
}

export default page