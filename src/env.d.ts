/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
	readonly SUPABASE_URL: string
	readonly SUPABASE_ANON_KEY: string
	readonly SUPABASE_SERVICE_KEY: string
	readonly BASE_URL: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
