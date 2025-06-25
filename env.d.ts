/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Vite import.meta.glob types
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
  glob<T = any>(pattern: string, options?: { eager?: boolean }): Record<string, T>
}

// Laravel route helper (if you use it)
declare function route(name: string, params?: any): string;

// Global axios
declare const axios: import('axios').AxiosInstance;
