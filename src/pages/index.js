import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data.map((m)=> (
        <div>
          <p>
            {m.data.firstName}
          </p>
          <p>
            {m.data.lastName}
          </p>
          <p>
            {m.data.telephone}
          </p>
        </div>
      ))}
     
    </main>
  )
}
export async function getServerSideProps(){

  const res = await fetch("http://localhost:3000/api/users")
  const data = await res.json()
  
  return {props:{data}}

}

