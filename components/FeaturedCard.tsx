import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CATEGORY_CONFIG, type Product } from '@/data/products';
import { VIcon } from '@/components/VIcon';
import { C } from '@/constants/Colors';

interface Props {
  product: Product;
  onPress: () => void;
}

const PALETTES: Record<string, readonly [string, string, string]> = {
  chinh_quyen: ['#001A4D', '#003399', '#007AFF'],
  kinh_te: ['#1A0845', '#4A2BA3', '#8B5CF6'],
  xa_hoi: ['#003D1A', '#0D7A35', '#30D158'],
};

export function FeaturedCard({ product, onPress }: Props) {
  const cfg = CATEGORY_CONFIG[product.cat];
  const palette = PALETTES[product.cat] ?? PALETTES.kinh_te;

  return (
    <Pressable onPress={onPress} style={({ pressed }) => [ss.card, pressed && ss.pressed]}>
      <LinearGradient
        colors={palette}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={[ss.ring, { borderColor: `${palette[2]}35` }]} />

      <View style={ss.inner}>
        {/* top: category tag + NEW badge */}
        <View style={ss.topRow}>
          <View style={ss.catTag}>
            <VIcon name={cfg.icon} size={11} color="rgba(255,255,255,0.8)" />
            <Text style={ss.catTagTxt}>{cfg.label.toUpperCase()}</Text>
          </View>
          <View style={ss.goldTag}>
            <Text style={ss.goldTagTxt}>MỚI</Text>
          </View>
        </View>

        {/* middle */}
        <View style={ss.middle}>
          <Text style={ss.name} numberOfLines={2}>
            {product.name}
          </Text>
          <Text style={ss.desc} numberOfLines={2}>
            {product.desc || 'Giải pháp chuyển đổi số quốc gia 2026'}
          </Text>
        </View>

        {/* footer */}
        <View style={ss.footer}>
          <View style={ss.devChip}>
            <Text style={ss.devTxt} numberOfLines={1}>
              {product.dev || cfg.label}
            </Text>
          </View>
          <View style={ss.iconCircle}>
            <VIcon name={cfg.icon} size={22} color={C.gold} />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const ss = StyleSheet.create({
  card: {
    width: '100%',
    height: 400,
    borderRadius: 22,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.22,
    shadowRadius: 18,
    elevation: 10,
  },
  pressed: { transform: [{ scale: 0.97 }], opacity: 0.92 },
  ring: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: 160,
    borderWidth: 1,
    right: -90,
    top: -80,
  },

  inner: { flex: 1, padding: 26, justifyContent: 'space-between' },

  topRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  catTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  catTagTxt: {
    fontSize: 10,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.75)',
    letterSpacing: 0.6,
  },
  goldTag: {
    backgroundColor: C.gold,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  goldTagTxt: { fontSize: 10, fontWeight: '800', color: C.black, letterSpacing: 1 },

  middle: { gap: 10 },
  name: { fontSize: 28, fontWeight: '800', color: '#fff', lineHeight: 34, letterSpacing: -0.5 },
  desc: { fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 20 },

  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  devChip: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  devTxt: { fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: '600' },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: C.gold,
  },
});
