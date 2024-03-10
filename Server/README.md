# Routes

### POST /auth/login
Body: {
    username
    password
}

Response: {
    accessToken
}

### POST /auth/register
Body: {
    username
    email
    password
}

### GET /profile
Response: {
    id
    displayName
}

### GET /profile/{username}
Response: {
    id
    displayName
}

### POST /profile
Body {
    displayName
}

Response: {
    id
    displayName
}