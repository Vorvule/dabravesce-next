import { ReactNode } from 'react';
import { Link } from 'expo-router';

import ThemedText from '@/components/ThemedText';

export default function ThemedLink({
  style,
  href,
  type = 'link',
  text,
}: any): ReactNode | Promise<ReactNode> {
  return (
    <Link style={style} href={href}>
      <ThemedText type={type}>
        {text}
      </ThemedText>
    </Link>
  );
}
