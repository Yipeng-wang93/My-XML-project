const cities = [
    "Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton", 
    "London", "Markham", "Vaughan", "Kitchener", "Windsor", 
    "Guelph", "Kingston", "Waterloo", "Peterborough", "Oshawa"
  ];
  
  window.onload = function() {
    const locationSelect = document.getElementById("location");
    const destinationSelect = document.getElementById("destination");
  
    cities.forEach(city => {
      let option1 = new Option(city, city.toLowerCase());
      let option2 = new Option(city, city.toLowerCase());
      locationSelect.appendChild(option1);
      destinationSelect.appendChild(option2);
    });
  }
  
  function submitBooking() {
    const transportMode = document.getElementById("transportMode").value;
    const location = document.getElementById("location").value;
    const destination = document.getElementById("destination").value;
    const schedule = document.getElementById("schedule").value;
    const paymentMethod = document.getElementById("paymentMethod").value;
  
    const bookingDetails = {
      transportationMode: transportMode,
      departureLocation: location,
      destinationLocation: destination,
      schedule: schedule,
      paymentMethod: paymentMethod,
      bookingDate: new Date().toLocaleString()
    };
  
    displaySummary(bookingDetails);
    fetchWeather(location);
    fetchTraffic(location);
  }
  
  function displaySummary(details) {
    const summary = `
      <p><strong>Transportation Mode:</strong> ${details.transportationMode}</p>
      <p><strong>Departure:</strong> ${details.departureLocation}</p>
      <p><strong>Destination:</strong> ${details.destinationLocation}</p>
      <p><strong>Schedule:</strong> ${details.schedule}</p>
      <p><strong>Payment Method:</strong> ${details.paymentMethod}</p>
      <p><strong>Booking Date:</strong> ${details.bookingDate}</p>
    `;
    document.getElementById("summaryContainer").innerHTML = summary;
  }
  
  function fetchWeather(location) {
    document.getElementById("weatherContainer").innerText = `Weather for ${location}: (API placeholder)`;
  }
  
  function fetchTraffic(location) {
    document.getElementById("trafficContainer").innerText = `Traffic for ${location}: (API placeholder)`;
  }
  
  function printSummary() {
    window.print();
  }
  
  function emailSummary() {
    const summary = document.getElementById("summaryContainer").innerText;
    window.location.href = `mailto:?subject=Ontario%20Transportation%20Booking&body=${encodeURIComponent(summary)}`;
  }