import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const Text = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const TextQuantity = styled(Text)`
  font-size: 1.5rem;
`;
