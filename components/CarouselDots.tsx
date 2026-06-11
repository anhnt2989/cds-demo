import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
  count: number;
  active: number;
  color?: string;
  inactiveColor?: string;
  style?: ViewStyle;
}

export function CarouselDots({
  count,
  active,
  color = '#f5bf23',
  inactiveColor = '#D0D0D0',
  style,
}: Props) {
  const anims = useRef(
    Array.from({ length: count }, (_, i) => new Animated.Value(i === 0 ? 1 : 0)),
  ).current;

  useEffect(() => {
    anims.forEach((anim, i) => {
      Animated.spring(anim, {
        toValue: i === active ? 1 : 0,
        useNativeDriver: false,
        damping: 14,
        stiffness: 180,
      }).start();
    });
  }, [active]);

  return (
    <View style={[ss.row, style]}>
      {anims.map((anim, i) => (
        <Animated.View
          key={i}
          style={[
            ss.dot,
            {
              width: anim.interpolate({ inputRange: [0, 1], outputRange: [6, 20] }),
              backgroundColor: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [inactiveColor, color],
              }),
            },
          ]}
        />
      ))}
    </View>
  );
}

const ss = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'center', gap: 5 },
  dot: { height: 6, borderRadius: 3 },
});
