import { Feather } from '@expo/vector-icons';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  FlatList,
  Keyboard,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppRow } from '@/components/AppRow';
import { VIcon } from '@/components/VIcon';
import {
  ALL_CATEGORIES,
  CATEGORY_CONFIG,
  PRODUCTS,
  searchProducts,
  type Category,
} from '@/data/products';

const TRENDING = [
  'AI',
  'GreenNode',
  'Viettel',
  'Chatbot',
  'Giáo dục',
  'Bảo hiểm',
  'Smart City',
  'An ninh',
  'CMC',
  'VNPT',
  'Bảo mật',
  'ERP',
];

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState<Category | undefined>();
  const [focused, setFocused] = useState(false);
  const ref = useRef<TextInput>(null);

  const results = useMemo(() => {
    if (!query && !activeCat) return [];
    return searchProducts(query, activeCat).slice(0, 80);
  }, [query, activeCat]);

  const cancel = useCallback(() => {
    setQuery('');
    setActiveCat(undefined);
    setFocused(false);
    Keyboard.dismiss();
    ref.current?.blur();
  }, []);

  const isEmpty = !query && !activeCat;
  const noResults = !isEmpty && results.length === 0;

  return (
    <SafeAreaView style={ss.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" />

      {/* Search bar */}
      <View style={ss.searchRow}>
        <View style={ss.bar}>
          <Feather name="search" size={15} color="#AEAEB2" />
          <TextInput
            ref={ref}
            style={ss.input}
            placeholder="Tìm sản phẩm, đơn vị..."
            placeholderTextColor="#AEAEB2"
            value={query}
            onChangeText={setQuery}
            onFocus={() => setFocused(true)}
            returnKeyType="search"
            autoCorrect={false}
          />
          {!!query && (
            <Pressable onPress={() => setQuery('')} hitSlop={10}>
              <Feather name="x-circle" size={16} color="#AEAEB2" />
            </Pressable>
          )}
        </View>
        {focused && (
          <Pressable onPress={cancel}>
            <Text style={ss.cancelTxt}>Huỷ</Text>
          </Pressable>
        )}
      </View>

      {/* Category pills */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={ss.pillsScroll}
        contentContainerStyle={ss.pills}
        keyboardShouldPersistTaps="always"
      >
        {ALL_CATEGORIES.map(cat => {
          const c = CATEGORY_CONFIG[cat];
          const on = activeCat === cat;
          return (
            <Pressable
              key={cat}
              onPress={() => setActiveCat(on ? undefined : cat)}
              style={[ss.pill, on && ss.pillOn]}
            >
              <VIcon name={c.icon} size={12} color={on ? '#fff' : '#1C1C1E'} />
              <Text style={[ss.pillTxt, on && ss.pillTxtOn]}>{c.label}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {isEmpty ? (
        <ScrollView contentContainerStyle={ss.sugPad} keyboardShouldPersistTaps="always">
          <Text style={ss.sugTitle}>Tìm kiếm nhiều nhất</Text>
          <View style={ss.trendGrid}>
            {TRENDING.map(t => (
              <Pressable key={t} style={ss.trendChip} onPress={() => setQuery(t)}>
                <Text style={ss.trendTxt}>{t}</Text>
              </Pressable>
            ))}
          </View>

          <Text style={[ss.sugTitle, { marginTop: 28 }]}>Tất cả lĩnh vực</Text>
          {ALL_CATEGORIES.map(cat => {
            const c = CATEGORY_CONFIG[cat];
            const cnt = PRODUCTS.filter(p => p.cat === cat).length;
            return (
              <Pressable key={cat} style={ss.catRow} onPress={() => setActiveCat(cat)}>
                <View style={ss.catIconBox}>
                  <VIcon name={c.icon} size={22} color="#1C1C1E" />
                </View>
                <View style={ss.catTexts}>
                  <Text style={ss.catName}>{c.label}</Text>
                  <Text style={ss.catCnt}>{cnt} sản phẩm</Text>
                </View>
                <Feather name="chevron-right" size={18} color="#AEAEB2" />
              </Pressable>
            );
          })}
        </ScrollView>
      ) : noResults ? (
        <View style={ss.empty}>
          <Feather name="search" size={44} color="#D0D0D0" />
          <Text style={ss.emptyTitle}>Không có kết quả</Text>
          <Text style={ss.emptySub}>Thử từ khoá khác</Text>
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={p => String(p.id)}
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={ss.resPad}
          initialNumToRender={20}
          ListHeaderComponent={<Text style={ss.resCnt}>{results.length} kết quả</Text>}
          renderItem={({ item, index }) => (
            <AppRow
              product={item}
              divider={index < results.length - 1}
              onPress={() => {
                Keyboard.dismiss();
                router.push(`/product/${item.id}`);
              }}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
}

const ss = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F5F5' },

  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 4,
    gap: 10,
  },
  bar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBEBEB',
    borderRadius: 12,
    paddingHorizontal: 10,
    height: 38,
    gap: 7,
  },
  input: { flex: 1, fontSize: 15, color: '#0A0A0A' },
  cancelTxt: { fontSize: 15, color: '#1C1C1E', fontWeight: '500' },

  pillsScroll: { flexGrow: 0, flexShrink: 0 },
  pills: { paddingHorizontal: 16, paddingVertical: 10, gap: 8, alignItems: 'center' },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  pillOn: { backgroundColor: '#f5bf23', borderColor: '#f5bf23' },
  pillTxt: { fontSize: 12, fontWeight: '600', color: '#1C1C1E' },
  pillTxtOn: { color: '#0A0A0A' },

  sugPad: { paddingHorizontal: 24, paddingBottom: 48, paddingTop: 12 },
  sugTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0A0A0A',
    letterSpacing: -0.3,
    marginBottom: 12,
  },
  trendGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  trendChip: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  trendTxt: { fontSize: 14, color: '#1C1C1E' },

  catRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    marginBottom: 8,
    gap: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E0E0',
  },
  catIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  catTexts: { flex: 1 },
  catName: { fontSize: 15, fontWeight: '700', color: '#0A0A0A' },
  catCnt: { fontSize: 12, color: '#8E8E93' },

  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10, paddingBottom: 80 },
  emptyTitle: { fontSize: 18, fontWeight: '700', color: '#0A0A0A' },
  emptySub: { fontSize: 14, color: '#8E8E93' },

  resPad: { paddingHorizontal: 16, paddingBottom: 32 },
  resCnt: { fontSize: 12, color: '#8E8E93', fontWeight: '500', paddingVertical: 8 },
});
