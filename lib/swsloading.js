var m = require('mithril');

module.exports = {
  controller: function(args) {
    var pathes = [
      {
        "opacity": ".1",
        "d": "M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z",
        "transform": "rotate(0 50 50)",
        "animate": {
          "attributeName": "opacity",
          "from": "1",
          "to": ".1",
          "dur": "1s",
          "repeatCount": "indefinite",
          "begin": "0"
        }
      },
      {
        "opacity": ".1",
        "d": "M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z",
        "transform": "rotate(30 50 50)",
        "animate": {
          "attributeName": "opacity",
          "from": "1",
          "to": ".1",
          "dur": "1s",
          "repeatCount": "indefinite",
          "begin": "0.0833"
        }
      },
      {
        "opacity": ".1",
        "d": "M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z",
        "transform": "rotate(60 50 50)",
        "animate": {
          "attributeName": "opacity",
          "from": "1",
          "to": ".1",
          "dur": "1s",
          "repeatCount": "indefinite",
          "begin": "0.1666"
        }
      },
      {
        "opacity": ".1",
        "d": "M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z",
        "transform": "rotate(90 50 50)",
        "animate": {
          "attributeName": "opacity",
          "from": "1",
          "to": ".1",
          "dur": "1s",
          "repeatCount": "indefinite",
          "begin": "0.2499"
        }
      },
      {
        "opacity": ".1",
        "d": "M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z",
        "transform": "rotate(120 50 50)",
        "animate": {
          "attributeName": "opacity",
          "from": "1",
          "to": ".1",
          "dur": "1s",
          "repeatCount": "indefinite",
          "begin": "0.3332"
        }
      },
      {
        "opacity": ".1",
        "d": "M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z",
        "transform": "rotate(150 50 50)",
        "animate": {
          "attributeName": "opacity",
          "from": "1",
          "to": ".1",
          "dur": "1s",
          "repeatCount": "indefinite",
          "begin": "0.4165"
        }
      },
      {
        "opacity": ".1",
        "d": "M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z",
        "transform": "rotate(180 50 50)",
        "animate": {
          "attributeName": "opacity",
          "from": "1",
          "to": ".1",
          "dur": "1s",
          "repeatCount": "indefinite",
          "begin": "0.4998"
        }
      },
      {
        "opacity": ".1",
        "d": "M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z",
        "transform": "rotate(210 50 50)",
        "animate": {
          "attributeName": "opacity",
          "from": "1",
          "to": ".1",
          "dur": "1s",
          "repeatCount": "indefinite",
          "begin": "0.5831"
        }
      },
      {
        "opacity": ".1",
        "d": "M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z",
        "transform": "rotate(240 50 50)",
        "animate": {
          "attributeName": "opacity",
          "from": "1",
          "to": ".1",
          "dur": "1s",
          "repeatCount": "indefinite",
          "begin": "0.6664"
        }
      },
      {
        "opacity": ".1",
        "d": "M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z",
        "transform": "rotate(270 50 50)",
        "animate": {
          "attributeName": "opacity",
          "from": "1",
          "to": ".1",
          "dur": "1s",
          "repeatCount": "indefinite",
          "begin": "0.7497"
        }
      },
      {
        "opacity": ".1",
        "d": "M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z",
        "transform": "rotate(300 50 50)",
        "animate": {
          "attributeName": "opacity",
          "from": "1",
          "to": ".1",
          "dur": "1s",
          "repeatCount": "indefinite",
          "begin": "0.833"
        }
      },
      {
        "opacity": ".1",
        "d": "M49.908,0.872c-1.797,0-3.254,1.457-3.254,3.254v17.35c0,1.797,1.457,3.254,3.254,3.254 c1.798,0,3.255-1.457,3.255-3.254V4.126C53.163,2.329,51.706,0.872,49.908,0.872z",
        "transform": "rotate(330 50 50)",
        "animate": {
          "attributeName": "opacity",
          "from": "1",
          "to": ".1",
          "dur": "1s",
          "repeatCount": "indefinite",
          "begin": "0.9163"
        }
      }
    ];
    var color = args.color ? m.prop(args.color) : m.prop('#666');
    var size = args.size ? m.prop(args.size) : m.prop(100);
    return {
      pathes: pathes,
      color: color,
      size: size
    };
  },
  view: function(ctrl) {
    return m('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      viewBox: '0 0 100 100',
      'enable-background': 'new 0 0 100 100',
      fill: ctrl.color(),
      width: ctrl.size(),
      height: ctrl.size()
    }, ctrl.pathes.map(function(path) {
      return m('path', {
        opacity: path.opacity,
        d: path.d,
        transform: path.transform
      }, [
        m('animate', {
          attributeName: path.animate.attributeName,
          from: path.animate.from,
          to: path.animate.to,
          dur: path.animate.dur,
          repeatCount: path.animate.repeatCount,
          begin: path.animate.begin
        })
      ]);
    }));
  }
};
