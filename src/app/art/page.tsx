import type { Metadata } from 'next';
import Layout from '../../components/Layout';
import ArtPage from '../../components/ArtPage';

export const metadata: Metadata = {
  title: 'art | daniel kim',
  description: 'Art portfolio of Daniel Kim - Creative works and artistic projects',
};

export default function Art() {
  return (
    <Layout currentPage="art">
      <ArtPage />
    </Layout>
  );
}
