import { Feather } from '@expo/vector-icons';
import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppRow } from '@/components/AppRow';
import { VIcon } from '@/components/VIcon';
import {
  ALL_CATEGORIES,
  CATEGORY_CONFIG,
  FIELD_CONFIG,
  PRODUCTS,
  getFieldsForPillar,
  type Category,
  type Field,
} from '@/data/products';

export default function BrowseScreen() {
  const params = useLocalSearchParams<{ category?: string; field?: string }>();
  const [pillar, setPillar] = useState<Category | 'all'>('all');
  const [field, setField] = useState<Field | null>(null);

  useEffect(() => {
    if (params.field) {
      const f = params.field as Field;
      setField(f);
      setPillar(FIELD_CONFIG[f].pillar);
    } else if (params.category) {
      setPillar(params.category as Category);
      setField(null);
    }
  }, [params.category, params.field]);

  function selectPillar(p: Category | 'all') {
    setPillar(p);
    setField(null);
  }

  const filtered = useMemo(() => {
    if (field) return PRODUCTS.filter(p => p.field === field);
    if (pillar === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.cat === pillar);
  }, [pillar, field]);

  const subFields = pillar === 'all' ? [] : getFieldsForPillar(pillar);

  return (
    <SafeAreaView style={ss.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" />

      <View style={ss.header}>
        <Text style={ss.title}>Khám phá</Text>
        <Text style={ss.sub}>{filtered.length} sản phẩm</Text>
      </View>

      {/* Pillar chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={ss.chips}
        style={ss.chipScroll}
      >
        {(['all', ...ALL_CATEGORIES] as const).map(cat => {
          const active = pillar === cat;
          const label = cat === 'all' ? 'Tất cả' : CATEGORY_CONFIG[cat].label;
          const icon = cat !== 'all' ? CATEGORY_CONFIG[cat].icon : null;
          return (
            <Pressable
              key={cat}
              style={[ss.chip, active && ss.chipOn]}
              onPress={() => selectPillar(cat)}
            >
              {icon && <VIcon name={icon} size={13} color={active ? '#fff' : '#1C1C1E'} />}
              <Text style={[ss.chipTxt, active && ss.chipTxtOn]}>{label}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Field chips — drill-down within the selected pillar */}
      {subFields.length > 0 && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={ss.subChips}
          style={ss.chipScroll}
        >
          {subFields.map(f => {
            const active = field === f;
            return (
              <Pressable
                key={f}
                style={[ss.subChip, active && ss.subChipOn]}
                onPress={() => setField(active ? null : f)}
              >
                <Text style={[ss.subChipTxt, active && ss.subChipTxtOn]}>
                  {FIELD_CONFIG[f].label}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      )}

      {/* Banner */}
      {(field || pillar !== 'all') && (
        <View style={ss.banner}>
          <VIcon
            name={field ? FIELD_CONFIG[field].icon : CATEGORY_CONFIG[pillar as Category].icon}
            size={36}
            color="#1C1C1E"
          />
          <View style={ss.bannerMeta}>
            <Text style={ss.bannerSub}>
              {field ? CATEGORY_CONFIG[FIELD_CONFIG[field].pillar].label : 'Trụ cột'}
            </Text>
            <Text style={ss.bannerName}>
              {field ? FIELD_CONFIG[field].label : CATEGORY_CONFIG[pillar as Category].label}
            </Text>
          </View>
          <Text style={ss.bannerCount}>{filtered.length}</Text>
        </View>
      )}

      <FlatList
        data={filtered}
        keyExtractor={p => String(p.id)}
        style={ss.list}
        contentContainerStyle={ss.listPad}
        showsVerticalScrollIndicator={false}
        initialNumToRender={20}
        maxToRenderPerBatch={20}
        windowSize={5}
        renderItem={({ item, index }) => (
          <AppRow
            product={item}
            onPress={() => router.push(`/product/${item.id}`)}
            divider={index < filtered.length - 1}
          />
        )}
      />
    </SafeAreaView>
  );
}

const ss = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F5F5' },

  header: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: 4 },
  title: { fontSize: 34, fontWeight: '800', color: '#0A0A0A', letterSpacing: -0.5 },
  sub: { fontSize: 13, color: '#8E8E93', marginTop: 2 },

  chipScroll: { flexGrow: 0 },
  chips: { paddingHorizontal: 16, paddingVertical: 10, gap: 8 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  chipOn: { backgroundColor: '#f5bf23', borderColor: '#f5bf23' },
  chipTxt: { fontSize: 13, fontWeight: '600', color: '#1C1C1E' },
  chipTxtOn: { color: '#0A0A0A' },

  subChips: { paddingHorizontal: 16, paddingBottom: 10, gap: 8 },
  subChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  subChipOn: { backgroundColor: '#1C1C1E', borderColor: '#1C1C1E' },
  subChipTxt: { fontSize: 12, fontWeight: '600', color: '#8E8E93' },
  subChipTxtOn: { color: '#fff' },

  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginHorizontal: 16,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E0E0',
  },
  bannerMeta: { flex: 1 },
  bannerSub: {
    fontSize: 11,
    color: '#8E8E93',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  bannerName: { fontSize: 18, fontWeight: '800', color: '#0A0A0A', letterSpacing: -0.3 },
  bannerCount: { marginLeft: 'auto', fontSize: 28, fontWeight: '800', color: '#E0E0E0' },

  list: { flex: 1 },
  listPad: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    paddingBottom: 32,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E0E0',
  },
});
