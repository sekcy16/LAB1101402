import { router } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Banner from "../../components/Banner.jsx";
import ProductCard from "../../components/ProductCard.jsx";
import SearchBox from "../../components/SearchBox.jsx";

export default function HomeScreen() {
const products = [
  {
    id: 1,
    name: "Nike Sports 302",
    price: 930.80,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
    brand: "Nike",
    description: "Experience ultimate comfort with Nike Sports 302. Featuring advanced cushioning technology and breathable mesh upper, these sneakers are perfect for running, training, and everyday activities. The lightweight design and responsive sole provide excellent support for all-day wear."
  },
  {
    id: 2,
    name: "Adidas Advantage",
    price: 250.00,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop",
    brand: "Adidas",
    description: "Classic tennis-inspired design meets modern comfort. The Adidas Advantage features a clean white leather upper with signature three stripes. Its versatile style makes it perfect for casual wear, while the durable construction ensures long-lasting quality."
  },
  {
    id: 3,
    name: "Converse Chuck Taylor",
    price: 799.00,
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&h=800&fit=crop",
    brand: "Converse",
    description: "The iconic Chuck Taylor All Star that started it all. With its timeless high-top silhouette and canvas construction, this legendary sneaker has been a symbol of self-expression and rebellion for decades. Perfect for adding vintage flair to any outfit."
  },
  {
    id: 4,
    name: "Puma RS-X",
    price: 1200.00,
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=800&fit=crop",
    brand: "Puma",
    description: "Bold and futuristic design meets retro running heritage. The RS-X features chunky proportions, mixed materials, and vibrant colorways. With superior cushioning and unique styling, these sneakers make a statement while delivering exceptional comfort."
  },
  {
    id: 5,
    name: "New Balance 530",
    price: 1450.00,
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&h=800&fit=crop",
    brand: "New Balance",
    description: "Premium running shoe with cutting-edge technology. The 530 combines ABZORB midsole cushioning with a sleek, modern design. Engineered for performance and style, featuring breathable materials and superior arch support for the ultimate running experience."
  },
  {
    id: 6,
    name: "Vans Old Skool",
    price: 999.00,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=800&fit=crop",
    brand: "Vans",
    description: "The original skate shoe that defined street culture. Featuring the iconic side stripe and durable canvas/suede construction. With its waffle outsole and padded collar, the Old Skool offers grip, support, and timeless style for skaters and fashion enthusiasts alike."
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
      {/* Header */}
      <View style={styles.topSection}>
        <View style={styles.iconRow}>
          <Ionicons name="reorder-three-outline" size={30} color="#9CA3AF" />
          <Ionicons name="person-circle-outline" size={30} color="#9CA3AF" />
        </View>

        <View style={styles.textSection}>
          <Text style={styles.hiText}>Hi, Suranaree</Text>
          <Text style={styles.text}>Choose your favourite shoe</Text>
        </View>
        
        <SearchBox onChangeText={() => { } } onSearch={() => { } } style={{}} onCategoryChange={undefined} />
      </View>

      {/* Banner */}
      <View style={styles.bannerSection}>
        <Banner />
      </View>

      {/* Products */}
      <View style={styles.productsContainer}>
        <Text style={styles.recommendText}>Recommended for you</Text>
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <View style={styles.bottomSection}>
            {products.map(product => (
              <TouchableOpacity
                key={product.id}
                onPress={() => {
                  router.push({
                    pathname: '/ProductDetail',
                    params: { product: JSON.stringify(product) }
                  });
                }}
              >
                <ProductCard product={product} onFavoriteToggle={() => {}} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 15, paddingTop: 40 },
  topSection: { paddingBottom: 10 },
  iconRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  textSection: { marginBottom: 10 },
  hiText: { fontSize: 16, marginBottom: 5 },
  text: { fontWeight: "600", fontSize: 22, color: "#111827" },
  bannerSection: { height: 180, borderRadius: 12, overflow: 'hidden' },
  productsContainer: { flex: 1 },
  recommendText: { fontWeight: "600", fontSize: 14, color: "#111827" },
  scrollContainer: { flex: 1 },
  scrollContent: { paddingBottom: 20 },
  bottomSection: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 5 },
});