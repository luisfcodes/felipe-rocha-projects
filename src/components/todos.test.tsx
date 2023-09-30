import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todos from './todos.component'

describe('Todos component', () => {
  it('Should show my tasks message', () => {
    render(<Todos />)

    expect(screen.getByText('My tasks')).toBeInTheDocument()
  })

  it('Should show task input', () => {
    render(<Todos />)

    const inputElement = screen.getByPlaceholderText('Digite o nome da tarefa')

    expect(inputElement).toBeInTheDocument()
  })

  it('Should show add button', () => {
    render(<Todos />)

    const buttonElement = screen.getByLabelText('Adicionar tarefa')

    expect(buttonElement).toBeInTheDocument()
  })

  it('Should add task on add click', async () => {
    render(<Todos />)

    const inputElement = screen.getByPlaceholderText('Digite o nome da tarefa')

    const taskTitle = 'Nova tarefa'

    await userEvent.type(inputElement, taskTitle)
    
    screen.getByDisplayValue(taskTitle)

    const addButtonElement = screen.getByLabelText('Adicionar tarefa')

    await userEvent.click(addButtonElement)

    screen.getByPlaceholderText('Digite o nome da tarefa')

    expect(screen.getByText(taskTitle)).toBeInTheDocument()
    expect(screen.queryAllByText(taskTitle)).toHaveLength(1)
  })

  it('Should delete task on delete click', async () => {
    render(<Todos />)

    const inputElement = screen.getByPlaceholderText('Digite o nome da tarefa')

    const taskTitle = 'Nova tarefa'

    await userEvent.type(inputElement, taskTitle)
    
    screen.getByDisplayValue(taskTitle)

    const addButtonElement = screen.getByLabelText('Adicionar tarefa')

    await userEvent.click(addButtonElement)

    screen.getByPlaceholderText('Digite o nome da tarefa')

    const deleteButton = screen.getByLabelText(`Deletar tarefa: ${taskTitle}`)

    await userEvent.click(deleteButton)

    expect(screen.queryByText(taskTitle)).not.toBeInTheDocument()
  })
})