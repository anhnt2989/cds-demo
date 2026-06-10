import { Feather } from '@expo/vector-icons';
import React from 'react';

interface Props {
  name: React.ComponentProps<typeof Feather>['name'];
  size?: number;
  color?: string;
}

export function VIcon({ name, size = 20, color = '#1C1C1E' }: Props) {
  return <Feather name={name} size={size} color={color} />;
}
