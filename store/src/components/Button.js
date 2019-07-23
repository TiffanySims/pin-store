import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalized;
  font-size: 1.4rem;
  background: transparent;
  border: none;
  color: var(--lightBlue);
  color: ${props => (props.cart ? "var(--mainBlue)" : "var(--lightBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-n-out;
  &:hover {
    background: var(--lightBlue);
    background: ${props =>
      props.cart ? "var(--mainBlue)" : "var(--lightBlue)"};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
