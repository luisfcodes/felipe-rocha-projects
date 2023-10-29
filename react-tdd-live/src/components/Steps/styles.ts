import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  min-height: 100vh;
  background-color: #111827;
  color: #FFF;

  li {
    &.isActive {
      color: #22c55e;
      position: relative;

      svg {
        position: absolute;
        left: 50%;
        right: 50%;
        transform: translateX(-50%);
        top: -30px;
        border-radius: 50%;
      }
    }
  }
`