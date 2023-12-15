/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
	readonly SUPABASE_URL: string
	readonly SUPABASE_ANON_KEY: string
	readonly SUPABASE_SERVICE_KEY: string
	readonly BASE_URL: string
	readonly PUBLIC_GITHUB_TOKEN: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
