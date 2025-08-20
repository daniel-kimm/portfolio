import type { Metadata } from 'next';
import Layout from '../../components/Layout';
import ProjectsPage from '../../components/ProjectsPage';

export const metadata: Metadata = {
  title: 'projects | daniel kim',
  description: 'Projects by Daniel Kim - Software engineering and creative development work',
};

export default function Projects() {
  return (
    <Layout currentPage="projects">
      <ProjectsPage />
    </Layout>
  );
}
