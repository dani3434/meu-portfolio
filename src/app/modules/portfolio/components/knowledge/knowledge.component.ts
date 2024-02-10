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
      src: '/assets/icons/knowledge/html5.svg',
      alt: 'html5 icone',
      title: 'HTML5',
    },
    {
      src: '/assets/icons/knowledge/css3.svg',
      alt: 'css3 icone',
      title: 'CSS3',
    },
    {
      src: '/assets/icons/knowledge/sass.svg',
      alt: 'sass icone',
      title: 'SASS',
    },
    {
      src: '/assets/icons/knowledge/javascript.svg',
      alt: 'javascript icone',
      title: 'Javascript',
    },
    {
      src: '/assets/icons/knowledge/typescript.svg',
      alt: 'typescript icone',
      title: 'Typescript',
    },
    {
      src: '/assets/icons/knowledge/angular.svg',
      alt: 'angular icone',
      title: 'Angular',
    },
    {
      src: '/assets/icons/knowledge/react.svg',
      alt: 'react icone',
      title: 'React',
    },
    {
      src: '/assets/icons/knowledge/nodejs.svg',
      alt: 'node icone',
      title: 'Node',
    },
    {
      src: '/assets/icons/knowledge/nest.svg',
      alt: 'nest icone',
      title: 'NestJS',
    },
    {
      src: '/assets/icons/knowledge/mongodb.svg',
      alt: 'mongodb icone',
      title: 'MongoDB',
    },
    {
      src: '/assets/icons/knowledge/docker.svg',
      alt: 'docker icone',
      title: 'Docker',
    },
    {
      src: '/assets/icons/knowledge/git.svg',
      alt: 'git icone',
      title: 'Git',
    },
    {
      src: '/assets/icons/knowledge/jest.svg',
      alt: 'jest icone',
      title: 'Jest',
    },
  ]);
}
