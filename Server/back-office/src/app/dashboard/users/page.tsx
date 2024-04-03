"use client"

import PersistentDrawerLeft from "@/components/SideMenu";
import { Box } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from "axios";
import React from "react";

type RouteUsersState = {
    rows: any[]
};

export default class RouteUsers extends React.Component {
    state: RouteUsersState = {
        rows: [],
    };

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.fetchUsers();
    }

    columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'username',
            headerName: 'Username',
            width: 140,
            editable: true,
        },
        {
            field: 'displayName',
            headerName: 'Display Name',
            width: 180,
            editable: true,
        },
        {
            field: 'fans',
            headerName: 'Fans',
            type: 'number',
            width: 60,
            editable: true,
        },
        {
            field: 'coins',
            headerName: 'Coins',
            type: 'number',
            width: 70,
            editable: true,
        },
        {
            field: 'diamonds',
            headerName: 'Diamonds',
            type: 'number',
            width: 100,
            editable: true,
        },
        {
            field: 'creationDate',
            headerName: 'Creation Date',
            width: 110,
            editable: true,
        },
        {
            field: 'lastLogin',
            headerName: 'Last Login',
            width: 110,
            editable: true,
        },
    ];


    async fetchUsers() {

        try {
            const response = await axios.get('/api/users');
            console.log('Data:', response.data);

            let newRows: any[] = [];
            response.data.forEach((d: any) => {
                let row: any = {};
                row.id = d.id;
                row.username = d.username;
                row.displayName = d.profile.displayName;
                row.fans = d.wallet.fans;
                row.coins = d.wallet.coins;
                row.diamonds = d.wallet.diamonds;
                row.creationDate = d.creationDate;
                row.lastLogin = d.lastLogin;
                newRows.push(row);
            })
            this.setState(() => ({
                rows: newRows
            }));

        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Rethrow the error to handle it elsewhere if needed
        }
    }

    render() {
        return (
            <>

                <PersistentDrawerLeft />
                <div style={{
                    width: "calc(100% - 240px)",
                    marginLeft: "240px",
                }}>
                    <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={this.state.rows}
                            columns={this.columns}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                            //checkboxSelection
                            disableRowSelectionOnClick
                            processRowUpdate={async (updatedRow) => {
                                await axios.post("/api/users", updatedRow);
                                return updatedRow;
                            }}
                            onProcessRowUpdateError={() => { }}
                        />
                    </Box>

                </div>
            </>
        );
    }
}
