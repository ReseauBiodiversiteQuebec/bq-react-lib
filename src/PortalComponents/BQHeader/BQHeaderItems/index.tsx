import React from 'react';
import { CollapseMenuItem } from '../../CollapseMenuItem';
import { CustomPathLink } from '../../Common/CustomPathLink';
import { useBbox } from '../../../hooks/useElementDimension';
import _ from 'underscore';
import { BQHeaderUl, BQHeaderUlDiv } from './styles';
import { StringNullableChain } from 'lodash';

interface Item {
  text?: string;
  key?: string;
  href?: string;
  disbaleCollapse?: boolean;
  subitem?: any;
  color?: string;
}

interface BQHeaderItemsProps {
  items?: Item[];
  activeItem?: string;
  settedKey?: string;
  tabClicked?: string;
  locale?: string;
  selectedTab?: (key: string) => any;
}
export const BQHeaderItems = (props: BQHeaderItemsProps) => {
  const {
    items = [],
    activeItem,
    settedKey,
    tabClicked,
    locale,
    selectedTab = (key: string) => key,
  } = props;
  const [bbox, targetRef] = useBbox();
  const { height } = bbox;

  return (
    <BQHeaderUlDiv>
      <BQHeaderUl ref={targetRef}>
        {items.map((item: Item, index: number) => {
          return (
            <li
              key={_.uniqueId(item.text ?? '')}
              onClick={(e: any) => {
                selectedTab(item.key ?? '');
              }}
            >
              <div style={{ zIndex: 50 }}>
                <CustomPathLink
                  href={`/${locale}${item.href}` ?? `/${locale}/#`}
                  className="no-decoration"
                >
                  <CollapseMenuItem
                    text={item.text}
                    collapse={settedKey === item.key ? false : true}
                    opacity={tabClicked !== item.key ? 0.7 : 1}
                    active={settedKey === item.key}
                    color={item.color}
                    notifyEvent={(param: any) => selectedTab(item.key ?? '')}
                    hidearrow={true}
                  />
                </CustomPathLink>
              </div>
              {!item.disbaleCollapse && item.key === activeItem && height ? (
                <div
                  className="tab_content"
                  style={{ top: `${height}px`, zIndex: 1 }}
                >
                  {/* {"carousel with items"} */}
                </div>
              ) : null}
            </li>
          );
        })}
      </BQHeaderUl>
    </BQHeaderUlDiv>
  );
};
