import React, { useContext } from 'react';

import { GeneratorContext } from '../../context/GeneratorContext';
import InputRanger from '../InputRanger';
import { Grid, Box } from './styles';
import Display from '../Display';

export default function BorderGenerator() {
  const {
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    topLeftVertical,
    topRightVertical,
    bottomLeftVertical,
    bottomRightVertical,
    handleTopLeft,
    handleTopRight,
    handleBottomLeft,
    handleBottomRight,
    handleTopLeftVertical,
    handleTopRightVertical,
    handleBottomLeftVertical,
    handleBottomRightVertical,
    borderRadius,
    check,
  } = useContext(GeneratorContext);

  return (
    <Grid>
      <h1 className="title">Border Radius </h1>
      <div className="box-container">
        <InputRanger
          gridArea="tp-lf"
          rotate="45deg"
          value={topLeft}
          setRange={handleTopLeft}
        />
        <InputRanger
          gridArea="tp-rg"
          rotate="135deg"
          value={topRight}
          setRange={handleTopRight}
        />
        {check && (
          <>
            <div className="left-vertical">
              <InputRanger
                gridArea=""
                rotate=""
                value={topLeftVertical}
                setRange={handleTopLeftVertical}
              />
              <InputRanger
                gridArea=""
                rotate=""
                value={bottomLeftVertical}
                setRange={handleBottomLeftVertical}
              />
            </div>
            <div className="right-vertical">
              <InputRanger
                gridArea=""
                rotate=""
                value={topRightVertical}
                setRange={handleTopRightVertical}
              />
              <InputRanger
                gridArea=""
                rotate=""
                value={bottomRightVertical}
                setRange={handleBottomRightVertical}
              />
            </div>
          </>
        )}

        <Box
          style={{
            borderRadius: `${
              check ? borderRadius : borderRadius.split('/')[0]
            }`,
          }}
        />

        <InputRanger
          gridArea="bt-lf"
          rotate="-45deg"
          value={bottomLeft}
          setRange={handleBottomLeft}
        />
        <InputRanger
          gridArea="bt-rg"
          rotate="-135deg"
          value={bottomRight}
          setRange={handleBottomRight}
        />
      </div>
      <Display />
    </Grid>
  );
}
