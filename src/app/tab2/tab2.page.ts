import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Media } from '../../app/core/models/media'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('slider') slider: IonSlides;
  //@ViewChild('figAudio') figAudio: ElementRef; // audio tag reference

  slideOpts = {
    slidesPerView: "auto"
  }

  allMedia = [
    {
      id: 1,
      name: 'Amanecer en la sabana',
      description: 'Fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/01.png',
      previewAudio: '',
      comments: [
        {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 2,
      name: 'Cultivo',
      description: 'Video de la artista - Mosquera, Cundinamarca - 2022 - formato mp4 - Duración 0:21',
      isImage: false,
      isVideo: true,
      previewSrc: '../../assets/videos/1.MOV',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 3,
      name: '---',
      description: 'Audio de la artista - Mosquera, Cundinamarca - 2022 - formato mp3 - Duración 0:05',
      isImage: false,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/1.mp3',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 4,
      name: '---',
      description: 'Fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/02.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 5,
      name: 'En obra',
      description: 'Video de la artista - Mosquera, Cundinamarca - 2022 - formato mp4 - Duración 1:03',
      isImage: false,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/2.mp3',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 6,
      name: 'Crecimiento',
      description: 'Fotografía de la artista - Tibasosa, Boyacá -  2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/03.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 7,
      name: '---',
      description: 'Fotografía de la artista - Bogotá D.C. - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/04.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 8,
      name: 'Contraste',
      description: 'Video de la artista - Mosquera, Cundinamarca - 2022 - formato mp4 - Duración 0:22',
      isImage: false,
      isVideo: true,
      previewSrc: '../../assets/videos/2.MOV',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 9,
      name: '---',
      description: 'Audio de la artista - Bogotá D.C. - 2022 - formato mp4 - Duración 2:36',
      isImage: false,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/3.mp3',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 10,
      name: 'Desorden',
      description: 'Fotografía de la artista - Sogamoso, Boyacá - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/05.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 11,
      name: '---',
      description: 'Fotografía de la artista - Tibasosa, Boyacá - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/06.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 12,
      name: '---',
      description: 'Video de la artista - Mosquera, Cundinamarca - 2022 - formato mp4 - Duración 0:19',
      isImage: false,
      isVideo: true,
      previewSrc: '../../assets/videos/3.MOV',
      previewAudio: '',
      comments: [
        {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 13,
      name: '---',
      description: 'Audio de la artista - Bogotá D.C. - 2022 - formato mp3 - Duración 3:26',
      isImage: false,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/4.mp3',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 14,
      name: 'Larga espera',
      description: 'Fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/07.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 15,
      name: 'Verde',
      description: 'Fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/08.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 16,
      name: 'Mercando',
      description: 'Video de la artista - Sogamoso, Boyacá - 2022 - video formato mp4 - Duración 0:09',
      isImage: false,
      isVideo: true,
      previewSrc: '../../assets/videos/4.MOV',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        },
        {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 17,
      name: '---',
      description: 'Audio de la artista - Bogotá D.C. - 2022 - formato mp3 - Duración 0:04',
      isImage: false,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/5.mp3',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 18,
      name: 'MiniBosque',
      description: 'Fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital ',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/09.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 19,
      name: '---',
      description: 'Fotografía de la artista - Sogamoso, Boyacá - 2022 - fotografía digital ',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/10.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 20,
      name: '---',
      description: 'Video de la artista - Vía Sogamoso Tibasosa, Boyacá - 2022 - video formato mp4 - Duración 0:21',
      isImage: false,
      isVideo: true,
      previewSrc: '../../assets/videos/5.MOV',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 21,
      name: '---',
      description: 'Fotografía de la artista - Bogotá D.C. - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/11.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 22,
      name: 'Carro',
      description: 'Audio de la artista - vía Bogotá Mosquera, Cundinamarca - 2022 - formato mp3 - Duración 4:46',
      isImage: false,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/6.mp3',
      comments: [ 
        {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 23,
      name: '---',
      description: 'Fotografía de la artista - Tibasosa, Boyacá - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/12.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 24,
      name: 'Campanas',
      description: 'Video de la artista - Tibasosa, Boyacá - 2022 - video formato mp4 - Duración 0:21',
      isImage: false,
      isVideo: true,
      previewSrc: '../../assets/videos/6.MOV',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 25,
      name: '---',
      description: 'Audio de la artista - Mosquera, Cundinamarca - 2022 - formato mp3 - Duración 0:08',
      isImage: false,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/7.mp3',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 26,
      name: 'Viernes en la tarde',
      description: 'Fotografía de la artista - Sogamoso, Boyacá - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/13.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 27,
      name: '---',
      description: 'Fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/14.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 28,
      name: '---',
      description: 'Video de la artista - Bogotá D.C. - 2022 - video formato mp4 - Duración 0:44',
      isImage: false,
      isVideo: true,
      previewSrc: '../../assets/videos/7.MOV',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 29,
      name: '---',
      description: 'fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/15.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 30,
      name: '---',
      description: 'Fotografía de la artista - Sogamoso, Boyacá - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/16.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 31,
      name: 'Lluvia en el tejado',
      description: 'Audio de la artista - Mosquera, Cundinamarca - 2022 - formato mp3 - Duración 1:46',
      isImage: false,
      isVideo: false,
      previewSrc: '',
      previewAudio: '../../assets/audios/8.mp3',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 32,
      name: 'Líneas',
      description: 'Fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/17.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 33,
      name: '---',
      description: 'fotografía de la artista - Mosquera, Cundinamarca - 2022 - fotografía digital',
      isImage: true,
      isVideo: false,
      previewSrc: '../../assets/photos/18.png',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Diego Sánchez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
    {
      id: 34,
      name: '---',
      description: 'Video de la artista - Mosquera, Cundinamarca - 2022 - video formato mp4 - Duración 0:22',
      isImage: false,
      isVideo: true,
      previewSrc: '../../assets/videos/8.mp4',
      previewAudio: '',
      comments: [
        {
          user: 'Daniela Cubides',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }, {
          user: 'Ernesto Perez',
          comment: 'consectetur adipiscing elit. Suspendisse tincidunt turpis sit amet massa egestas, in vestibulum lorem scelerisque',
          like: false
        }
      ]
    },
  ]


  public currentMedia: Media;

  constructor() {}

  //ngOnInit() { }

  selectMedia(file:any) {
    console.log("select media:", file);
    this.currentMedia = file;
  }

  liked(comment:any) {
    comment.like = !comment.like;
    if (comment.like) comment.likes++;
    else if (!comment.like) comment.likes--;
  }

}
