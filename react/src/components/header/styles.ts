import styled from "styled-components";
import {Button} from "@mui/material";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;


interface StyledNavButtonProps {
  selected?: boolean;
}
export const StyledNavButton = styled.a<StyledNavButtonProps>`
  cursor: pointer;
  margin: 0 0.5rem;

  &:after {
    display: block;
    content: '';
    border-bottom: ${({selected}) => selected ? "solid 2px #326EC6" : "solid 2px #10672c" } ;
    transform: ${({selected}) => selected ? "scaleX(1)" : "scaleX(0)" };
    transition: transform 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;