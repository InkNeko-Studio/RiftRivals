import React, { useEffect, useState } from 'react';
import { Button, Modal, Box, Typography, Card, CardContent, TextField } from '@mui/material';
import { Close, Delete, Edit, Update } from '@mui/icons-material';
import axios from 'axios';

export default function UpdateCharacterModal({ character, onRefresh }: any) {
	const [open, setOpen] = useState(false);

	const [characterName, setCharacterName] = useState("");
	const [characterDescription, setCharacterDescription] = useState("");

	useEffect(() => {
		setCharacterName(character.name);
		setCharacterDescription(character.description);
	}, []);

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

	const card = (
		<Card>
			<CardContent>
				<Typography variant="h5" component="h2">
					{character.name}
				</Typography>
				<Typography color="textSecondary">
					{character.description}
				</Typography>
				<Button
					style={{ marginTop: '3%', marginLeft: '3%' }}
					variant='contained'
					color='primary'
					onClick={handleOpen}
				>
					<Edit/>
				</Button>
				<Button
					style={{ marginTop: '3%', marginLeft: '3%' }}
					variant='contained'
					color='error'
					onClick={async () => {
						await axios.delete('/api/characters', {
							params: {
								id: character.id
							}
						});
						onRefresh();
					}}
				>
					<Delete/>
				</Button>
			</CardContent>
		</Card>
	);

	const modal = (
		<Box sx={style}>
			<Button style={{ position: 'absolute', right: '0%', top: '0%', aspectRatio: 1.5 }} onClick={handleClose}>
				<Close />
			</Button>
			<TextField id="outlined-basic" label="Id" variant="outlined" disabled value={"#" + character.id} />
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
					await axios.patch('/api/characters', { id: character.id, name: characterName, description: characterDescription });
					onRefresh();
				}}
			>
				Save
			</Button>
		</Box>
	);

	return (
		<>
			{card}
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