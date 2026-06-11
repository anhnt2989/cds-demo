import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  size?: number;
  color?: string;
}

export function BambooIcon({ size = 24, color = '#1C1C1E' }: Props) {
  const u = size / 24; // unit scale

  const stalk = (left: number, top: number, height: number) => ({
    position: 'absolute' as const,
    left: left * u,
    top: top * u,
    width: 3 * u,
    height: height * u,
    borderRadius: 1.5 * u,
    backgroundColor: color,
  });

  const node = (left: number, top: number, width: number) => ({
    position: 'absolute' as const,
    left: left * u,
    top: top * u,
    width: width * u,
    height: 1.5 * u,
    borderRadius: 0.75 * u,
    backgroundColor: color,
  });

  const leaf = (left: number, top: number, angle: number) => ({
    position: 'absolute' as const,
    left: left * u,
    top: top * u,
    width: 6 * u,
    height: 1.5 * u,
    borderRadius: 0.75 * u,
    backgroundColor: color,
    transform: [{ rotate: `${angle}deg` }],
  });

  return (
    <View style={{ width: size, height: size }}>
      {/* Left stalk — two segments */}
      <View style={stalk(5, 2, 9)} />
      <View style={stalk(5, 13, 9)} />
      {/* Left stalk nodes */}
      <View style={node(4, 11, 5)} />
      <View style={node(4, 21, 5)} />

      {/* Right stalk — two segments, offset down */}
      <View style={stalk(16, 5, 8)} />
      <View style={stalk(16, 15, 7)} />
      {/* Right stalk nodes */}
      <View style={node(15, 13, 5)} />

      {/* Leaves — left stalk */}
      <View style={leaf(8, 7, -30)} />
      <View style={leaf(2, 15, 150)} />

      {/* Leaves — right stalk */}
      <View style={leaf(10, 11, -25)} />
      <View style={leaf(17, 18, 140)} />
    </View>
  );
}
