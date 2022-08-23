const tableBody = document.querySelector('.score_data');
class Data {
  constructor() {
    this.scores = [];
    this.gameId = localStorage.getItem('gameId')
      ? localStorage.getItem('gameId')
      : '';
    this.baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  }

  async setgameId() {
    if (!this.gameId) {
      const gameName = { name: 'SamlorlahGame' };
      const url = `${this.baseUrl}games`;
      await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameName),
      })
        .then((response) => response.json())
        .then((data) => {
          const gameCode = data.result.split('ID: ')[1].split(' ')[0];
          localStorage.setItem('gameId', gameCode);
        });
    }
  }

  async displayData() {
    tableBody.innerHTML = '';
    const url = `${this.baseUrl}games/${this.gameId}/scores`;
    await fetch(url, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        this.scores = data.result;
      });
    this.scores.forEach((data) => {
      tableBody.innerHTML += `
        <tr>
          <td>${data.user}</td>
          <td>${data.score}</td>
        </tr>
      `;
    });
  }
}

module.exports = Data;
