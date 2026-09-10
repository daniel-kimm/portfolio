import type { Metadata } from 'next';
import Layout from '../../components/Layout';
import MePage from '../../components/MePage';

export const metadata: Metadata = {
  title: 'me | daniel kim',
  description: 'about daniel kim - engineer and artist',
};

export default function Me() {
  return (
    <Layout currentPage="me" variant="light" showLogo={false} compactNavigation>
      <MePage />
    </Layout>
  );
}
