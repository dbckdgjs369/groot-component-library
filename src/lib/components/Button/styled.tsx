import styled from "@emotion/styled";

export const StyledButton = styled.button`
  width: 100px;
  height: 42px;
  padding: 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  :not(:disabled):hover {
    filter: brightness(0.8);
  }
  :disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;
