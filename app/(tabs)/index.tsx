import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppRow } from '@/components/AppRow';
import { AppTile } from '@/components/AppTile';
import { FeaturedCard } from '@/components/FeaturedCard';
import { VIcon } from '@/components/VIcon';
import {
  ALL_CATEGORIES,
  CATEGORY_CONFIG,
  FEATURED_IDS,
  PRODUCTS,
  getProductsByCategory,
  type Category,
} from '@/data/products';

const { width: SW } = Dimensions.get('window');
const CARD_W = SW - 48;
const SNAP   = CARD_W + 12;

const FEATURED = FEATURED_IDS.map(id => PRODUCTS.find(p => p.id === id)!).filter(Boolean);

const TODAY = new Date()
  .toLocaleDateString('vi-VN', { weekday: 'long', day: 'numeric', month: 'long' })
  .toUpperCase();

function SectionHeader({ title, onSeeAll }: { title: string; onSeeAll: () => void }) {
  return (
    <View style={ss.secRow}>
      <Text style={ss.secTitle}>{title}</Text>
      <Pressable onPress={onSeeAll} hitSlop={12} style={ss.seeAllBtn}>
        <Text style={ss.seeAll}>Xem tất cả</Text>
        <Feather name="chevron-right" size={14} color="#8E8E93" />
      </Pressable>
    </View>
  );
}

function TopChart({ category }: { category: Category }) {
  const items = getProductsByCategory(category).slice(0, 3);
  if (!items.length) return null;
  return (
    <View style={ss.chartCard}>
      {items.map((p, i) => (
        <AppRow
          key={p.id}
          product={p}
          divider={i < items.length - 1}
          onPress={() => router.push(`/product/${p.id}`)}
        />
      ))}
    </View>
  );
}

export default function TodayScreen() {
  const [dot, setDot] = useState(0);
  const topCats: Category[] = ['ai', 'government', 'healthcare', 'education'];

  return (
    <SafeAreaView style={ss.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={ss.header}>
          <Text style={ss.date}>{TODAY}</Text>
          <Text style={ss.title}>Hôm nay</Text>
        </View>

        {/* Featured carousel */}
        <FlatList
          horizontal
          pagingEnabled={false}
          snapToInterval={SNAP}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={FEATURED}
          keyExtractor={p => String(p.id)}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
          onScroll={(e: NativeSyntheticEvent<NativeScrollEvent>) =>
            setDot(Math.round(e.nativeEvent.contentOffset.x / SNAP))}
          scrollEventThrottle={16}
          renderItem={({ item }) => (
            <View style={{ width: CARD_W }}>
              <FeaturedCard product={item} onPress={() => router.push(`/product/${item.id}`)} />
            </View>
          )}
        />
        {/* Dots */}
        <View style={ss.dots}>
          {FEATURED.map((_, i) => (
            <View key={i} style={[ss.dot, i === dot && ss.dotOn]} />
          ))}
        </View>

        {/* Stats strip */}
        <View style={ss.statsStrip}>
          {[
            { icon: 'layers' as const, n: '600', label: 'Sản phẩm' },
            { icon: 'grid'   as const, n: '10',  label: 'Lĩnh vực' },
            { icon: 'users'  as const, n: '200+',label: 'Đơn vị'   },
          ].map(({ icon, n, label }) => (
            <View key={label} style={ss.stat}>
              <VIcon name={icon} size={18} color="#8E8E93" />
              <Text style={ss.statN}>{n}</Text>
              <Text style={ss.statL}>{label}</Text>
            </View>
          ))}
        </View>

        <View style={ss.div} />

        {/* Category grid */}
        <SectionHeader title="Lĩnh vực" onSeeAll={() => router.push('/browse')} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={ss.catScroll}>
          {ALL_CATEGORIES.map(cat => {
            const c = CATEGORY_CONFIG[cat];
            const count = getProductsByCategory(cat).length;
            return (
              <Pressable
                key={cat}
                style={ss.catCard}
                onPress={() => router.push({ pathname: '/browse', params: { category: cat } })}>
                <VIcon name={c.icon} size={28} color="#1C1C1E" />
                <Text style={ss.catName}>{c.label}</Text>
                <Text style={ss.catCount}>{count}</Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={ss.div} />

        {/* Top charts per category */}
        {topCats.map(cat => (
          <View key={cat}>
            <SectionHeader
              title={CATEGORY_CONFIG[cat].label}
              onSeeAll={() => router.push({ pathname: '/browse', params: { category: cat } })}
            />
            <TopChart category={cat} />
            <View style={ss.div} />
          </View>
        ))}

        {/* Quick browse */}
        <SectionHeader title="Tất cả sản phẩm" onSeeAll={() => router.push('/browse')} />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={PRODUCTS.slice(0, 8)}
          keyExtractor={p => String(p.id)}
          contentContainerStyle={{ paddingHorizontal: 24, gap: 12 }}
          renderItem={({ item }) => (
            <AppTile product={item} onPress={() => router.push(`/product/${item.id}`)} />
          )}
        />

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const ss = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F5F5' },

  header: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: 16 },
  date: { fontSize: 11, fontWeight: '700', color: '#AEAEB2', letterSpacing: 0.8, marginBottom: 2 },
  title: { fontSize: 34, fontWeight: '800', color: '#0A0A0A', letterSpacing: -0.5 },

  dots: { flexDirection: 'row', justifyContent: 'center', marginTop: 14, gap: 5 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#D0D0D0' },
  dotOn: { backgroundColor: '#f5bf23', width: 20 },

  statsStrip: {
    flexDirection: 'row', marginHorizontal: 24, marginTop: 20,
    backgroundColor: '#fff', borderRadius: 16, paddingVertical: 16,
    borderWidth: StyleSheet.hairlineWidth, borderColor: '#E0E0E0',
  },
  stat: { flex: 1, alignItems: 'center', gap: 4 },
  statN: { fontSize: 20, fontWeight: '800', color: '#0A0A0A' },
  statL: { fontSize: 11, color: '#8E8E93' },

  div: { height: StyleSheet.hairlineWidth, backgroundColor: '#E5E5EA', marginHorizontal: 24, marginVertical: 24 },

  secRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, marginBottom: 14 },
  secTitle: { fontSize: 20, fontWeight: '800', color: '#0A0A0A', letterSpacing: -0.3 },
  seeAllBtn: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  seeAll: { fontSize: 14, color: '#8E8E93', fontWeight: '500' },

  catScroll: { paddingHorizontal: 24, gap: 10 },
  catCard: {
    width: 110, backgroundColor: '#fff', borderRadius: 16, padding: 14, gap: 6, alignItems: 'flex-start',
    borderWidth: StyleSheet.hairlineWidth, borderColor: '#E0E0E0',
  },
  catName: { fontSize: 12, fontWeight: '700', color: '#1C1C1E' },
  catCount: { fontSize: 11, color: '#8E8E93' },

  chartCard: {
    marginHorizontal: 24, backgroundColor: '#fff', borderRadius: 16, overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth, borderColor: '#E0E0E0',
  },
});
