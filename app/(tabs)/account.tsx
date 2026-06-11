import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuth } from '@/context/AuthContext';

/* ── LOGIN FORM ── */
function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const submit = async () => {
    if (!email.trim() || !password.trim()) {
      setError('Vui lòng nhập đầy đủ thông tin.');
      return;
    }
    setBusy(true);
    setError('');
    const res = await login(email, password);
    setBusy(false);
    if (!res.ok) setError(res.error ?? 'Đăng nhập thất bại.');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={ls.scroll} keyboardShouldPersistTaps="handled">
        {/* Logo */}
        <View style={ls.logo}>
          <View style={ls.logoIcon}>
            <Feather name="flag" size={32} color="#fff" />
          </View>
          <Text style={ls.logoTitle}>Sản phẩm số VN</Text>
          <Text style={ls.logoSub}>Chuyển đổi số Việt Nam 2026</Text>
        </View>

        {/* Card */}
        <View style={ls.card}>
          <Text style={ls.cardTitle}>Đăng nhập</Text>
          <Text style={ls.cardSub}>Đăng nhập để đánh giá và nhận xét sản phẩm</Text>

          {!!error && (
            <View style={ls.errorBox}>
              <Feather name="alert-circle" size={14} color="#CC1400" />
              <Text style={ls.errorTxt}>{error}</Text>
            </View>
          )}

          {/* Email */}
          <View style={ls.fieldWrap}>
            <Text style={ls.label}>Email</Text>
            <View style={ls.inputRow}>
              <Feather name="mail" size={16} color="#AEAEB2" />
              <TextInput
                style={ls.input}
                placeholder="your@email.vn"
                placeholderTextColor="#AEAEB2"
                value={email}
                onChangeText={t => {
                  setEmail(t);
                  setError('');
                }}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
          </View>

          {/* Password */}
          <View style={ls.fieldWrap}>
            <Text style={ls.label}>Mật khẩu</Text>
            <View style={ls.inputRow}>
              <Feather name="lock" size={16} color="#AEAEB2" />
              <TextInput
                style={[ls.input, { flex: 1 }]}
                placeholder="••••••••"
                placeholderTextColor="#AEAEB2"
                value={password}
                onChangeText={t => {
                  setPassword(t);
                  setError('');
                }}
                secureTextEntry={!showPw}
                autoCorrect={false}
              />
              <Pressable onPress={() => setShowPw(v => !v)} hitSlop={10}>
                <Feather name={showPw ? 'eye-off' : 'eye'} size={16} color="#AEAEB2" />
              </Pressable>
            </View>
          </View>

          {/* Submit */}
          <Pressable
            style={({ pressed }) => [ls.btn, pressed && ls.btnPressed, busy && ls.btnBusy]}
            onPress={submit}
            disabled={busy}
          >
            {busy ? (
              <ActivityIndicator color="#fff" size="small" />
            ) : (
              <Text style={ls.btnTxt}>Đăng nhập</Text>
            )}
          </Pressable>

          {/* Demo hint */}
          <View style={ls.hint}>
            <Feather name="info" size={12} color="#AEAEB2" />
            <Text style={ls.hintTxt}>
              Demo: dùng bất kỳ email + mật khẩu <Text style={ls.hintBold}>123456</Text>
            </Text>
          </View>
        </View>

        {/* Quick demo accounts */}
        <Text style={ls.demoTitle}>Tài khoản demo</Text>
        {[
          { email: 'admin@bkhcn.gov.vn', pw: 'admin123', label: 'Quản trị viên' },
          { email: 'user@demo.vn', pw: 'demo123', label: 'Người dùng Demo' },
        ].map(a => (
          <Pressable
            key={a.email}
            style={({ pressed }) => [ls.demoRow, pressed && { opacity: 0.6 }]}
            onPress={() => {
              setEmail(a.email);
              setPassword(a.pw);
              setError('');
            }}
          >
            <View style={ls.demoIcon}>
              <Feather name="user" size={18} color="#1C1C1E" />
            </View>
            <View style={ls.demoTexts}>
              <Text style={ls.demoLabel}>{a.label}</Text>
              <Text style={ls.demoEmail}>{a.email}</Text>
            </View>
            <Feather name="chevron-right" size={16} color="#AEAEB2" />
          </Pressable>
        ))}

        <View style={{ height: 48 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

/* ── PROFILE VIEW ── */
function ProfileView() {
  const { user, logout } = useAuth();
  const [busy, setBusy] = useState(false);

  const doLogout = async () => {
    setBusy(true);
    await logout();
  };

  return (
    <ScrollView contentContainerStyle={pv.scroll} showsVerticalScrollIndicator={false}>
      {/* Avatar */}
      <View style={pv.avatarWrap}>
        <View style={pv.avatar}>
          <Text style={pv.avatarTxt}>{user!.avatar}</Text>
        </View>
        <Text style={pv.name}>{user!.name}</Text>
        <Text style={pv.role}>{user!.role}</Text>
        <Text style={pv.email}>{user!.email}</Text>
      </View>

      {/* Info */}
      <View style={pv.card}>
        {[
          { icon: 'user' as const, label: 'Tên', value: user!.name },
          { icon: 'mail' as const, label: 'Email', value: user!.email },
          { icon: 'shield' as const, label: 'Vai trò', value: user!.role },
        ].map(({ icon, label, value }, i, arr) => (
          <View key={label}>
            <View style={pv.row}>
              <Feather name={icon} size={16} color="#8E8E93" style={{ marginRight: 10 }} />
              <Text style={pv.rowL}>{label}</Text>
              <Text style={pv.rowV} numberOfLines={1}>
                {value}
              </Text>
            </View>
            {i < arr.length - 1 && <View style={pv.div} />}
          </View>
        ))}
      </View>

      {/* Activity */}
      <Text style={pv.sectionTitle}>Hoạt động</Text>
      <View style={pv.card}>
        {[
          { icon: 'star' as const, label: 'Đánh giá đã gửi', value: '3' },
          { icon: 'message-circle' as const, label: 'Bình luận', value: '7' },
          { icon: 'heart' as const, label: 'Yêu thích', value: '12' },
        ].map(({ icon, label, value }, i, arr) => (
          <View key={label}>
            <View style={pv.row}>
              <Feather name={icon} size={16} color="#8E8E93" style={{ marginRight: 10 }} />
              <Text style={pv.rowL}>{label}</Text>
              <Text style={pv.rowV}>{value}</Text>
            </View>
            {i < arr.length - 1 && <View style={pv.div} />}
          </View>
        ))}
      </View>

      {/* Logout */}
      <Pressable
        style={({ pressed }) => [pv.logoutBtn, pressed && { opacity: 0.6 }]}
        onPress={doLogout}
        disabled={busy}
      >
        {busy ? (
          <ActivityIndicator color="#CC1400" />
        ) : (
          <>
            <Feather name="log-out" size={18} color="#CC1400" />
            <Text style={pv.logoutTxt}>Đăng xuất</Text>
          </>
        )}
      </Pressable>

      <View style={{ height: 48 }} />
    </ScrollView>
  );
}

/* ── SCREEN ── */
export default function AccountScreen() {
  const { user, loading } = useAuth();

  return (
    <SafeAreaView style={ss.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" />
      <View style={ss.header}>
        <Text style={ss.title}>{user ? 'Tài khoản' : 'Đăng nhập'}</Text>
      </View>
      {loading ? (
        <View style={ss.center}>
          <ActivityIndicator size="large" color="#1C1C1E" />
        </View>
      ) : user ? (
        <ProfileView />
      ) : (
        <LoginForm />
      )}
    </SafeAreaView>
  );
}

/* ─── styles ─── */
const ss = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F5F5' },
  header: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: 4 },
  title: { fontSize: 34, fontWeight: '800', color: '#0A0A0A', letterSpacing: -0.5 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

const ls = StyleSheet.create({
  scroll: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: 48 },
  logo: { alignItems: 'center', paddingVertical: 28, gap: 8 },
  logoIcon: {
    width: 72,
    height: 72,
    borderRadius: 18,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTitle: { fontSize: 20, fontWeight: '800', color: '#0A0A0A', letterSpacing: -0.3 },
  logoSub: { fontSize: 13, color: '#8E8E93' },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    gap: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E0E0',
  },
  cardTitle: { fontSize: 22, fontWeight: '800', color: '#0A0A0A', letterSpacing: -0.3 },
  cardSub: { fontSize: 13, color: '#8E8E93', marginTop: -8 },

  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    backgroundColor: '#FFF0EF',
    padding: 10,
    borderRadius: 10,
  },
  errorTxt: { fontSize: 13, color: '#CC1400', flex: 1 },

  fieldWrap: { gap: 6 },
  label: { fontSize: 13, fontWeight: '700', color: '#6B6B6B' },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 46,
    gap: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E0E0',
  },
  input: { flex: 1, fontSize: 15, color: '#0A0A0A' },

  btn: {
    backgroundColor: '#f5bf23',
    borderRadius: 14,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  btnPressed: { opacity: 0.75 },
  btnBusy: { opacity: 0.6 },
  btnTxt: { fontSize: 16, fontWeight: '700', color: '#0A0A0A' },

  hint: { flexDirection: 'row', alignItems: 'center', gap: 6, justifyContent: 'center' },
  hintTxt: { fontSize: 12, color: '#AEAEB2' },
  hintBold: { fontWeight: '700', color: '#8E8E93' },

  demoTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#8E8E93',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 24,
    marginBottom: 10,
  },
  demoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginBottom: 8,
    gap: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E0E0',
  },
  demoIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  demoTexts: { flex: 1 },
  demoLabel: { fontSize: 15, fontWeight: '600', color: '#0A0A0A' },
  demoEmail: { fontSize: 12, color: '#8E8E93' },
});

const pv = StyleSheet.create({
  scroll: { paddingHorizontal: 24, paddingTop: 12 },
  avatarWrap: { alignItems: 'center', gap: 6, paddingVertical: 24 },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarTxt: { fontSize: 28, fontWeight: '800', color: '#fff' },
  name: { fontSize: 22, fontWeight: '800', color: '#0A0A0A', letterSpacing: -0.3 },
  role: { fontSize: 14, color: '#8E8E93' },
  email: { fontSize: 13, color: '#AEAEB2' },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0A0A0A',
    letterSpacing: -0.3,
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E0E0',
  },
  div: { height: StyleSheet.hairlineWidth, backgroundColor: '#F0F0F0', marginLeft: 16 },
  row: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 14 },
  rowL: { fontSize: 14, color: '#8E8E93', flex: 1 },
  rowV: { fontSize: 14, color: '#0A0A0A', fontWeight: '600', flex: 2, textAlign: 'right' },

  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 28,
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingVertical: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#F5C6C6',
  },
  logoutTxt: { fontSize: 16, fontWeight: '700', color: '#CC1400' },
});
