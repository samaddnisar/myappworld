/**
 * Registers third-party components with NativeWind so they accept `className`.
 * Import this once, as early as possible (the root layout does so).
 */
import { Image } from 'expo-image';
import { cssInterop } from 'nativewind';

// Let `expo-image` be styled with Tailwind classes via `className`.
cssInterop(Image, { className: 'style' });
