import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../utils";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

const { primaryColor, secondaryColor, borderColor } = colors;

export default function WeatherDetails({ currentWeather }) {
  const {
    main: { feels_like, humidity },
  } = currentWeather;

  const feelsLikeRounded = Math.round(feels_like)

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: borderColor,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5
              name="temperature-low"
              size={25}
              color={primaryColor}
            />
            <Text style={styles.textSecondary}>Feels Like:</Text>
            <Text>{feelsLikeRounded}°</Text>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
        <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons
              name="water"
              size={30}
              color={primaryColor}
            />
            <Text style={styles.textSecondary}>Humidity:</Text>
            <Text>{humidity}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: "auto",
    margin: 25,
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: 10,
  },
  weatherDetailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 20,
  },
  textPrimary: {
  },
  textSecondary: {
      color:secondaryColor,
      fontSize:14,
      fontWeight: '600',
  }
});
