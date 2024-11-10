import { SearchIcon } from "lucide-react-native";
import React from "react";
import { TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: 24,
          height: 28,
          borderBottomLeftRadius: 12,
          borderTopLeftRadius: 12,
          borderRightWidth: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SearchIcon color="black" size={20} />
      </View>
      <TextInput
        placeholder="Search"
        placeholderTextColor="gray"
        style={{
          borderColor: "black",
          borderWidth: 1,
          width: 256,
          height: 28,
          borderBottomRightRadius: 12,
          borderTopRightRadius: 12,
          borderLeftWidth: 0,
        }}
      />
    </View>
  );
}
