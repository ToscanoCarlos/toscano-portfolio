export type ProjectType = 'ml' | 'web' | 'other';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  type: ProjectType;
  featured?: boolean;
}

export type ProjectFilter = ProjectType | 'all';