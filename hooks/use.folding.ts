import Menu from '@/services/menu';

type Folding = [number[] | null, (keys: number[] | null) => void];

export default function useFolding(
  folding: Folding,
  keys: number[],
): { expanded: boolean; onPress: () => void } {
  const [open, setOpen] = folding;
  const expanded = open !== null && Menu.keysAreActive(open, keys);

  const onPress = () => {
    const parent = keys.slice(0, -1);

    if (expanded) {
      setOpen(parent.length ? parent : null);
    } else {
      setOpen(keys);
    }
  };

  return { expanded, onPress };
}
