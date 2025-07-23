/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_TIKTOK_PIXEL_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
} 