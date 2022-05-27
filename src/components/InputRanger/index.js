import React from 'react';
import PropTypes from 'prop-types';
import InputContainer from './styles';

export default function InputRanger({
  gridArea, rotate, value, setRange, name,
}) {
  return (
    <InputContainer rotate={rotate} gridArea={gridArea}>
      <input
        type="range"
        value={value}
        name={name}
        onChange={setRange}
      />
    </InputContainer>
  );
}

InputRanger.propTypes = {
  gridArea: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rotate: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setRange: PropTypes.func.isRequired,
};
