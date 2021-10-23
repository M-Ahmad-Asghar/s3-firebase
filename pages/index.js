import { useEffect } from "react"
import { useRouter } from "next/router"
export default function Index() {
  const router = useRouter()
   useEffect(() => {
    router.push('login')
   }, [])
  return (
    <div style={{padding:"300px"}}>
            Loading...
    </div>
  )
}
