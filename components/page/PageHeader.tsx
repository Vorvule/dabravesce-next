import ThemedText from '../themed/ThemedText';
import Styles from '../../constants/styles/common.styles';
import ThemedView from '../themed/ThemedView';

type Header = { title: string; subtitle: string };

export default function PageHeader({ title, subtitle }: Header) {
  const { centered } = Styles;
  const style ={ paddingTop: 48, paddingBottom: 12, paddingHorizontal: 18 };

  return (
    <ThemedView style={style}>
      <ThemedText type="title" style={{ paddingBottom: 8 }}>{ title }</ThemedText>
      <ThemedText type="subtitle" style={centered}>{ subtitle }</ThemedText>
    </ThemedView>
  );
}
