import styled from "styled-components";

const StoryWrapper = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  transform: translateX(${(props) => props.transform}%);
  transition-duration: 0.25s;

  @media (max-width: 375px) {
    transform: translateX(
      ${(props) => props.transform * Math.ceil(props.maxW / props.minW)}%
    );
  }
`;

export default StoryWrapper;
