/**
 * Prepends the configured base path (e.g. `/TheLimaPlank` for GitHub Pages
 * project sites) to any public-folder asset path. Use for raw `<img>` and
 * `style.backgroundImage` URLs — Next's `<Image>` and `<Link>` already
 * handle basePath automatically.
 */
export function asset(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (!path.startsWith('/')) return `${basePath}/${path}`;
  return `${basePath}${path}`;
}
