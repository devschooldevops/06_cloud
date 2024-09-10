const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');

let teams = [];
let scoreboard = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/scoreboard', (req, res) => {
    res.sendFile(__dirname + '/scoreboard.html');
});

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.emit('teamsUpdated', teams);
    socket.emit('scoreboardUpdated', scoreboard);

    socket.on('updateTeams', (updatedTeams) => {
        teams = updatedTeams;
        updateScoreboard();
        io.emit('teamsUpdated', teams);
        io.emit('scoreboardUpdated', scoreboard);
        // Save teams and scoreboard to files for persistence
        fs.writeFileSync('teams.json', JSON.stringify(teams));
        fs.writeFileSync('scoreboard.json', JSON.stringify(scoreboard));
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

function updateScoreboard() {
    teams.forEach(team => {
        if (team.tasks.every(task => task === 'done') && !scoreboard.some(entry => entry.name === team.name)) {
            scoreboard.push({
                name: team.name,
                completionTime: new Date().toISOString(),
                ip: team.ip,
                url: team.url
            });
        }
    });
    scoreboard.sort((a, b) => new Date(a.completionTime) - new Date(b.completionTime));
}

// Load teams and scoreboard from files on server start
try {
    const teamsData = fs.readFileSync('teams.json', 'utf8');
    teams = JSON.parse(teamsData);
    const scoreboardData = fs.readFileSync('scoreboard.json', 'utf8');
    scoreboard = JSON.parse(scoreboardData);
} catch (err) {
    console.log('No existing data found');
}

const port = 3000;
http.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});