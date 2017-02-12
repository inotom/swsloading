const swsloading = require('swsloading');

const appMain = {
    oninit: function(vnode) {
      vnode.attrs.msg = '';

      setTimeout(function() {
        vnode.attrs.msg = 'Hello, World!';
      }, 3000);
    },
    view: function(vnode) {

      let msg = vnode.attrs.msg;

      if (msg.length > 0) {
        return m('h1', msg);
      }
      return m(swsloading, {
        color: '#633',
        size: 300,
        id: 'my-loading'
      });
    }
};

window.addEventListener('DOMContentLoaded', function() {
  m.mount(document.body, {
    view: function() {
      return m(appMain);
    }
  });
}, false);
