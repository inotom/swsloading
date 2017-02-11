var m = require('mithril');

module.exports = {
  controller: function(args) {
    var color = args.color ? args.color : '#666';
    var size = args.size ? args.size : 100;
    var id = args.id ? args.id : 'swsloading';
    var pathes = [];
    for (var i = 0, r = 0; r < 360; i++, r = r + 30) {
      pathes.push({
        opacity: 0.1 + (0.05 * i),
        d: 'M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z',
        transform: 'rotate(' + r + ' 50 50)'
      });
    }
    return {
      color: color,
      size: size,
      id: id,
      pathes: pathes
    };
  },
  view: function(ctrl) {
    return m('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: '0 0 100 100',
      'enable-background': 'new 0 0 100 100',
      fill: ctrl.color,
      width: ctrl.size,
      height: ctrl.size,
      id: ctrl.id,
      className: ctrl.id,
      config: function(el, isInitialized) {
        if (!isInitialized) {
          var elStyle = document.createElement('STYLE');
          elStyle.setAttribute('id', 'swsloading-style-' + ctrl.id);
          var animName = ctrl.id + '-swsloading';
          elStyle.innerHTML = '#' + ctrl.id + ' {' +
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
        }
      }
    }, ctrl.pathes.map(function(path) {
      return m('path', path);
    }));
  }
};
