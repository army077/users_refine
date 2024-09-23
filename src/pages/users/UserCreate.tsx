import React from "react";
import { Create, Form, Input, useForm } from "@pankod/refine-antd";
import { Breadcrumb } from "antd";

export const UserCreate: React.FC = () => {
    const { formProps, saveButtonProps } = useForm();

    // Personaliza el breadcrumb usando `items` en lugar de `Breadcrumb.Item`
    const breadcrumbItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Usuarios",
            href: "/usuarios",
        },
        {
            title: "Crear",
        },
    ];

    return (
        <Create saveButtonProps={saveButtonProps} breadcrumb={<Breadcrumb items={breadcrumbItems} />}>
            <Form {...formProps} layout="vertical">
                <Form.Item label="Nombre" name="nombre" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Correo" name="correo" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Status" name="status" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Form>
        </Create>
    );
};