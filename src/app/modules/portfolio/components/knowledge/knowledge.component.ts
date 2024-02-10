import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: '/meu-portfolio/assets/icons/knowledge/html5.svg',
      alt: 'html5 icone',
      title: 'HTML5',
    },
    {
      src: '/meu-portfolio/assets/icons/knowledge/css3.svg',
      alt: 'css3 icone',
      title: 'CSS3',
    },
    {
      src: '/meu-portfolio/assets/icons/knowledge/sass.svg',
      alt: 'sass icone',
      title: 'SASS',
    },
    {
      src: '/meu-portfolio/assets/icons/knowledge/javascript.svg',
      alt: 'javascript icone',
      title: 'Javascript',
    },
    {
      src: '/meu-portfolio/assets/icons/knowledge/typescript.svg',
      alt: 'typescript icone',
      title: 'Typescript',
    },
    {
      src: '/meu-portfolio/assets/icons/knowledge/angular.svg',
      alt: 'angular icone',
      title: 'Angular',
    },
    {
      src: '/meu-portfolio/assets/icons/knowledge/react.svg',
      alt: 'react icone',
      title: 'React',
    },
    {
      src: '/meu-portfolio/assets/icons/knowledge/nodejs.svg',
      alt: 'node icone',
      title: 'Node',
    },
    {
      src: '/meu-portfolio/assets/icons/knowledge/nest.svg',
      alt: 'nest icone',
      title: 'NestJS',
    },
    {
      src: '/meu-portfolio/assets/icons/knowledge/mongodb.svg',
      alt: 'mongodb icone',
      title: 'MongoDB',
    },
    {
      src: '/meu-portfolio/assets/icons/knowledge/docker.svg',
      alt: 'docker icone',
      title: 'Docker',
    },
    {
      src: '/meu-portfolio/assets/icons/knowledge/git.svg',
      alt: 'git icone',
      title: 'Git',
    },
    {
      src: '/meu-portfolio/assets/icons/knowledge/jest.svg',
      alt: 'jest icone',
      title: 'Jest',
    },
  ]);
}
