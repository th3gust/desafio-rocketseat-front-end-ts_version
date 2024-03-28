import PlusIcon from "../../assets/imgs/plus.svg?react"
import ArrowIcon from '../../assets/imgs/arrow.svg?react'
import { Container } from "./styles"
import { ButtonProps } from "./types"

const Button = ({title, variant=false, transparent=false, arrow=false}: ButtonProps) =>{
  return(
    <Container>
      {
        variant && <PlusIcon/>
      }
      {
        transparent && arrow && <ArrowIcon/>
      }
      {title}
    </Container>
  )
}

export default Button