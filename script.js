fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const myDataElement = document.getElementById('data');

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
    });

  });
