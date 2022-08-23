import './style.css';
import Data from './scoreData.js';

const submitBtn = document.querySelector('.submit_btn');
const refreshBtn = document.querySelector('.refresh_btn');

const data = new Data();
data.setgameId();
data.displayData();

submitBtn.addEventListener('click', async () => {
  const user = document.getElementById('name_field');
  const score = document.getElementById('score_field');
  const formData = {
    user: user.value,
    score: score.value,
  };

  const url = `${data.baseUrl}games/${data.gameId}/scores`;

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      data.scores = data.result;
    });

  user.value = '';
  score.value = '';
});

refreshBtn.addEventListener('click', () => {
  data.displayData();
});
