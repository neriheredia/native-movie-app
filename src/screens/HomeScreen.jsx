import React from "react";
import {
  ActivityIndicator,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HorizontalSlider from "../components/HorizontalSlider";
import GradientBackground from "../components/GradientBackground";
import { useMovies } from "../hooks/useMovies";
import Carousel from "react-native-snap-carousel";
import MoviePoster from "../components/MoviePoster";

const { width: windowWidth } = Dimensions.get("window");

const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator color="blue" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: top }}>
          {/* Carosel Principal */}
          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
            />
          </View>
          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
