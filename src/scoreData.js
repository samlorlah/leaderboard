const tableBody = document.querySelector('.score_data');
class Data {
  constructor() {
    this.scores = [];
    this.gameId = 'nllsFxXRaSMyHqrZt0w1';
    this.baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
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
