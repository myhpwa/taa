(this.webpackJsonptaa=this.webpackJsonptaa||[]).push([[41],{282:function(t,n,e){"use strict";e.r(n),e.d(n,"startFocusVisible",(function(){return i}));var o="ion-focused",s=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],i=function(){var t=[],n=!0,e=document,i=function(n){t.forEach((function(t){return t.classList.remove(o)})),n.forEach((function(t){return t.classList.add(o)})),t=n},c=function(){n=!1,i([])};e.addEventListener("keydown",(function(t){(n=s.includes(t.key))||i([])})),e.addEventListener("focusin",(function(t){if(n&&t.composedPath){var e=t.composedPath().filter((function(t){return!!t.classList&&t.classList.contains("ion-focusable")}));i(e)}})),e.addEventListener("focusout",(function(){e.activeElement===e.body&&i([])})),e.addEventListener("touchstart",c),e.addEventListener("mousedown",c)}}}]);
//# sourceMappingURL=41.e47f8235.chunk.js.map