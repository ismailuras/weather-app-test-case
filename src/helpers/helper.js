export default function translateWeatherDescription(description) {
  const translationMap = {
    "clear sky": "Açık",
    "broken clouds": "Parçalı bulutlu",
    "light rain": "Hafif yağmurlu",
    rain: "Yağmurlu",
    snow: "Karlı",
    thunderstorm: "Gök gürültülü fırtına",
    mist: "Sisli",
    "heavy intensity rain": "Şiddetli yağmur",
    "thunderstorm with light rain": "Hafif yağmurlu fırtına",
    "overcast clouds": "Kapalı bulutlu",
    "scattered clouds": "Parçalı bulutlu",
  };

  return translationMap[description] || description;
}

export function formatUnixDate(unixTimeStamp) {
  const date = new Date(unixTimeStamp * 1000);
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

  return date.toLocaleDateString("tr-TR", options);
}
