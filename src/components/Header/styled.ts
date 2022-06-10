import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
    active: string;
    to: string;
}

export const MenuLink = styled(Link)<Props>`
    display: block;
    padding: 0 55px;
    text-decoration: none;
    color: ${(props) => props.to === props.active? "#FFC107": "#FFF" };
    font-family: Montserrat;
    font-size: 20px;
    line-height: 24.38px;
    font-weight: bold;
    text-align: center;
    transition: all 0.3s ease-in-out;
`