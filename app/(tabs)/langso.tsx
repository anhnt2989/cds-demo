import { Feather } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Linking,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { CONTACT, LOGO_TITLE_URL, LOGO_URL, LS, PILLARS, SOLUTIONS } from '@/data/langso';

const { width: SW } = Dimensions.get('window');
const CARD_W        = SW - 64;  // 32px margin each side
const CARD_GAP      = 12;
const SNAP          = CARD_W + CARD_GAP;

/* ── Carousel card ── */
function SolutionCard({ item }: { item: typeof SOLUTIONS[0] }) {
  return (
    <View style={card.wrap}>
      {/* full-bleed image */}
      <Image
        source={{ uri: item.image }}
        style={StyleSheet.absoluteFill}
        contentFit="cover"
        transition={300}
      />

      {/* gradient overlay + text at bottom */}
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.18)', 'rgba(0,0,0,0.72)', 'rgba(0,0,0,0.88)']}
        locations={[0, 0.35, 0.72, 1]}
        style={card.overlay}>
        <Text style={card.sub}>{item.subtitle}</Text>
        <Text style={card.title}>{item.title}</Text>
        <Text style={card.desc} numberOfLines={2}>{item.desc}</Text>
        <View style={card.detailBtn}>
          <Text style={card.detailTxt}>Chi tiết</Text>
          <Feather name="arrow-right" size={13} color={LS.green} />
        </View>
      </LinearGradient>
    </View>
  );
}

export default function LangSoScreen() {
  const [dot, setDot] = useState(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const idx = Math.round(e.nativeEvent.contentOffset.x / SNAP);
    setDot(Math.max(0, Math.min(idx, SOLUTIONS.length - 1)));
  };

  return (
    <SafeAreaView style={ss.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={ss.scroll}>

        {/* ── HEADER / LOGO ── */}
        <View style={ss.header}>
          <Image
            source={{ uri: LOGO_TITLE_URL }}
            style={ss.logoTitle}
            contentFit="contain"
          />
        </View>

        {/* ── HERO BANNER ── */}
        <View style={ss.hero}>
          <View style={ss.heroBadge}>
            <Feather name="globe" size={11} color="#fff" />
            <Text style={ss.heroBadgeTxt}>langso.dx.gov.vn</Text>
          </View>
          <Text style={ss.heroTitle}>Làng Số</Text>
          <Text style={ss.heroSub}>
            Ứng dụng công nghệ số để thay đổi thói quen sinh hoạt, tư duy sản xuất và phát triển kinh tế nông thôn Việt Nam.
          </Text>
          {/* stats row */}
          <View style={ss.statsRow}>
            {[
              { n: '14', label: 'Giải pháp số' },
              { n: '63', label: 'Tỉnh / Thành phố' },
              { n: '3',  label: 'Mục tiêu chính' },
            ].map(({ n, label }) => (
              <View key={label} style={ss.stat}>
                <Text style={ss.statN}>{n}</Text>
                <Text style={ss.statL}>{label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── 3 PILLAR ITEMS ── */}
        <View style={ss.pillarsWrap}>
          {PILLARS.map((p, i) => (
            <View key={i} style={ss.pillarRow}>
              <Image
                source={{ uri: p.image }}
                style={ss.pillarImg}
                contentFit="contain"
              />
              <Text style={ss.pillarTxt}>{p.text}</Text>
            </View>
          ))}
        </View>

        {/* ── CHUYỆN LÀNG SỐ ── */}
        <View style={ss.chuyen}>
          <View style={ss.secHeaderRow}>
            <View style={ss.secAccent} />
            <Text style={ss.secTitle}>Chuyện Làng Số</Text>
          </View>
          <Text style={ss.chuyenBody}>
            Chia sẻ để nhân rộng câu chuyện về cách người dân tại các địa phương khắp cả nước đang ứng dụng công nghệ để thay đổi diện mạo làng quê, tự tin làm giàu trên chính quê hương mình.
          </Text>
        </View>

        {/* ── CAROUSEL ── */}
        <View style={ss.carouselSection}>
          <View style={ss.carouselCounter}>
            <Text style={ss.secCount}>{dot + 1} / {SOLUTIONS.length}</Text>
          </View>

          <FlatList
            horizontal
            pagingEnabled={false}
            snapToInterval={SNAP}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}
            data={SOLUTIONS}
            keyExtractor={s => String(s.id)}
            contentContainerStyle={ss.carouselPad}
            ItemSeparatorComponent={() => <View style={{ width: CARD_GAP }} />}
            onScroll={onScroll}
            scrollEventThrottle={16}
            renderItem={({ item }) => (
              <View style={{ width: CARD_W }}>
                <SolutionCard item={item} />
              </View>
            )}
          />

          {/* Dot indicators */}
          <View style={ss.dots}>
            {SOLUTIONS.map((_, i) => (
              <View
                key={i}
                style={[ss.dot, i === dot && ss.dotOn]}
              />
            ))}
          </View>
        </View>

        {/* ── MISSION QUOTE ── */}
        <View style={ss.quote}>
          <View style={ss.quoteAccent} />
          <View style={ss.quoteInner}>
            <Text style={ss.quoteTxt}>
              "Người dân nông thôn là chủ thể chính của chuyển đổi số — không chỉ là đối tượng thụ hưởng."
            </Text>
            <Text style={ss.quoteFrom}>— Làng Số · Bộ Thông tin và Truyền thông</Text>
          </View>
        </View>

        {/* ── CONTACT ── */}
        <View style={ss.section}>
          <View style={ss.secHeaderRow}>
            <View style={ss.secAccent} />
            <Text style={ss.secTitle}>Liên hệ</Text>
          </View>
          <View style={ss.contactCard}>
            {[
              { icon: 'map-pin'  as const, label: 'Địa chỉ',     value: CONTACT.address },
              { icon: 'phone'    as const, label: 'Điện thoại',  value: CONTACT.phone   },
              { icon: 'mail'     as const, label: 'Email',        value: CONTACT.email   },
              { icon: 'shield'   as const, label: 'Cơ quan',      value: CONTACT.org     },
            ].map(({ icon, label, value }, i, arr) => (
              <View key={label}>
                <View style={ss.contactRow}>
                  <View style={ss.contactIconBox}>
                    <Feather name={icon} size={15} color={LS.green} />
                  </View>
                  <View style={ss.contactTexts}>
                    <Text style={ss.contactLabel}>{label}</Text>
                    <Text style={ss.contactValue}>{value}</Text>
                  </View>
                </View>
                {i < arr.length - 1 && <View style={ss.div} />}
              </View>
            ))}
          </View>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

/* ── Card styles ── */
const card = StyleSheet.create({
  wrap: {
    height: 420,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
    backgroundColor: LS.greenLt,
  },
  badge: {
    position: 'absolute', top: 14, right: 14,
    width: 36, height: 36, borderRadius: 10,
    backgroundColor: LS.green,
    alignItems: 'center', justifyContent: 'center',
  },
  badgeNum: { fontSize: 14, fontWeight: '800', color: '#fff' },
  overlay: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    padding: 20, paddingTop: 40, gap: 4,
  },
  sub: { fontSize: 10, fontWeight: '700', color: 'rgba(255,255,255,0.65)', textTransform: 'uppercase', letterSpacing: 0.6 },
  title: { fontSize: 20, fontWeight: '800', color: '#fff', letterSpacing: -0.3, lineHeight: 25 },
  desc: { fontSize: 13, color: 'rgba(255,255,255,0.75)', lineHeight: 19, marginTop: 2 },
  detailBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 5,
    alignSelf: 'flex-start', marginTop: 10,
    paddingHorizontal: 14, paddingVertical: 7,
    backgroundColor: LS.green,
    borderRadius: 20,
  },
  detailTxt: { fontSize: 13, fontWeight: '700', color: '#fff' },
});

/* ── Screen styles ── */
const ss = StyleSheet.create({
  safe: { flex: 1, backgroundColor: LS.bg },
  scroll: { paddingBottom: 0 },

  /* Header / logo */
  header: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    paddingHorizontal: 20, paddingVertical: 14,
    backgroundColor: LS.surface,
    borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: LS.border,
  },
  logoImg:   { width: 40, height: 40 },
  logoTitle: { height: 48, flex: 1 },

  /* Hero */
  hero: {
    backgroundColor: LS.green,
    paddingTop: 28, paddingBottom: 24, paddingHorizontal: 24, gap: 12,
  },
  heroBadge: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 8,
    paddingHorizontal: 10, paddingVertical: 4,
  },
  heroBadgeTxt: { fontSize: 11, fontWeight: '700', color: '#fff' },
  heroTitle: { fontSize: 40, fontWeight: '900', color: '#fff', letterSpacing: -1 },
  heroSub: { fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 21 },
  statsRow: { flexDirection: 'row', marginTop: 4, gap: 8 },
  stat: {
    flex: 1, backgroundColor: 'rgba(0,0,0,0.15)',
    borderRadius: 14, padding: 12, alignItems: 'center', gap: 3,
  },
  statN: { fontSize: 26, fontWeight: '900', color: '#fff' },
  statL: { fontSize: 10, color: 'rgba(255,255,255,0.7)', textAlign: 'center' },

  /* 3 pillars */
  pillarsWrap: {
    backgroundColor: LS.surface,
    paddingVertical: 20, paddingHorizontal: 24, gap: 18,
    borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: LS.border,
  },
  pillarRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
  pillarImg: { width: 56, height: 56, flexShrink: 0 },
  pillarTxt: { flex: 1, fontSize: 14, color: LS.black, lineHeight: 21, fontWeight: '500' },

  /* Chuyện làng số */
  chuyen: { paddingHorizontal: 24, paddingTop: 28, paddingBottom: 4 },
  chuyenBody: { fontSize: 14, color: LS.muted, lineHeight: 22, marginBottom: 4 },

  /* Carousel section */
  carouselSection: { marginTop: 16 },
  carouselCounter: { alignItems: 'flex-end', paddingHorizontal: 32, marginBottom: 10 },
  secHeaderRow: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 24, marginBottom: 16 },
  secAccent: { width: 4, height: 22, backgroundColor: LS.green, borderRadius: 2 },
  secTitle: { fontSize: 22, fontWeight: '800', color: LS.black, letterSpacing: -0.4, flex: 1 },
  secCount: { fontSize: 13, fontWeight: '600', color: LS.muted },
  carouselPad: { paddingHorizontal: 32 },
  dots: { flexDirection: 'row', justifyContent: 'center', marginTop: 16, gap: 5 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: LS.border },
  dotOn: { width: 20, backgroundColor: LS.green },

  /* Quote */
  quote: {
    flexDirection: 'row', gap: 14, alignItems: 'flex-start',
    marginHorizontal: 24, marginTop: 28,
    backgroundColor: LS.greenDk,
    borderRadius: 18, padding: 20,
  },
  quoteAccent: { width: 3, backgroundColor: '#fff', borderRadius: 2, alignSelf: 'stretch', flexShrink: 0, opacity: 0.5 },
  quoteInner: { flex: 1, gap: 8 },
  quoteTxt: { fontSize: 14, color: 'rgba(255,255,255,0.9)', lineHeight: 22, fontStyle: 'italic' },
  quoteFrom: { fontSize: 11, color: 'rgba(255,255,255,0.5)' },

  /* Section */
  section: { paddingHorizontal: 24, marginTop: 28 },

  /* Contact */
  contactCard: {
    backgroundColor: LS.surface, borderRadius: 18, overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth, borderColor: LS.border,
  },
  contactRow: { flexDirection: 'row', alignItems: 'center', padding: 14, gap: 12 },
  contactIconBox: {
    width: 36, height: 36, borderRadius: 10,
    backgroundColor: LS.greenLt, alignItems: 'center', justifyContent: 'center', flexShrink: 0,
  },
  contactTexts: { flex: 1 },
  contactLabel: { fontSize: 10, color: LS.muted, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.4 },
  contactValue: { fontSize: 14, color: LS.black, fontWeight: '500', marginTop: 2 },
  div: { height: StyleSheet.hairlineWidth, backgroundColor: LS.border, marginLeft: 62 },

  /* Website button */
  webBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10,
    marginHorizontal: 24, marginTop: 20,
    backgroundColor: LS.green, borderRadius: 16, paddingVertical: 16,
  },
  webBtnTxt: { fontSize: 16, fontWeight: '700', color: '#fff', flex: 1, textAlign: 'center' },
});
