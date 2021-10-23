import { useEffect } from "react"
import { useRouter } from "next/router"
export default function index() {
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
