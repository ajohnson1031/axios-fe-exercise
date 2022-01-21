import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: auto;
  min-width: 375px;
  max-width: 1440px;
  min-height: 515px;
  max-height: 656px;
  padding: 80px 120px 0;
  background: #faf7f2;
  box-sizing: border-box;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 980px) {
    padding: 40px 0 0 20px;
  }
`;
