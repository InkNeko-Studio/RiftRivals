"use client"

import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    function onLogin() {
        
    }

    return (
        <center style={{ marginTop: "20%", transform: "translate(0px, -50%)" }}>
            <TextField label="Username" variant="filled" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <br />
            <TextField label="Password" type="password" variant="filled" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />
            <Button color="success" variant="contained" onClick={onLogin}>Login</Button>
        </center>
    );
}