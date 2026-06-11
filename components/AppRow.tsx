import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CATEGORY_CONFIG, type Product } from '@/data/products';
import { VIcon } from '@/components/VIcon';
import { C } from '@/constants/Colors';

interface Props {
  product: Product;
  onPress: () => void;
  divider?: boolean;
}

export function AppRow({ product, onPress, divider = true }: Props) {
  const cfg = CATEGORY_CONFIG[product.cat];
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [ss.row, pressed && ss.pressed]}>
      <View style={ss.icon}>
        <VIcon name={cfg.icon} size={26} color={C.dark} />
      </View>
      <View style={ss.texts}>
        <Text style={ss.name} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={ss.dev} numberOfLines={1}>
          {product.dev || cfg.label}
        </Text>
      </View>
      <View style={ss.viewBtn}>
        <Text style={ss.viewTxt}>Xem</Text>
      </View>
      {divider && <View style={ss.divider} />}
    </Pressable>
  );
}

const ss = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: C.surface,
    gap: 12,
  },
  pressed: { opacity: 0.5 },
  icon: {
    width: 56,
    height: 56,
    borderRadius: 13,
    backgroundColor: C.bg,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: C.border,
    flexShrink: 0,
  },
  texts: { flex: 1, gap: 2 },
  name: { fontSize: 15, fontWeight: '500', color: C.black },
  dev: { fontSize: 12, color: C.muted },
  viewBtn: {
    backgroundColor: C.gold,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  viewTxt: { fontSize: 13, fontWeight: '700', color: C.black },
  divider: {
    position: 'absolute',
    bottom: 0,
    left: 84,
    right: 16,
    height: StyleSheet.hairlineWidth,
    backgroundColor: C.border,
  },
});
