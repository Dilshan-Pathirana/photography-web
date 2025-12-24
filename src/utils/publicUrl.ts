const ABSOLUTE_URL_RE = /^(?:[a-z][a-z0-9+.-]*:)?\/\//i;

/**
 * Resolves a path under Vite's publicDir (e.g. "albums/x.jpg" or "/albums/x.jpg")
 * against the configured base path (import.meta.env.BASE_URL).
 */
export function publicUrl(path: string): string {
  if (!path) return path;

  // Leave fully-qualified / special scheme URLs untouched.
  if (ABSOLUTE_URL_RE.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }

  const base = (import.meta.env.BASE_URL || '/').replace(/\s/g, '');
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const cleanedPath = path.startsWith('/') ? path.slice(1) : path;

  return `${normalizedBase}${cleanedPath}`;
}
