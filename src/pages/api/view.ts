import type { APIRoute } from 'astro'
import { supabase } from 'src/utils/db'

export const GET: APIRoute = async (context) => {
	try {
		const params = context.url.searchParams
		const id = params.get('id')?.trim() || ''
		let { data, error } = await supabase.from('PageView').select('*').eq('pageid', id)

		if (data && data.length === 1) {
			const updateRecord = await supabase
				.from('PageView')
				.update({ total: data[0].total + 1 })
				.eq('pageid', id)
				.select()
			return new Response(JSON.stringify(updateRecord))
		} else {
			const upsertRecord = await supabase.from('PageView').upsert({ pageid: id, total: 1 }).select()
			return new Response(JSON.stringify(upsertRecord))
		}

		if (error) return new Response(JSON.stringify(error))
		else return new Response(JSON.stringify(data))
	} catch (error) {
		return new Response(JSON.stringify(error))
	}

	return new Response(
		JSON.stringify({
			name: 'Astro',
			url: 'https://astro.build/'
		})
	)
}
