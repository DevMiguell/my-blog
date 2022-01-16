import styled from "styled-components";

export const WrapperIconButton = styled.button`
  font-size: 1.2rem;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
