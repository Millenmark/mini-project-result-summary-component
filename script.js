let average = document.getElementById('average')


fetch('data.json')
  .then(response => response.json())
  .then(data => {
    let totalScore = 0;
    const myDataElement = document.getElementById('data');
    let length = data.length;
    data.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('data__wrapper-result__item');
      itemElement.innerHTML = `
        <div>
          <img src="${item.icon}" alt="${item.name} icon"/>
          <p>${item.category}</p>
        </div>
        <p><span>${item.score}</span> / 100</p>
      `;
      myDataElement.appendChild(itemElement);
      totalScore += item.score;
      average.innerText = getAverage(totalScore, length);
    });
  });

  function getAverage(total, dividend) {
    return Math.floor(total / dividend)
  }