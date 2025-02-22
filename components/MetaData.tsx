import Head from 'expo-router/head';
import Web from '@/functions/Web';
import Device from '@/functions/Device';

type Props = { path: string };

export default function MetaData({ path }: Props) {
  return (
    Device.platformIsWeb() && (
      <Head>
        <title>{Web.getTitle(path)}</title>
        <meta name='description' content={Web.getDescription(path)} />
      </Head>
    )
  );
}
