import React from "react";
import { Refine } from "@pankod/refine-core";
import { notificationProvider, Layout, ReadyPage, ErrorComponent } from "@pankod/refine-antd";
import "antd/dist/reset.css"; // En versiones más recientes
import { dataProvider } from "./dataProvider";
import { UserList } from "./pages/users/UserList";
import { UserCreate } from "./pages/users/UserCreate";
import { UserEdit } from "./pages/users/UserEdit";
import routerProvider from "@pankod/refine-react-router-v6"
import { CustomLayout } from "./components/CustomLayout"; // Importa tu layout personalizado

const App: React.FC = () => {
    return (
        <Refine
            dataProvider={dataProvider}
            notificationProvider={notificationProvider}
            Layout={CustomLayout} // Usa tu Layout personalizado aquí
            ReadyPage={ReadyPage}
            catchAll={<ErrorComponent />}
            resources={[
                {
                    name: "usuarios",
                    list: UserList,
                    create: UserCreate,
                    edit: UserEdit,
                },
            ]}
            routerProvider={routerProvider}
        />
    );
};

export default App;