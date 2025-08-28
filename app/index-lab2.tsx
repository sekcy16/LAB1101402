import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      {/* ส่วนบน ฟ้า (Flex 3) */}
      <View style={styles.topSection}>
        <View style={styles.row} />
        <View style={styles.row}>
         <Text style={styles.hiText}>Hi, Suranaree</Text>
         <Text style={styles.text}>Chose your favourite shoe</Text>
        </View>
        <View style={styles.row} />
        <View style={styles.row} />
      </View>

      {/* ส่วนกลาง เหลือง (Flex 2.5) */}
      <View style={styles.middleSection} />
    
      {/* ข้อความอยู่นอกกล่องเหลือง */}
      <Text style={styles.recommendText}>Recommended for you</Text>

      {/* ส่วนล่าง เหลือง (Flex 7.5) */}
      <View style={styles.bottomSection}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  // TOP (ฟ้า)
  topSection: {
    flex: 3,
    borderWidth: 1,
    borderColor: "cyan", // ให้ตรงกับ background
  },
  row: {
    backgroundColor: "cyan",
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
  },
  hiText: {
    fontSize: 14,        // ลดขนาดตัวอักษร
    fontWeight: "normal", // ตัวไม่หนา
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  // MIDDLE (เหลือง 2.5)
  middleSection: {
    flex: 2.5,
    backgroundColor: "yellow",
    borderWidth: 1,
    borderColor: "#000",
  },
  // Recommended แยกออกมา
  recommendText: {
    fontWeight: "bold",
    borderColor: "#000",
    backgroundColor: "yellow",
  },
  // BOTTOM (เหลือง 7.5)
  bottomSection: {
    flex: 7.5,
    backgroundColor: "yellow",
    borderWidth: 1,
    borderColor: "#000",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 10,
  },
});