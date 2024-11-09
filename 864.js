"use strict";(self.webpackChunkbetter_formula=self.webpackChunkbetter_formula||[]).push([[864],{6941:function(n,t,r){var a=r(9225),o=r.n(a),e=r(372),i=r.n(e)()(o());i.push([n.id,'/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  -webkit-font-feature-settings: normal;\n          font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-webkit-input-placeholder, textarea::-webkit-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::-ms-input-placeholder, textarea::-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n* {\n  scrollbar-color: initial;\n  scrollbar-width: initial;\n}\n  :root {\n    --background: 0 0% 100%;\n    --foreground: 220 20% 30%;\n\n    --muted: 220 10% 90%;\n    --muted-foreground: 220 20% 30%;\n\n    --popover: 0 0% 100%;\n    --popover-foreground: 220 20% 30%;\n\n    --card: 0 0% 100%;\n    --card-foreground: 220 20% 30%;\n\n    --border: 220 15% 80%;\n    --input: 220 15% 80%;\n\n    --primary: 220 20% 30%;\n    --primary-foreground: 220 10% 90%;\n\n    --secondary: 220 10% 90%;\n    --secondary-foreground: 220 20% 30%;\n\n    --accent: 220 10% 90%;\n    --accent-foreground: 220 20% 30%;\n\n    --destructive: 0 75% 60%;\n    --destructive-foreground: 220 0% 90%;\n\n    --ring: 220 15% 80%;\n\n    --radius: 0.5rem;\n  }\n\n  .dark {\n    --background: 0 0% 13%;\n    --foreground: 0 0% 70%;\n\n    --muted: 0 0% 20%;\n    --muted-foreground: 0 0% 67%;\n\n    --popover: 0 0% 13%;\n    --popover-foreground: 0 0% 80%;\n\n    --card: 0 4% 10%;\n    --card-foreground: 0 0% 70%;\n\n    --border: 0 0% 30%;\n    --input: 0 0% 20%;\n\n    --primary: 0 0% 35%;\n    --primary-foreground: 0 0% 10%;\n\n    --secondary: 0 0% 60%;\n    --secondary-foreground: 0 0% 10%;\n\n    --accent: 0 0% 10%;\n    --accent-foreground: 0 0% 60%;\n\n    --destructive: 0 55% 40%;\n    --destructive-foreground: 0 0% 80%;\n\n    --ring: 0 0% 40%;\n\n    --radius: 0.5rem;\n  }\n  * {\n  border-color: hsl(var(--border));\n}\n  body {\n  background-color: hsl(var(--background));\n  color: hsl(var(--foreground));\n    -webkit-font-feature-settings: "rlig" 1, "calt" 1;\n            font-feature-settings: "rlig" 1, "calt" 1;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::-webkit-backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.absolute {\n  position: absolute !important;\n}\n.relative {\n  position: relative !important;\n}\n.bottom-0 {\n  bottom: 0px !important;\n}\n.left-0 {\n  left: 0px !important;\n}\n.right-0 {\n  right: 0px !important;\n}\n.right-3 {\n  right: 0.75rem !important;\n}\n.top-0 {\n  top: 0px !important;\n}\n.z-20 {\n  z-index: 20 !important;\n}\n.m-0 {\n  margin: 0px !important;\n}\n.m-2 {\n  margin: 0.5rem !important;\n}\n.m-auto {\n  margin: auto !important;\n}\n.mx-3 {\n  margin-left: 0.75rem !important;\n  margin-right: 0.75rem !important;\n}\n.mx-auto {\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n.my-1 {\n  margin-top: 0.25rem !important;\n  margin-bottom: 0.25rem !important;\n}\n.my-6 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n.mb-1 {\n  margin-bottom: 0.25rem !important;\n}\n.mb-3 {\n  margin-bottom: 0.75rem !important;\n}\n.mb-8 {\n  margin-bottom: 2rem !important;\n}\n.ml-auto {\n  margin-left: auto !important;\n}\n.mr-auto {\n  margin-right: auto !important;\n}\n.mt-10 {\n  margin-top: 2.5rem !important;\n}\n.mt-2 {\n  margin-top: 0.5rem !important;\n}\n.mt-3 {\n  margin-top: 0.75rem !important;\n}\n.mt-8 {\n  margin-top: 2rem !important;\n}\n.block {\n  display: block !important;\n}\n.flex {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n.hidden {\n  display: none !important;\n}\n.h-1\\/2 {\n  height: 50% !important;\n}\n.h-10 {\n  height: 2.5rem !important;\n}\n.h-12 {\n  height: 3rem !important;\n}\n.h-96 {\n  height: 24rem !important;\n}\n.h-full {\n  height: 100% !important;\n}\n.w-2\\/5 {\n  width: 40% !important;\n}\n.w-32 {\n  width: 8rem !important;\n}\n.w-full {\n  width: 100% !important;\n}\n.max-w-2xl {\n  max-width: 42rem !important;\n}\n.max-w-3xl {\n  max-width: 48rem !important;\n}\n.max-w-lg {\n  max-width: 32rem !important;\n}\n.max-w-xl {\n  max-width: 36rem !important;\n}\n.flex-1 {\n  -webkit-box-flex: 1 !important;\n      -ms-flex: 1 1 0% !important;\n          flex: 1 1 0% !important;\n}\n.flex-grow {\n  -webkit-box-flex: 1 !important;\n      -ms-flex-positive: 1 !important;\n          flex-grow: 1 !important;\n}\n.grow {\n  -webkit-box-flex: 1 !important;\n      -ms-flex-positive: 1 !important;\n          flex-grow: 1 !important;\n}\n.basis-0 {\n  -ms-flex-preferred-size: 0px !important;\n      flex-basis: 0px !important;\n}\n.scale-90 {\n  --tw-scale-x: .9 !important;\n  --tw-scale-y: .9 !important;\n  -webkit-transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;\n          transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;\n}\n.flex-col {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important;\n}\n.items-start {\n  -webkit-box-align: start !important;\n      -ms-flex-align: start !important;\n          align-items: flex-start !important;\n}\n.items-center {\n  -webkit-box-align: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important;\n}\n.justify-center {\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important;\n}\n.justify-between {\n  -webkit-box-pack: justify !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important;\n}\n.gap-1 {\n  gap: 0.25rem !important;\n}\n.gap-2 {\n  gap: 0.5rem !important;\n}\n.gap-3 {\n  gap: 0.75rem !important;\n}\n.gap-3\\.5 {\n  gap: 0.875rem !important;\n}\n.gap-x-6 {\n  -webkit-column-gap: 1.5rem !important;\n     -moz-column-gap: 1.5rem !important;\n          column-gap: 1.5rem !important;\n}\n.overflow-hidden {\n  overflow: hidden !important;\n}\n.overflow-y-auto {\n  overflow-y: auto !important;\n}\n.rounded {\n  border-radius: 0.25rem !important;\n}\n.rounded-lg {\n  border-radius: var(--radius) !important;\n}\n.rounded-md {\n  border-radius: calc(var(--radius) - 2px) !important;\n}\n.border {\n  border-width: 1px !important;\n}\n.border-y {\n  border-top-width: 1px !important;\n  border-bottom-width: 1px !important;\n}\n.border-b {\n  border-bottom-width: 1px !important;\n}\n.border-l {\n  border-left-width: 1px !important;\n}\n.border-r {\n  border-right-width: 1px !important;\n}\n.border-none {\n  border-style: none !important;\n}\n.border-black\\/10 {\n  border-color: rgb(0 0 0 / 0.1) !important;\n}\n.border-l-gray-700 {\n  --tw-border-opacity: 1 !important;\n  border-left-color: rgb(55 65 81 / var(--tw-border-opacity)) !important;\n}\n.border-l-gray-800 {\n  --tw-border-opacity: 1 !important;\n  border-left-color: rgb(31 41 55 / var(--tw-border-opacity)) !important;\n}\n.border-opacity-75 {\n  --tw-border-opacity: 0.75 !important;\n}\n.bg-background {\n  background-color: hsl(var(--background)) !important;\n}\n.bg-card {\n  background-color: hsl(var(--card)) !important;\n}\n.bg-gray-200\\/30 {\n  background-color: rgb(229 231 235 / 0.3) !important;\n}\n.bg-gray-600 {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity)) !important;\n}\n.bg-gray-800\\/10 {\n  background-color: rgb(31 41 55 / 0.1) !important;\n}\n.bg-gray-900 {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity)) !important;\n}\n.bg-red-500 {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity)) !important;\n}\n.bg-sky-600 {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(2 132 199 / var(--tw-bg-opacity)) !important;\n}\n.bg-white {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity)) !important;\n}\n.bg-white\\/30 {\n  background-color: rgb(255 255 255 / 0.3) !important;\n}\n.p-1 {\n  padding: 0.25rem !important;\n}\n.p-2 {\n  padding: 0.5rem !important;\n}\n.p-3 {\n  padding: 0.75rem !important;\n}\n.p-4 {\n  padding: 1rem !important;\n}\n.p-5 {\n  padding: 1.25rem !important;\n}\n.p-6 {\n  padding: 1.5rem !important;\n}\n.px-1 {\n  padding-left: 0.25rem !important;\n  padding-right: 0.25rem !important;\n}\n.px-2 {\n  padding-left: 0.5rem !important;\n  padding-right: 0.5rem !important;\n}\n.px-3 {\n  padding-left: 0.75rem !important;\n  padding-right: 0.75rem !important;\n}\n.px-3\\.5 {\n  padding-left: 0.875rem !important;\n  padding-right: 0.875rem !important;\n}\n.px-4 {\n  padding-left: 1rem !important;\n  padding-right: 1rem !important;\n}\n.px-7 {\n  padding-left: 1.75rem !important;\n  padding-right: 1.75rem !important;\n}\n.py-1 {\n  padding-top: 0.25rem !important;\n  padding-bottom: 0.25rem !important;\n}\n.py-2 {\n  padding-top: 0.5rem !important;\n  padding-bottom: 0.5rem !important;\n}\n.py-2\\.5 {\n  padding-top: 0.625rem !important;\n  padding-bottom: 0.625rem !important;\n}\n.pb-1 {\n  padding-bottom: 0.25rem !important;\n}\n.pb-36 {\n  padding-bottom: 9rem !important;\n}\n.pl-2 {\n  padding-left: 0.5rem !important;\n}\n.pl-4 {\n  padding-left: 1rem !important;\n}\n.pr-3 {\n  padding-right: 0.75rem !important;\n}\n.text-left {\n  text-align: left !important;\n}\n.text-center {\n  text-align: center !important;\n}\n.text-2xl {\n  font-size: 1.5rem !important;\n  line-height: 2rem !important;\n}\n.text-base {\n  font-size: 1rem !important;\n  line-height: 1.5rem !important;\n}\n.text-lg {\n  font-size: 1.125rem !important;\n  line-height: 1.75rem !important;\n}\n.text-sm {\n  font-size: 0.875rem !important;\n  line-height: 1.25rem !important;\n}\n.text-xl {\n  font-size: 1.25rem !important;\n  line-height: 1.75rem !important;\n}\n.text-xs {\n  font-size: 0.75rem !important;\n  line-height: 1rem !important;\n}\n.font-bold {\n  font-weight: 700 !important;\n}\n.font-light {\n  font-weight: 300 !important;\n}\n.font-semibold {\n  font-weight: 600 !important;\n}\n.leading-3 {\n  line-height: .75rem !important;\n}\n.leading-6 {\n  line-height: 1.5rem !important;\n}\n.tracking-tight {\n  letter-spacing: -0.025em !important;\n}\n.text-black\\/50 {\n  color: rgb(0 0 0 / 0.5) !important;\n}\n.text-card-foreground {\n  color: hsl(var(--card-foreground)) !important;\n}\n.text-gray-100 {\n  --tw-text-opacity: 1 !important;\n  color: rgb(243 244 246 / var(--tw-text-opacity)) !important;\n}\n.text-gray-200 {\n  --tw-text-opacity: 1 !important;\n  color: rgb(229 231 235 / var(--tw-text-opacity)) !important;\n}\n.text-gray-300 {\n  --tw-text-opacity: 1 !important;\n  color: rgb(209 213 219 / var(--tw-text-opacity)) !important;\n}\n.text-gray-400 {\n  --tw-text-opacity: 1 !important;\n  color: rgb(156 163 175 / var(--tw-text-opacity)) !important;\n}\n.text-gray-50 {\n  --tw-text-opacity: 1 !important;\n  color: rgb(249 250 251 / var(--tw-text-opacity)) !important;\n}\n.text-gray-500 {\n  --tw-text-opacity: 1 !important;\n  color: rgb(107 114 128 / var(--tw-text-opacity)) !important;\n}\n.text-gray-700 {\n  --tw-text-opacity: 1 !important;\n  color: rgb(55 65 81 / var(--tw-text-opacity)) !important;\n}\n.text-green-400 {\n  --tw-text-opacity: 1 !important;\n  color: rgb(74 222 128 / var(--tw-text-opacity)) !important;\n}\n.text-red-300 {\n  --tw-text-opacity: 1 !important;\n  color: rgb(252 165 165 / var(--tw-text-opacity)) !important;\n}\n.text-red-400 {\n  --tw-text-opacity: 1 !important;\n  color: rgb(248 113 113 / var(--tw-text-opacity)) !important;\n}\n.text-sky-600 {\n  --tw-text-opacity: 1 !important;\n  color: rgb(2 132 199 / var(--tw-text-opacity)) !important;\n}\n.text-slate-50 {\n  --tw-text-opacity: 1 !important;\n  color: rgb(248 250 252 / var(--tw-text-opacity)) !important;\n}\n.text-white {\n  --tw-text-opacity: 1 !important;\n  color: rgb(255 255 255 / var(--tw-text-opacity)) !important;\n}\n.underline {\n  text-decoration-line: underline !important;\n}\n.opacity-50 {\n  opacity: 0.5 !important;\n}\n.opacity-75 {\n  opacity: 0.75 !important;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color) !important;\n  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n.shadow-\\[0_0_10px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.10\\)\\] {\n  --tw-shadow: 0 0 10px rgba(0,0,0,0.10) !important;\n  --tw-shadow-colored: 0 0 10px var(--tw-shadow-color) !important;\n  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) !important;\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color) !important;\n  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n.outline-none {\n  outline: 2px solid transparent !important;\n  outline-offset: 2px !important;\n}\n.outline {\n  outline-style: solid !important;\n}\n.outline-sky-300 {\n  outline-color: #7dd3fc !important;\n}\n.backdrop-blur-sm {\n  --tw-backdrop-blur: blur(4px) !important;\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important;\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important;\n}\n.scrollbar {\n  scrollbar-color: var(--scrollbar-thumb, initial) var(--scrollbar-track, initial) !important;\n}\n.scrollbar::-webkit-scrollbar-track {\n  background-color: var(--scrollbar-track) !important;\n  border-radius: var(--scrollbar-track-radius) !important;\n}\n.scrollbar::-webkit-scrollbar-track:hover {\n  background-color: var(--scrollbar-track-hover, var(--scrollbar-track)) !important;\n}\n.scrollbar::-webkit-scrollbar-track:active {\n  background-color: var(--scrollbar-track-active, var(--scrollbar-track-hover, var(--scrollbar-track))) !important;\n}\n.scrollbar::-webkit-scrollbar-thumb {\n  background-color: var(--scrollbar-thumb) !important;\n  border-radius: var(--scrollbar-thumb-radius) !important;\n}\n.scrollbar::-webkit-scrollbar-thumb:hover {\n  background-color: var(--scrollbar-thumb-hover, var(--scrollbar-thumb)) !important;\n}\n.scrollbar::-webkit-scrollbar-thumb:active {\n  background-color: var(--scrollbar-thumb-active, var(--scrollbar-thumb-hover, var(--scrollbar-thumb))) !important;\n}\n.scrollbar::-webkit-scrollbar-corner {\n  background-color: var(--scrollbar-corner) !important;\n  border-radius: var(--scrollbar-corner-radius) !important;\n}\n.scrollbar::-webkit-scrollbar-corner:hover {\n  background-color: var(--scrollbar-corner-hover, var(--scrollbar-corner)) !important;\n}\n.scrollbar::-webkit-scrollbar-corner:active {\n  background-color: var(--scrollbar-corner-active, var(--scrollbar-corner-hover, var(--scrollbar-corner))) !important;\n}\n.scrollbar {\n  scrollbar-width: auto !important;\n}\n.scrollbar::-webkit-scrollbar {\n  width: var(--scrollbar-width, 16px) !important;\n  height: var(--scrollbar-height, 16px) !important;\n}\n@-webkit-keyframes enter {\n\n  from {\n    opacity: var(--tw-enter-opacity, 1);\n    -webkit-transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));\n            transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));\n  }\n}\n@keyframes enter {\n\n  from {\n    opacity: var(--tw-enter-opacity, 1);\n    -webkit-transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));\n            transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));\n  }\n}\n@-webkit-keyframes exit {\n\n  to {\n    opacity: var(--tw-exit-opacity, 1);\n    -webkit-transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));\n            transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));\n  }\n}\n@keyframes exit {\n\n  to {\n    opacity: var(--tw-exit-opacity, 1);\n    -webkit-transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));\n            transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));\n  }\n}\n\nhtml {\n  font-size: 14px;\n}\nbody {\n  /* stylesheet injected to iframe needs to be reset */\n  font-size: 100%;\n}\n.focus-within\\:border-blue-500\\/50:focus-within {\n  border-color: rgb(59 130 246 / 0.5) !important;\n}\n.focus\\:ring-0:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;\n  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;\n          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;\n}\n.focus-visible\\:outline:focus-visible {\n  outline-style: solid !important;\n}\n.focus-visible\\:outline-2:focus-visible {\n  outline-width: 2px !important;\n}\n.focus-visible\\:outline-offset-2:focus-visible {\n  outline-offset: 2px !important;\n}\n.focus-visible\\:outline-gray-500:focus-visible {\n  outline-color: #6b7280 !important;\n}\n.focus-visible\\:ring-0:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;\n  -webkit-box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;\n          box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;\n}\n.hover\\:bg-gray-100:hover {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity)) !important;\n}\n.hover\\:bg-gray-500:hover {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity)) !important;\n}\n.hover\\:text-gray-400:hover {\n  --tw-text-opacity: 1 !important;\n  color: rgb(156 163 175 / var(--tw-text-opacity)) !important;\n}\n.hover\\:text-green-500:hover {\n  --tw-text-opacity: 1 !important;\n  color: rgb(34 197 94 / var(--tw-text-opacity)) !important;\n}\n.hover\\:text-red-500:hover {\n  --tw-text-opacity: 1 !important;\n  color: rgb(239 68 68 / var(--tw-text-opacity)) !important;\n}\n.hover\\:underline:hover {\n  text-decoration-line: underline !important;\n}\n.hover\\:opacity-100:hover {\n  opacity: 1 !important;\n}\n.disabled\\:hover\\:bg-transparent:hover:disabled {\n  background-color: transparent !important;\n}\n:is(.dark .dark\\:bg-gray-50\\/10) {\n  background-color: rgb(249 250 251 / 0.1) !important;\n}\n:is(.dark .dark\\:bg-stone-800) {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(41 37 36 / var(--tw-bg-opacity)) !important;\n}\n:is(.dark .dark\\:bg-stone-800\\/30) {\n  background-color: rgb(41 37 36 / 0.3) !important;\n}\n:is(.dark .dark\\:bg-stone-900) {\n  --tw-bg-opacity: 1 !important;\n  background-color: rgb(28 25 23 / var(--tw-bg-opacity)) !important;\n}\n:is(.dark .dark\\:bg-transparent) {\n  background-color: transparent !important;\n}\n:is(.dark .dark\\:text-white\\/50) {\n  color: rgb(255 255 255 / 0.5) !important;\n}\n:is(.dark .dark\\:shadow-\\[0_0_10px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.30\\)\\]) {\n  --tw-shadow: 0 0 10px rgba(0,0,0,0.30) !important;\n  --tw-shadow-colored: 0 0 10px var(--tw-shadow-color) !important;\n  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n@media (min-width: 640px) {\n\n  .sm\\:max-w-md {\n    max-width: 28rem !important;\n  }\n\n  .sm\\:text-4xl {\n    font-size: 2.25rem !important;\n    line-height: 2.5rem !important;\n  }\n}\n@media (min-width: 768px) {\n\n  .md\\:flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n  }\n\n  .md\\:pb-1 {\n    padding-bottom: 0.25rem !important;\n  }\n\n  .md\\:pl-0 {\n    padding-left: 0px !important;\n  }\n}\n',""]),t.Z=i},864:function(n,t,r){r.r(t);var a=r(9450),o=r.n(a),e=r(4904),i=r.n(e),s=r(9519),p=r.n(s),l=r(3139),d=r.n(l),c=r(2417),m=r.n(c),w=r(1771),b=r.n(w),g=r(6941),h={};h.styleTagTransform=b(),h.setAttributes=d(),h.insert=p().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=m(),o()(g.Z,h),t.default=g.Z&&g.Z.locals?g.Z.locals:void 0}}]);