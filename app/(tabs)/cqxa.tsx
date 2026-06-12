import { Feather } from '@expo/vector-icons';
import React, { useRef, useState } from 'react';
import {
  Animated,
  LayoutAnimation,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { C } from '@/constants/Colors';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

interface Equipment {
  id: number;
  name: string;
  desc: string;
  unit: string;
  buyPrice: string | null;
  rentPrice: string | null;
}

interface EquipGroup {
  id: string;
  label: string;
  icon: React.ComponentProps<typeof Feather>['name'];
  accent: string;
  items: Equipment[];
}

const GROUPS: EquipGroup[] = [
  {
    id: 'national-central',
    label: 'Hệ thống thông tin/nền tảng số Quốc gia, dùng chung cho các cơ quan Trung ương triển khai',
    icon: 'globe',
    accent: '#5856D6',
    items: [
      {
        id: 16,
        unit: 'hệ thống',
        name: 'Cơ sở dữ liệu quốc gia về dân cư',
        desc: 'Bộ Công an quản lý, kết nối định danh công dân toàn quốc',
        buyPrice: null,
        rentPrice: null,
      },
      {
        id: 17,
        unit: 'nền tảng',
        name: 'Định danh & xác thực điện tử (VNeID)',
        desc: 'Tài khoản định danh điện tử mức 1 và mức 2',
        buyPrice: null,
        rentPrice: null,
      },
      {
        id: 18,
        unit: 'cổng',
        name: 'Cổng Dịch vụ công quốc gia',
        desc: 'Tiếp nhận, thanh toán và tra cứu DVC trực tuyến',
        buyPrice: null,
        rentPrice: null,
      },
      {
        id: 19,
        unit: 'nền tảng',
        name: 'Nền tảng tích hợp, chia sẻ dữ liệu quốc gia (NDXP)',
        desc: 'Trục liên thông kết nối CSDL các bộ, ngành',
        buyPrice: null,
        rentPrice: null,
      },
    ],
  },
  {
    id: 'national-province',
    label: 'Hệ thống thông tin/nền tảng số Quốc gia, dùng chung cho tỉnh triển khai',
    icon: 'map-pin',
    accent: '#30B0C7',
    items: [
      {
        id: 20,
        unit: 'hệ thống',
        name: 'Hệ thống thông tin giải quyết TTHC cấp tỉnh',
        desc: 'Một cửa điện tử liên thông tỉnh — huyện — xã',
        buyPrice: null,
        rentPrice: null,
      },
      {
        id: 21,
        unit: 'nền tảng',
        name: 'Nền tảng tích hợp, chia sẻ dữ liệu cấp tỉnh (LGSP)',
        desc: 'Kết nối các hệ thống của tỉnh với NDXP quốc gia',
        buyPrice: null,
        rentPrice: null,
      },
      {
        id: 22,
        unit: 'hệ thống',
        name: 'Quản lý văn bản & điều hành',
        desc: 'Gửi nhận văn bản điện tử, ký số liên thông 4 cấp',
        buyPrice: null,
        rentPrice: null,
      },
      {
        id: 23,
        unit: 'trung tâm',
        name: 'Giám sát, điều hành thông minh (IOC)',
        desc: 'Tổng hợp chỉ tiêu KT-XH, giám sát điều hành tập trung',
        buyPrice: null,
        rentPrice: null,
      },
    ],
  },
  {
    id: 'it',
    label: 'Hạ tầng CNTT',
    icon: 'monitor',
    accent: '#007AFF',
    items: [
      {
        id: 1,
        unit: 'bộ',
        name: 'Máy tính để bàn',
        desc: 'Intel Core i5, RAM 8GB, SSD 256GB',
        buyPrice: '12.000.000đ',
        rentPrice: '500.000đ/tháng',
      },
      {
        id: 2,
        unit: 'cái',
        name: 'Màn hình LCD 24"',
        desc: 'Full HD, tần số 75Hz, cổng HDMI/VGA',
        buyPrice: '3.500.000đ',
        rentPrice: '150.000đ/tháng',
      },
      {
        id: 3,
        unit: 'cái',
        name: 'Router Wi-Fi 6',
        desc: 'Băng tần kép, phủ sóng 200m², 64 thiết bị',
        buyPrice: '2.800.000đ',
        rentPrice: null,
      },
      {
        id: 4,
        unit: 'cái',
        name: 'Switch mạng 24 cổng',
        desc: 'Gigabit Ethernet, có quản lý, rack 1U',
        buyPrice: '4.500.000đ',
        rentPrice: null,
      },
    ],
  },
  {
    id: 'office',
    label: 'Thiết bị văn phòng',
    icon: 'printer',
    accent: '#FF9500',
    items: [
      {
        id: 5,
        unit: 'cái',
        name: 'Máy in laser A4',
        desc: 'In 2 mặt tự động, 30 trang/phút',
        buyPrice: '5.200.000đ',
        rentPrice: '250.000đ/tháng',
      },
      {
        id: 6,
        unit: 'cái',
        name: 'Máy photocopy đa năng',
        desc: 'In, scan, copy, fax — tốc độ cao',
        buyPrice: '18.000.000đ',
        rentPrice: '800.000đ/tháng',
      },
      {
        id: 7,
        unit: 'cái',
        name: 'Máy chiếu 4K',
        desc: 'Độ sáng 3500 ANSI lumen, kết nối không dây',
        buyPrice: '14.000.000đ',
        rentPrice: '600.000đ/tháng',
      },
      {
        id: 8,
        unit: 'cái',
        name: 'Điện thoại IP',
        desc: 'VoIP HD, màn hình màu 3.5", PoE',
        buyPrice: '1.800.000đ',
        rentPrice: '80.000đ/tháng',
      },
    ],
  },
  {
    id: 'security',
    label: 'Thiết bị an ninh',
    icon: 'shield',
    accent: '#FF3B30',
    items: [
      {
        id: 9,
        unit: 'cái',
        name: 'Camera IP ngoài trời 4K',
        desc: 'Hồng ngoại 50m, chống nước IP67',
        buyPrice: '2.200.000đ',
        rentPrice: '100.000đ/tháng',
      },
      {
        id: 10,
        unit: 'bộ',
        name: 'Đầu ghi hình NVR 16 kênh',
        desc: 'Lưu trữ 4TB, giao diện web từ xa',
        buyPrice: '6.500.000đ',
        rentPrice: '300.000đ/tháng',
      },
      {
        id: 11,
        unit: 'cái',
        name: 'UPS dự phòng 1000VA',
        desc: '600W, dự phòng 30 phút, tự chuyển nguồn',
        buyPrice: '3.200.000đ',
        rentPrice: null,
      },
    ],
  },
  {
    id: 'software',
    label: 'Phần mềm & Dịch vụ',
    icon: 'cpu',
    accent: '#34C759',
    items: [
      {
        id: 12,
        unit: 'giấy phép',
        name: 'Hệ thống quản lý văn bản',
        desc: 'Văn bản điện tử cấp xã, tích hợp eCabinet',
        buyPrice: null,
        rentPrice: '2.000.000đ/tháng',
      },
      {
        id: 13,
        unit: 'giấy phép',
        name: 'Phần mềm kế toán xã',
        desc: 'Tích hợp KBNN, báo cáo quyết toán tự động',
        buyPrice: null,
        rentPrice: '1.500.000đ/tháng',
      },
      {
        id: 14,
        unit: 'giấy phép',
        name: 'Hệ thống một cửa điện tử',
        desc: 'Tiếp nhận & trả kết quả DVC trực tuyến',
        buyPrice: null,
        rentPrice: '3.000.000đ/tháng',
      },
      {
        id: 15,
        unit: 'cái',
        name: 'Kiosk tra cứu công dân',
        desc: 'Màn hình cảm ứng 43", tự phục vụ 24/7',
        buyPrice: '22.000.000đ',
        rentPrice: '1.000.000đ/tháng',
      },
    ],
  },
];

function EquipItem({ item, last }: { item: Equipment; last: boolean }) {
  return (
    <View style={[ss.item, !last && ss.itemDiv]}>
      <View style={ss.itemHeader}>
        <Text style={ss.itemName}>{item.name}</Text>
        <View style={ss.unitBadge}>
          <Text style={ss.unitTxt}>{item.unit}</Text>
        </View>
      </View>
      <Text style={ss.itemDesc}>{item.desc}</Text>
      <View style={ss.priceTags}>
        {item.buyPrice && (
          <View style={[ss.tag, ss.tagBuy]}>
            <Feather name="shopping-cart" size={10} color="#007AFF" />
            <Text style={[ss.tagTxt, { color: '#007AFF' }]}>Mua: {item.buyPrice}</Text>
          </View>
        )}
        {item.rentPrice && (
          <View style={[ss.tag, ss.tagRent]}>
            <Feather name="refresh-cw" size={10} color="#FF9500" />
            <Text style={[ss.tagTxt, { color: '#FF9500' }]}>Thuê: {item.rentPrice}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

function GroupBlock({ group }: { group: EquipGroup }) {
  const [open, setOpen] = useState(false);
  const spin = useRef(new Animated.Value(0)).current;

  function toggle() {
    LayoutAnimation.configureNext({
      duration: 260,
      create: { type: 'easeInEaseOut', property: 'opacity' },
      update: { type: 'spring', springDamping: 0.8 },
    });
    Animated.timing(spin, {
      toValue: open ? 0 : 1,
      duration: 220,
      useNativeDriver: true,
    }).start();
    setOpen(v => !v);
  }

  const rotate = spin.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '90deg'] });

  return (
    <View style={ss.group}>
      <Pressable onPress={toggle} style={ss.groupRow}>
        <View style={[ss.groupIconBox, { backgroundColor: group.accent + '18' }]}>
          <Feather name={group.icon} size={18} color={group.accent} />
        </View>
        <View style={ss.groupMeta}>
          <Text style={ss.groupLabel}>{group.label}</Text>
          <Text style={ss.groupCount}>{group.items.length} mục</Text>
        </View>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <Feather name="chevron-right" size={18} color={C.faint} />
        </Animated.View>
      </Pressable>

      {open && (
        <View style={[ss.itemsWrap, { borderLeftColor: group.accent }]}>
          {group.items.map((item, i) => (
            <EquipItem key={item.id} item={item} last={i === group.items.length - 1} />
          ))}
        </View>
      )}
    </View>
  );
}

export default function CQXaScreen() {
  const total = GROUPS.reduce((s, g) => s + g.items.length, 0);

  return (
    <SafeAreaView style={ss.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" />

      <View style={ss.header}>
        <Text style={ss.title}>CQ Xã</Text>
        <Text style={ss.sub}>Danh mục trang thiết bị — {total} mục</Text>
      </View>

      <View style={ss.legend}>
        <View style={ss.legendItem}>
          <Feather name="shopping-cart" size={12} color="#007AFF" />
          <Text style={ss.legendTxt}>Mua</Text>
        </View>
        <View style={ss.legendItem}>
          <Feather name="refresh-cw" size={12} color="#FF9500" />
          <Text style={ss.legendTxt}>Thuê</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={ss.list}>
        {GROUPS.map(g => (
          <GroupBlock key={g.id} group={g} />
        ))}
        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const ss = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },

  header: { paddingHorizontal: 24, paddingTop: 8, paddingBottom: 4 },
  title: { fontSize: 34, fontWeight: '800', color: C.black, letterSpacing: -0.5 },
  sub: { fontSize: 13, color: C.muted, marginTop: 2 },

  legend: { flexDirection: 'row', gap: 16, paddingHorizontal: 24, paddingBottom: 12 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  legendTxt: { fontSize: 12, color: C.muted, fontWeight: '500' },

  list: { paddingHorizontal: 16 },

  group: {
    backgroundColor: C.surface,
    borderRadius: 16,
    marginBottom: 10,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: C.border,
  },

  groupRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  groupIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupMeta: { flex: 1 },
  groupLabel: { fontSize: 15, fontWeight: '700', color: C.black },
  groupCount: { fontSize: 12, color: C.muted, marginTop: 1 },

  itemsWrap: {
    marginLeft: 14,
    marginRight: 14,
    marginBottom: 12,
    borderLeftWidth: 2,
    paddingLeft: 14,
  },

  item: { paddingVertical: 12 },
  itemDiv: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: C.border,
  },
  itemHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 3 },
  itemName: { flex: 1, fontSize: 14, fontWeight: '700', color: C.black },
  unitBadge: {
    backgroundColor: C.divider,
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  unitTxt: { fontSize: 10, color: C.muted, fontWeight: '600' },
  itemDesc: { fontSize: 12, color: C.muted, lineHeight: 17, marginBottom: 8 },

  priceTags: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderRadius: 8,
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderWidth: 1,
  },
  tagBuy: { backgroundColor: '#EAF3FF', borderColor: '#BDD8FF' },
  tagRent: { backgroundColor: '#FFF4E5', borderColor: '#FFD99E' },
  tagTxt: { fontSize: 11, fontWeight: '600' },
});
