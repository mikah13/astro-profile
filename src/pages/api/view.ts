import type { APIRoute } from 'astro'
import { supabase } from 'src/utils/db'

export const GET: APIRoute = async ({ params, request }) => {
	try {
		const runPageView = await supabase.rpc('increment_views', { page_slug: req.body.slug })
	} catch (error) {}

	return new Response(
		JSON.stringify({
			name: 'Astro',
			url: 'https://astro.build/'
		})
	)
}
