import styled from '@emotion/styled';
import { Slider } from '@mui/material';
import { FC } from 'react';

const StyledSlider = styled(Slider)((theme) => ({
  color: '#F84300',
  borderRadius: 0,
  position: 'absolute',
  bottom: 0,
  height: 35,
  width: '100%',
  overflow: 'hidden',
  '@media (pointer: coarse)': {
    padding: 0,
  },
  '& .MuiSlider-thumb': {
    display: 'hidden',
    backgroundColor: 'white',
    width: 11,
    height: 35,
    borderRadius: 0,
  },
  '& .MuiSlider-rail': {
    backgroundColor: '#4B4B4B',
  },
}));

type CustomSliderProps = {
  value: number;
  onChange(event: Event, value: number | number[], activeThumb: number): void;
};

export const CustomSlider: FC<CustomSliderProps> = ({ value, onChange }) => {
  return (
    <StyledSlider
      value={value * 100}
      min={0}
      max={100}
      onChange={onChange}
    />
  );
};

