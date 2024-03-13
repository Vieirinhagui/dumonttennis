import styled from "styled-components";
import InputMenu from "./inputMenu.jsx";
import InputSubMenu from "./inputSubMenu.jsx";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const MenuBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  z-index: 10;
`;

const MenuMobileBase = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: start;
  flex-direction: column;
  background-color: #ffcc2b;
  padding-top: 10rem;
  z-index: 10;
`;

const Buttons = styled(NavLink)`
  font-size: 20px;
  font-weight: 400;
  font-family: inherit;
  padding: 0.3rem;
  cursor: pointer;
  width: 100%;
  text-align: start;
  padding-left: 25%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover {
    background-color: white;
    font-weight: bold;
  }
`;
const menuItems = [
  { label: "Home", route: "/" },
  { label: "Unidades", route: "/unidades" },
  { label: "Modalidades", route: "#" },
  // { label: "Contato", route: "/contato" },
  { label: "Escola", route: "/escola" },
];

const menuSubItemsModalidades = [
  { label: "Treinamento", route: "/treinamento" },
  { label: "Dumont Kids", route: "/dumontkids" },
  { label: "Aulas em Grupo", route: "/aulasemgrupo" },
  { label: "Aulas Individuais", route: "/aulasindividuais" },
  { label: "Beach Tennis", route: "/beachtenis" },
];
// eslint-disable-next-line react/prop-types
function MenuMobile({ isOpen, onMenuItemClick }) {
  const [showModalidadesSubmenu, setShowModalidadesSubmenu] = useState(false);

  const variants = {
    open: { transform: "translateX(0)" },
    closed: { transform: "translateX(100%)" },
  };
  const toggleModalidadesSubmenu = () => {
    setShowModalidadesSubmenu(!showModalidadesSubmenu);
  };
  const handleMenuItemClick = () => {
    if (onMenuItemClick) {
      onMenuItemClick();
    }
  };
  return (
    <MenuBackground>
      <MenuMobileBase
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.3 }}
      >
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.label === "Modalidades" && (
              <Buttons onClick={toggleModalidadesSubmenu}>
                <svg
                  width="16px"
                  height="16px"
                  viewBox="0 0 24.00 24.00"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#000000"
                  stroke-width="1.7280000000000002"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.576"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.4508 2.75947C10.7345 2.67403 8.97514 3.06532 7.37533 3.98897C5.77628 4.91218 4.55715 6.24074 3.77282 7.76992C4.13802 8.00339 4.63846 8.35339 5.2146 8.83716C6.39095 9.82491 7.88509 11.3723 9.18554 13.6247C10.486 15.8772 11.079 17.9448 11.3462 19.4575C11.4771 20.1984 11.53 20.8068 11.5496 21.2398C13.2661 21.3252 15.0263 20.9337 16.6253 20.0104C18.2251 19.0868 19.4437 17.7588 20.2278 16.2297C19.8626 15.9962 19.3621 15.6462 18.7858 15.1623C17.6094 14.1746 16.1152 12.6272 14.8147 10.3747C13.5142 8.12228 12.9213 6.05461 12.6541 4.54197C12.5232 3.80099 12.4704 3.1925 12.4508 2.75947ZM13.965 2.96066C13.9899 3.30979 14.0386 3.7565 14.1312 4.28105C14.3731 5.65031 14.9142 7.54708 16.1137 9.62474C17.3133 11.7024 18.6854 13.1194 19.7503 14.0136C20.1583 14.3561 20.5208 14.6216 20.8107 14.8177C21.5767 12.4208 21.3675 9.72406 20.0111 7.37471C18.6547 5.02535 16.4239 3.49581 13.965 2.96066ZM10.0354 21.0387C10.0105 20.6896 9.96178 20.2429 9.86912 19.7184C9.6272 18.3492 9.08605 16.4524 7.8865 14.3747C6.68696 12.2971 5.31489 10.88 4.25003 9.9859C3.8422 9.64345 3.47976 9.378 3.18991 9.18186C2.42446 11.5776 2.63301 14.275 3.9896 16.6247C5.34617 18.9744 7.57793 20.5037 10.0354 21.0387ZM6.62533 2.68993C8.72041 1.48034 11.0555 1.05591 13.2864 1.32632C16.5261 1.71902 19.5514 3.57847 21.3101 6.62471C23.0689 9.67094 23.1666 13.2206 21.8868 16.2227C21.0055 18.2898 19.4704 20.0999 17.3753 21.3095C12.2337 24.278 5.65909 22.5164 2.69056 17.3747C-0.277974 12.2331 1.48369 5.65846 6.62533 2.68993Z"
                      fill="#000"
                    ></path>{" "}
                  </g>
                </svg>
                Modalidades
              </Buttons>
            )}
            {item.label != "Modalidades" && (
              <InputMenu
                label={item.label}
                path={item.route}
                onClick={handleMenuItemClick}
              />
            )}

            {item.label === "Modalidades" &&
              showModalidadesSubmenu &&
              menuSubItemsModalidades.map((subitem, subIndex) => (
                <InputSubMenu
                  key={subIndex}
                  path={subitem.route}
                  label={subitem.label}
                  onClick={handleMenuItemClick}
                />
              ))}
          </React.Fragment>
        ))}
      </MenuMobileBase>
    </MenuBackground>
  );
}
export default MenuMobile;
