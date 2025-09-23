import { Skill, Project } from './types';

export const SKILLS: Skill[] = [
  { name: 'Java', rating: 2 },
  { name: 'Python', rating: 1 },
  { name: 'C++', rating: 1 },
  { name: 'C', rating: 1 },
  { name: 'Arduino', rating: 1 },
  { name: 'HTML', rating: 2 },
  { name: 'CSS', rating: 2 },
  { name: 'React', rating: 2 },
  { name: 'TypeScript', rating: 2 },
  { name: 'Node.js', rating: 1 },
  { name: 'Figma', rating: 2 },
  { name: 'Tailwind CSS', rating: 3 },
];

export const PROJECTS: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce website with features like product catalog, shopping cart, and user authentication. Built with scalability in mind.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    imageUrl: 'https://picsum.photos/seed/project1/400/300',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, helping users to identify trends and patterns through charts and graphs.',
    technologies: ['D3.js', 'React', 'TypeScript', 'Express'],
    imageUrl: 'https://picsum.photos/seed/project2/400/300',
  },
  {
    title: 'IoT Smart Home Controller',
    description: 'A system to control home appliances using an Arduino-based controller and a web interface for remote access and monitoring.',
    technologies: ['Arduino', 'C++', 'React', 'Firebase'],
    imageUrl: 'https://picsum.photos/seed/project3/400/300',
  },
   {
    title: 'Personal Blog Engine',
    description: 'A lightweight and fast blog engine with a markdown editor and static site generation for optimal performance and SEO.',
    technologies: ['Next.js', 'GraphQL', 'Vercel'],
    imageUrl: 'https://picsum.photos/seed/project4/400/300',
  },
];
