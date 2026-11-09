import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { imageSize } from 'image-size';

/** Width/height of a local image under /public (so <img> can reserve space and avoid layout shift). Remote URLs return {}. */
export function dims(src?: string): { width?: number; height?: number } {
  if (!src || !src.startsWith('/')) return {};
  try {
    const { width, height } = imageSize(readFileSync(join(process.cwd(), 'public', src)));
    return { width, height };
  } catch {
    return {};
  }
}
