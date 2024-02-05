import { Metadata } from "next"

export const metadata: Metadata = {
  title: '404 not found',
}

export default function NotFound(){
  return <h1>not found</h1>
}