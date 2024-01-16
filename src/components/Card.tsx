import { ReactNode } from 'react'

function Card({ children }: { children: ReactNode }) {
  return <article className="p-8 bg-white rounded-xl">{children}</article>
}

export default Card
