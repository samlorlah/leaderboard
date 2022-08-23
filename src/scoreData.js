const tableBody = document.querySelector('.score_data');

const scoreData = [
  {
    name: 'Name',
    score: 72,
  },
  {
    name: 'Name',
    score: 71,
  },
  {
    name: 'Name',
    score: 72,
  },
  {
    name: 'Name',
    score: 70,
  },
];

class Data {
  constructor() {
    this.scores = scoreData;
  }

  displayData() {
    tableBody.innerHTML = '';
    this.scores.forEach((data) => {
      tableBody.innerHTML += `
        <tr>
          <td>${data.name}</td>
          <td>${data.score}</td>
        </tr>
      `;
    });
  }
}

module.exports = Data;
