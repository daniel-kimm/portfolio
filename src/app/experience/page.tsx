import type { Metadata } from 'next';
import Layout from '../../components/Layout';
import ExperiencePage from '../../components/ExperiencePage';

export const metadata: Metadata = {
  title: 'experience | daniel kim',
  description: 'Experience and work history of Daniel Kim - Professional background and engineering projects',
};

export default function Experience() {
  return (
    <Layout currentPage="experience">
      <ExperiencePage />
    </Layout>
  );
}
