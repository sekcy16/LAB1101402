import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const SearchBox = ({ 
  placeholder = "Search shoe...",
  onChangeText,
  onSearch,
  onCategoryChange,
  style 
}) => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'nike', label: 'Nike' },
    { id: 'adidas', label: 'Adidas' },
    { id: 'puma', label: 'Puma' },
    { id: 'jordan', label: 'Jordan' },
    { id: 'converse', label: 'Converse' },
  ];

  const handleTextChange = (text) => {
    setSearchText(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchText);
    }
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category.label);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <View style={[styles.wrapper, style]}>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={handleSearch} style={styles.iconContainer}>
          <Ionicons 
            name="search" 
            size={20} 
            color="#9CA3AF" 
          />
        </TouchableOpacity>
        
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={searchText}
          onChangeText={handleTextChange}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
      </View>

      {/* Category Buttons */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}
        contentContainerStyle={styles.categoryContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.label && styles.selectedCategoryButton
            ]}
            onPress={() => handleCategoryPress(category)}
          >
            <Text style={[
              styles.categoryText,
              selectedCategory === category.label && styles.selectedCategoryText
            ]}>
              {category.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  iconContainer: {
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#111827',
    paddingVertical: 4,
  },
  categoryContainer: {
    maxHeight: 50,
  },
  categoryContent: {
    paddingHorizontal: 4,
  },
  categoryButton: {
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#000000ff',
  },
  selectedCategoryButton: {
    backgroundColor: '#1F2937',
    borderColor: '#1F2937',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  selectedCategoryText: {
    color: '#FFFFFF',
  },
});

export default SearchBox;