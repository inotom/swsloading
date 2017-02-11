const m = require('mithril');

module.exports = {
  oninit: function(vnode) {
    vnode.attrs.color = vnode.attrs.color ? vnode.attrs.color : '#666';
    vnode.attrs.size = vnode.attrs.size ? vnode.attrs.size : 100;
    vnode.attrs.id = vnode.attrs.id ? vnode.attrs.id : 'swsloading';
    let pathes = [];
    for (let i = 0, r = 0; r < 360; i++, r = r + 30) {
      pathes.push({
        opacity: 0.1 + (0.05 * i),
        d: 'M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z',
        transform: 'rotate(' + r + ' 50 50)'
      });
    }
    vnode.attrs.pathes = pathes;

    let elStyle = document.createElement('STYLE');
    elStyle.setAttribute('id', 'swsloading-style-' + vnode.attrs.id);
    let animName = vnode.attrs.id + '-swsloading';
    elStyle.innerHTML = '#' + vnode.attrs.id + ' {' +
      '-webkit-animation: ' + animName + ' 1s infinite steps(12);' +
      'animation: ' + animName + ' 1s infinite steps(12);' +
      '}' +
      '@keyframes ' + animName + ' {' +
      'to {' +
      '-webkit-transform: rotate(360deg);' +
      'transform: rotate(360deg);' +
      '}' +
      '}';
    document.head.appendChild(elStyle);
  },
  view: function(vnode) {
    return m('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: '0 0 100 100',
      'enable-background': 'new 0 0 100 100',
      fill: vnode.attrs.color,
      width: vnode.attrs.size,
      height: vnode.attrs.size,
      id: vnode.attrs.id,
      className: vnode.attrs.id,
    }, vnode.attrs.pathes.map(function(path) {
      return m('path', path);
    }));
  }
};
