import { render, screen, fireEvent } from "@testing-library/react"
import SelectOp from "./"

describe('SelectOp Component', () => {
  it('Should render component', () => {
    const setStateMocked = jest.fn()

    render(<SelectOp 
      creditCardList={[{cartao: 'amex'}]}
      state="American Express"
      setState={setStateMocked}
    />)

    const buttonElement = screen.getByText("American Express")

    expect(buttonElement).toBeInTheDocument()
  })

  it('Should call the setState function', () => {
    const setStateMocked = jest.fn()

    render(<SelectOp 
      creditCardList={[{cartao: 'amex'}, { cartao: 'elo' }]}
      state="American Express"
      setState={setStateMocked}
    />)

    const buttonElement = screen.getByText("American Express")

    fireEvent.click(buttonElement)

    const eloElement = screen.getByText("amex")

    fireEvent.click(eloElement)

    expect(setStateMocked).toHaveBeenCalled()
  })

  it('Should ', () => {
    const setStateMocked = jest.fn()

    render(<SelectOp 
      creditCardList={[{cartao: 'amex'}, { cartao: 'elo' }]}
      state="American Express"
      setState={setStateMocked}
    />)
    
    const buttonElement = screen.getByText("American Express")

    fireEvent.click(buttonElement)
  
    const closeModalElement = screen.getByLabelText('Fechar Modal')

    fireEvent.click(closeModalElement)

    const modalElement = screen.getByRole('modal')

    expect(modalElement).toHaveClass('isClosed')
  })
})