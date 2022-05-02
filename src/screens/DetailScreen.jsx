import React from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useMovieDetails } from "../hooks/useMovieDetails";
import MovieDetails from "../components/MovieDetails";
import { Feather } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
const screenHeigth = Dimensions.get("window").height;

const DetailScreen = ({ route, navigation }) => {
  const movie = route.params;
  console.log(route);
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{ uri }} style={styles.posterImage} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      <View style={styles.marginContainer}>
        {isLoading ? (
          <ActivityIndicator size={32} color="gray" style={{ marginTop: 20 }} />
        ) : (
          <MovieDetails movieFull={movieFull} cast={cast} />
        )}
      </View>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Feather name="arrow-left" size={60} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: screenWidth,
    height: screenHeigth * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: "hidden",
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  backButton: {
    position: "absolute",
    top: 30,
    left: 5,
    elevation: 9,
    zIndex: 999,
  },
});

export default DetailScreen;
