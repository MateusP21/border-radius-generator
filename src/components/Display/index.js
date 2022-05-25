import React, { useContext } from "react";
import { GeneratorContext } from "../../context/GeneratorContext";
import { Container, Button } from "./styles";

export default function Display() {
  const { handleClipboard, borderRadius, handleCheck, check } = useContext(
    GeneratorContext
  );
  return (
    <Container>
      <textarea
        type="text"
        value={` border-radius:${
          check ? borderRadius : borderRadius.split("/")[0]
        } `}
        disabled
      />
      <div className="button-container">
        <Button check={check} onClick={handleCheck} type="button">
          8 Lados
        </Button>
        <Button type="submit" onClick={handleClipboard}>
          COPY
        </Button>
      </div>
    </Container>
  );
}
