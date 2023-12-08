import type { APIRoute } from 'astro'
import { supabase } from 'src/utils/db'

export const GET: APIRoute = async (context) => {
	try {
		const params = context.url.searchParams
		const id = params.get('id')?.trim() || ''
		let record = await supabase.from('PageView').select('*').eq('pageid', id)

		return new Response(JSON.stringify(record))
	} catch (error) {
		return new Response(JSON.stringify(error))
	}

	return new Response(JSON.stringify({ message: 'failed' }))
}
