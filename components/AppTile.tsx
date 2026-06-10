import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CATEGORY_CONFIG, type Product } from '@/data/products';
import { VIcon } from '@/components/VIcon';
import { C } from '@/constants/Colors';

interface Props {
  product: Product;
  onPress: () => void;
}

export function AppTile({ product, onPress }: Props) {
  const cfg = CATEGORY_CONFIG[product.cat];
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [ss.tile, pressed && ss.pressed]}>
      <View style={ss.icon}>
        <VIcon name={cfg.icon} size={40} color={C.dark} />
      </View>
      <Text style={ss.name} numberOfLines={2}>{product.name}</Text>
      <Text style={ss.dev} numberOfLines={1}>{product.dev || cfg.label}</Text>
      <View style={ss.btn}>
        <Text style={ss.btnTxt}>Xem</Text>
      </View>
    </Pressable>
  );
}

const ss = StyleSheet.create({
  tile: { width: 120, gap: 6 },
  pressed: { opacity: 0.55 },
  icon: {
    width: 120, height: 120, borderRadius: 26,
    backgroundColor: C.bg, alignItems: 'center', justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth, borderColor: C.border,
  },
  name: { fontSize: 12, color: C.black, textAlign: 'center', lineHeight: 16 },
  dev:  { fontSize: 11, color: C.muted, textAlign: 'center' },
  btn: {
    backgroundColor: C.gold, borderRadius: 18,
    paddingVertical: 5, alignItems: 'center',
  },
  btnTxt: { fontSize: 13, fontWeight: '700', color: C.black },
});
