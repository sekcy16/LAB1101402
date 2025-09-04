import { router, useLocalSearchParams } from 'expo-router';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface RouteParams {
  product: Product;
}

export default function ProductDetail() {
  const { product: productParam } = useLocalSearchParams();

  // Parse product from params
  let product = null;
  if (productParam && typeof productParam === 'string') {
    try {
      product = JSON.parse(productParam);
    } catch (error) {
      console.error('Error parsing product:', error);
    }
  }

  // Default product ถ้าไม่มี params
  const defaultProduct = {
    id: 1,
    name: "Adidas Stan Smith",
    price: 850.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200",
    description: "This is a clean and stylish sneaker with premium leather upper and classic silhouette. Perfect for everyday wear, offering comfort and versatility."
  };

  const displayProduct = product || defaultProduct;

  return (
    <SafeAreaView style={styles.screen}>
      {/* Back Button */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Product Detail</Text>
      </View>

      <View style={styles.card}>
        <View style={{ flex: 1.5 }}>
          <Image
            style={styles.productImage}
            source={{
              uri: displayProduct.image,
            }}
            resizeMode="cover"
          />
        </View>

        <View style={{ flex: 4.5, paddingHorizontal: 16 }}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.title}>{displayProduct.name}</Text>
            <Text style={styles.price}>${displayProduct.price}</Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.sectionLabel}>AVAILABLE SIZES</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 8 }}
            >
              {['4', '5', '6', '7', '8', '8.5', '9', '9.5', '10', '11'].map(
                (s, i) => (
                  <View key={i} style={styles.sizeChip}>
                    <Text style={styles.sizeText}>{s}</Text>
                  </View>
                )
              )}
            </ScrollView>
          </View>

          <View style={{ flex: 2.5 }}>
            <Text style={styles.desc}>
              {displayProduct.description}
            </Text>
          </View>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.bottomRow}>
              <TouchableOpacity style={styles.favBtn} activeOpacity={0.8}>
                <Text style={styles.favText}>♡</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.cartBtn} activeOpacity={0.8}>
                <Text style={styles.cartText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EFF2F5',
    padding: 12,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  price: {
    marginTop: 6,
    fontSize: 18,
    fontWeight: '700',
    color: '#E45858',
  },
  sectionLabel: {
    fontSize: 12,
    color: '#7C8A99',
    marginBottom: 6,
    fontWeight: '700',
    letterSpacing: 0.4,
  },
  sizeChip: {
    minWidth: 40,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DCE3EA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  sizeText: { fontWeight: '700', color: '#333' },
  desc: {
    fontSize: 13,
    lineHeight: 19,
    color: '#4A4A4A',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  favBtn: {
    width: 52,
    height: 46,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E3E8EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  favText: { fontSize: 22, fontWeight: '600', color: '#333' },
  cartBtn: {
    flex: 1,
    height: 46,
    borderRadius: 24, // โค้งตามโจทย์
    backgroundColor: '#4CCB63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartText: { color: '#fff', fontWeight: '800', fontSize: 15 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E3E8EF',
  },
  backButton: {
    padding: 8,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});
