import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import PurgeIcons from 'rollup-plugin-purge-icons'
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy'

export default [
    {
        input: './src/components/Copyclipboard/index.js',
        output: [
            {
              file: 'dist/index.js',
              format: 'cjs',
            },
            {
              file: 'dist/index.es.js',
              format: 'es',
              exports: 'named',
            }
        ],
        plugins: [
            replace({
                preventAssignment: true,
		        'process.browser': true,
                "process.env.NODE_ENV": JSON.stringify("development")
            }),
            postcss({
                plugins: [],
                minimize: true,
            }),
            babel({
                "exclude": 'node_modules/**',
                "presets": ["@babel/preset-react"],
                "plugins": ["styled-jsx/babel", "babel-plugin-prismjs"]
            }),
            resolve(),
            external(),
            PurgeIcons(),
            terser(),
            copy({
                targets: [
                  { src: ['./README.md', './assets'], dest: 'dist/public' }
                ]
            }),
        ],
        external: ['copy-to-clipboard', 'prismjs', 'classnames'],
        onwarn: function(warning) {
            // Skip certain warnings
         
            // should intercept ... but doesn't in some rollup versions
            if (warning.code === 'THIS_IS_UNDEFINED') {
               return;
            }
         
            // console.warn everything else
            console.warn(warning.message);
         }
    }
];