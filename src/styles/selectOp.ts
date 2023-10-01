import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: #030712;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    background-color: #f9fafb;
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    text-transform: capitalize;
  }
`

export const Modal = styled.div`
  background-color: #f9fafb;
  position: absolute;
  bottom: 0;
  width: 100%;

  .content {
    padding: 1rem;
    position: relative;

    .close-btn {
      position: absolute;
      width: min-content;
      padding: 0;
      top: 0.5rem;
      color: #dc2626;
    }

    header {
    margin-top: 1rem;
    font-weight: bold;
    border-bottom: 1px solid #9ca3af;
  }

    ul {
      margin-top: 1rem;

      li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;

        span {
          text-transform: capitalize;
        }

        img {
          width: 30px;
        }
      }
    }
  }

  &.isOpen {
    display: block;
  }

  &.isClosed {
    display: none;
  }
`