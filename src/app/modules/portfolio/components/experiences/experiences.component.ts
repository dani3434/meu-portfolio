import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Full-Stack Developer',
        p: '@Rocketseat',
      },
      text: '<p>  lorem ipsum dolor sit amet consectetur adipisicing elit.jsnncsnvsjkvjskvjsv nsjnvsjhvshvhbjshvjsjvjnsjvsvjnsjkb shbjcscjhcsjjsjks</p>',
    },
    {
      summary: {
        strong: 'Front-End Developer',
        p: 'Expo',
      },
      text: '<p>  lorem ipsum dolor sit amet consectetur adipisicing elit.jsnncsnvsjkvjskvjsv nsjnvsjhvshvhbjshvjsjvjnsjvsvjnsjkb shbjcscjhcsjjsjks</p>',
    },
    {
      summary: {
        strong: 'Mobile Developer',
        p: 'App Store',
      },
      text: '<p>  lorem ipsum dolor sit amet consectetur adipisicing elit.jsnncsnvsjkvjskvjsv nsjnvsjhvshvhbjshvjsjvjnsjvsvjnsjkb shbjcscjhcsjjsjks</p>',
    },
    {
      summary: {
        strong: 'DevOps Engineer',
        p: 'Google',
      },
      text: '<p>  lorem ipsum dolor sit amet consectetur adipisicing elit.jsnncsnvsjkvjskvjsv nsjnvsjhvshvhbjshvjsjvjnsjvsvjnsjkb shbjcscjhcsjjsjks</p>',
    },
  ]);
}
