!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var i=function(){document.getElementById("content").insertAdjacentHTML("beforeend",'\n            <div class="home-page">\n                <div class="home-page-content">\n                    <h1>The best Restaurant in Town</h1>\n                    <p>\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, maxime. Unde nemo incidunt rerum\n                        accusantium voluptatem eaque. Amet aliquam obcaecati, natus repellendus fugit dolores quos ducimus unde\n                        tempora explicabo, quasi deserunt illum omnis reiciendis delectus.\n                    </p>\n                </div>\n            </div>\n\n        ')};var r=function(e,t){let n=e.getElementById("content"),i=e.createElement("nav");i.classList.add("nav");let r=e.createElement("div");r.classList.add("logo"),r.innerText="Eatilicious",i.appendChild(r);let o=e.createElement("ul");o.classList.add("nav-items"),i.appendChild(o),t&&t.forEach(t=>{let n=e.createElement("li"),i=e.createTextNode(t);n.classList.add("nav-item"),n.appendChild(i),n.addEventListener("click",(e,t)=>{console.log(e,t)}),o.appendChild(n)}),n.appendChild(i)};!function(e){let t=setInterval(()=>{"complete"==document.readyState&&(clearInterval(t),e())},10)}(()=>{r(document,["home","meals","blog","contact us"]),i()})}]);