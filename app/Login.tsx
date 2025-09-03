import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  return (
    <SafeAreaView style={styles.container}>
      {/* โลโก้ */}
      <Image
        style={styles.logo}
        source={{ uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2f7d32b1787708aba49b3586082d327b' }}
      />

      {/* ฟอร์ม */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="#B9BFC7"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#B9BFC7"
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          New Here ? <Text style={styles.registerLink}>Register</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF2F5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 28,
    resizeMode: 'contain',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 46,
    backgroundColor: '#FFFFFF',
    borderRadius: 23,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E6E9ED',
    marginBottom: 14,
  },
  loginBtn: {
    width: '100%',
    height: 48,
    backgroundColor: '#97DE61',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  loginText: {
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 1,
  },
  registerText: {
    marginTop: 16,
    fontSize: 14,
    color: '#2E2E2E',
  },
  registerLink: {
    fontWeight: '700',
  },
});
