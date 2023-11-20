interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Mike Hoang',
	title: 'Mike Hoang - Software Developer',
	description:
		'Mike Hoang is a software developer with a passion for creating innovative web applications, who always strive to make the complex seem effortless.',
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
