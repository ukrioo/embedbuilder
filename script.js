function removeAllMetaTags() {
   let e = document.querySelectorAll("meta");
   e.forEach(e => e.remove())
}

function updateMetaTag(e, t, a = !0) {
   let r = document.createElement("meta");
   r.setAttribute(a ? "property" : "name", e), r.setAttribute("content", t), document.head.appendChild(r)
}

function processMetaTags() {
   let e = new URLSearchParams(window.location.search);
   e.toString() && removeAllMetaTags(), e.forEach((e, t) => {
      let a = decodeURIComponent(e);
      switch (t) {
         case "title":
            updateMetaTag("og:title", a), updateMetaTag("title", a, !1);
            break;
         case "description":
         case "desc":
            updateMetaTag("og:description", a), updateMetaTag("description", a, !1);
            break;
         case "color":
            updateMetaTag("theme-color", a, !1);
            break;
         case "url":
            updateMetaTag("og:url", a);
            break;
         case "image":
         case "img":
            updateMetaTag("og:image", a);
            break;
         case "img-property":
            "large" === a && updateMetaTag("twitter:card", "summary_large_image", !1);
            break;
         default:
            console.warn(`Unhandled property: ${t}`)
      }
   })
}

function generateURL() {
   let e = window.location.origin + window.location.pathname + "?",
      t = new URLSearchParams,
      a = document.getElementById("title").value.trim();
   a && t.append("title", encodeURIComponent(a));
   let r = document.getElementById("description").value.trim();
   r && t.append("desc", encodeURIComponent(r));
   let l = document.getElementById("color").value.trim();
   l && t.append("color", encodeURIComponent(l));
   let n = document.getElementById("url").value.trim();
   n && t.append("url", encodeURIComponent(n));
   let o = document.getElementById("image").value.trim();
   o && t.append("img", encodeURIComponent(o));
   let i = document.getElementById("img-property").value;
   i && t.append("img-property", i);
   let c = e + t.toString();
   document.getElementById("generatedURL").value = c
}
document.querySelectorAll("#metaForm input, #metaForm select").forEach(e => {
   e.addEventListener("input", generateURL)
}), document.getElementById("copyButton").addEventListener("click", () => {
   let e = document.getElementById("generatedURL");
   e.select(), e.setSelectionRange(0, 99999), navigator.clipboard.writeText(e.value).then(() => {
      alert("URL copied to clipboard")
   }).catch(e => {
      console.error("Failed to copy URL", e)
   })
}), window.onload = processMetaTags;