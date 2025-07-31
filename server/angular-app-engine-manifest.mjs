
export default {
  basePath: 'https://github.com/andrewscodes/kitsune-angular',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
