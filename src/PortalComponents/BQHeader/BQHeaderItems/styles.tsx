import styled from "styled-components";

export const BQHeaderUl = styled.ul`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 3em;
  z-index: 10;
  padding: 0;
  height: 100%;

  @media ${({ theme }) => theme.devices.tabletM} {
    display: none;
  }

  & li.active {
    //console border-bottom: 3px solid
    color: #efb850 !important;
    :hover {
    }
  }
`;
