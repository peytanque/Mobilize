import styled from '@emotion/styled';
import { Slider } from '@mui/material';
import { FC } from 'react';

// const StyledSlider = styled(Slider)<{ wrapperFocused: boolean }>(({ theme, wrapperFocused }) => ({
const StyledSlider = styled(Slider)(({ theme }) => ({
  color: '#F84300',
  position: 'absolute',
  bottom: 0,
  height: 35,
  width: '100%',
  maxWidth: '100%',
  padding: 0,
  borderRadius: 0,
  '@media (pointer: coarse)': {
    padding: 0,
  },
  '& .MuiSlider-thumb': {
    display: 'hidden',
    backgroundColor: 'white',
    width: 11,
    height: 35,
    borderRadius: 0,
    position: 'relative',
    overflow: 'visible',
    boxShadow: 'none',
    // ...(wrapperFocused && {
    // '&:after': {
    //   position: 'absolute',
    //   overflow: 'visible',
    //   width: 0,
    //   height: 0,
    //   top: '-57px',
    //   borderRadius: 0,
    //   borderLeft: '33.5px solid transparent',
    //   borderRight: '33.5px solid transparent',
    //   borderTop: '33.5px solid white',
    // },
    // })
  },
  '& .MuiSlider-rail': {
    backgroundColor: '#4B4B4B',
    opacity: 0.9,
  },
}));

type CustomSliderProps = {
  value: number;
  onChange(event: Event, value: number | number[], activeThumb: number): void;
};

export const CustomSlider: FC<CustomSliderProps> = ({ value, onChange }) => {
  return (
    <StyledSlider value={value * 100} min={0} max={100} onChange={onChange} />
  );
};
