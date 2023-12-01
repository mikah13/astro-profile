<div align="center">

<hr/>

<h3 align="center">
 Hi, I'm Mike Hoang and this is my personal website built with Astro
</h3>

</div>

## 📌 Table Of Contents

- [📌 Table Of Contents](#-table-of-contents)
- [🦙 Tina CMS](#-tina-cms)
- [💪 Features:](#-features)
- [⚙️ Stack](#️-stack)
- [👨🏻‍💻 Running Locally](#-running-locally)
- [📐 Configure](#-configure)
- [🧞 Commands](#-commands)

## 🦙 Tina CMS

By default, this template comes pre-configured with Tina CMS.

Now you can create your posts directly from the CMS without the need to do it manually.

If you decide to use Tina, it's not necessary to add any properties to the Markdown files, Tina does it automatically.

The documentation for Tina CMS can be found [here](https://tina.io/docs/)

> Tina is completely optional, and you can remove it, and it will still function in the same way.

## 💪 Features:

<p align="center">
  <a href="https://pagespeed.web.dev/analysis/https-blog-template-gray-vercel-app/7ovjfewos9?form_factor=mobile">
    <img width="510" alt="openblog Lighthouse Score" src="public/openblog-lighthouse-score.svg">
  <a>
</p>
    
- ✅ Minimal styling
- ✅ Mobile responsive
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support
- ✅ Syntax highlighting
- ✅ Image optimization
- ✅ Table of contents
- ✅ Dark mode
- ✅ Reading Time
- ✅ [Pagefind](https://pagefind.app/) static search library integration
- ✅ Related posts
- ✅ Share posts (Linkedin, twitter)
- ✅ Draft mode
- ✅ Copy code block
- ✅ CMS in the repository (Tina CMS)
- ✅ Pagination
- ✅ ViewTransition (new)

## ⚙️ Stack

- [**ASTRO** + **Typescript**](https://astro.build/) - Astro is the all-in-one web framework designed for speed.
- [**Tailwind CSS** + **Tailwind-Merge** + **clsx**](https://tailwindcss.com/) - Tailwind CSS is a utility-first CSS framework.
- [**Tabler Icons**](https://tabler-icons.io/i/) - A open source SVG icons.
- [**Eslint**](https://eslint.org/) - ESLint is an open source project that helps you find and fix problems.
- [**Prettier**](https://prettier.io/) - Code formatter.
- [**Search Library**](https://pagefind.app/) - Static search library integration.
- [**Motion**](https://motion.dev/) - Motion One is the smallest fully-featured animation library for the web.
- [**Tina CMS**](https://tina.io/) - CMS.

## 👨🏻‍💻 Running Locally

**Recommended extensions for VSCode:**

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).
- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode).

1. Clone or [fork](https://github.com/danielcgilibert/blog-template/fork) the repository:

```bash
git@github.com:danielcgilibert/blog-template.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

## 📐 Configure

- Edit the configuration file **src/data/site.config.ts** for the basic blog metadata.
- Update the **astro.config.mjs** file at the root of the project with your own domain.
- Modify the files in the **/public** folder:
  - favicon
  - robots.txt -> update the Sitemap url to your own domain
  - open-graph -> the open-graph is the image that will be displayed when sharing the blog link. For posts, the preview image is the post cover.
- Edit the social networks in the Header component - **src/components/Header.astro**, change the URL to your social network.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                                                                                                           |
| :---------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`          | Installs dependencies                                                                                                            |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`                                                                                      |
| `pnpm run build`        | Build your production site to `./dist/`                                                                                          |
| `pnpm run preview`      | Preview your build locally, before deploying                                                                                     |
| `pnpm run format:check` | Check code format with Prettier                                                                                                  |
| `pnpm run format`       | Format codes with Prettier                                                                                                       |
| `pnpm run sync`         | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `pnpm run lint`         | Lint with ESLint                                                                                                                 |
