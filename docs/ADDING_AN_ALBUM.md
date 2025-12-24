# Adding an Album (Static)

This project is frontend-only (no backend). Albums are defined in code and images are served as static assets.

## 1) Copy your images into `public/albums/`

Vite serves everything under `public/` at the site root.

Recommended structure:

- `public/albums/<album-id>/cover.jpg`
- `public/albums/<album-id>/01.jpg`
- `public/albums/<album-id>/02.jpg`
- ...

Example:

- `public/albums/sarah-michael-wedding/cover.jpg`
- `public/albums/sarah-michael-wedding/01.jpg`

You will reference these in code as:

- `/albums/sarah-michael-wedding/cover.jpg`
- `/albums/sarah-michael-wedding/01.jpg`

## 2) Add the album entry in `src/data/albums.ts`

Open `src/data/albums.ts` and add a new object to the `albums` array.

Important fields:

- `id`: URL-safe unique id (used in `/albums/:id`)
- `title`: album title
- `eventType`: one of: `Wedding | Corporate | Graduation | Pre-shoot | Party | Private`
- `date`: `YYYY-MM-DD`
- `coverImage`: path to your cover image (usually in `public/albums/...`)
- `coverAlt`: accessible description for the cover image
- `description`: optional short description
- `featured`: `true` to show on the Landing page and Featured sections
- `images`: array of `{ src, alt, caption? }`

Template you can copy:

```ts
{
  id: 'my-new-album',
  title: 'My New Album',
  eventType: 'Wedding',
  date: '2025-12-24',
  coverImage: '/albums/my-new-album/cover.jpg',
  coverAlt: 'Bride and groom walking at sunset',
  description: 'A short description of the event (optional).',
  featured: true,
  images: [
    {
      src: '/albums/my-new-album/01.jpg',
      alt: 'Ceremony overview with guests seated',
      caption: 'The ceremony began at golden hour.'
    },
    {
      src: '/albums/my-new-album/02.jpg',
      alt: 'Close-up of rings on bouquet'
    }
  ]
}
```

## 3) Run locally

- `npm run dev`

## 4) Build for deployment

- `npm run build`

## Notes

- The UI expects every image to have meaningful `alt` text.
- Keeping filenames simple (e.g. `01.jpg`, `02.jpg`) makes maintenance easier.
- If you prefer, you can still use external image URLs instead of `/public` assets.
