import React, { useContext } from 'react';

import { GeneratorContext } from '../../context/GeneratorContext';
import InputRanger from '../InputRanger';
import { Grid, Box } from './styles';
import Display from '../Display';

export default function BorderGenerator() {
  const {
    borderRadiusObject,
    borderRadius,
    handleBorderRadius,
    check,
  } = useContext(GeneratorContext);

  const {
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    topLeftVertical,
    bottomLeftVertical,
    bottomRightVertical,
    topRightVertical,
  } = borderRadiusObject;
  return (
    <Grid>
      <h1 className="title">Border Radius </h1>
      <div className="box-container">
        <InputRanger
          gridArea="tp-lf"
          rotate="45deg"
          value={topLeft}
          name="topLeft"
          setRange={handleBorderRadius}
        />
        <InputRanger
          gridArea="tp-rg"
          rotate="135deg"
          name="topRight"
          value={topRight}
          setRange={handleBorderRadius}
        />
        {check && (
          <>
            <div className="left-vertical">
              <InputRanger
                gridArea=""
                rotate=""
                name="topLeftVertical"
                value={topLeftVertical}
                setRange={handleBorderRadius}
              />
              <InputRanger
                gridArea=""
                rotate=""
                name="bottomLeftVertical"
                value={bottomLeftVertical}
                setRange={handleBorderRadius}
              />
            </div>
            <div className="right-vertical">
              <InputRanger
                gridArea=""
                rotate=""
                name="topRightVertical"
                value={topRightVertical}
                setRange={handleBorderRadius}
              />
              <InputRanger
                gridArea=""
                rotate=""
                name="bottomRightVertical"
                value={bottomRightVertical}
                setRange={handleBorderRadius}
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
          name="bottomLeft"
          value={bottomLeft}
          setRange={handleBorderRadius}
        />
        <InputRanger
          gridArea="bt-rg"
          rotate="-135deg"
          name="bottomRight"
          value={bottomRight}
          setRange={handleBorderRadius}
        />
      </div>
      <Display />
    </Grid>
  );
}
