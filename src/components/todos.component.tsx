import { useState } from 'react';
import { AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai'
import { Todo } from '../interfaces/todos';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid'

const Todos = (): JSX.Element => {
  const { register, handleSubmit, resetField } = useForm<{ title: string }>()

  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddClick = (data: { title: string }) => {
    setTodos((prev) => [...prev, { id: uuid(), title: data.title, isCompleted: false }])
    resetField('title')
  }

  const handleDeleteClick = (id: string) => {
    setTodos(prev => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div className="w-screen h-screen bg-gray-950 flex items-center justify-center">

      <div className="flex flex-col items-center justify-center p-4 rounded-md bg-gray-800 gap-6">
        <h1 className="text-2xl text-gray-50">My tasks</h1>

        <div className="flex items-center gap-4">
          <input type="text" placeholder="Digite o nome da tarefa" className="rounded-md p-3 text-gray-50 bg-gray-600" {...register('title', { required: true })} />
          <button aria-label="Adicionar tarefa" onClick={() => handleSubmit(handleAddClick)()}>
            <AiOutlinePlus size={24} className='text-gray-50' />
          </button>
        </div>

        {todos.map((todo) => (
          <div key={todo.id} className='flex items-center gap-4 w-full justify-between'>
            <p className='text-gray-50 rounded-md p-3 bg-gray-700 w-full'>
              {todo.title}
            </p>
            
            <button aria-label={`Deletar tarefa: ${todo.title}`} onClick={() => handleDeleteClick(todo.id)}>
              <AiOutlineDelete size={24} className="text-red-500"/>
            </button>
          </div>
        ))}
      </div>

    </div>
  )
};

export default Todos;
