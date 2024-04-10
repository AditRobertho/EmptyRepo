function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '3beb6a647d5bb699a18a6ff5bc006e65';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

    fetch(apiUrl)
    .then(response => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Cuaca di ${data.name}</h2>
      <p>Temperature: ${data.main.temp} &#8451;</p>
      <p>Cuaca: ${data.weather[0].description}</p>`;
    })


}
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
