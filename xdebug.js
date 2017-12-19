javascript:
var xd = 'XDEBUG_SESSION_START=1';
var dl = document.location;

if (dl.href.indexOf(xd) == -1) {
  var h, l;
  [l, h] = dl.href.split('#');

  if (h == undefined) {
    h = '';
  }
  else {
    h = '#' + h;
  }

  if (l.indexOf(xd) == -1) {
    if (l.indexOf('?') > -1) {
      dl.href = l + '&' + xd + h;
    }
    else {
      dl.href = l + '?' + xd + h;
    }
  }
}
