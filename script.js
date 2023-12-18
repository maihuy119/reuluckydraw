var selectedPerson;
var excludedIds = [];

function randomName() {
  // Hiển thị tên ngẫu nhiên trên trang
  var xhr = new XMLHttpRequest();
  var jsonFilePath = 'list.json';

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var jsonData = JSON.parse(xhr.responseText);
      var persons = jsonData;

      var filteredPersons = persons.filter(function (person) {
        return !excludedIds.includes(person.id);
      });

      // Chọn tên ngẫu nhiên
      var randomIndex = Math.floor(Math.random() * filteredPersons.length);
      selectedPerson = filteredPersons[randomIndex];
      console.log(filteredPersons[randomIndex]);
      console.log(selectedPerson.id);

      // Hiển thị tên ngẫu nhiên trong phần tử có id là "displayRandomName"
      document.getElementById('name').innerText = selectedPerson.name;
      document.getElementById('depart').style.color = '#000';
      document.getElementById('depart').innerText = selectedPerson.depart;
    }
  };

  xhr.open('GET', jsonFilePath, true);
  xhr.send();
}

function roll() {
  document.getElementById('roll').style.visibility = 'hidden';
  document.getElementById('clear').style.display = 'none';
  var roll = setInterval(randomName, 5);
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
