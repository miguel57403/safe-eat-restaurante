import {
  AntDesignOutlined,
  LogoutOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ScienceIcon from "@mui/icons-material/Science";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { Avatar, Menu, MenuProps, Dropdown } from "antd";
import { FontsDefault } from "assets/fonts/Fonts";
import { StyleMenu } from "components/SidebarLeft/style";
import { IGlobalAttribute } from "interfaces/IGlobalAttribute";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "assets/images/logo-restaurants.svg";
import React from "react";

export const SidebarLeft: React.FC<IGlobalAttribute> = ({ ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const items: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ShopOutlined />,
      onClick: () => {
        navigate("/profile");
      },
    },
    {
      label: "Logout",
      key: "logout",
      icon: <LogoutOutlined />,
      onClick: () => {
        navigate("/login");
      },
    },
  ];

  return (
    <StyleMenu {...props}>
      <img src={logo} style={{ padding: "12px 34px" }} />
      <Menu
        onClick={(e) => navigate(`${e.key}`)}
        className="section-menu"
        selectedKeys={[location.pathname]}
        mode="vertical"
        items={sidebarItems}
      />
      <div className="footer-menu">
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Avatar
            style={{ cursor: "pointer" }}
            size={40}
            icon={<AntDesignOutlined />}
            shape="square"
          />
        </Dropdown>
        <FontsDefault.P1 color="white" fontsSize={16}>
          Galinha da vizinha
        </FontsDefault.P1>
      </div>
    </StyleMenu>
  );
};

export const sidebarItems: MenuProps["items"] = [
  {
    label: "Dashboard",
    key: "/dashboard",
    icon: <DashboardOutlinedIcon style={{ fontSize: 22 }} />,
  },
  { type: "divider" },
  { type: "divider" },
  {
    label: "Orders",
    key: "/orders",
    icon: <ReceiptIcon style={{ fontSize: 22 }} />,
  },
  { type: "divider" },
  {
    label: "Products",
    key: "/products",
    icon: <InventoryIcon style={{ fontSize: 22 }} />,
  },
  { type: "divider" },
  {
    label: "Ingredients",
    key: "/ingredients",
    icon: <ScienceIcon style={{ fontSize: 22 }} />,
  },
  { type: "divider" },
  {
    label: "Sections",
    key: "/sections",
    icon: <GridViewIcon style={{ fontSize: 22 }} />,
  },
  {
    label: "Advertisements",
    key: "/advertisements",
    icon: <CampaignOutlinedIcon style={{ fontSize: 22 }} />,
  },
];
