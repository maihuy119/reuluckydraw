

function randomName() {
    // Hiển thị tên ngẫu nhiên trên trang
    var xhr = new XMLHttpRequest();
      var jsonFilePath = 'list.json';

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var jsonData = JSON.parse(xhr.responseText);

          // Chọn tên ngẫu nhiên
          var randomIndex = Math.floor(Math.random() * jsonData.length);
          var randomName = jsonData[randomIndex].name;
          var randomDepart = jsonData[randomIndex].depart;

          // Hiển thị tên ngẫu nhiên trong phần tử có id là "displayRandomName"
          document.getElementById('name').innerText = randomName;
          document.getElementById('depart').style.color = '#000';
          document.getElementById('depart').innerText = randomDepart;
        }
      };

      xhr.open('GET', jsonFilePath, true);
      xhr.send(); 
}

function roll(){  
    var roll = setInterval(randomName, 50);
    setTimeout(function() {
        clearInterval(roll); // Dừng setInterval
      }, 5000);
}
