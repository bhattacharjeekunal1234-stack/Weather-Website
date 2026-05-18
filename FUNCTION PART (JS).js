// ============================================================
  // Weather Icon Cards — Click to search that weather type
  // ============================================================

  var iconCards = document.querySelectorAll(".icon-card");

  var iconCities = {
    "Sunny":         "Dubai",
    "Partly Cloudy": "London",
    "Cloudy":        "Manchester",
    "Rainy":         "Mumbai",
    "Stormy":        "Chennai",
    "Snowy":         "Shimla"
  };

  iconCards.forEach(function (card) {

    // Make it look clickable
    card.style.cursor = "pointer";
    card.style.transition = "transform 0.2s";

    // Hover effect
    card.addEventListener("mouseenter", function () {
      card.style.transform = "scale(1.1)";
    });

    card.addEventListener("mouseleave", function () {
      card.style.transform = "scale(1)";
    });

    // Click — auto search a city famous for that weather
    card.addEventListener("click", function () {

      var label = card.querySelector("p").textContent;
      var city  = iconCities[label];

      if (city) {
        cityInput.value = city;   // put city name in search box
        getWeather();             // run the search automatically
        cityInput.scrollIntoView({ behavior: "smooth" }); // scroll to result
      }

    });

  });