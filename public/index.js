/*
* @Author: chengbs
* @Date:   2018-04-25 23:19:16
* @Last Modified by:   chengbs
* @Last Modified time: 2018-04-26 11:40:38
*/
/* eslint-disable */
window.onload = function() {
  if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body)
    }, false)
  }
  if (!window.Promise) {
    document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"' + '>' + '<' + '/' + 'script>')
  }

  addEventListener('resize', setRemUnit);
  addEventListener('pageshow', function (e) {
    e.persisted && setRemUnit();
  });
  setRemUnit();

  function setRemUnit() {
    var docEle = document.documentElement;
    var rootValue = docEle.clientWidth / 3.75;
    docEle.style.fontSize = rootValue + 'px';
  }
}

