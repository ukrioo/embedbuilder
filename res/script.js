document.addEventListener("DOMContentLoaded", function () {
   let e = document.getElementById("metaForm"),
      t = document.getElementById("og-fields"),
      n = document.getElementById("themeColor"),
      m = document.getElementById("themeColorManual"),
      a = document.getElementById("customOG"),
      o = document.getElementById("showTwitterCustom"),
      l = document.getElementById("twitter-custom-fields"),
      i = document.getElementById("generatedMetaTags"),
      r = document.getElementById("copyButton"),
      c = document.getElementById("manualColorToggle");

   function d() {
      let e = document.getElementById("charset").value.trim(),
         t = document.getElementById("viewport").value.trim(),
         n = document.getElementById("xuaCompatible").value.trim(),
         m = document.getElementById("robots").value.trim(),
         l = document.getElementById("title").value.trim(),
         r = document.getElementById("description").value.trim(),
         d = c.checked ? document.getElementById("themeColorManual").value.trim() : document.getElementById("themeColor").value.trim(),
         g = document.getElementById("ogUrl").value.trim(),
         y = document.getElementById("ogImage").value.trim(),
         s = a.checked ? document.getElementById("ogTitle").value.trim() : l,
         u = a.checked ? document.getElementById("ogDescription").value.trim() : r,
         E = document.getElementById("twitterCard").value.trim(),
         h = o.checked ? document.getElementById("twitterSite").value.trim() : "",
         p = o.checked ? document.getElementById("twitterCreator").value.trim() : "",
         I = o.checked ? document.getElementById("twitterImage").value.trim() : "",
         v = `
<!-- Primary Meta Tags -->
${e?`<meta http-equiv="CONTENT-TYPE" content="text/html; charset=${e}">`:""}
${t?`<meta name="viewport" content="${t}">`:""}
${n?`<meta http-equiv="X-UA-Compatible" content="${n}">`:""}
${m?`<meta name="robots" content="${m}">`:""}
${l?`<meta name="title" content="${l}">`:""}
${r?`<meta name="description" content="${r}">`:""}
${d?`<meta name="theme-color" content="${d}">`:""}

<!-- Open Graph / Facebook -->
${s?`<meta property="og:title" content="${s}">`:""}
${u?`<meta property="og:description" content="${u}">`:""}
${g?`<meta property="og:url" content="${g}">`:""}
${y?`<meta property="og:image" content="${y}">`:""}

<!-- Twitter -->
${E?`<meta property="twitter:card" content="${E}">`:""}
${h?`<meta name="twitter:site" content="${h}">`:""}
${p?`<meta name="twitter:creator" content="${p}">`:""}
${I?`<meta name="twitter:image" content="${I}">`:""}`;
      i.value = v.trim()
   }
   a.addEventListener("change", function () {
      t.style.display = this.checked ? "block" : "none", d()
   }), o.addEventListener("change", function () {
      l.style.display = this.checked ? "block" : "none", d()
   }), c.addEventListener("change", function () {
      n.style.display = this.checked ? "none" : "inline", m.style.display = this.checked ? "inline" : "none", d()
   }), e.addEventListener("input", d), r.addEventListener("click", function () {
      i.select(), document.execCommand("copy")
   })
});