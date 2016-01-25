import {GUTTER, FLEX, calcDimension, addFlex} from './defaults';

export default function row(rowVal, gutter=GUTTER, flex=FLEX) {
  let style = {
    width: '100%'
  };

  style = addFlex(flex, style);

  style.height = calcDimension(rowVal, gutter);

  style.marginBottom = gutter;

  style['&:last-child'] = {
    marginBottom: '0'
  };

  return style;
}