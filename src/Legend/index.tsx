import React, { useRef } from 'react';
import _ from 'underscore';
import { buildLocation } from '../utils';
import {
  LegendItemContainer,
  LegendItemColorBox,
  LegendItemText,
  LegendContainer,
} from './legendstyles';
import './Legend.css';

function LegendItem(props: any) {
  const { color = 'red', text = '', id = 50 } = props;
  return (
    <LegendItemContainer>
      <LegendItemColorBox style={{ background: color }} />
      <LegendItemText>
        <span>{text}</span>{' '}
      </LegendItemText>
    </LegendItemContainer>
  );
}

export const Legend = (props: any) => {
  const {
    id = 0,
    items = [],
    absolute,
    location = '',
    top = 0,
    bottom = 0,
    left = 0,
    right = 0,
    scale = '',
  } = props;
  const myId = useRef(1);
  const scaleRef = useRef(scale);
  const isAnimating = useRef(false);

  let customclass = '';

  if (!isAnimating.current) {
    if (myId.current !== id || scaleRef.current !== scale) {
      isAnimating.current = true;
      myId.current = id;
      scaleRef.current = scale;
      customclass += `${absolute ? 'absolute ' : ''} `;
      customclass += `${location} legend-amin `;
      setTimeout(() => {
        isAnimating.current = false;
      }, 1000);
    } else {
      customclass += `${absolute ? 'absolute' : ''} `;
      customclass += `${location} `;
    }
  } else {
    customclass += `${absolute ? 'absolute ' : ''} `;
    customclass += `${location} legend-amin `;
  }

  const style = buildLocation(location, top, right, left, bottom);

  return (
    <LegendContainer className={`${customclass}`} style={style}>
      {items.map((item: any) => (
        <LegendItem
          id={id}
          key={_.uniqueId(JSON.stringify({ n: Math.random(), m: Date.now() }))}
          color={item.color}
          text={item.text}
        />
      ))}
    </LegendContainer>
  );
};
