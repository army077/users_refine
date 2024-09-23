import React from "react";
import { Layout as AntdLayout } from "antd";
import { LayoutProps } from "@pankod/refine-core";
import { Menu } from "@pankod/refine-antd";
import logo from "../assets/asia_black.png"; // Ruta del logo de tu empresa

// Importa los iconos de Ant Design
import { UserOutlined, SettingOutlined } from "@ant-design/icons";

const { Sider, Content } = AntdLayout;

export const CustomLayout: React.FC<LayoutProps> = ({ children }) => {
    // Define los elementos del menú con iconos
    const menuItems = [
        {
            key: "1",
            icon: <UserOutlined />, // Icono de usuario
            label: "Usuarios",
        },
        {
            key: "2",
            icon: <SettingOutlined />, // Icono de configuración
            label: "Configuración",
        },
    ];

    return (
        <AntdLayout style={{ minHeight: "100vh" }}>
            <Sider collapsible theme="dark">
                <div style={{ padding: '16px', textAlign: 'center' }}>
                    <img src={logo} alt="Company Logo" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    items={menuItems}
                    theme="dark" // Usa el mismo tema para mantener la consistencia
                />
            </Sider>
            <AntdLayout>
                <Content style={{ margin: "24px 16px", padding: 24, background: "#fff" }}>
                    {children}
                </Content>
            </AntdLayout>
        </AntdLayout>
    );
};