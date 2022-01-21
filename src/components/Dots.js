import styled from "styled-components";
import { useState, useEffect } from "react";

const Dots = ({ content, setX }) => {
  const [activeStates, setActiveStates] = useState({});

  const handleClick = (idx) => {
    const allDotKeys = Object.keys(activeStates);
    allDotKeys.map((dotKey) => {
      setActiveStates((prevState) => ({
        ...prevState,
        [dotKey]: dotKey == idx ? true : false,
      }));
    });

    setX((-100 / content.length) * (idx * 3));
  };

  useEffect(() => {
    content.map((_, idx) => {
      setActiveStates((prevState) => ({
        ...prevState,
        [idx]: idx === 0 ? true : false,
      }));
    });
  }, [content]);

  return (
    <DotWrapper>
      {content.map((_, idx) => (
        <DotButton
          key={idx}
          onClick={() => handleClick(idx)}
          isActive={activeStates[idx]}
        />
      ))}
    </DotWrapper>
  );
};

const DotButton = styled.p`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background: ${(props) => (props.isActive ? "#333335" : "#bababe")};
  margin-right: 12px;

  &:last-child {
    margin-right: 0;
  }
`;

const DotWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  width: fit-content;
  height: fit-content;
  max-height: 8px;
  align-items: center;
  margin-bottom: 64px;
`;

export default Dots;
