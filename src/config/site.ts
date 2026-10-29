/**
 * Site configuration for Quishing Awareness.
 * Resolves the public deployed website URL used to generate scannable QR codes.
 * Ensures the QR code points to the real deployed website URL and never to localhost.
 */

export const DEFAULT_PRODUCTION_URL = "https://quishing-awareness.vercel.app";

/**
 * Returns the configured production / deployed site URL.
 * Checks in order:
 * 1. NEXT_PUBLIC_SITE_URL environment variable
 * 2. Vercel deployment environment variables
 * 3. Fallback default production URL (never localhost)
 */
export function getDeployedSiteUrl(): string {
  // 1. Explicitly configured URL in environment variables
  if (
    process.env.NEXT_PUBLIC_SITE_URL &&
    process.env.NEXT_PUBLIC_SITE_URL.trim() !== ""
  ) {
    return process.env.NEXT_PUBLIC_SITE_URL.trim().replace(/\/+$/, "");
  }

  // 2. Vercel deployment URLs (set automatically by Vercel platform)
  if (process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL.trim().replace(
      /\/+$/,
      ""
    )}`;
  }
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL.trim().replace(
      /\/+$/,
      ""
    )}`;
  }

  // 3. Fallback production URL (ensures QR code remains scannable and never uses localhost)
  return DEFAULT_PRODUCTION_URL;
}

/**
 * Returns the full destination URL for the /gotcha awareness route.
 */
export function getGotchaUrl(): string {
  const baseUrl = getDeployedSiteUrl();
  return `${baseUrl}/gotcha`;
}

