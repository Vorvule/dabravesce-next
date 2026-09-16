import { Platform } from 'react-native';
import Head from 'expo-router/head';

import Web from '@/services/web';
import ColumnLayout from '@/applets/layout/column.layout';
import ThemedText from '../components/themed/themed.text';

export default function DonationScreen() {
  return (
    <>
      {Platform.OS === 'web' && (
        <Head>
          <title>Дабравесце ~ Ахвяраванне</title>
          <meta name="description" content={Web.getDescription('/donation')} />
        </Head>
      )}

      <ColumnLayout title="Ахвяраванне" subtitle="">
      </ColumnLayout>
    </>
  );
}
