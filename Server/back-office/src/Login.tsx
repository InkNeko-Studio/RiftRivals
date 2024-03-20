import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function onLogin() {
        fetch("http://" + location.hostname + ":3000/admin/login", {
            mode: "cors",
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("token", data.accessToken);
                window.location.href = "/dashboard"
            });
    }

    return (
        <>
            <center style={{ marginTop: "200px" }}>
                <TextField label="Username" variant="filled" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <br />
                <TextField label="Password" type="password" variant="filled" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <br />
                <Button color="success" variant="contained" onClick={onLogin}>Login</Button>
            </center>
        </>
    );
}