import React, { useState } from 'react';
import {
  CollapseMenuItemContainer,
  CollapseMenuItemFontAwesomeIcon,
  CollapseMenuText,
} from './styles';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

export const CollapseMenuItem = (props: any) => {
  const {
    text = '',
    collapse = true,
    highlight = false,
    notifyEvent = (obj: any) => obj,
    hidearrow = false,
    className = '',
    opacity = 0.7,
    active,
  } = props;

  //const [active, setActive] = useState(false);

  const toggle = (e: any) => {
    notifyEvent(text);
    //setActive(true);
  };
  let fontColor = '#c3c3c3';
  if (highlight) {
    fontColor = '#EFB850';
  }
  return (
    <CollapseMenuItemContainer onClick={toggle}>
      <CollapseMenuText opacity={opacity} active={active}>
        {text}
      </CollapseMenuText>
      {!hidearrow &&
        (collapse ? (
          <CollapseMenuItemFontAwesomeIcon
            icon={faChevronDown}
            className="fa-regular fa-1x"
            style={{ color: { fontColor } }}
          />
        ) : (
          <CollapseMenuItemFontAwesomeIcon
            icon={faChevronUp}
            className="fa-regular fa-1x"
            style={{ color: { fontColor } }}
          />
        ))}
    </CollapseMenuItemContainer>
  );
};
