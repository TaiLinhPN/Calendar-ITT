import styled from "styled-components";

export const StyledUserState = styled.div`
  &&& {
    width: 35px;
    z-index: 2;
    position: relative;

    img {
      width: 35px;
      height: 35px;
      object-fit: cover;
      object-position: 100% 0;
      border-radius: 100%;
    }

    .status {
      background-color: red;
      width: 7px;
      height: 7px;
      border-radius: 100%;
      position: absolute;
      right: 3px;
      bottom: 3px;
    }
  }
`;
