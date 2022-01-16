import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  border-radius: 10px;
  background: #80808020;
  padding: 1.5rem;
  cursor: pointer;
  border: 2px solid transparent;

  transition: all 0.2s;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};

    h2 {
      color: ${({ theme }) => theme.colors.primary};
    }

    i {
      visibility: visible;
      opacity: 1;
      color: ${({ theme }) => theme.colors.primary};
      transform: translate3D(0px, 0px, 0px);
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  transition: all 0.2s;
`;

export const Description = styled.p`
  line-height: 1.5rem;
  margin-bottom: 1.5rem;

  @supports (-webkit-line-clamp: 3) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const Icon = styled.i`
  height: 1rem;
  visibility: hidden;
  opacity: 0;
  transform: translate3D(-20px, 0px, 0px);

  transition: all 0.2s;
`;

export const WrapperReadMore = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ReadMore = styled.a`
  font-weight: bold;
  cursor: pointer;
`;
