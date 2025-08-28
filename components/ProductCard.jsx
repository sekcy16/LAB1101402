import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

const ProductCard = ({ product, onFavoriteToggle, style = {} }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoritePress = () => {
    setIsFavorited(!isFavorited);
    if (onFavoriteToggle) {
      onFavoriteToggle(product?.id, !isFavorited);
    }
  };

  return (
    <View style={[styles.container, style]}>
      {/* Image Container */}
      <View style={styles.imageContainer}>
        <TouchableOpacity 
          style={styles.favoriteButton} 
          onPress={handleFavoritePress}
          activeOpacity={0.7}
        >
         <Ionicons
            name={isFavorited ? "heart" : "heart-outline"}
            size={30}
            color={isFavorited ? "#6B7280" : "#D1D5DB"}
          />
        </TouchableOpacity>
        
        <Image
          source={{ 
            uri: product?.image || "" 
          }}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      {/* Product Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>
          {product?.name || "Nike Sports 302"}
        </Text>
        <Text style={styles.productPrice}>
          ${(product?.price || 930.80).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    maxWidth: width * 0.5, // Responsive width
    margin: 8,
  },
  imageContainer: {
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    padding: 20,
    position: 'relative',
    height: 180,
    width : 150,

  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,

  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    padding: 1,

  },
  productName: {
    fontSize: 16,
    color: '#111827',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
});

export default ProductCard;