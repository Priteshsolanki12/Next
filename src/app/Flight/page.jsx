import Link from "next/link";
import style from '../page.module.css'
import './Flight.css'
function Flight() {
  return (
    <div className={style.page}>
        <h1>i am inside the flight</h1>
        <Link className="button" href="/Flight/airIndia">airIndia</Link>

        <Link  className="button" href="/Flight/Indigo">Indigo</Link>

        <Link  className="button" href="/Flight/Spice Get">Spice Get</Link>
    </div>
  )
}

export default Flight