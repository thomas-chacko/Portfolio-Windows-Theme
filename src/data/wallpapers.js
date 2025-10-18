import windowsWallpaper from '../assets/images/windows-wallaper.jpg'

// Wallpaper options for customization
export const wallpapers = [
  {
    id: 'default',
    name: 'Windows Default',
    gradient: null,
    image: windowsWallpaper,
    type: 'image'
  },
  {
    id: 'mountain',
    name: 'Mountain Lake',
    gradient: null,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop',
    type: 'image'
  },
  {
    id: 'sunset',
    name: 'Ocean Sunset',
    gradient: null,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=1080&fit=crop',
    type: 'image'
  },
  {
    id: 'forest',
    name: 'Misty Forest',
    gradient: null,
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&h=1080&fit=crop',
    type: 'image'
  },
  {
    id: 'aurora',
    name: 'Northern Lights',
    gradient: null,
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&h=1080&fit=crop',
    type: 'image'
  },
  {
    id: 'city',
    name: 'City Lights',
    gradient: null,
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&h=1080&fit=crop',
    type: 'image'
  }
];

// Theme color options
export const themeColors = [
  { id: 'blue', name: 'Blue', color: '#3b82f6', dark: '#1e40af' },
  { id: 'purple', name: 'Purple', color: '#a855f7', dark: '#7e22ce' },
  { id: 'green', name: 'Green', color: '#22c55e', dark: '#15803d' },
  { id: 'pink', name: 'Pink', color: '#ec4899', dark: '#be185d' },
  { id: 'orange', name: 'Orange', color: '#f97316', dark: '#c2410c' },
  { id: 'red', name: 'Red', color: '#ef4444', dark: '#b91c1c' },
  { id: 'teal', name: 'Teal', color: '#14b8a6', dark: '#0f766e' },
  { id: 'cyan', name: 'Cyan', color: '#06b6d4', dark: '#0e7490' }
];
