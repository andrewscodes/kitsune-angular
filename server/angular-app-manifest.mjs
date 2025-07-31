
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/andrewscodes/kitsune-angular',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/andrewscodes/kitsune-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 545, hash: 'f8ddfe3bb37265c6844799f36e0f1a829e7ce420d4fb4dce073e4e944d59edba', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1058, hash: '7f583fb673dcc9d0c0324f57cc1b4319d0d44987b55803041a06cdfe87ca1408', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20893, hash: '4dd15131cd8847074fad0077e086f1d8729f9e773cf7d392512e6f2d2161d3e8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
