import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuText } from '../Text/textstyles';

export const CollapseMenuItemContainer: any = styled(Container)`
  display: flex;
  gap: 0.5em;
`;

export const CollapseMenuItemFontAwesomeIcon: any = styled(FontAwesomeIcon)`
  padding-top: 1.3px;
  line-height: ${({ theme }) => `${theme.components.text.basic.lineHeight}rem`};
  letter-spacing: ${({ theme }) =>
    `${theme.components.text.basic.letterSpacing}px`};
  font-family: ${({ theme }) => theme.components.text.basic.font};
  font-weight: ${({ theme }) => theme.components.text.basic.fontWeight};
  font-size: ${({ theme }) => `${theme.fontSize.small}rem`};
  font-style: ${({ theme }) => theme.components.text.basic.fontStyle};
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

export const CollapseMenuText = styled(MenuText)`
  font-weight: 600;

  /*  border-bottom: 1px solid
    ${({ theme, opacity }) =>
    opacity === 1 ? theme.components.text.menu.color : 'transparent'}; */
  color: ${({ theme, active }) =>
    active ? '#efb850' : theme.components.text.menu.color};
  opacity: ${({ opacity }) => opacity};

  cursor: pointer;

  :hover {
    color: #efb850;
    opacity: 1;
  }
`;
