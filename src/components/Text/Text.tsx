import { ReactNode } from "react"
import './Text.scss';

export const Text = ({ 
  children
}: { 
  children: ReactNode
}) => {
  return (
    <div className="text">
      {children}
    </div>
  )
}