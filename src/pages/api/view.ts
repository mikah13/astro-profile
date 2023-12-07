import type { APIRoute } from 'astro'
import { supabase } from 'src/utils/db'

export const GET: APIRoute = async ({ params, request }) => {
	try {
		console.log({ params })

		let { data, error } = await supabase
			.from('pageview')
			.select()
			.eq('pageview.pageid', 'test')

		console.log(data)
		if (error) return new Response(JSON.stringify(error))
		else return new Response(JSON.stringify(data))
	} catch (error) {}

	return new Response(
		JSON.stringify({
			name: 'Astro',
			url: 'https://astro.build/',
		})
	)
}
