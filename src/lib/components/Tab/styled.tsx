import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledTab = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  position: relative;
  color: ${({ isActive }) => (isActive ? "#007bff" : "#000")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  transition: color 0.3s ease-in-out;
`;

export const StyledTabList = styled.div`
  position: relative;
  display: flex;
`;

export const TabUnderLineCss = (tabUnderLineColor?: string) => css`
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: ${tabUnderLineColor ?? "#007bff"};
  transition: width 0.3s ease, left 0.3s ease;
`;
