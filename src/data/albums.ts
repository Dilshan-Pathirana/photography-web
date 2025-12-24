export interface Album {
  id: string;
  title: string;
  eventType: 'Wedding' | 'Corporate' | 'Graduation' | 'Pre-shoot' | 'Party' | 'Private';
  date: string;
  coverImage: string;
  coverAlt?: string;
  images: AlbumImage[];
  description: string;
  featured?: boolean;
}

export interface AlbumImage {
  src: string;
  alt: string;
  caption?: string;
}
export const albums: Album[] = [{
  id: 'album-1',
  title: 'Album 1',
  eventType: 'Wedding',
  date: '2025-12-01',
  coverImage: '/albums/album-1/cover.jpg',
  coverAlt: 'Album 1 cover image',
  description: 'Dummy description for Album 1 (edit this later).',
  featured: true,
  images: [{
    src: '/albums/album-1/1.jpg',
    alt: 'Album 1 photo 1'
  }, {
    src: '/albums/album-1/2.jpg',
    alt: 'Album 1 photo 2'
  }, {
    src: '/albums/album-1/3.jpg',
    alt: 'Album 1 photo 3'
  }, {
    src: '/albums/album-1/4.jpg',
    alt: 'Album 1 photo 4'
  }, {
    src: '/albums/album-1/5.jpg',
    alt: 'Album 1 photo 5'
  }, {
    src: '/albums/album-1/6.jpg',
    alt: 'Album 1 photo 6'
  }, {
    src: '/albums/album-1/7.jpg',
    alt: 'Album 1 photo 7'
  }, {
    src: '/albums/album-1/8.jpg',
    alt: 'Album 1 photo 8'
  }, {
    src: '/albums/album-1/9.jpg',
    alt: 'Album 1 photo 9'
  }, {
    src: '/albums/album-1/10.jpg',
    alt: 'Album 1 photo 10'
  }, {
    src: '/albums/album-1/11.jpg',
    alt: 'Album 1 photo 11'
  }, {
    src: '/albums/album-1/12.jpg',
    alt: 'Album 1 photo 12'
  }, {
    src: '/albums/album-1/13.jpg',
    alt: 'Album 1 photo 13'
  }, {
    src: '/albums/album-1/14.jpg',
    alt: 'Album 1 photo 14'
  }, {
    src: '/albums/album-1/15.jpg',
    alt: 'Album 1 photo 15'
  }, {
    src: '/albums/album-1/16.jpg',
    alt: 'Album 1 photo 16'
  }, {
    src: '/albums/album-1/17.jpg',
    alt: 'Album 1 photo 17'
  }, {
    src: '/albums/album-1/18.jpg',
    alt: 'Album 1 photo 18'
  }, {
    src: '/albums/album-1/19.jpg',
    alt: 'Album 1 photo 19'
  }, {
    src: '/albums/album-1/20.jpg',
    alt: 'Album 1 photo 20'
  }, {
    src: '/albums/album-1/21.jpg',
    alt: 'Album 1 photo 21'
  }, {
    src: '/albums/album-1/22.jpg',
    alt: 'Album 1 photo 22'
  }, {
    src: '/albums/album-1/23.jpg',
    alt: 'Album 1 photo 23'
  }]
}, {
  id: 'album-2',
  title: 'Album 2',
  eventType: 'Corporate',
  date: '2025-11-15',
  coverImage: '/albums/album-2/1.jpg',
  coverAlt: 'Album 2 cover image',
  description: 'Dummy description for Album 2 (edit this later).',
  featured: true,
  images: [{
    src: '/albums/album-2/1.jpg',
    alt: 'Album 2 photo 1'
  }, {
    src: '/albums/album-2/2.jpg',
    alt: 'Album 2 photo 2'
  }, {
    src: '/albums/album-2/3.jpg',
    alt: 'Album 2 photo 3'
  }, {
    src: '/albums/album-2/4.jpg',
    alt: 'Album 2 photo 4'
  }, {
    src: '/albums/album-2/5.jpg',
    alt: 'Album 2 photo 5'
  }, {
    src: '/albums/album-2/6.jpg',
    alt: 'Album 2 photo 6'
  }, {
    src: '/albums/album-2/7.jpg',
    alt: 'Album 2 photo 7'
  }, {
    src: '/albums/album-2/8.jpg',
    alt: 'Album 2 photo 8'
  }, {
    src: '/albums/album-2/9.jpg',
    alt: 'Album 2 photo 9'
  }, {
    src: '/albums/album-2/10.jpg',
    alt: 'Album 2 photo 10'
  }, {
    src: '/albums/album-2/11.jpg',
    alt: 'Album 2 photo 11'
  }, {
    src: '/albums/album-2/12.jpg',
    alt: 'Album 2 photo 12'
  }, {
    src: '/albums/album-2/13.jpg',
    alt: 'Album 2 photo 13'
  }, {
    src: '/albums/album-2/14.jpg',
    alt: 'Album 2 photo 14'
  }, {
    src: '/albums/album-2/15.jpg',
    alt: 'Album 2 photo 15'
  }, {
    src: '/albums/album-2/16.jpg',
    alt: 'Album 2 photo 16'
  }, {
    src: '/albums/album-2/17.jpg',
    alt: 'Album 2 photo 17'
  }, {
    src: '/albums/album-2/18.jpg',
    alt: 'Album 2 photo 18'
  }, {
    src: '/albums/album-2/19.jpg',
    alt: 'Album 2 photo 19'
  }, {
    src: '/albums/album-2/20.jpg',
    alt: 'Album 2 photo 20'
  }, {
    src: '/albums/album-2/21.jpg',
    alt: 'Album 2 photo 21'
  }, {
    src: '/albums/album-2/22.jpg',
    alt: 'Album 2 photo 22'
  }, {
    src: '/albums/album-2/23.jpg',
    alt: 'Album 2 photo 23'
  }, {
    src: '/albums/album-2/24.jpg',
    alt: 'Album 2 photo 24'
  }, {
    src: '/albums/album-2/25.jpg',
    alt: 'Album 2 photo 25'
  }, {
    src: '/albums/album-2/26.jpg',
    alt: 'Album 2 photo 26'
  }, {
    src: '/albums/album-2/27.jpg',
    alt: 'Album 2 photo 27'
  }, {
    src: '/albums/album-2/28.jpg',
    alt: 'Album 2 photo 28'
  }, {
    src: '/albums/album-2/29.jpg',
    alt: 'Album 2 photo 29'
  }, {
    src: '/albums/album-2/30.jpg',
    alt: 'Album 2 photo 30'
  }]
}, {
  id: 'album-3',
  title: 'Album 3',
  eventType: 'Graduation',
  date: '2025-10-01',
  coverImage: '/albums/album-3/1.jpg',
  coverAlt: 'Album 3 cover image',
  description: 'Dummy description for Album 3 (edit this later).',
  featured: false,
  images: [{
    src: '/albums/album-3/1.jpg',
    alt: 'Album 3 photo 1'
  }, {
    src: '/albums/album-3/2.jpg',
    alt: 'Album 3 photo 2'
  }, {
    src: '/albums/album-3/3.jpg',
    alt: 'Album 3 photo 3'
  }, {
    src: '/albums/album-3/4.jpg',
    alt: 'Album 3 photo 4'
  }, {
    src: '/albums/album-3/5.jpg',
    alt: 'Album 3 photo 5'
  }, {
    src: '/albums/album-3/6.jpg',
    alt: 'Album 3 photo 6'
  }, {
    src: '/albums/album-3/7.jpg',
    alt: 'Album 3 photo 7'
  }, {
    src: '/albums/album-3/8.jpg',
    alt: 'Album 3 photo 8'
  }, {
    src: '/albums/album-3/9.jpg',
    alt: 'Album 3 photo 9'
  }, {
    src: '/albums/album-3/10.jpg',
    alt: 'Album 3 photo 10'
  }, {
    src: '/albums/album-3/11.jpg',
    alt: 'Album 3 photo 11'
  }, {
    src: '/albums/album-3/12.jpg',
    alt: 'Album 3 photo 12'
  }, {
    src: '/albums/album-3/13.jpg',
    alt: 'Album 3 photo 13'
  }, {
    src: '/albums/album-3/14.jpg',
    alt: 'Album 3 photo 14'
  }, {
    src: '/albums/album-3/15.jpg',
    alt: 'Album 3 photo 15'
  }, {
    src: '/albums/album-3/16.jpg',
    alt: 'Album 3 photo 16'
  }, {
    src: '/albums/album-3/17.jpg',
    alt: 'Album 3 photo 17'
  }, {
    src: '/albums/album-3/18.jpg',
    alt: 'Album 3 photo 18'
  }, {
    src: '/albums/album-3/19.jpg',
    alt: 'Album 3 photo 19'
  }, {
    src: '/albums/album-3/20.jpg',
    alt: 'Album 3 photo 20'
  }, {
    src: '/albums/album-3/21.jpg',
    alt: 'Album 3 photo 21'
  }, {
    src: '/albums/album-3/22.jpg',
    alt: 'Album 3 photo 22'
  }]
}, {
  id: 'album-4',
  title: 'Album 4',
  eventType: 'Pre-shoot',
  date: '2025-09-01',
  coverImage: '/albums/album-4/1.jpg',
  coverAlt: 'Album 4 cover image',
  description: 'Dummy description for Album 4 (edit this later).',
  featured: false,
  images: [{
    src: '/albums/album-4/1.jpg',
    alt: 'Album 4 photo 1'
  }, {
    src: '/albums/album-4/2.jpg',
    alt: 'Album 4 photo 2'
  }, {
    src: '/albums/album-4/3.jpg',
    alt: 'Album 4 photo 3'
  }, {
    src: '/albums/album-4/4.jpg',
    alt: 'Album 4 photo 4'
  }, {
    src: '/albums/album-4/5.jpg',
    alt: 'Album 4 photo 5'
  }, {
    src: '/albums/album-4/6.jpg',
    alt: 'Album 4 photo 6'
  }, {
    src: '/albums/album-4/7.jpg',
    alt: 'Album 4 photo 7'
  }, {
    src: '/albums/album-4/8.jpg',
    alt: 'Album 4 photo 8'
  }, {
    src: '/albums/album-4/9.jpg',
    alt: 'Album 4 photo 9'
  }, {
    src: '/albums/album-4/10.jpg',
    alt: 'Album 4 photo 10'
  }, {
    src: '/albums/album-4/11.jpg',
    alt: 'Album 4 photo 11'
  }, {
    src: '/albums/album-4/12.jpg',
    alt: 'Album 4 photo 12'
  }, {
    src: '/albums/album-4/13.jpg',
    alt: 'Album 4 photo 13'
  }, {
    src: '/albums/album-4/14.jpg',
    alt: 'Album 4 photo 14'
  }, {
    src: '/albums/album-4/15.jpg',
    alt: 'Album 4 photo 15'
  }, {
    src: '/albums/album-4/16.jpg',
    alt: 'Album 4 photo 16'
  }]
}, {
  id: 'album-5',
  title: 'Album 5',
  eventType: 'Party',
  date: '2025-08-15',
  coverImage: '/albums/album-5/1.jpg',
  coverAlt: 'Album 5 cover image',
  description: 'Dummy description for Album 5 (edit this later).',
  featured: true,
  images: [{
    src: '/albums/album-5/1.jpg',
    alt: 'Album 5 photo 1'
  }, {
    src: '/albums/album-5/2.jpg',
    alt: 'Album 5 photo 2'
  }, {
    src: '/albums/album-5/3.jpg',
    alt: 'Album 5 photo 3'
  }, {
    src: '/albums/album-5/4.jpg',
    alt: 'Album 5 photo 4'
  }, {
    src: '/albums/album-5/5.jpg',
    alt: 'Album 5 photo 5'
  }, {
    src: '/albums/album-5/6.jpg',
    alt: 'Album 5 photo 6'
  }, {
    src: '/albums/album-5/7.jpg',
    alt: 'Album 5 photo 7'
  }, {
    src: '/albums/album-5/8.jpg',
    alt: 'Album 5 photo 8'
  }, {
    src: '/albums/album-5/9.jpg',
    alt: 'Album 5 photo 9'
  }, {
    src: '/albums/album-5/10.jpg',
    alt: 'Album 5 photo 10'
  }, {
    src: '/albums/album-5/11.jpg',
    alt: 'Album 5 photo 11'
  }, {
    src: '/albums/album-5/12.jpg',
    alt: 'Album 5 photo 12'
  }, {
    src: '/albums/album-5/13.jpg',
    alt: 'Album 5 photo 13'
  }, {
    src: '/albums/album-5/14.jpg',
    alt: 'Album 5 photo 14'
  }, {
    src: '/albums/album-5/15.jpg',
    alt: 'Album 5 photo 15'
  }, {
    src: '/albums/album-5/16.jpg',
    alt: 'Album 5 photo 16'
  }, {
    src: '/albums/album-5/17.jpg',
    alt: 'Album 5 photo 17'
  }, {
    src: '/albums/album-5/18.jpg',
    alt: 'Album 5 photo 18'
  }, {
    src: '/albums/album-5/19.jpg',
    alt: 'Album 5 photo 19'
  }, {
    src: '/albums/album-5/20.jpg',
    alt: 'Album 5 photo 20'
  }, {
    src: '/albums/album-5/21.jpg',
    alt: 'Album 5 photo 21'
  }, {
    src: '/albums/album-5/22.jpg',
    alt: 'Album 5 photo 22'
  }, {
    src: '/albums/album-5/23.jpg',
    alt: 'Album 5 photo 23'
  }, {
    src: '/albums/album-5/24.jpg',
    alt: 'Album 5 photo 24'
  }, {
    src: '/albums/album-5/25.jpg',
    alt: 'Album 5 photo 25'
  }, {
    src: '/albums/album-5/26.jpg',
    alt: 'Album 5 photo 26'
  }, {
    src: '/albums/album-5/27.jpg',
    alt: 'Album 5 photo 27'
  }, {
    src: '/albums/album-5/28.jpg',
    alt: 'Album 5 photo 28'
  }]
}, {
  id: 'album-6',
  title: 'Album 6',
  eventType: 'Private',
  date: '2025-07-20',
  coverImage: '/albums/album-6/1.jpg',
  coverAlt: 'Album 6 cover image',
  description: 'Dummy description for Album 6 (edit this later).',
  featured: false,
  images: [{
    src: '/albums/album-6/1.jpg',
    alt: 'Album 6 photo 1'
  }, {
    src: '/albums/album-6/2.jpg',
    alt: 'Album 6 photo 2'
  }, {
    src: '/albums/album-6/3.jpg',
    alt: 'Album 6 photo 3'
  }, {
    src: '/albums/album-6/4.jpg',
    alt: 'Album 6 photo 4'
  }, {
    src: '/albums/album-6/5.jpg',
    alt: 'Album 6 photo 5'
  }, {
    src: '/albums/album-6/6.jpg',
    alt: 'Album 6 photo 6'
  }, {
    src: '/albums/album-6/7.jpg',
    alt: 'Album 6 photo 7'
  }, {
    src: '/albums/album-6/8.jpg',
    alt: 'Album 6 photo 8'
  }, {
    src: '/albums/album-6/9.jpg',
    alt: 'Album 6 photo 9'
  }, {
    src: '/albums/album-6/10.jpg',
    alt: 'Album 6 photo 10'
  }, {
    src: '/albums/album-6/11.jpg',
    alt: 'Album 6 photo 11'
  }, {
    src: '/albums/album-6/12.jpg',
    alt: 'Album 6 photo 12'
  }, {
    src: '/albums/album-6/13.jpg',
    alt: 'Album 6 photo 13'
  }, {
    src: '/albums/album-6/14.jpg',
    alt: 'Album 6 photo 14'
  }, {
    src: '/albums/album-6/15.jpg',
    alt: 'Album 6 photo 15'
  }, {
    src: '/albums/album-6/16.jpg',
    alt: 'Album 6 photo 16'
  }, {
    src: '/albums/album-6/17.jpg',
    alt: 'Album 6 photo 17'
  }, {
    src: '/albums/album-6/18.jpg',
    alt: 'Album 6 photo 18'
  }, {
    src: '/albums/album-6/19.jpg',
    alt: 'Album 6 photo 19'
  }, {
    src: '/albums/album-6/20.jpg',
    alt: 'Album 6 photo 20'
  }]
}, {
  id: 'album-7',
  title: 'Album 7',
  eventType: 'Corporate',
  date: '2025-06-30',
  coverImage: '/albums/album-7/1.jpg',
  coverAlt: 'Album 7 cover image',
  description: 'Dummy description for Album 7 (edit this later).',
  featured: false,
  images: [{
    src: '/albums/album-7/1.jpg',
    alt: 'Album 7 photo 1'
  }, {
    src: '/albums/album-7/2.jpg',
    alt: 'Album 7 photo 2'
  }, {
    src: '/albums/album-7/3.jpg',
    alt: 'Album 7 photo 3'
  }, {
    src: '/albums/album-7/4.jpg',
    alt: 'Album 7 photo 4'
  }, {
    src: '/albums/album-7/5.jpg',
    alt: 'Album 7 photo 5'
  }, {
    src: '/albums/album-7/6.jpg',
    alt: 'Album 7 photo 6'
  }, {
    src: '/albums/album-7/7.jpg',
    alt: 'Album 7 photo 7'
  }, {
    src: '/albums/album-7/8.jpg',
    alt: 'Album 7 photo 8'
  }, {
    src: '/albums/album-7/9.jpg',
    alt: 'Album 7 photo 9'
  }, {
    src: '/albums/album-7/10.jpg',
    alt: 'Album 7 photo 10'
  }, {
    src: '/albums/album-7/11.jpg',
    alt: 'Album 7 photo 11'
  }, {
    src: '/albums/album-7/12.jpg',
    alt: 'Album 7 photo 12'
  }, {
    src: '/albums/album-7/13.jpg',
    alt: 'Album 7 photo 13'
  }, {
    src: '/albums/album-7/14.jpg',
    alt: 'Album 7 photo 14'
  }, {
    src: '/albums/album-7/15.jpg',
    alt: 'Album 7 photo 15'
  }, {
    src: '/albums/album-7/16.jpg',
    alt: 'Album 7 photo 16'
  }, {
    src: '/albums/album-7/17.jpg',
    alt: 'Album 7 photo 17'
  }, {
    src: '/albums/album-7/18.jpg',
    alt: 'Album 7 photo 18'
  }, {
    src: '/albums/album-7/19.jpg',
    alt: 'Album 7 photo 19'
  }, {
    src: '/albums/album-7/20.jpg',
    alt: 'Album 7 photo 20'
  }, {
    src: '/albums/album-7/21.jpg',
    alt: 'Album 7 photo 21'
  }, {
    src: '/albums/album-7/22.jpg',
    alt: 'Album 7 photo 22'
  }, {
    src: '/albums/album-7/23.jpg',
    alt: 'Album 7 photo 23'
  }, {
    src: '/albums/album-7/24.jpg',
    alt: 'Album 7 photo 24'
  }, {
    src: '/albums/album-7/25.jpg',
    alt: 'Album 7 photo 25'
  }, {
    src: '/albums/album-7/26.jpg',
    alt: 'Album 7 photo 26'
  }, {
    src: '/albums/album-7/27.jpg',
    alt: 'Album 7 photo 27'
  }, {
    src: '/albums/album-7/28.jpg',
    alt: 'Album 7 photo 28'
  }, {
    src: '/albums/album-7/29.jpg',
    alt: 'Album 7 photo 29'
  }, {
    src: '/albums/album-7/30.jpg',
    alt: 'Album 7 photo 30'
  }, {
    src: '/albums/album-7/31.jpg',
    alt: 'Album 7 photo 31'
  }, {
    src: '/albums/album-7/32.jpg',
    alt: 'Album 7 photo 32'
  }]
}, {
  id: 'album-8',
  title: 'Album 8',
  eventType: 'Party',
  date: '2025-05-12',
  coverImage: '/albums/album-8/1.jpg',
  coverAlt: 'Album 8 cover image',
  description: 'Dummy description for Album 8 (edit this later).',
  featured: false,
  images: [{
    src: '/albums/album-8/1.jpg',
    alt: 'Album 8 photo 1'
  }, {
    src: '/albums/album-8/2.jpg',
    alt: 'Album 8 photo 2'
  }, {
    src: '/albums/album-8/3.jpg',
    alt: 'Album 8 photo 3'
  }, {
    src: '/albums/album-8/4.jpg',
    alt: 'Album 8 photo 4'
  }, {
    src: '/albums/album-8/5.jpg',
    alt: 'Album 8 photo 5'
  }, {
    src: '/albums/album-8/6.jpg',
    alt: 'Album 8 photo 6'
  }, {
    src: '/albums/album-8/7.jpg',
    alt: 'Album 8 photo 7'
  }, {
    src: '/albums/album-8/8.jpg',
    alt: 'Album 8 photo 8'
  }, {
    src: '/albums/album-8/9.jpg',
    alt: 'Album 8 photo 9'
  }, {
    src: '/albums/album-8/10.jpg',
    alt: 'Album 8 photo 10'
  }, {
    src: '/albums/album-8/11.jpg',
    alt: 'Album 8 photo 11'
  }, {
    src: '/albums/album-8/12.jpg',
    alt: 'Album 8 photo 12'
  }, {
    src: '/albums/album-8/13.jpg',
    alt: 'Album 8 photo 13'
  }, {
    src: '/albums/album-8/14.jpg',
    alt: 'Album 8 photo 14'
  }, {
    src: '/albums/album-8/15.jpg',
    alt: 'Album 8 photo 15'
  }, {
    src: '/albums/album-8/16.jpg',
    alt: 'Album 8 photo 16'
  }, {
    src: '/albums/album-8/17.jpg',
    alt: 'Album 8 photo 17'
  }, {
    src: '/albums/album-8/18.jpg',
    alt: 'Album 8 photo 18'
  }, {
    src: '/albums/album-8/19.jpg',
    alt: 'Album 8 photo 19'
  }]
}, {
  id: 'album-9',
  title: 'Album 9',
  eventType: 'Pre-shoot',
  date: '2025-04-07',
  coverImage: '/albums/album-9/1.jpg',
  coverAlt: 'Album 9 cover image',
  description: 'Dummy description for Album 9 (edit this later).',
  featured: false,
  images: [{
    src: '/albums/album-9/1.jpg',
    alt: 'Album 9 photo 1'
  }, {
    src: '/albums/album-9/2.jpg',
    alt: 'Album 9 photo 2'
  }, {
    src: '/albums/album-9/3.jpg',
    alt: 'Album 9 photo 3'
  }, {
    src: '/albums/album-9/4.jpg',
    alt: 'Album 9 photo 4'
  }, {
    src: '/albums/album-9/5.jpg',
    alt: 'Album 9 photo 5'
  }, {
    src: '/albums/album-9/6.jpg',
    alt: 'Album 9 photo 6'
  }, {
    src: '/albums/album-9/7.jpg',
    alt: 'Album 9 photo 7'
  }, {
    src: '/albums/album-9/8.jpg',
    alt: 'Album 9 photo 8'
  }, {
    src: '/albums/album-9/9.jpg',
    alt: 'Album 9 photo 9'
  }, {
    src: '/albums/album-9/10.jpg',
    alt: 'Album 9 photo 10'
  }, {
    src: '/albums/album-9/11.jpg',
    alt: 'Album 9 photo 11'
  }, {
    src: '/albums/album-9/12.jpg',
    alt: 'Album 9 photo 12'
  }, {
    src: '/albums/album-9/13.jpg',
    alt: 'Album 9 photo 13'
  }, {
    src: '/albums/album-9/14.jpg',
    alt: 'Album 9 photo 14'
  }, {
    src: '/albums/album-9/15.jpg',
    alt: 'Album 9 photo 15'
  }, {
    src: '/albums/album-9/16.jpg',
    alt: 'Album 9 photo 16'
  }, {
    src: '/albums/album-9/17.jpg',
    alt: 'Album 9 photo 17'
  }]
}, {
  id: 'album-10',
  title: 'Album 10',
  eventType: 'Private',
  date: '2025-03-01',
  coverImage: '/albums/album-10/1.jpg',
  coverAlt: 'Album 10 cover image',
  description: 'Dummy description for Album 10 (edit this later).',
  featured: false,
  images: [{
    src: '/albums/album-10/1.jpg',
    alt: 'Album 10 photo 1'
  }, {
    src: '/albums/album-10/2.jpg',
    alt: 'Album 10 photo 2'
  }, {
    src: '/albums/album-10/3.jpg',
    alt: 'Album 10 photo 3'
  }, {
    src: '/albums/album-10/4.jpg',
    alt: 'Album 10 photo 4'
  }, {
    src: '/albums/album-10/5.jpg',
    alt: 'Album 10 photo 5'
  }, {
    src: '/albums/album-10/6.jpg',
    alt: 'Album 10 photo 6'
  }, {
    src: '/albums/album-10/7.jpg',
    alt: 'Album 10 photo 7'
  }, {
    src: '/albums/album-10/8.jpg',
    alt: 'Album 10 photo 8'
  }, {
    src: '/albums/album-10/9.jpg',
    alt: 'Album 10 photo 9'
  }, {
    src: '/albums/album-10/10.jpg',
    alt: 'Album 10 photo 10'
  }, {
    src: '/albums/album-10/11.jpg',
    alt: 'Album 10 photo 11'
  }, {
    src: '/albums/album-10/12.jpg',
    alt: 'Album 10 photo 12'
  }, {
    src: '/albums/album-10/13.jpg',
    alt: 'Album 10 photo 13'
  }, {
    src: '/albums/album-10/14.jpg',
    alt: 'Album 10 photo 14'
  }, {
    src: '/albums/album-10/15.jpg',
    alt: 'Album 10 photo 15'
  }, {
    src: '/albums/album-10/16.jpg',
    alt: 'Album 10 photo 16'
  }, {
    src: '/albums/album-10/17.jpg',
    alt: 'Album 10 photo 17'
  }]
}];