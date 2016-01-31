$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "The weather in Chicago is  " + data.currently.summary + ", currently " + data.currently.temperature+" F" + ", with a real feel of " + data.currently.apparentTemperature + " F." +

    " Tomorrow will be " + data.daily.data[0].summary+ ", with a high of " + data.daily.data[0].temperatureMax+" F" + ", and a real feel of " + data.daily.data[0].apparentTemperatureMax + " F." +
    " The day after will be " + data.daily.data[1].summary+ ", with a high of " + data.daily.data[1].temperatureMax+" F" + ", and a real feel of " + data.daily.data[1].apparentTemperatureMax + " F." +
    " And the day after that will be " + data.daily.data[2].summary+ ", with a high of " + data.daily.data[2].temperatureMax+" F" + ", and a real feel of " + data.daily.data[2].apparentTemperatureMax + " F.";

    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
