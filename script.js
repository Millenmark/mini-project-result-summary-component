fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const myDataElement = document.getElementById('myData');

    data.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.innerHTML = `
        <p>Name: ${item.category}</p>
        <p>Age: ${item.score}</p>
        <p>City: ${item.icon}</p>
      `;
      myDataElement.appendChild(itemElement);
    });

  });
