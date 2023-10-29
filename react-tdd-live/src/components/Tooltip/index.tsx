import * as S from './styles'

const Tooltip = ({icon}: { icon: string }) => {
  return (
    <S.Container>
      <img src={`src/static/${icon}`} alt="" />
    </S.Container>
  )
}

export default Tooltip