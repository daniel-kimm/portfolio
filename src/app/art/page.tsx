import type { Metadata } from 'next';
import Layout from '../../components/Layout';
import ArtPage from '../../components/ArtPage';

export const metadata: Metadata = {
  title: 'art | daniel kim',
  description: 'art portfolio of daniel kim - software and design engineer',
};

export default function Art() {
  return (
    <Layout currentPage="art">
      <ArtPage />
    </Layout>
  );
}
