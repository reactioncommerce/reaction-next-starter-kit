import styled from "styled-components";
import Link from "components/Link";

export const BreacrumbList = styled.ul`
  text-align:center;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
  width: 100%;

`;


export const Item = styled.li`
  font-size: .8rem;
  color: ${({ theme }) => theme.colors.gray.COLOR_2};
  &.active {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 900;
  }
`;

export const Separator = styled.span`
  color: ${({ theme }) => theme.colors.gray.COLOR_2};
  margin: 0 5px;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gray.COLOR_2};
`;


