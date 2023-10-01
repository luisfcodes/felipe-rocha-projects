import { useState } from 'react'
import SelectOp, { SelectOpProps } from './selectOp.component'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Components/SelectOp',
  component: SelectOp,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    creditCardList: {
      description: 'Lista de bandeiras que serão exibidas',
    },
    state: {
      description: 'Exibe o bandeira inicial selecionada, ao selecionar outra bandeira este estado será atualizado com a bandeira selecionada',
    },
    setState: {
      description: 'Função responsável por atualizar o valor do state',
    }
  }
} as Meta

const Template: StoryFn<Pick<SelectOpProps, "creditCardList">> = (args) => {
  const [state, setState] = useState('American Express')

  return (
    <SelectOp state={state} setState={setState} {...args}/>
  )
}

export const Default = Template.bind({})
Default.args = {
  creditCardList: [
    {
      cartao: 'amex',
    },
    {
      cartao: 'elo'
    },
    {
      cartao: 'master'
    },
    {
      cartao: 'visa'
    },
  ],
}