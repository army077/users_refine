import React from "react";
import { List, Table, useTable, EditButton, DeleteButton } from "@pankod/refine-antd";

export const UserList: React.FC = () => {
    const { tableProps } = useTable();

    return (
        <List>
            <Table {...tableProps} rowKey="id">
                <Table.Column title="ID" dataIndex="id" />
                <Table.Column title="Nombre" dataIndex="nombre" />
                <Table.Column title="Correo" dataIndex="correo" />
                <Table.Column title="Status" dataIndex="status" />
                <Table.Column
                    title="Acciones"
                    render={(_, record) => (
                        <>
                            <EditButton recordItemId={record.id} />
                            <DeleteButton recordItemId={record.id} />
                        </>
                    )}
                />
            </Table>
        </List>
    );
};