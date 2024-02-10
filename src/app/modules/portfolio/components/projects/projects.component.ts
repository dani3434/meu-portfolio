import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IKnowledge.interface';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: '/assets/portfolio1.webp',
      alt: 'projeto image',
      title: 'Mern Chat',
      with: '360px',
      height: '202px',
      description:
        'Um projeto que fiz usando Node, Mongodb, React, TypeScript e WebSocket de um chat em tempo real.',
      links: [
        {
          name: 'Projeto no GitHub',
          href: 'https://github.com/dani3434/chat-js',
        },
      ],
    },
    {
      src: '/assets/dogs.jpg',
      alt: 'projeto image',
      title: 'Dogs React',
      with: '1200px',
      height: '1200px',
      description:
        'Projeto feito no curso da plataforma origamid de uma rede social de cachorros. usando React e com login e cadastro.',
      links: [
        {
          name: 'Projeto no GitHub',
          href: 'https://github.com/dani3434/Dogs-React',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
