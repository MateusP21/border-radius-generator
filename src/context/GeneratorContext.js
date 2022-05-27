import React, {
  useState, createContext, useMemo,
} from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export const GeneratorContext = createContext();

export function GeneratorProvider({ children }) {
  const [borderRadiusObject, setBorderRadiusObject] = useState({
    topLeft: 100,
    topRight: 100,
    topLeftVertical: 100,
    topRightVertical: 100,
    bottomLeft: 100,
    bottomRight: 100,
    bottomLeftVertical: 100,
    bottomRightVertical: 100,
  });
  const [check, setCheck] = useState(false);

  const {
    topLeft, topRight, topLeftVertical, topRightVertical,
    bottomLeft,
    bottomRight,
    bottomLeftVertical,
    bottomRightVertical,
  } = borderRadiusObject;
  const borderRadius = (` ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}% / ${topLeftVertical}% ${topRightVertical}% ${bottomRightVertical}% ${bottomLeftVertical}% `);

  function handleBorderRadius({ target }) {
    const { name, value } = target;
    setBorderRadiusObject({
      ...borderRadiusObject,
      [name]: value,
    });
  }

  function handleClipboard() {
    navigator.clipboard.writeText(`border-radius: ${borderRadius};`);
    toast.success('😊 Copiado com Sucesso');
  }

  function handleCheck() {
    setCheck(!check);
  }

  const context = useMemo(() => ({
    handleClipboard,
    borderRadius,
    handleCheck,
    check,
    handleBorderRadius,
    borderRadiusObject,
  }), [borderRadiusObject, check]);

  return (
    <GeneratorContext.Provider
      value={context}
    >
      {children}
    </GeneratorContext.Provider>
  );
}

export default GeneratorProvider;

GeneratorProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
