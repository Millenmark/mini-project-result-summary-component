fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const myDataElement = document.getElementById('data');

    data.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('data__wrapper-result__item');
      itemElement.innerHTML = `
        <img src="${item.icon}" alt="${item.name} icon"/>
        <p>${item.category}</p>
        <p>${item.score} / 100</p>
      `;
      myDataElement.appendChild(itemElement);
    });

  });
