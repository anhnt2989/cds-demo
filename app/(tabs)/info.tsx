import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Linking, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { VIcon } from '@/components/VIcon';
import { ALL_CATEGORIES, CATEGORY_CONFIG, PRODUCTS } from '@/data/products';

const PDF_URL =
  'https://mic.mediacdn.vn/document/2026/5/7/phuluc1baocaodanhsachsanphamgiaiphap-v3-17781254391172012614663.pdf';

const TOTAL     = PRODUCTS.length;
const CAT_STATS = ALL_CATEGORIES
  .map(cat => ({ cat, count: PRODUCTS.filter(p => p.cat === cat).length }))
  .sort((a, b) => b.count - a.count);

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={ss.row}>
      <Text style={ss.rowL}>{label}</Text>
      <Text style={ss.rowV}>{value}</Text>
    </View>
  );
}

export default function InfoScreen() {
  return (
    <SafeAreaView style={ss.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={ss.scroll}>

        {/* Hero */}
        <View style={ss.hero}>
          <View style={ss.heroIcon}>
            <Feather name="flag" size={40} color="#fff" />
          </View>
          <Text style={ss.heroTitle}>Sản phẩm &amp; Giải pháp</Text>
          <Text style={ss.heroSub}>Chuyển đổi số Việt Nam</Text>
          <View style={ss.heroBadge}>
            <Text style={ss.heroBadgeTxt}>Tháng 04 · 2026</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={ss.statsRow}>
          {[
            { icon: 'layers' as const,  n: String(TOTAL), label: 'Sản phẩm' },
            { icon: 'grid'   as const,  n: '10',          label: 'Lĩnh vực' },
            { icon: 'users'  as const,  n: '200+',        label: 'Đơn vị'   },
          ].map(({ icon, n, label }) => (
            <View key={label} style={ss.stat}>
              <VIcon name={icon} size={18} color="#8E8E93" />
              <Text style={ss.statN}>{n}</Text>
              <Text style={ss.statL}>{label}</Text>
            </View>
          ))}
        </View>

        {/* About */}
        <Text style={ss.sectionTitle}>Về tài liệu</Text>
        <View style={ss.card}>
          <Row label="Tên tài liệu"    value="Danh sách sản phẩm, giải pháp CĐS" />
          <View style={ss.div} />
          <Row label="Cơ quan"         value="Bộ Khoa học và Công nghệ" />
          <View style={ss.div} />
          <Row label="Số công văn"     value="2765/BKHCN-CĐSQG" />
          <View style={ss.div} />
          <Row label="Ngày ban hành"   value="29/4/2026" />
          <View style={ss.div} />
          <Row label="Kỳ báo cáo"      value="Tháng 04/2026" />
        </View>

        {/* Categories */}
        <Text style={ss.sectionTitle}>Phân bổ lĩnh vực</Text>
        <View style={ss.card}>
          {CAT_STATS.map(({ cat, count }, i) => {
            const c   = CATEGORY_CONFIG[cat];
            const pct = Math.round((count / TOTAL) * 100);
            return (
              <View key={cat}>
                <View style={ss.catRow}>
                  <View style={ss.catIconBox}>
                    <VIcon name={c.icon} size={20} color="#1C1C1E" />
                  </View>
                  <View style={ss.catInfo}>
                    <View style={ss.catTopRow}>
                      <Text style={ss.catName}>{c.label}</Text>
                      <Text style={ss.catCount}>{count}</Text>
                    </View>
                    <View style={ss.barBg}>
                      <View style={[ss.barFill, { width: `${pct}%` as any }]} />
                    </View>
                    <Text style={ss.catPct}>{pct}%</Text>
                  </View>
                </View>
                {i < CAT_STATS.length - 1 && <View style={ss.div} />}
              </View>
            );
          })}
        </View>

        {/* PDF link */}
        <Text style={ss.sectionTitle}>Nguồn tài liệu</Text>
        <View style={ss.card}>
          <Text style={ss.srcDesc}>
            Tài liệu gốc công bố bởi Bộ Khoa học và Công nghệ Việt Nam, kèm theo Công văn số
            2765/BKHCN-CĐSQG ngày 29/4/2026.
          </Text>
          <View style={ss.div} />
          <Pressable
            style={({ pressed }) => [ss.pdfRow, pressed && { opacity: 0.5 }]}
            onPress={() => Linking.openURL(PDF_URL)}>
            <Feather name="file-text" size={26} color="#1C1C1E" />
            <View style={ss.pdfTexts}>
              <Text style={ss.pdfTitle}>Xem tài liệu gốc (PDF)</Text>
              <Text style={ss.pdfSub}>mic.mediacdn.vn</Text>
            </View>
            <Feather name="chevron-right" size={18} color="#AEAEB2" />
          </Pressable>
        </View>

        {/* App info */}
        <Text style={ss.sectionTitle}>Ứng dụng</Text>
        <View style={ss.card}>
          <Row label="Phiên bản" value="1.0.0" />
          <View style={ss.div} />
          <Row label="Dữ liệu"   value={`${TOTAL} sản phẩm`} />
          <View style={ss.div} />
          <Row label="Cập nhật"  value="Tháng 4/2026" />
        </View>

        <Text style={ss.footer}>
          Dữ liệu tổng hợp từ báo cáo chính thức của Bộ Khoa học và Công nghệ Việt Nam.
        </Text>
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const ss = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F5F5' },
  scroll: { paddingBottom: 0 },

  hero: { backgroundColor: '#1C1C1E', paddingTop: 36, paddingBottom: 28, paddingHorizontal: 24, alignItems: 'center', gap: 8 },
  heroIcon: { width: 80, height: 80, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.1)', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'rgba(255,255,255,0.15)' },
  heroTitle: { fontSize: 22, fontWeight: '800', color: '#fff', letterSpacing: -0.3, textAlign: 'center' },
  heroSub: { fontSize: 14, color: 'rgba(255,255,255,0.6)', textAlign: 'center' },
  heroBadge: { marginTop: 4, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 20, paddingHorizontal: 16, paddingVertical: 6, borderWidth: StyleSheet.hairlineWidth, borderColor: 'rgba(255,255,255,0.2)' },
  heroBadgeTxt: { fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: '600' },

  statsRow: {
    flexDirection: 'row', backgroundColor: '#fff',
    marginHorizontal: 16, marginTop: 16, borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth, borderColor: '#E0E0E0',
  },
  stat: { flex: 1, alignItems: 'center', paddingVertical: 16, gap: 4 },
  statN: { fontSize: 24, fontWeight: '800', color: '#0A0A0A' },
  statL: { fontSize: 11, color: '#8E8E93' },

  sectionTitle: { fontSize: 20, fontWeight: '800', color: '#0A0A0A', letterSpacing: -0.3, paddingHorizontal: 16, marginTop: 24, marginBottom: 10 },

  card: { backgroundColor: '#fff', borderRadius: 16, marginHorizontal: 16, overflow: 'hidden', borderWidth: StyleSheet.hairlineWidth, borderColor: '#E0E0E0' },
  div: { height: StyleSheet.hairlineWidth, backgroundColor: '#F0F0F0', marginLeft: 16 },

  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 13, gap: 12 },
  rowL: { fontSize: 14, color: '#8E8E93', flex: 1 },
  rowV: { fontSize: 14, color: '#0A0A0A', fontWeight: '600', flex: 2, textAlign: 'right' },

  catRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, gap: 12 },
  catIconBox: { width: 42, height: 42, borderRadius: 10, backgroundColor: '#F2F2F7', alignItems: 'center', justifyContent: 'center' },
  catInfo: { flex: 1, gap: 4 },
  catTopRow: { flexDirection: 'row', justifyContent: 'space-between' },
  catName: { fontSize: 14, fontWeight: '600', color: '#0A0A0A' },
  catCount: { fontSize: 14, fontWeight: '800', color: '#0A0A0A' },
  barBg: { height: 3, backgroundColor: '#F0F0F0', borderRadius: 2, overflow: 'hidden' },
  barFill: { height: 3, backgroundColor: '#f5bf23', borderRadius: 2 },
  catPct: { fontSize: 10, color: '#8E8E93' },

  srcDesc: { fontSize: 13, color: '#6B6B6B', lineHeight: 19, padding: 16 },
  pdfRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 14, gap: 12 },
  pdfTexts: { flex: 1 },
  pdfTitle: { fontSize: 15, fontWeight: '600', color: '#0A0A0A' },
  pdfSub: { fontSize: 12, color: '#8E8E93', marginTop: 2 },

  footer: { fontSize: 11, color: '#AEAEB2', textAlign: 'center', lineHeight: 17, marginHorizontal: 24, marginTop: 20 },
});
