import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Line, Rect } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Line x1="3" y1="9" x2="21" y2="9" />
      <Line x1="3" y1="15" x2="21" y2="15" />
      <Line x1="9" y1="3" x2="9" y2="21" />
      <Line x1="15" y1="3" x2="15" y2="21" />
    </StyledSvg>
  );
};
Icon.displayName = 'Grid';
export const Grid = React.memo(Icon);
