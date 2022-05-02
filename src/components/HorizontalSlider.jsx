import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MoviePoster from "./MoviePoster.jsx";

const HorizontalSlider = ({ title, movies }) => {
  return (
    <View
      style={{
        height: title ? 260 : 220,
      }}
    >
      {title && <Text style={styles.titlePopular}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster movie={item} height={200} width={140} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titlePopular: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 15,
  },
});

export default HorizontalSlider;
