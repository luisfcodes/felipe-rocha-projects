import { useState } from 'react'
import { CreditCard } from '../interfaces/creditCard'
import * as s from '../styles/selectOp'
import { FaAngleDown, FaArrowUp } from 'react-icons/fa'

interface SelectOpProps {
  creditCardList: CreditCard[]
  state: string
  setState: (card: string) => void
}

const SelectOp = ({ creditCardList, state, setState }: SelectOpProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleClick = (card?: string ) => {
    if(card){
      setState(card)
    }

    setModalIsOpen(!modalIsOpen)
  }
 
  return (
    <s.Wrapper>
      <button onClick={() => handleClick()}>
        <span>{state}</span>
        <FaAngleDown />
      </button>

      <s.Modal role='modal' className={modalIsOpen ? 'isOpen' : 'isClosed'}>
        <div className='content'>
          <button className='close-btn' aria-label='Fechar Modal' onClick={() => handleClick()}>
            <FaArrowUp />
          </button>

          <header>
            <h2>Selecione a bandeira</h2>
          </header>

          <ul>
            {creditCardList.map((item) => (
              <li key={item.cartao} onClick={() => handleClick(item.cartao)}>
                <img src={`src/static/img/${item.cartao}.png`} />
                <span>{item.cartao}</span>
              </li>
            ))}
          </ul>
        </div>
      </s.Modal>
    </s.Wrapper>
  )
}

export default SelectOp