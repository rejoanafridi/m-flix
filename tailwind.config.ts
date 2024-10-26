// tailwind.config.js

module.exports = {
    // Enabling JIT for faster development
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            // Custom rem-based font sizes
            fontSize: {
                '110px': ['6.875rem', { lineHeight: '7.1875rem' }], // 110px / 115 line-height
                '90px': ['5.625rem', { lineHeight: '6.125rem' }], // 90px / 98 line-height
                '64px': ['4rem', { lineHeight: '4.25rem' }], // 64px / 68 line-height
                '54px': ['3.375rem', { lineHeight: '3.625rem' }], // 54px / 60 line-height
                '48px': ['3rem', { lineHeight: '3.25rem' }], // 48px / 52 line-height
                '36px': ['2.25rem', { lineHeight: '2.5rem' }], // 36px / 48 line-height
                '24px': ['1.5rem', { lineHeight: '2rem' }], // 24px / 32 line-height
                '20px': ['1.25rem', { lineHeight: '1.5rem' }], // 20px / 24 line-height
                '16px': ['1rem', { lineHeight: '1.5rem' }], // 16px / 24 line-height
                '12px': ['0.75rem', { lineHeight: '1.5rem' }] // 12px / 18 line-height
            },
            // Custom line heights
            lineHeight: {
                '115': '7.1875rem', // 115px line-height
                '98': '6.125rem', // 98px line-height
                '68': '4.25rem', // 68px line-height
                '60': '3.75rem', // 60px line-height
                '52': '3.25rem', // 52px line-height
                '48': '3rem', // 48px line-height
                '32': '2rem', // 32px line-height
                'fluid-lg': 'clamp(1.5rem, 2vw + 1rem, 3rem)'
            },

            // Custom colors based on your Figma design
            colors: {
                'primary-lite': '#FFFFFF', // White primary color
                'primary1-dark': '#363738', // Updated to Primary 1 color
                secondary: '#F5F5F5', // Updated to Second color
                secondary1: '#FEFAF1', // Updated to Second 1 color
                secondary2: '#DB4444', // Existing value
                text: '#FAFAFA', // Updated to Text 1 color
                text1: '#7D8181', // Updated to Text 2 color
                text2: '#000000', // Updated to Text 2 color
                button: '#000000',
                button1: '#47B486', // Updated to Button 1 color
                'button-hover': '#E2B93B', // Updated to Hover Button color
                button2: '#DB4444', // Existing value
                'button2-hover': '#E07575' // Updated to Hover Button color
            },
            // Tailwind Typography Configurations
            typography: (theme: (arg0: string) => unknown) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.text'),
                        maxWidth: '100%',
                        h1: {
                            fontSize: theme('fontSize.110px'),
                            fontWeight: 'bold',
                            lineHeight: theme('lineHeight.115')
                        },
                        h2: {
                            fontSize: theme('fontSize.90px'),
                            fontWeight: 'semi-bold',
                            lineHeight: theme('lineHeight.98')
                        },
                        h3: {
                            fontSize: theme('fontSize.64px'),
                            fontWeight: 'medium',
                            lineHeight: theme('lineHeight.68')
                        },
                        h4: {
                            fontSize: theme('fontSize.48px'),
                            fontWeight: 'semi-bold',
                            lineHeight: theme('lineHeight.52')
                        },
                        p: {
                            fontSize: theme('fontSize.24px'),
                            lineHeight: theme('lineHeight.32'),
                            color: theme('colors.text1')
                        },
                        strong: {
                            fontWeight: 'bold'
                        },
                        a: {
                            color: theme('colors.button'),
                            '&:hover': {
                                color: theme('colors.button-hover')
                            }
                        },
                        blockquote: {
                            fontSize: theme('fontSize.36px'),
                            lineHeight: theme('lineHeight.48'),
                            color: theme('colors.text2'),
                            borderLeftColor: theme('colors.primary1')
                        }
                    }
                }
            })
        }
    },
    plugins: [
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('@tailwindcss/typography') // Adds support for better typography handling
    ],
    safelist: [
        'text-110px',
        'text-90px',
        'text-64px',
        'text-54px',
        'text-48px',
        'text-36px',
        'text-24px',
        'leading-115',
        'leading-98',
        'leading-68',
        'leading-52',
        'leading-48',
        'leading-32'
    ]
}
