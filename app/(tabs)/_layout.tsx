import { Tabs } from 'expo-router';
import React from 'react';
import { CustomTabBar } from '@/components/CustomTabBar';

export default function TabLayout() {
  return (
    <Tabs tabBar={props => <CustomTabBar {...props} />} screenOptions={{ headerShown: false }}>
      {/* ── Left pill ── */}
      <Tabs.Screen name="index" />
      <Tabs.Screen name="cqxa" />

      {/* ── Centre float ── */}
      <Tabs.Screen name="search" />

      {/* ── Right pill ── */}
      <Tabs.Screen name="langso" />
      <Tabs.Screen name="account" />

      {/* ── Hidden routes ── */}
      <Tabs.Screen name="browse" options={{ href: null }} />
    </Tabs>
  );
}
