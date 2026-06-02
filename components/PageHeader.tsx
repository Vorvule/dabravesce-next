import ThemedText from './ThemedText';
import Styles from '../constants/styles/common.styles';
import ThemedView from './ThemedView';

type Header = { title: string; subtitle: string };

export default function PageHeader({ title, subtitle }: Header) {
  const { centered } = Styles;

  return (
    <ThemedView style={{ paddingTop: 48, paddingBottom: 12 }}>
      <ThemedText type="title" style={{ paddingBottom: 8 }}>{ title }</ThemedText>
      <ThemedText type="subtitle" style={centered}>{ subtitle }</ThemedText>
    </ThemedView>
  );
}
