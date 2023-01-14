// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            },
            title: 'Nuxt3 example template',
            link: [
                {
                    rel: "stylesheet",
                    href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap'
                },
                {
                    rel: "stylesheet",
                    href: 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap'
                }
            ]
        }
    },
    css: [
        '@/assets/tailwind.css'
    ],
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge', '@nuxt/content', '@nuxtjs/color-mode', '@pinia/nuxt', '@intlify/nuxt3'
    ],
    content: {
        markdown: {
            mdc: true,
        },
        highlight: {
            // Theme used in all color schemes.
            // OR
            theme: {
                // Default theme (same as single string)
                default: 'github-light',
                // Theme used if `html.dark`
                dark: 'github-dark',
                // Theme used if `html.sepia`
                sepia: 'monokai',
            },
        },
    },
    colorMode: {
    preference: 'dark', // default mode
        classSuffix: '', // clear suffix "-mode"
},
})
