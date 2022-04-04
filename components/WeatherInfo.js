import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../utils";

const { primaryColor, secondaryColor } = colors;

export default function WeatherInfo({ currentWeather }) {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;

  const tempRounded = Math.round(temp)
  const { icon, main, description } = details;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={styles.WeatherInfo}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.textPrimary}>{tempRounded}°</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  WeatherInfo: {
    alignItems: "center",
  },
  weatherDescription: {
    textTransform: "capitalize",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  textPrimary: {
    fontSize: 40,
    color: primaryColor,
  },
  textSecondary: {
    fontSize: 20,
    color: secondaryColor,
    fontWeight: "500",
    marginTop: 10,
  },
});
