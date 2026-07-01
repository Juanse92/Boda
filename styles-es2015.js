(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url(\"https://fonts.googleapis.com/css2?family=Italianno&display=swap\");\n@charset \"UTF-8\";\n/* =============================================\n   GLOBAL STYLES — Wedding Invitation\n   ============================================= */\n*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n:root {\n  color-scheme: only light;\n  /* 'only' prohíbe a Edge/Chrome forzar tema oscuro */\n  --color-blush: #f0d9d0;\n  --color-rose: #c9847a;\n  --color-rosedark: #9e5c55;\n  --color-gold: #c9a96e;\n  --color-golddark: #9e7a42;\n  --color-cream: #faf6f1;\n  --color-white: #ffffff;\n  --color-dark: #2c2421;\n  --color-dark2: #000000;\n  --color-gray: #7a6e6b;\n  --color-azulbaby: #89CFF0;\n  --color-azulbabydark: #5DADE2;\n  --color-lightyellow: #fddfb5;\n  --color-cafedark: #36312a;\n  --color-cafe: #837869;\n  --ff-serif: \"Cormorant Garamond\", serif;\n  --ff-sans: \"Montserrat\", sans-serif;\n  --ff-cursive: \"Italianno\", cursive;\n  --ff-tthoves: \"TTHoves\", serif;\n  --ff-glacial: \"Glacial Indifference\", sans-serif;\n  --max-w: 1100px;\n  --section-pad: 1rem 1.5rem;\n}\nhtml {\n  scroll-behavior: smooth;\n  font-size: 16px;\n  color-scheme: only light;\n}\n/* Bloqueo explícito de Force Dark — Samsung Browser aplica filter:invert() a toda la página */\n@media (prefers-color-scheme: dark) {\n  :root {\n    color-scheme: only light;\n  }\n\n  /* Cancelamos el filtro que Samsung Browser inyecta */\n  html {\n    -webkit-filter: none !important;\n            filter: none !important;\n    background-color: #f7eed8 !important;\n    color: #2c2421 !important;\n  }\n\n  body {\n    -webkit-filter: none !important;\n            filter: none !important;\n    background-color: #f7eed8 !important;\n    color: #2c2421 !important;\n  }\n\n  /* Restauramos todos los contenedores principales */\n  section, div, header, footer, nav, main, article, aside {\n    -webkit-filter: none !important;\n            filter: none !important;\n    background-color: unset;\n    color: unset;\n  }\n\n  /* Evitamos que Samsung invierta las imágenes */\n  img, video, canvas, svg {\n    -webkit-filter: none !important;\n            filter: none !important;\n  }\n}\nbody {\n  font-family: var(--ff-sans);\n  color: var(--color-dark);\n  line-height: 1.7;\n  overflow-x: hidden;\n  background-color: #f7eed8;\n  /* Esto genera un ruido visual muy suave que rompe con el blanco plano */\n  background-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E\");\n}\nh1, h2, h3 {\n  font-family: var(--ff-serif);\n  font-weight: 300;\n  line-height: 1.2;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nimg {\n  max-width: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXGpzYnRfXFxPbmVEcml2ZVxcRXNjcml0b3Jpb1xcTWkgcGFnZS9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFJUSw4RUFBQTtBQ0pSLGdCQUFnQjtBREFoQjs7a0RBQUE7QUFNQTtFQUNFLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNBRjtBREdBO0VBQ0Usd0JBQUE7RUFBMEIsb0RBQUE7RUFFMUIsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBRUEsdUNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxnREFBQTtFQUdBLGVBQUE7RUFDQSwwQkFBQTtBQ0hGO0FETUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ0hGO0FETUEsOEZBQUE7QUFDQTtFQUNFO0lBQVEsd0JBQUE7RUNGUjs7RURJQSxxREFBQTtFQUNBO0lBQ0UsK0JBQUE7WUFBQSx1QkFBQTtJQUNBLG9DQUFBO0lBQ0EseUJBQUE7RUNERjs7RURHQTtJQUNFLCtCQUFBO1lBQUEsdUJBQUE7SUFDQSxvQ0FBQTtJQUNBLHlCQUFBO0VDQUY7O0VER0EsbURBQUE7RUFDQTtJQUNFLCtCQUFBO1lBQUEsdUJBQUE7SUFDQSx1QkFBQTtJQUNBLFlBQUE7RUNBRjs7RURHQSwrQ0FBQTtFQUNBO0lBQ0UsK0JBQUE7WUFBQSx1QkFBQTtFQ0FGO0FBQ0Y7QURHQTtFQUNFLDJCQUFBO0VBQ0Esd0JBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUYseUJBQUE7RUFDRSx3RUFBQTtFQUNBLHVWQUFBO0FDSEY7QURPQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0pGO0FET0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUNKRjtBRE9BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNKRiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgIEdMT0JBTCBTVFlMRVMg4oCUIFdlZGRpbmcgSW52aXRhdGlvblxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0YWxpYW5ubyZkaXNwbGF5PXN3YXAnKTtcblxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuOnJvb3Qge1xuICBjb2xvci1zY2hlbWU6IG9ubHkgbGlnaHQ7IC8qICdvbmx5JyBwcm9ow61iZSBhIEVkZ2UvQ2hyb21lIGZvcnphciB0ZW1hIG9zY3VybyAqL1xuXG4gIC0tY29sb3ItYmx1c2g6ICAgICNmMGQ5ZDA7XG4gIC0tY29sb3Itcm9zZTogICAgICNjOTg0N2E7XG4gIC0tY29sb3Itcm9zZWRhcms6ICM5ZTVjNTU7XG4gIC0tY29sb3ItZ29sZDogICAgICNjOWE5NmU7XG4gIC0tY29sb3ItZ29sZGRhcms6ICM5ZTdhNDI7XG4gIC0tY29sb3ItY3JlYW06ICAgICNmYWY2ZjE7XG4gIC0tY29sb3Itd2hpdGU6ICAgICNmZmZmZmY7XG4gIC0tY29sb3ItZGFyazogICAgICMyYzI0MjE7XG4gIC0tY29sb3ItZGFyazI6ICAgICAjMDAwMDAwO1xuICAtLWNvbG9yLWdyYXk6ICAgICAjN2E2ZTZiO1xuICAtLWNvbG9yLWF6dWxiYWJ5OiAgICAjODlDRkYwO1xuICAtLWNvbG9yLWF6dWxiYWJ5ZGFyazogICAgIzVEQURFMjtcbiAgLS1jb2xvci1saWdodHllbGxvdzogICAgI2ZkZGZiNTtcbiAgLS1jb2xvci1jYWZlZGFyazogICAgIzM2MzEyYTtcbiAgLS1jb2xvci1jYWZlOiAgICAjODM3ODY5O1xuXG4gIC0tZmYtc2VyaWY6ICAnQ29ybW9yYW50IEdhcmFtb25kJywgc2VyaWY7XG4gIC0tZmYtc2FuczogICAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIC0tZmYtY3Vyc2l2ZTogICdJdGFsaWFubm8nLCBjdXJzaXZlO1xuICAtLWZmLXR0aG92ZXM6ICdUVEhvdmVzJywgc2VyaWY7XG4gIC0tZmYtZ2xhY2lhbDogJ0dsYWNpYWwgSW5kaWZmZXJlbmNlJywgc2Fucy1zZXJpZjtcblxuXG4gIC0tbWF4LXc6IDExMDBweDtcbiAgLS1zZWN0aW9uLXBhZDogMXJlbSAxLjVyZW07XG59XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvci1zY2hlbWU6IG9ubHkgbGlnaHQ7XG59XG5cbi8qIEJsb3F1ZW8gZXhwbMOtY2l0byBkZSBGb3JjZSBEYXJrIOKAlCBTYW1zdW5nIEJyb3dzZXIgYXBsaWNhIGZpbHRlcjppbnZlcnQoKSBhIHRvZGEgbGEgcMOhZ2luYSAqL1xuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xuICA6cm9vdCB7IGNvbG9yLXNjaGVtZTogb25seSBsaWdodDsgfVxuXG4gIC8qIENhbmNlbGFtb3MgZWwgZmlsdHJvIHF1ZSBTYW1zdW5nIEJyb3dzZXIgaW55ZWN0YSAqL1xuICBodG1sIHtcbiAgICBmaWx0ZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdlZWQ4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMyYzI0MjEgIWltcG9ydGFudDtcbiAgfVxuICBib2R5IHtcbiAgICBmaWx0ZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdlZWQ4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMyYzI0MjEgIWltcG9ydGFudDtcbiAgfVxuXG4gIC8qIFJlc3RhdXJhbW9zIHRvZG9zIGxvcyBjb250ZW5lZG9yZXMgcHJpbmNpcGFsZXMgKi9cbiAgc2VjdGlvbiwgZGl2LCBoZWFkZXIsIGZvb3RlciwgbmF2LCBtYWluLCBhcnRpY2xlLCBhc2lkZSB7XG4gICAgZmlsdGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gICAgY29sb3I6IHVuc2V0O1xuICB9XG5cbiAgLyogRXZpdGFtb3MgcXVlIFNhbXN1bmcgaW52aWVydGEgbGFzIGltw6FnZW5lcyAqL1xuICBpbWcsIHZpZGVvLCBjYW52YXMsIHN2ZyB7XG4gICAgZmlsdGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1zYW5zKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xuICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcblxuYmFja2dyb3VuZC1jb2xvcjogI2Y3ZWVkODtcbiAgLyogRXN0byBnZW5lcmEgdW4gcnVpZG8gdmlzdWFsIG11eSBzdWF2ZSBxdWUgcm9tcGUgY29uIGVsIGJsYW5jbyBwbGFubyAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHZpZXdCb3g9JzAgMCAyMDAgMjAwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDZmlsdGVyIGlkPSdub2lzZUZpbHRlciclM0UlM0NmZVR1cmJ1bGVuY2UgdHlwZT0nZnJhY3RhbE5vaXNlJyBiYXNlRnJlcXVlbmN5PScwLjY1JyBudW1PY3RhdmVzPSczJyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8lM0UlM0MvZmlsdGVyJTNFJTNDcmVjdCB3aWR0aD0nMTAwJTI1JyBoZWlnaHQ9JzEwMCUyNScgZmlsdGVyPSd1cmwoJTIzbm9pc2VGaWx0ZXIpJyBvcGFjaXR5PScwLjEnLyUzRSUzQy9zdmclM0VcIik7XG5cbn1cblxuaDEsIGgyLCBoMyB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1zZXJpZik7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBHTE9CQUwgU1RZTEVTIOKAlCBXZWRkaW5nIEludml0YXRpb25cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUl0YWxpYW5ubyZkaXNwbGF5PXN3YXBcIik7XG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG46cm9vdCB7XG4gIGNvbG9yLXNjaGVtZTogb25seSBsaWdodDtcbiAgLyogJ29ubHknIHByb2jDrWJlIGEgRWRnZS9DaHJvbWUgZm9yemFyIHRlbWEgb3NjdXJvICovXG4gIC0tY29sb3ItYmx1c2g6ICNmMGQ5ZDA7XG4gIC0tY29sb3Itcm9zZTogI2M5ODQ3YTtcbiAgLS1jb2xvci1yb3NlZGFyazogIzllNWM1NTtcbiAgLS1jb2xvci1nb2xkOiAjYzlhOTZlO1xuICAtLWNvbG9yLWdvbGRkYXJrOiAjOWU3YTQyO1xuICAtLWNvbG9yLWNyZWFtOiAjZmFmNmYxO1xuICAtLWNvbG9yLXdoaXRlOiAjZmZmZmZmO1xuICAtLWNvbG9yLWRhcms6ICMyYzI0MjE7XG4gIC0tY29sb3ItZGFyazI6ICMwMDAwMDA7XG4gIC0tY29sb3ItZ3JheTogIzdhNmU2YjtcbiAgLS1jb2xvci1henVsYmFieTogIzg5Q0ZGMDtcbiAgLS1jb2xvci1henVsYmFieWRhcms6ICM1REFERTI7XG4gIC0tY29sb3ItbGlnaHR5ZWxsb3c6ICNmZGRmYjU7XG4gIC0tY29sb3ItY2FmZWRhcms6ICMzNjMxMmE7XG4gIC0tY29sb3ItY2FmZTogIzgzNzg2OTtcbiAgLS1mZi1zZXJpZjogXCJDb3Jtb3JhbnQgR2FyYW1vbmRcIiwgc2VyaWY7XG4gIC0tZmYtc2FuczogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIC0tZmYtY3Vyc2l2ZTogXCJJdGFsaWFubm9cIiwgY3Vyc2l2ZTtcbiAgLS1mZi10dGhvdmVzOiBcIlRUSG92ZXNcIiwgc2VyaWY7XG4gIC0tZmYtZ2xhY2lhbDogXCJHbGFjaWFsIEluZGlmZmVyZW5jZVwiLCBzYW5zLXNlcmlmO1xuICAtLW1heC13OiAxMTAwcHg7XG4gIC0tc2VjdGlvbi1wYWQ6IDFyZW0gMS41cmVtO1xufVxuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3Itc2NoZW1lOiBvbmx5IGxpZ2h0O1xufVxuXG4vKiBCbG9xdWVvIGV4cGzDrWNpdG8gZGUgRm9yY2UgRGFyayDigJQgU2Ftc3VuZyBCcm93c2VyIGFwbGljYSBmaWx0ZXI6aW52ZXJ0KCkgYSB0b2RhIGxhIHDDoWdpbmEgKi9cbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgOnJvb3Qge1xuICAgIGNvbG9yLXNjaGVtZTogb25seSBsaWdodDtcbiAgfVxuXG4gIC8qIENhbmNlbGFtb3MgZWwgZmlsdHJvIHF1ZSBTYW1zdW5nIEJyb3dzZXIgaW55ZWN0YSAqL1xuICBodG1sIHtcbiAgICBmaWx0ZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdlZWQ4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMyYzI0MjEgIWltcG9ydGFudDtcbiAgfVxuXG4gIGJvZHkge1xuICAgIGZpbHRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2VlZDggIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzJjMjQyMSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLyogUmVzdGF1cmFtb3MgdG9kb3MgbG9zIGNvbnRlbmVkb3JlcyBwcmluY2lwYWxlcyAqL1xuICBzZWN0aW9uLCBkaXYsIGhlYWRlciwgZm9vdGVyLCBuYXYsIG1haW4sIGFydGljbGUsIGFzaWRlIHtcbiAgICBmaWx0ZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBjb2xvcjogdW5zZXQ7XG4gIH1cblxuICAvKiBFdml0YW1vcyBxdWUgU2Ftc3VuZyBpbnZpZXJ0YSBsYXMgaW3DoWdlbmVzICovXG4gIGltZywgdmlkZW8sIGNhbnZhcywgc3ZnIHtcbiAgICBmaWx0ZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1zYW5zKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmspO1xuICBsaW5lLWhlaWdodDogMS43O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2VlZDg7XG4gIC8qIEVzdG8gZ2VuZXJhIHVuIHJ1aWRvIHZpc3VhbCBtdXkgc3VhdmUgcXVlIHJvbXBlIGNvbiBlbCBibGFuY28gcGxhbm8gKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB2aWV3Qm94PScwIDAgMjAwIDIwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ2ZpbHRlciBpZD0nbm9pc2VGaWx0ZXInJTNFJTNDZmVUdXJidWxlbmNlIHR5cGU9J2ZyYWN0YWxOb2lzZScgYmFzZUZyZXF1ZW5jeT0nMC42NScgbnVtT2N0YXZlcz0nMycgc3RpdGNoVGlsZXM9J3N0aXRjaCcvJTNFJTNDL2ZpbHRlciUzRSUzQ3JlY3Qgd2lkdGg9JzEwMCUyNScgaGVpZ2h0PScxMDAlMjUnIGZpbHRlcj0ndXJsKCUyM25vaXNlRmlsdGVyKScgb3BhY2l0eT0nMC4xJy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG5oMSwgaDIsIGgzIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXNlcmlmKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jsbt_\OneDrive\Escritorio\Mi page\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map