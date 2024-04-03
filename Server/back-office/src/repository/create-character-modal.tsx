import React, { useEffect, useState } from 'react';
import { Button, Modal, Box, Typography, Card, CardContent, TextField, Fab } from '@mui/material';
import { Add, Close } from '@mui/icons-material';
import axios from 'axios';

export default function CreateCharacterModal({ onRefresh }: any) {
	const [open, setOpen] = useState(false);

	const [characterName, setCharacterName] = useState("");
	const [characterDescription, setCharacterDescription] = useState("");

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		boxShadow: 24,
		p: 4,
	};

	const modal = (
		<Box sx={style}>
			<Button style={{ position: 'absolute', right: '0%', top: '0%', aspectRatio: 1.5 }} onClick={handleClose}>
				<Close />
			</Button>
			<Typography variant='h5'>
				Create Character
			</Typography>
			<TextField
				style={{ marginTop: '3%', width: '100%' }}
				label="Name"
				variant="outlined"
				value={characterName}
				onChange={(e) => setCharacterName(e.target.value)}
			/>
			<TextField
				style={{ marginTop: '3%', width: '100%' }}
				label="Description"
				multiline
				variant="outlined"
				value={characterDescription}
				onChange={(e) => setCharacterDescription(e.target.value)}
			/>
			<Button
				style={{ marginTop: '3%' }}
				variant='contained'
				color='success'
				onClick={async () => {
					await axios.post('/api/characters', { name: characterName, description: characterDescription });
					onRefresh();
				}}
			>
				Create
			</Button>
		</Box>
	);

	return (
		<>
			<Fab style={{position: 'absolute', right: '2%', bottom: '4%'}} color="primary" aria-label="add" onClick={handleOpen}>
				<Add />
			</Fab>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
			>
				{modal}
			</Modal>
		</>
	);
}