function Qn(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  
  function Kn(e,dec2) {
    var n,
      r = Qn(e);
    for (e = 0; r; ) {
      if (3 === r.nodeType) {
        if (((n = e + r.textContent.length),e <=dec2 && n >=dec2)
        )
          return {
            node: r,
            offset:dec2 - e,
          };
        e = n;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Qn(r);
    }
  }
  