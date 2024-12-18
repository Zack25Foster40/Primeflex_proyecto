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
      image: 'https://i.pinimg.com/736x/ad/cd/cd/adcdcd5a8e967a7e945b841853374176.jpg',
      description: 'Cuadros responsivos con las matrices 3x3, 4x4, 5x5 y  6x6.',
      route: '/entregable'
    },
    {
      title: 'Entregable 1',
      subtitle: 'PrimeNG y PrimeFlex',
      image: 'https://i.pinimg.com/736x/ad/cd/cd/adcdcd5a8e967a7e945b841853374176.jpg',
      description: 'Cuadros responsivos que se ajustan a la pantalla de la forma que se solicito.',
      route: '/entregable-1'
    },
    {
      title: 'Entregable 2',
      subtitle: 'PrimeNG y PrimeFlex',
      image: 'https://i.pinimg.com/736x/ad/cd/cd/adcdcd5a8e967a7e945b841853374176.jpg',
      description: '12 cards responsivos donde se adaptan al cambio de pantalla.',
      route: '/entregable-2'
    },
    {
      title: 'Iconos',
      subtitle: 'PrimeNG y PrimeFlex',
      image: 'https://i.pinimg.com/736x/ad/cd/cd/adcdcd5a8e967a7e945b841853374176.jpg',
      description: 'Muestra todos los iconos disponibles de la pagina oficial de PrimeNG.',
      route: '/iconos'
    },
    {
      title: 'Carrusel de Imagenes',
      subtitle: 'PrimeNG y PrimeFlex',
      image: 'https://i.pinimg.com/736x/ad/cd/cd/adcdcd5a8e967a7e945b841853374176.jpg',
      description: 'Se visualiza dos carruseles en donde se muestra imagenes de articulos tecnologicos.',
      route: '/carrusel-imagenes'
    },
    {
      title: 'Galeria de Imagenes',
      subtitle: 'PrimeNG y PrimeFlex',
      image: 'https://i.pinimg.com/736x/ad/cd/cd/adcdcd5a8e967a7e945b841853374176.jpg',
      description: 'Se logra visualizar un pequeño apartado donde se muestra una galeria de imagenes.',
      route: '/galeria-de-imagenes'
    }
  ];
  
}
