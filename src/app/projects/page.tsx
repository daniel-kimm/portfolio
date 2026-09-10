import type { Metadata } from 'next';
import Layout from '../../components/Layout';
import ProjectsPage from '../../components/ProjectsPage';

export const metadata: Metadata = {
  title: 'projects | daniel kim',
  description: 'projects by daniel kim - software and design engineer',
};

export default function Projects() {
  return (
    <Layout currentPage="projects" variant="light" compactNavigation>
      <ProjectsPage />
    </Layout>
  );
}
