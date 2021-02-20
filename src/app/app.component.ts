import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre:      string = 'Spider-man';
  nombre2:     string = 'MiGuEl aNgEl pARadA';
  arreglo             = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  personajes         = ['Wolverine', 'Spider-man', 'Iron-man', 'Hulk', 'Ant-man'];
  PI:          number = Math.PI;
  porcentaje:  number = 0.234;
  salario:     number = 1234.5;
  fecha:       Date   = new Date();
  idioma:      string = 'es';
  videoUrl:    string = 'https://youtube.com/embed/6YU8hwgYNY0';
  myjson:      Object = {
    name: 'Logan',
    key: 'Wolverine',
    edad: 500,
    address: {
      street: 1,
      house: 20,
    },
  };
  activar:     boolean = true
  valorPromesa = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => err);

  changeLang(lang: string) {
    this.idioma = lang;
  }
}
