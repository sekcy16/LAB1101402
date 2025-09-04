import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../_layout';

export default function Profile() {
  const { logout } = useAuth();

  const handleSetting = () => {
    console.log('Navigate to Settings');
  };

  const handleHelp = () => {
    console.log('Navigate to Help');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: 'https://cdn.builder.io/api/v1/image/assets%2Fe12b532e063c4412a1a4def250f89020%2F14fee85df9364b029c3161b150c114a5',
            }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Suranaree University</Text>
          <Text style={styles.email}>suranaree@sut.ac.th</Text>
        </View>

        {/* Menu Section */}

          <TouchableOpacity style={styles.menuItem} onPress={handleSetting}>
            <View style={styles.menuIconWrapper}>
              <Ionicons name="settings-outline" size={24} color="#4A90E2" />
            </View>
            <Text style={styles.menuText}>Setting</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={handleHelp}>
            <View style={styles.menuIconWrapper}>
              <Ionicons name="help-circle-outline" size={24} color="#10B981" />
            </View>
            <Text style={styles.menuText}>Help</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>

        {/* Logout Button */}
        <View style={styles.logoutSection}>
          <TouchableOpacity style={styles.logoutButton} onPress={logout}>
            <Ionicons name="log-out-outline" size={24} color="#ff4757" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
  menuSection: {
    marginBottom: 30,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    paddingVertical: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  menuIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#374151',
  },
  logoutSection: {
    paddingBottom: 30,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 30,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ff4757',
    borderRadius: 12,
    backgroundColor: 'transparent',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ff4757',
    marginLeft: 10,
  },
});