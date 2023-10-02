import * as S from './styles'
import { AiOutlineCheck } from 'react-icons/ai'

interface StepsProps {
  active: number
}

const Steps = ({ active }: StepsProps ) => {
  const stepsList = ["Liberação", "Processamento", "Confirmação", "Finalização"]

  return (
    <S.Container>
      {stepsList.map((item, index) => (
        <li key={item} className={active > index + 1 ? 'isActive' : ''} aria-label={item}>
          <div>
            <span>{item}</span>
            {active > index + 1 && <AiOutlineCheck size={24}/> }
          </div>
        </li>
      ))}
    </S.Container>
  )
}

export default Steps