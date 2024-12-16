import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-trabajos',
  templateUrl: './lista-trabajos.component.html',
  styleUrls: ['./lista-trabajos.component.scss']
})
export class ListaTrabajosComponent {
  cards = [
    {
      title: 'Entregable',
      subtitle: 'PrimeNG y PrimeFlex',
      image: 'https://via.placeholder.com/300x200?text=Imagen+1',
      description: 'Cuadros responsivos con las matrices 3x3, 4x4, 5x5 y  6x6.',
    },
    {
      title: 'Entregable 1',
      subtitle: 'PrimeNG y PrimeFlex',
      image: 'https://via.placeholder.com/300x200?text=Imagen+2',
      description: 'Descriy desafiante.',
    },
    {
      title: 'Entregable 2',
      subtitle: 'PrimeNG y PrimeFlex',
      image: 'https://via.placeholder.com/300x200?text=Imagen+3',
      description: 'Descripción del trabajo 3. Esto demuestra creatividad y calidad.',
    },
    {
      title: 'Iconos',
      subtitle: 'PrimeNG y PrimeFlex',
      image: 'https://via.placeholder.com/300x200?text=Imagen+4',
      description: 'Descripción del trabajo 4. Un enfoque único y profesional.',
    },
    {
      title: 'Carrusel de Imagenes',
      subtitle: 'PrimeNG y PrimeFlex',
      image: 'https://via.placeholder.com/300x200?text=Imagen+5',
      description: 'Descripción del trabajo 5. Combina innovación y experiencia.',
    },
    {
      title: 'Galeria de Imagenes',
      subtitle: 'PrimeNG y PrimeFlex',
      image: 'https://via.placeholder.com/300x200?text=Imagen+6',
      description: 'Descripción del trabajo 6. Excelente en todos los aspectos.',
    }
  ];
}
