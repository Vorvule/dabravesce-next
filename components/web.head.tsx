import { Platform } from 'react-native';
import Head from 'expo-router/head';

type WebHeadProps = {
  name?: string;
  title?: string;
  description: string;
};

const PREFIX = 'Дабравесце ~ ';

export default function WebHead({ name, title, description }: WebHeadProps) {
  if (Platform.OS !== 'web') return null;

  return (
    <Head>
      <title>{title || PREFIX + name}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
