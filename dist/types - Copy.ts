export interface Skill {
  name: string;
  rating: number; // A value from 1 to 3
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}
