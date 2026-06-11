import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, ScrollView, Share, StatusBar, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppRow } from '@/components/AppRow';
import { VIcon } from '@/components/VIcon';
import { CATEGORY_CONFIG, getProductsByCategory, getProductById } from '@/data/products';
import { getRating, type Review } from '@/data/reviews';
import { useAuth } from '@/context/AuthContext';

/* ── Stars ── */
function Stars({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <View style={{ flexDirection: 'row', gap: 2 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <Feather
          key={i}
          name="star"
          size={size}
          color={i <= Math.round(value) ? '#f5bf23' : '#D8D8D8'}
        />
      ))}
    </View>
  );
}

/* ── Rating block ── */
function RatingsBlock({ productId }: { productId: number }) {
  const { user } = useAuth();
  const rating = getRating(productId);
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? rating.reviews : rating.reviews.slice(0, 2);

  return (
    <View style={rb.wrap}>
      <Text style={rb.sectionTitle}>Đánh giá & Nhận xét</Text>

      {/* Summary row */}
      <View style={rb.summary}>
        <View style={rb.bigScore}>
          <Text style={rb.scoreNum}>{rating.average.toFixed(1)}</Text>
          <Text style={rb.scoreOf}>/ 5</Text>
        </View>
        <View style={rb.right}>
          <Stars value={rating.average} size={18} />
          <Text style={rb.totalCount}>{rating.count.toLocaleString('vi-VN')} đánh giá</Text>
          {/* distribution bars */}
          <View style={rb.bars}>
            {[5, 4, 3, 2, 1].map(star => {
              const count = rating.distribution[star - 1];
              const pct = rating.count > 0 ? (count / rating.count) * 100 : 0;
              return (
                <View key={star} style={rb.barRow}>
                  <Text style={rb.barLabel}>{star}</Text>
                  <Feather name="star" size={9} color="#AEAEB2" />
                  <View style={rb.barBg}>
                    <View style={[rb.barFill, { width: `${pct}%` as any }]} />
                  </View>
                  <Text style={rb.barCount}>{count}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>

      <View style={rb.div} />

      {/* Write review prompt */}
      {user ? (
        <Pressable style={rb.writeBtn}>
          <Feather name="edit-2" size={15} color="#1C1C1E" />
          <Text style={rb.writeTxt}>Viết nhận xét của bạn</Text>
        </Pressable>
      ) : (
        <Pressable style={rb.loginPrompt} onPress={() => router.push('/account')}>
          <Feather name="user" size={14} color="#8E8E93" />
          <Text style={rb.loginPromptTxt}>
            <Text style={rb.loginLink}>Đăng nhập</Text> để gửi đánh giá
          </Text>
        </Pressable>
      )}

      <View style={rb.div} />

      {/* Reviews list */}
      {displayed.map((rv, i) => (
        <View key={rv.id}>
          <View style={rb.review}>
            <View style={rb.reviewHeader}>
              <View style={rb.avatar}>
                <Text style={rb.avatarTxt}>{rv.author.split(' ').pop()![0]}</Text>
              </View>
              <View style={rb.reviewMeta}>
                <Text style={rb.reviewAuthor}>{rv.author}</Text>
                <Text style={rb.reviewRole}>{rv.role}</Text>
              </View>
              <Stars value={rv.rating} size={12} />
            </View>
            <Text style={rb.reviewText}>{rv.text}</Text>
            <View style={rb.reviewFooter}>
              <Text style={rb.reviewDate}>{rv.date}</Text>
              <Pressable style={rb.helpfulBtn}>
                <Feather name="thumbs-up" size={12} color="#8E8E93" />
                <Text style={rb.helpfulTxt}>Hữu ích ({rv.helpful})</Text>
              </Pressable>
            </View>
          </View>
          {i < displayed.length - 1 && <View style={rb.div} />}
        </View>
      ))}

      {rating.reviews.length > 2 && (
        <Pressable style={rb.showMoreBtn} onPress={() => setShowAll(v => !v)}>
          <Text style={rb.showMoreTxt}>
            {showAll ? 'Thu gọn ▲' : `Xem tất cả ${rating.reviews.length} nhận xét ▼`}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

function InfoBlock({
  icon,
  title,
  body,
}: {
  icon: React.ComponentProps<typeof Feather>['name'];
  title: string;
  body: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const long = body.length > 220;
  return (
    <View style={ib.wrap}>
      <View style={ib.accent} />
      <View style={ib.inner}>
        <View style={ib.header}>
          <Feather name={icon} size={16} color="#6B6B6B" />
          <Text style={ib.title}>{title}</Text>
        </View>
        <Text style={ib.body} numberOfLines={expanded ? undefined : 5}>
          {body}
        </Text>
        {long && (
          <Pressable onPress={() => setExpanded(e => !e)} hitSlop={8}>
            <Text style={ib.toggle}>{expanded ? 'Thu gọn ▲' : 'Xem thêm ▼'}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = getProductById(Number(id));

  if (!product) {
    return (
      <View style={ss.notFound}>
        <Feather name="search" size={44} color="#D0D0D0" />
        <Text style={ss.nfTitle}>Không tìm thấy sản phẩm</Text>
        <Pressable onPress={() => router.back()} style={ss.nfBtn}>
          <Text style={ss.nfBtnTxt}>Quay lại</Text>
        </Pressable>
      </View>
    );
  }

  const cfg = CATEGORY_CONFIG[product.cat];
  const related = getProductsByCategory(product.cat)
    .filter(p => p.id !== product.id)
    .slice(0, 5);

  type IName = React.ComponentProps<typeof Feather>['name'];
  const blocks: { icon: IName; title: string; body: string }[] = (
    [
      { icon: 'file-text' as IName, title: 'Mô tả sản phẩm', body: product.desc },
      { icon: 'target' as IName, title: 'Vấn đề thực tiễn giải quyết', body: product.problem },
      { icon: 'users' as IName, title: 'Đối tượng sử dụng chính', body: product.users },
      { icon: 'activity' as IName, title: 'Mô tả quy trình nghiệp vụ', body: product.process },
    ] as { icon: IName; title: string; body: string }[]
  ).filter(b => b.body?.trim());

  return (
    <View style={ss.root}>
      <StatusBar barStyle="light-content" />

      {/* ── DARK HERO ── */}
      <View style={ss.hero}>
        <SafeAreaView edges={['top']}>
          <View style={ss.nav}>
            <Pressable onPress={() => router.back()} style={ss.backBtn} hitSlop={16}>
              <Feather name="arrow-left" size={22} color="#fff" />
              <Text style={ss.backTxt}>Quay lại</Text>
            </Pressable>
            <Pressable
              onPress={() => Share.share({ message: `${product.name}\n${product.dev}` })}
              hitSlop={16}
            >
              <Feather name="share-2" size={20} color="rgba(255,255,255,0.75)" />
            </Pressable>
          </View>

          <View style={ss.heroBody}>
            <View style={ss.iconWrap}>
              <VIcon name={cfg.icon} size={44} color="#fff" />
            </View>
            <View style={ss.heroTexts}>
              <View style={ss.catPill}>
                <VIcon name={cfg.icon} size={11} color="rgba(255,255,255,0.7)" />
                <Text style={ss.catPillTxt}>{cfg.label}</Text>
              </View>
              <Text style={ss.heroName} numberOfLines={3}>
                {product.name}
              </Text>
              <Text style={ss.heroDev} numberOfLines={2}>
                {product.dev || cfg.label}
              </Text>
            </View>
          </View>

          <View style={ss.ctaRow}>
            <Pressable style={ss.ctaBtn}>
              <Text style={ss.ctaBtnTxt}>Tìm hiểu thêm</Text>
            </Pressable>
            <Pressable
              style={ss.ctaShare}
              onPress={() => Share.share({ message: `${product.name}\n${product.dev}` })}
            >
              <Feather name="share-2" size={18} color="rgba(255,255,255,0.8)" />
            </Pressable>
          </View>
        </SafeAreaView>
      </View>

      {/* ── CONTENT ── */}
      <ScrollView
        style={ss.scroll}
        contentContainerStyle={ss.pad}
        showsVerticalScrollIndicator={false}
      >
        {/* Horizontal strip */}
        <View style={ss.strip}>
          <View style={ss.stripItem}>
            <VIcon name={cfg.icon} size={20} color="#6B6B6B" />
            <Text style={ss.stripVal} numberOfLines={2}>
              {cfg.label}
            </Text>
            <Text style={ss.stripKey}>Lĩnh vực</Text>
          </View>
          <View style={ss.stripDiv} />
          <View style={ss.stripItem}>
            <Feather name="briefcase" size={20} color="#6B6B6B" />
            <Text style={ss.stripVal} numberOfLines={2}>
              {product.dev ? product.dev.split(/[,(]/)[0].trim() : '—'}
            </Text>
            <Text style={ss.stripKey}>Đơn vị</Text>
          </View>
          <View style={ss.stripDiv} />
          <View style={ss.stripItem}>
            <Feather name="calendar" size={20} color="#6B6B6B" />
            <Text style={ss.stripVal}>04 / 2026</Text>
            <Text style={ss.stripKey}>Cập nhật</Text>
          </View>
        </View>

        {/* Info blocks */}
        {blocks.map(b => (
          <InfoBlock key={b.title} icon={b.icon} title={b.title} body={b.body} />
        ))}

        {/* Ratings & Reviews */}
        <RatingsBlock productId={product.id} />

        {/* Related */}
        {related.length > 0 && (
          <View style={ss.relatedCard}>
            <Text style={ss.relatedTitle}>Sản phẩm cùng lĩnh vực</Text>
            {related.map((p, i) => (
              <AppRow
                key={p.id}
                product={p}
                divider={i < related.length - 1}
                onPress={() => router.replace(`/product/${p.id}`)}
              />
            ))}
          </View>
        )}

        <View style={{ height: 48 }} />
      </ScrollView>
    </View>
  );
}

const ib = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
  },
  accent: { width: 4, backgroundColor: '#f5bf23' },
  inner: { flex: 1, padding: 16, gap: 10 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  title: {
    fontSize: 13,
    fontWeight: '800',
    color: '#6B6B6B',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    flex: 1,
  },
  body: { fontSize: 15, color: '#1C1C1E', lineHeight: 23 },
  toggle: { fontSize: 13, fontWeight: '600', color: '#f5bf23', marginTop: 4 },
});

const ss = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#F5F5F5' },

  hero: { backgroundColor: '#1C1C1E', paddingBottom: 24 },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
  },
  backBtn: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  backTxt: { fontSize: 16, color: 'rgba(255,255,255,0.85)', fontWeight: '400' },

  heroBody: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 16,
  },
  iconWrap: {
    width: 88,
    height: 88,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    flexShrink: 0,
  },
  heroTexts: { flex: 1, paddingTop: 4, gap: 6 },
  catPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.18)',
  },
  catPillTxt: {
    fontSize: 11,
    fontWeight: '700',
    color: 'rgba(255,255,255,0.7)',
    letterSpacing: 0.3,
  },
  heroName: { fontSize: 20, fontWeight: '800', color: '#fff', lineHeight: 25, letterSpacing: -0.3 },
  heroDev: { fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 18 },

  ctaRow: { flexDirection: 'row', paddingHorizontal: 20, gap: 10 },
  ctaBtn: {
    flex: 1,
    backgroundColor: '#f5bf23',
    borderRadius: 13,
    paddingVertical: 11,
    alignItems: 'center',
  },
  ctaBtnTxt: { fontSize: 14, fontWeight: '700', color: '#0A0A0A' },
  ctaShare: {
    width: 46,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 13,
    paddingVertical: 11,
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.15)',
  },

  scroll: { flex: 1 },
  pad: { padding: 16, gap: 12 },

  strip: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E0E0',
  },
  stripItem: { flex: 1, alignItems: 'center', gap: 5, paddingHorizontal: 8 },
  stripVal: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0A0A0A',
    textAlign: 'center',
    lineHeight: 15,
  },
  stripKey: { fontSize: 10, color: '#8E8E93', textAlign: 'center' },
  stripDiv: { width: StyleSheet.hairlineWidth, backgroundColor: '#E5E5EA', marginVertical: 8 },

  relatedCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E0E0',
  },
  relatedTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0A0A0A',
    letterSpacing: -0.2,
    paddingHorizontal: 18,
    paddingTop: 15,
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#F0F0F0',
  },

  notFound: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  nfTitle: { fontSize: 17, color: '#8E8E93', fontWeight: '600' },
  nfBtn: {
    backgroundColor: '#1C1C1E',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 11,
  },
  nfBtnTxt: { color: '#fff', fontSize: 15, fontWeight: '700' },
});

/* ── RatingsBlock styles ── */
const rb = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#0A0A0A',
    letterSpacing: -0.2,
    paddingHorizontal: 18,
    paddingTop: 16,
    paddingBottom: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#F0F0F0',
  },

  summary: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    paddingVertical: 16,
    gap: 20,
    alignItems: 'center',
  },
  bigScore: { alignItems: 'center', justifyContent: 'center', gap: 2 },
  scoreNum: { fontSize: 48, fontWeight: '800', color: '#0A0A0A', lineHeight: 52 },
  scoreOf: { fontSize: 13, color: '#8E8E93' },
  right: { flex: 1, gap: 6 },
  totalCount: { fontSize: 12, color: '#8E8E93' },

  bars: { gap: 3, marginTop: 4 },
  barRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  barLabel: { fontSize: 10, color: '#8E8E93', width: 8, textAlign: 'right' },
  barBg: { flex: 1, height: 4, backgroundColor: '#F0F0F0', borderRadius: 2, overflow: 'hidden' },
  barFill: { height: 4, backgroundColor: '#f5bf23', borderRadius: 2 },
  barCount: { fontSize: 10, color: '#AEAEB2', width: 22, textAlign: 'right' },

  div: { height: StyleSheet.hairlineWidth, backgroundColor: '#F0F0F0', marginHorizontal: 18 },

  writeBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    marginHorizontal: 16,
    marginVertical: 4,
    backgroundColor: '#f5bf23',
    borderRadius: 12,
  },
  writeTxt: { fontSize: 14, fontWeight: '700', color: '#0A0A0A' },

  loginPrompt: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    paddingVertical: 14,
  },
  loginPromptTxt: { fontSize: 13, color: '#8E8E93' },
  loginLink: { color: '#f5bf23', fontWeight: '700' },

  review: { paddingHorizontal: 18, paddingVertical: 14, gap: 8 },
  reviewHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1C1C1E',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  avatarTxt: { fontSize: 14, fontWeight: '800', color: '#fff' },
  reviewMeta: { flex: 1 },
  reviewAuthor: { fontSize: 14, fontWeight: '700', color: '#0A0A0A' },
  reviewRole: { fontSize: 11, color: '#8E8E93' },
  reviewText: { fontSize: 14, color: '#3A3A3C', lineHeight: 21 },
  reviewFooter: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  reviewDate: { fontSize: 11, color: '#AEAEB2' },
  helpfulBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
  },
  helpfulTxt: { fontSize: 11, color: '#8E8E93' },

  showMoreBtn: { paddingVertical: 14, alignItems: 'center' },
  showMoreTxt: { fontSize: 13, fontWeight: '700', color: '#f5bf23' },
});
