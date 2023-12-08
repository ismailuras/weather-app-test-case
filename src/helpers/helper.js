export default function translateWeatherDescription(description) {
  const translationMap = {
    "clear sky": "Açık",
    "broken clouds": "Parçalı bulutlu",
    "light rain": "Hafif yağmurlu",
    rain: "Yağmurlu",
    snow: "Karlı",
    thunderstorm: "Gök gürültülü fırtına",
    mist: "Sisli",
  };

  return translationMap[description] || description;
}
