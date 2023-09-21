import { ReactNode } from "react"
import './Title.scss';

export const Title = ({ 
  children
}: { 
  children: ReactNode
}) => {
  return (
    <div className="title">
      {children}
    </div>
  )
}