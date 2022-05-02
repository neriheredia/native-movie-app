import React from "react";
import { View, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import currencyFormatter from "currency-formatter";
import CastItem from "../components/CastItem.jsx";

const MovieDetails = ({ movieFull, cast }) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="star-outline" size={16} color="gray" />
          <Text>{movieFull.vote_average}</Text>
          <Text style={{ marginLeft: 5 }}>
            -{movieFull.genres.map((genre) => genre.name).join(", ")}
          </Text>
        </View>
        {/* Historia */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold" }}>
          Historia
        </Text>
        <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>
        {/* Presupuesto */}
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: "bold" }}>
          Presupuesto
        </Text>
        <Text style={{ fontSize: 18 }}>
          {currencyFormatter.format(movieFull.budget, { code: "USD" })}
        </Text>
      </View>
      <View style={{ marginTop: 10, marginBottom: 100 }}>
        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: "bold",
            marginHorizontal: 20,
          }}
        >
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10, height: 70 }}
        />
      </View>
    </>
  );
};

export default MovieDetails;
