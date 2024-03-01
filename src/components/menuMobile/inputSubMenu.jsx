import styled from "styled-components";
import { NavLink } from "react-router-dom";

const OptionMenu = styled(NavLink)`
  font-size: 20px;
  font-weight: 400;
  font-family: inherit;
  padding: 0.3rem;
  cursor: pointer;
  width: 100%;
  text-align: start;
  padding-left: 40%;
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: #d9d9d9;
    font-weight: bold;
  }

  .active {
    background-color: #cccccc;
    color: white;
    font-weight: 600;
  }
`;

function InputSubMenu({ path, label, onClick }) {
  return (
    <OptionMenu to={path} onClick={onClick}>
      {label}
    </OptionMenu>
  );
}

export default InputSubMenu;
