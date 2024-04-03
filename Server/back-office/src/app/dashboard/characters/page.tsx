"use client"

import { Box, Divider, Grid } from "@mui/material";
import React from "react";
import axios from "axios";
import PersistentDrawerLeft from "@/components/SideMenu";
import CreateCharacterModal from "@/repository/create-character-modal";
import UpdateCharacterModal from "@/repository/update-character-modal";

type RouteCharactersState = {
    characters: any[]
};

export default class RouteCharacters extends React.Component {
    state: RouteCharactersState = {
        characters: []
    };

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.fetchCharacters();
    }

    async fetchCharacters() {
        try {
            const response = await axios.get('/api/characters');
            console.log('Data:', response.data);

            this.setState(() => ({
                characters: response.data
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

                        <CreateCharacterModal onRefresh={() => this.fetchCharacters()} />

                        <Grid container spacing={2}>
                            {this.state.characters.map((character) => (
                                <Grid item key={character.id} xs={12} sm={6} md={4} lg={3}>
                                    <UpdateCharacterModal character={character} onRefresh={() => this.fetchCharacters()} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </>
        );
    }
}
