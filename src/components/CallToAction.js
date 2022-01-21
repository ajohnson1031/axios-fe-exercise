import styled from "styled-components";

const CallToAction = styled.a.attrs({ target: "_blank" })`
  width: 187px;
  height: 40px;
  background: #2257da;
  border-radius: 6px;
  border: none;
  color: white;
  font-size: 18px;
  font-family: sans-serif;
  text-decoration: none;
  line-height: 40px;
  text-align: center;

  @media (max-width: 375px) {
    display: ${(props) => (props.isBottom ? "inline-flex" : "none")};
    justify-content: center;
    width: calc(100% - 20px);
    margin-bottom: 40px;
  }
`;

export default CallToAction;
