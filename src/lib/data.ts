export interface Movie {
  id: string;
  title: string;
  imageUrl?: string;
  videoUrl?: string;
  category?: string;
  description?: string;
}

export const categories = [
  {
    id: 'special-moments',
    title: 'Caca Picts',
    movies: [
      {
        id: '1',
        title: 'Selfie',
        imageUrl: '/assets/images/caca1.jpg',
        category: 'Picts',
        description: 'Faten fav photo <3'
      },
      {
        id: '2',
        title: 'Selfie Again',
        imageUrl: '/assets/images/caca3.jpg',
        category: 'Picts',
        description: 'Her first photo ever that i saved on my phone'
      },
      {
        id: '3',
        title: 'Roblox',
        imageUrl: '/assets/images/caca4.jpg',
        category: 'Picts',
        description: 'Caca playing roblox with me and im out there carrying her till summit'
      }
    ]
  },
  {
    id: 'favorite-photos',
    title: 'Her Random Picts',
    movies: [
      {
        id: '4',
        title: 'Ayam',
        imageUrl: '/assets/images/cacafood1.jpg',
        category: 'Random Picts',
        description: 'Hmmm, looks so delicious'
      },
      {
        id: '5',
        title: 'Another Food',
        imageUrl: '/assets/images/cacafood2.jpg',
        category: 'Random Picts',
        description: 'Wew, she just love to eat'
      },
      {
        id: '6',
        title: 'Coffee',
        imageUrl: '/assets/images/cacadrink1.jpg',
        category: 'Random Picts',
        description: 'She loves coffee so much just like me'
      }
    ]
  },
];

export const featuredMovie = {
  id: 'featured',
  title: 'Hi Baby!',
  videoUrl: '/assets/videos/caca2.mov',
  description: 'Salsabila Raihani aka Caca, she was born on 28 May 2002'
}; 