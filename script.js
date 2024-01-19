let selectedPerson;
let excludedIds = [];

function randomName() {
  // Hiển thị tên ngẫu nhiên trên trang
  let xhr = new XMLHttpRequest();
  let jsonFilePath = 'list.json';

  fetch(jsonFilePath)
    .then(response => response.json())
    .then(data => {
      let persons = data;
      let filteredPersons = persons.filter(function (person) {
        return !excludedIds.includes(person.id);
      });

      // Chọn tên ngẫu nhiên
      let randomIndex = Math.floor(Math.random() * filteredPersons.length);
      selectedPerson = filteredPersons[randomIndex];

      console.log(selectedPerson.name);
      // Hiển thị tên ngẫu nhiên trong phần tử có id là "displayRandomName"
      document.getElementById('name').innerText = selectedPerson.name;
      document.getElementById('depart').style.color = '#000';
      document.getElementById('depart').innerText = selectedPerson.depart;
    })
    .catch(error => console.error('Error fetching data:', error));      
}

function roll() {
  document.getElementById('roll').style.visibility = 'hidden';
  document.getElementById('clear').style.display = 'none';
  let roll = setInterval(randomName, 5);
  setTimeout(function () {
    clearInterval(roll); // Dừng setInterval
    document.getElementById('roll').innerText = 'Tiếp tục';
    document.getElementById('roll').style.visibility = 'visible';
    document.getElementById('clear').style.display = 'inline-block';
  }, 5000);
}

function clearSelect() {
  if (!excludedIds.includes(selectedPerson.id)) {
    excludedIds.push(selectedPerson.id);
    document.getElementById('clear').style.display = 'none';
  }
}
