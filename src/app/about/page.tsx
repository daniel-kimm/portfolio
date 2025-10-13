import type { Metadata } from 'next';
import Layout from '../../components/Layout';
import AboutPage from '../../components/AboutPage';

export const metadata: Metadata = {
  title: 'about | daniel kim',
  description: 'about daniel kim - software and design engineer',
};

export default function About() {
  return (
    <Layout currentPage="about">
      <AboutPage />
    </Layout>
  );
}
