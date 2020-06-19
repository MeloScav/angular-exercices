import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Tableau des posts
  Posts = [
    {
      title: 'Mon premier post',
      content:
        'Nulla laboris consequat laboris voluptate nostrud ea in est ut.',
      loveIts: 0,
      theDate: new Date(),
    },
    {
      title: 'Mon deuxième post',
      content:
        'Qui nulla aliquip duis Lorem excepteur laboris anim sunt dolore dolore aute officia est.',
      loveIts: 0,
      theDate: new Date(),
    },
    {
      title: 'Encore un post',
      content: 'Tempor ea minim dolor est pariatur id ullamco sit.',
      loveIts: 0,
      theDate: new Date(),
    },
  ];
}
