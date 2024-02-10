export interface IKnowledge {
  src: string;
  alt: string;
  title: string;
}

export interface IExperiences {
  summary: {
    strong: string;
    p: string;
  };
  text: string;
}

export interface IProjects {
  src: string;
  alt: string;
  title: string;
  with: string;
  height: string;
  description: string;
  links: {
    name: string;
    href: string;
  }[];
}
