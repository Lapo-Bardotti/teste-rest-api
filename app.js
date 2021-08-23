const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const playlist = [
    {
        id: 1,
        nome: 'rock'
    },
    {
        id: 2,
        nome: 'pop'
    },
    {
        id: 3,
        nome: 'funk'
    },
    {
        id: 4,
        nome: 'blues'
    },
    {
        id: 5,
        nome: 'jazz'
    }
];

const users = [
    {
        id:1,
        nome: "Lapo",
        email: "lapobardotti42@gmail.com"
    },
    {
        id: 2,
        nome: "Jobson",
        email: "jobfilho@gmail.com"
    },
    {
        id: 3,
        nome: "Bob",
        email: "bob@gmail.com"
    },
    {
        id: 4,
        nome: "Rex",
        email: "rex@gmail.com"
    },
    {
        id: 5,
        nome: "Juca",
        email: "juca@gmail.com"
    }
];

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/playlists', (req, res) => {  // retorna as playlists
    return res.json(playlist);
});

app.post('/playlists', (req, res) => {  // insere uma playlist
    const p = req.body;
    playlist.push(p);
    return res.json(p);
});

app.put('/playlists/:index', (req, res) => {    // altera uma playlist existente
    const { index } = req.params + 1;
    const p = req.body;
    playlist[index] = p;
    return res.json(p);
});

app.delete('/playlists/:index', (req, res) => {     //  deleta uma playlist pelo index
    const { index } = req.params + 1;
    playlist.splice(index, 1);
    return res.send();
});


app.get('/playlists/nome/:nome', (req, res) => {    //  pesquisar playlist por nome
    const { nome } = req.params;
    for(i = playlist.length - 1; i >= 0; i--) {
        if(playlist[i].nome == nome) {
            return res.json(playlist[i]);
        }
    }
});

app.get('/playlists/id/:index', (req, res) => {    // pesquisa playlist pelo id
    const { index } = req.params;
    const p = playlist[index - 1];
    return res.json(p);
});

app.get('/users', (req, res) => {   //  lista os usuários
    return res.json(users);
});

app.post('/users', (req, res) => {  //  inserir novo usuário
    const p = req.body;
    users.push(p);
    return res.json(p);
});

app.put('/users/:index', (req, res) => {    //  atualizar usuário
    const { index } = req.params + 1;
    const p = req.body;
    users[index] = p;
    return res.json(p);
});

app.get('/users/id/:index', (req, res) => {    // pesquisa user pelo id
    const { index } = req.params;
    const p = users[index - 1];
    return res.json(p);
});

app.get('/users/email/:email', (req, res) => {    //  pesquisar playlist por nome
    const { email } = req.params;
    for(i = users.length - 1; i >= 0; i--) {
        if(users[i].email == email) {
            return res.json(users[i]);
        }
    }
});