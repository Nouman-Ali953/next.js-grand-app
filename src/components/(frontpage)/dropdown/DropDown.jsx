"use client"
import * as React from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ShoppingCartCheckout } from "@mui/icons-material";
import { AutoStories } from "@mui/icons-material";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import useScrollState from "@/utils/scroll";
import styles from './drop.module.css'
export default function MenuSimple({ title }) {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrollState();
  const pathName = usePathname();
  const router = useRouter();
  const isMainPage = pathName === "/";
  const handleListboxClick = () => {
    setIsOpen(!isOpen);
  };

  const createHandleMenuClick = (menuItem) => {
    return () => {
      router.push("/shopping");
    };
  };
  const createHandleMenu = (menuItem) => {
    return () => {
      router.push("/blogs");
    };
  };

  return (
    <Dropdown>
      <MenuButton
        onClick={handleListboxClick}
        style={{
          color: !isMainPage? "black"  : isScrolled  ? "black"  : "white",
          transition: ".6s ease",
        }}
        className={`${isScrolled?styles.drop: styles.white} ${styles.other_pages}`}
      >
        {title}
        {isOpen ? (
          <KeyboardArrowDownIcon
            style={{ transition: ".1s ease", transform: "rotate(180deg)" }}
          />
        ) : (
          <KeyboardArrowDownIcon style={{ transition: ".s ease" }} />
        )}
      </MenuButton>

      <Menu slots={{ listbox: Listbox }} style={{zIndex:'99'}}>
        <MenuItem onClick={createHandleMenuClick("Profile")}>
          <ShoppingCartCheckout style={{ fontSize: "3rem", padding: "5px" }} />
          <div>
            <h4>I want shopping</h4>
            <p>I'd like shopping for best experiance</p>
          </div>
        </MenuItem>
        <MenuItem onClick={createHandleMenu("Language settings")}>
          <AutoStories style={{ fontSize: "3rem", padding: "5px" }} />
          <div>
            <h4>I want read blogs</h4>
            <p>I'd like to read best user experiance blogs</p>
          </div>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#99CCF3",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E6",
  700: "#0059B3",
  800: "#004C99",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Listbox = styled("ul")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0 0 13rem;
  min-width: 350px;
  box-shadow: .5px .5px 1px gray;
  border-radius: 8px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.50)" : "rgba(0,0,0, 0.05)"
  };
    `
);

const MenuItem = styled(BaseMenuItem)(
  ({ theme }) => `
    list-style: none;
    padding: 16px 8px;
    border-radius: 4px;
    cursor: default;
    user-select: none;
    border:.2px solid gray;
    margin: 10px 0px;
    cursor:pointer;
    display:flex;
    align-items:center;
    gap:10px;
    min-height:3rem;
    line-height: 1.3rem;
    &:last-of-type {
    }
    &:hover {
        transition: .6s ease;
       
        background-color: ${
          theme.palette.mode === "light" ? grey[50] : grey[100]
        };
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }

  &.${menuItemClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }
  `
);

const MenuButton = styled(BaseMenuButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  display: flex;
  align-items:center;
  transition: all 150ms ease;
  cursor: pointer;
  outline:none;
  background-color: transparent;
  border:none;
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: bolder;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: white;
  z-index: 99
  `
);
