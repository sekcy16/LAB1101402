import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import SearchBox from "../components/SearchBox";
export default function App() {
const products = [
  {
    id: 1,
    name: "Nike Sports 302",
    price: 930.80,
    image: "https://nb.scene7.com/is/image/NB/mr530sg_nb_02_i?$pdpflexf2$&wid=440&hei=440"
  },
  {
    id: 2,
    name: "Adidas Advantage",
    price: 250.00,
    image: "https://nb.scene7.com/is/image/NB/mr530sg_nb_02_i?$pdpflexf2$&wid=440&hei=440"
  },
  {
    id: 3,
    name: "Converse Chuck Taylor",
    price: 799.00,
    image: "https://nb.scene7.com/is/image/NB/mr530sg_nb_02_i?$pdpflexf2$&wid=440&hei=440"
  },
  {
    id: 4,
    name: "Puma RS-X",
    price: 1200.00,
    image: "https://nb.scene7.com/is/image/NB/mr530sg_nb_02_i?$pdpflexf2$&wid=440&hei=440"
  },
  {
    id: 5,
    name: "New Balance 530",
    price: 1450.00,
    image: "https://nb.scene7.com/is/image/NB/mr530sg_nb_02_i?$pdpflexf2$&wid=440&hei=440"
  },
  {
    id: 6,
    name: "Vans Old Skool",
    price: 999.00,
    image: "https://nb.scene7.com/is/image/NB/mr530sg_nb_02_i?$pdpflexf2$&wid=440&hei=440"
  }
];


  const handleFavorite = (productId: number, isFavorited: boolean) => {
    console.log(`Product ${productId} ${isFavorited ? 'favorited' : 'unfavorited'}`);
  };

  const handleSearch = (text: string) => {
    console.log('Searching for:', text);
  };

  const handleSearchChange = (text: string) => {
    console.log('Search text changed:', text);
  };

  return (
    <View style={styles.container}>
      {/* Header Section - Icons, Hi text, Search */}
      <View style={styles.topSection}>
        {/* แถวของ Icons */}
        <View style={styles.iconRow}>
          <Ionicons
            name="reorder-three-outline"
            size={30}
            color="#9CA3AF"
          />
          <Ionicons
            name="person-circle-outline"
            size={30}
            color="#9CA3AF"
          />
        </View>

        <View style={styles.textSection}>
          <Text style={styles.hiText}>Hi, Suranaree</Text>
          <Text style={styles.text}>Chose your favourite shoe</Text>
        </View>
        
        <SearchBox
          onChangeText={handleSearchChange}
          onSearch={handleSearch}
          style={{}} onCategoryChange={undefined} />
      </View>

      {/* Banner Section */}
      <View style={styles.bannerSection}>
        <Banner />
      </View>

      {/* Products Section with ScrollView */}
      <View style={styles.productsContainer}>
        <Text style={styles.recommendText}>Recommended for you</Text>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.bottomSection}>
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onFavoriteToggle={handleFavorite}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  // Header Section
  topSection: {
    paddingBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  textSection: {
    marginBottom: 10,
  },
  hiText: {
    fontSize: 16,
    marginBottom: 5,
  },
  text: {
    fontWeight: "600",
    fontSize: 22,
    color: "#111827",
  },
  // Banner Section
  bannerSection: {
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
  },
  // Products Container
  productsContainer: {
    flex: 1,
  },
  recommendText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#111827",
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  bottomSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
});