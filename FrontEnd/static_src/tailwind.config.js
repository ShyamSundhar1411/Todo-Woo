module.exports = {
    /**
     * Stylesheet generation mode.
     *
     * Set mode to "jit" if you want to generate your styles on-demand as you author your templates;
     * Set mode to "aot" if you want to generate the stylesheet in advance and purge later (aka legacy mode).
     */
    mode: "jit",

    purge: [

        /*
         * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
         * Adjust the following line to match your project structure.
         */
        '../../todo/templates/todo/*.html',


    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      backgroundColor: theme => ({
       'primary': '#3490dc',
       'secondary': '#ffed4a',
       'danger': '#e3342f',
     }),
        extend: {
          animation: {
            'spin-slow':'spin 3s linear infinite',
        },

  }
},
    variants: {
        extend: {
          animation: ['hover', 'focus'],
          backgroundBlendMode: ['hover', 'focus'],
          divideColor: ['group-hover'],
          gradientColorStops: ['active', 'group-hover'],
          padding: ['hover'],
          textColor: ['responsive', 'hover', 'focus', 'group-hover'],
          backgroundColor: ['active'],
        },
    },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
