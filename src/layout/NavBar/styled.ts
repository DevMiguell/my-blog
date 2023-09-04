import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem 0px;
`;
