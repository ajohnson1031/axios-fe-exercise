import styled from "styled-components";

const ArrowButton = (props) => {
  console;
  return (
    <Button
      name={props.name}
      onClick={props.onBtnPress}
      src={props.icon.src}
      w={props.icon.width}
      h={props.icon.height}
    ></Button>
  );
};

const Button = styled.button`
  width: ${(props) => `${props.w}px`};
  min-height: ${(props) => `${props.h}px`};
  border: none;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-color: transparent;
  position: absolute;
  ${(props) => props.name}: 64px;
  top: 53.7%;
  bottom: 42.64%;
  transform: translateY(-45%);

  @media (max-width: 980px) {
    display: none;
  }
`;

export default ArrowButton;
