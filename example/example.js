/* global m */

var swsloading = require('swsloading');

var Data = {
  msg: ''
};

var appMain = {
    oninit: function() {
      setTimeout(function() {
        Data.msg = 'Hello, World!';
        m.redraw();
      }, 3000);
    },
    view: function() {

      var msg = Data.msg;

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
