import 'primeflex/primeflex.css';

window.prime = window.prime || {}
Object.assign(window.prime, {
    themes: [
        'dark',
        'light',
        'blue',
        'green',
        'orange',
        'purple'
    ],
    applyTheme: function (theme) {
        if (theme == 'light') {
            import('./themes/primeone-light.css')
        } else if (theme == 'dark') {
            import('./themes/primeone-dark.css')
        } else if (theme == 'blue') {
            import('./themes/blue.css')
        } else if (theme == 'green') {
            import('./themes/green.css')
        } else if (theme == 'orange') {
            import('./themes/orange.css')
        } else if (theme == 'purple') {
            import('./themes/purple.css')
        }
    },
    is_dark_mode: window.matchMedia('(prefers-color-scheme: dark)').matches
})

