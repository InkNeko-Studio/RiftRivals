import { Box, Button, Divider, TextField } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React from "react";

type RouteCharactersState = {
    rows: any[],
    characterName: string,
};

export default class RouteCharacters extends React.Component {
    state: RouteCharactersState = {
        rows: [],
        characterName: "",
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
            field: 'name',
            headerName: 'Name',
            width: 180,
            editable: true,
        },
        {
            field: 'charismaMin',
            headerName: 'Charisma Min',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'charismaMax',
            headerName: 'Charisma Max',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'energyMin',
            headerName: 'Energy Min',
            type: 'number',
            width: 90,
            editable: true,
        },
        {
            field: 'energyMax',
            headerName: 'Energy Max',
            type: 'number',
            width: 90,
            editable: true,
        },
        {
            field: 'leadershipMin',
            headerName: 'Leadership Min',
            type: 'number',
            width: 120,
            editable: true,
        },
        {
            field: 'leadershipMax',
            headerName: 'Leadership Max',
            type: 'number',
            width: 120,
            editable: true,
        },
        {
            field: 'skillMin',
            headerName: 'Skill Min',
            type: 'number',
            width: 70,
            editable: true,
        },
        {
            field: 'skillMax',
            headerName: 'Skill Max',
            type: 'number',
            width: 70,
            editable: true,
        },
    ];


    fetchUsers() {
        fetch("http://" + location.hostname + ":3000/admin/characters", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => response.json())
            .then(data => {
                let newRows: any[] = [];
                data.forEach((d: any) => {
                    let row: any = {};
                    row.id = d.id;
                    row.name = d.name;
                    row.charismaMin = d.charismaMin;
                    row.charismaMax = d.charismaMax;
                    row.energyMin = d.energyMin;
                    row.energyMax = d.energyMax;
                    row.leadershipMin = d.leadershipMin;
                    row.leadershipMax = d.leadershipMax;
                    row.skillMin = d.skillMin;
                    row.skillMax = d.skillMax;
                    newRows.push(row);
                })
                this.setState(() => ({
                    rows: newRows
                }));
            })
            .catch(() => {
                window.location.href = "/login";
            });
    }

    render() {
        return (
            <>
                <Box sx={{ height: 400, width: '100%' }}>

                    <TextField
                    label="Character Name"
                    value={this.state.characterName}
                    onChange={(e) => this.setState(() => ({
                        characterName: e.target.value
                    }))} />

                    <Button style={{marginTop: 9, marginLeft: 10}} color="success" variant="contained">Create Character</Button>

                    <Divider style={{marginTop: 10, marginBottom: 10}}/>
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
                        disableRowSelectionOnClick
                        // processRowUpdate={async (updatedRow, originalRow) => {
                        //     await fetch("http://localhost:3000/admin/users", {
                        //         mode: "cors",
                        //         method: "POST",
                        //         headers: {
                        //             "Authorization": "Bearer " + localStorage.getItem("token"),
                        //             "Content-type": "application/json"
                        //         },
                        //         body: JSON.stringify(updatedRow),
                        //     });
                        //     return updatedRow;
                        // }}
                        // onProcessRowUpdateError={() => { }}
                    />
                </Box>
            </>
        );
    }
}
