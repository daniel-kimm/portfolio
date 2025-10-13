import type { Metadata } from 'next';
import Layout from '../components/Layout';
import HomePage from '../components/HomePage';

export const metadata: Metadata = {
  title: 'daniel kim',
  description: 'personal portfolio of daniel kim - software and design engineer',
};

export default function Home() {
  return (
    <Layout currentPage="home">
      <HomePage />
    </Layout>
  );
}
