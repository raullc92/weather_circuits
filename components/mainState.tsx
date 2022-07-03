import Link from "next/link"
import { Circuit, Comunity } from "../types.d"

interface Props {
  circuit: Circuit
}

export const MainState: React.FC<Props> = ({ circuit }: Props) => {
  return (
    <div className="stat">
      <div className="stat-title">{circuit.name}</div>
      <div className="stat-value">{Comunity[circuit.comunity]}</div>
      <div className="stat-desc">
        <Link href={circuit.location}>Ver en Google Maps</Link>
      </div>
    </div>
  )
}
