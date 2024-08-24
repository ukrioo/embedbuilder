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
      c = document.getElementById("manualColorToggle"),
      ogImage = document.getElementById("ogImage"),
      ogImageAlt = document.getElementById("ogImageAlt").parentElement;

   function d() {
      let e = document.getElementById("charset").value.trim(),
         t = document.getElementById("viewport").value.trim(),
         n = document.getElementById("xuaCompatible").value.trim(),
         m = document.getElementById("robots").value.trim(),
         l = document.getElementById("title").value.trim(),
         r = document.getElementById("description").value.trim(),
         d = c.checked ? document.getElementById("themeColorManual").value.trim() : document.getElementById("themeColor").value.trim(),
         g = ogImage.value.trim(),
         y = g ? document.getElementById("ogImageAlt").value.trim() : "",
         s = a.checked ? document.getElementById("ogTitle").value.trim() : l,
         u = a.checked ? document.getElementById("ogDescription").value.trim() : r,
         E = document.getElementById("twitterCard").value.trim(),
         h = o.checked ? document.getElementById("twitterSite").value.trim() : "",
         p = o.checked ? document.getElementById("twitterCreator").value.trim() : "",
         I = o.checked ? document.getElementById("twitterImage").value.trim() : "",
         v = `
<!-- Primary Meta Tags -->\n${e ? `<meta http-equiv="CONTENT-TYPE" content="text/html; charset=${e}">\n` : ""}${t ? `<meta name="viewport" content="${t}">\n` : ""}${n ? `<meta http-equiv="X-UA-Compatible" content="${n}">\n` : ""}${m ? `<meta name="robots" content="${m}">\n` : ""}${l ? `<meta name="title" content="${l}">\n` : ""}${r ? `<meta name="description" content="${r}">\n` : ""}${d ? `<meta name="theme-color" content="${d}">\n` : ""}
<!-- Open Graph / Facebook -->\n${s ? `<meta property="og:title" content="${s}">\n` : ""}${u ? `<meta property="og:description" content="${u}">\n` : ""}${g ? `<meta property="og:url" content="${g}">\n` : ""}${g ? `<meta property="og:image" content="${g}">\n` : ""}${y ? `<meta property="og:image:alt" content="${y}">\n` : ""}
<!-- Twitter -->\n${E ? `<meta property="twitter:card" content="${E}">\n` : ""}${h ? `<meta name="twitter:site" content="${h}">\n` : ""}${p ? `<meta name="twitter:creator" content="${p}">\n` : ""}${I ? `<meta name="twitter:image" content="${I}">\n` : ""}`;

      i.value = v.trim();
   }

   a.addEventListener("change", function () {
      t.style.display = this.checked ? "block" : "none";
      d();
   });

   o.addEventListener("change", function () {
      l.style.display = this.checked ? "block" : "none";
      d();
   });

   c.addEventListener("change", function () {
      n.style.display = this.checked ? "none" : "inline";
      m.style.display = this.checked ? "inline" : "none";
      d();
   });

   ogImage.addEventListener("input", function () {
      ogImageAlt.style.display = this.value.trim() ? "block" : "none";
      d();
   });

   e.addEventListener("input", d);

   r.addEventListener("click", function () {
      i.select();
      document.execCommand("copy");
   });
});