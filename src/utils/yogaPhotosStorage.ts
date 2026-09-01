import { Language } from '../types';

export interface CustomYogaPhotoData {
  imageDataUrl?: string;
  zoom?: number;
  objectFit?: 'cover' | 'contain';
  customTitle?: Record<Language, string>;
  customDescription?: Record<Language, string>;
}

export type CustomYogaPhotosMap = Record<string, CustomYogaPhotoData>;

export const YOGA_PHOTOS_STORAGE_KEY = 'curiousmoves_yoga_custom_photos_v1';
export const YOGA_PHOTOS_UPDATED_EVENT = 'curiousmoves_yoga_photos_updated';

// Safe load from localStorage
export function loadCustomYogaPhotos(): CustomYogaPhotosMap {
  try {
    const raw = localStorage.getItem(YOGA_PHOTOS_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as CustomYogaPhotosMap;
  } catch (e) {
    console.warn('Could not load custom yoga photos from storage', e);
    return {};
  }
}

// Safe save to localStorage & notify listeners
export function saveCustomYogaPhotos(photos: CustomYogaPhotosMap): boolean {
  try {
    localStorage.setItem(YOGA_PHOTOS_STORAGE_KEY, JSON.stringify(photos));
    window.dispatchEvent(new CustomEvent(YOGA_PHOTOS_UPDATED_EVENT, { detail: photos }));
    return true;
  } catch (e) {
    console.error('Failed to save yoga photos to localStorage', e);
    return false;
  }
}

// Compress and convert File to optimized DataURL
export function compressImageFile(
  file: File,
  maxDimension = 1200,
  quality = 0.85
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('File reading failed'));
    reader.onload = (e) => {
      const result = e.target?.result as string;
      const img = new Image();
      img.onerror = () => reject(new Error('Image decode failed'));
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxDimension) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(result);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const compressed = canvas.toDataURL('image/jpeg', quality);
        resolve(compressed);
      };
      img.src = result;
    };
    reader.readAsDataURL(file);
  });
}

// Fetch list of photos saved on the server
export async function fetchServerYogaPhotosList(): Promise<string[]> {
  try {
    const res = await fetch('/api/yoga-gallery');
    if (!res.ok) return [];
    const data = await res.json();
    return data.photos || [];
  } catch {
    return [];
  }
}

// Upload a single photo to server
export async function uploadYogaPhotoToServer(itemId: string, file: File): Promise<string | null> {
  try {
    const compressedDataUrl = await compressImageFile(file, 1200, 0.85);
    const res = await fetch(`/api/yoga-gallery/${itemId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageBase64: compressedDataUrl }),
    });
    if (!res.ok) throw new Error('Server upload failed');
    const data = await res.json();

    // Also update local storage for immediate cache
    const current = loadCustomYogaPhotos();
    const updated: CustomYogaPhotosMap = {
      ...current,
      [itemId]: {
        ...(current[itemId] || {}),
        imageDataUrl: `/api/yoga-gallery/${itemId}?t=${Date.now()}`,
        objectFit: 'cover',
      },
    };
    saveCustomYogaPhotos(updated);
    return data.url;
  } catch (err) {
    console.error('Error uploading photo to server:', err);
    return null;
  }
}
