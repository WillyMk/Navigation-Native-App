import { FlatList, View } from "react-native";
import CategoryGrid from "../components/CategoryGrid";
import { dataValue } from "../components/itemsList";

const Categories = ({ navigation }) => {
  const handlePress = (data) => {
    navigation.navigate("Meal-Overview", { data: data });
  };
  return (
    <View>
      <FlatList
        data={dataValue}
        renderItem={({ item }) => (
          <CategoryGrid
            title={item.title}
            color={item.color}
            description={item.description}
            image={item.image}
            handlePress={() => handlePress(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between", // Adjust the alignment of items in columns
          paddingHorizontal: 10, // Adjust horizontal spacing between columns
        }}
      />
    </View>
  );
};
export default Categories;
