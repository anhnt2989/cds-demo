import { BambooIcon } from '@/components/BambooIcon';
import { C } from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as Haptics from 'expo-haptics';
import React from 'react';
import { Dimensions, Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

const { width: SW } = Dimensions.get('window');

const H_PAD = 12;
const BAR_H = 64;
const BAR_W = SW - H_PAD * 2;
const OUTER_R = 24;
const BTN_D = 56;
const BTN_R = BTN_D / 2;
const ARCH_R = BTN_R + 5; // arch radius (slightly larger than button)
const LIFT = 2; // button centre above bar top
const HALF_W = Math.sqrt(ARCH_R ** 2 - LIFT ** 2);
const cx = BAR_W / 2;

const barPath = [
  `M ${OUTER_R} ${BAR_H}`,
  `Q 0 ${BAR_H} 0 ${BAR_H - OUTER_R}`,
  `L 0 ${OUTER_R}`,
  `Q 0 0 ${OUTER_R} 0`,
  `L ${cx - HALF_W} 0`,
  `A ${ARCH_R} ${ARCH_R} 0 0 0 ${cx + HALF_W} 0`,
  `L ${BAR_W - OUTER_R} 0`,
  `Q ${BAR_W} 0 ${BAR_W} ${OUTER_R}`,
  `L ${BAR_W} ${BAR_H - OUTER_R}`,
  `Q ${BAR_W} ${BAR_H} ${BAR_W - OUTER_R} ${BAR_H}`,
  'Z',
].join(' ');

type TabName = 'index' | 'cqxa' | 'search' | 'langso' | 'account';

const TAB_CFG: Record<TabName, { label: string; icon: (c: string) => React.ReactNode }> = {
  index: { label: 'Trang chủ', icon: c => <Feather name="star" size={22} color={c} /> },
  cqxa: { label: 'CQ Xã', icon: c => <Feather name="home" size={22} color={c} /> },
  search: { label: 'Tìm kiếm', icon: c => <Feather name="search" size={22} color={c} /> },
  langso: { label: 'Làng Số', icon: c => <BambooIcon size={22} color={c} /> },
  account: { label: 'Tài khoản', icon: c => <Feather name="user" size={22} color={c} /> },
};

function triggerHaptic() {
  if (Platform.OS === 'ios') Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
}

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const pb = Math.max(insets.bottom, 8);
  const active = state.routes[state.index].name as TabName;

  function go(name: TabName) {
    triggerHaptic();
    const route = state.routes.find(r => r.name === name);
    if (!route) return;
    const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
    if (!event.defaultPrevented) navigation.navigate(name);
  }

  function TabBtn({ name }: { name: TabName }) {
    const cfg = TAB_CFG[name];
    const isOn = active === name;
    const color = isOn ? C.gold : C.faint;
    return (
      <Pressable style={tb.tabBtn} onPress={() => go(name)} hitSlop={6}>
        {cfg.icon(color)}
        <Text style={[tb.label, { color }]}>{cfg.label}</Text>
      </Pressable>
    );
  }

  const barBottom = pb;
  const btnBottom = pb + BAR_H + LIFT - BTN_R;
  const sideW = cx - HALF_W - 6;
  const containerH = pb + BAR_H + LIFT + BTN_R + 8;

  return (
    <View style={[tb.container, { height: containerH }]} pointerEvents="box-none">
      <View style={[tb.barShadow, { bottom: barBottom, left: H_PAD }]}>
        <Svg width={BAR_W} height={BAR_H}>
          <Path d={barPath} fill="#ffffff" />
        </Svg>
      </View>

      <View style={[tb.side, { bottom: barBottom, left: H_PAD, width: sideW }]}>
        <TabBtn name="index" />
        <TabBtn name="cqxa" />
      </View>

      <View style={[tb.side, { bottom: barBottom, right: H_PAD, width: sideW }]}>
        <TabBtn name="langso" />
        <TabBtn name="account" />
      </View>

      <View
        style={[tb.btnShadow, { bottom: btnBottom, left: SW / 2 - BTN_R }]}
        pointerEvents="box-none"
      >
        <Pressable
          style={[tb.btn, active === 'search' && tb.btnActive]}
          onPress={() => go('search')}
        >
          <Feather name="search" size={23} color={active === 'search' ? C.black : '#fff'} />
        </Pressable>
      </View>
    </View>
  );
}

const tb = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  barShadow: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.07,
    shadowRadius: 16,
    elevation: 10,
  },
  side: {
    position: 'absolute',
    height: BAR_H,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    height: BAR_H,
  },
  label: { fontSize: 10, fontWeight: '600', letterSpacing: 0.1 },
  btnShadow: {
    position: 'absolute',
    width: BTN_D,
    height: BTN_D,
    borderRadius: BTN_R,
    shadowColor: C.gold,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
  },
  btn: {
    width: BTN_D,
    height: BTN_D,
    borderRadius: BTN_R,
    backgroundColor: C.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnActive: { backgroundColor: '#e8b020' },
});
