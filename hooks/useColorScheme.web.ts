import { useEffect, useState } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * To support static rendering, this value needs to be re-calculated on the client side for web
 */
export function useColorScheme() {
  const [hasHydrated, setHasHydrated] = useState(false);
  const [colorScheme, setColorScheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    // Listen for system theme changes via prefers-color-scheme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };

    // Set initial value
    setColorScheme(mediaQuery.matches ? 'dark' : 'light');

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const rnColorScheme = useRNColorScheme();
  const finalScheme = colorScheme ?? rnColorScheme;

  if (hasHydrated) {
    return finalScheme;
  }

  return 'light';
}
