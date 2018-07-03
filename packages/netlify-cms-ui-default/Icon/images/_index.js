(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var iconAdd = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path id="icon-add@2x-a" d="M19 14h-4a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 0 1-1V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1z"/></svg>';
var iconAddWith = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"><path fill="#7A8291" fill-rule="evenodd" d="M16.5 16L13 12h7l-3.5 4zm-4-5.75H9.75a.5.5 0 0 0-.5.5v2.75a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-2.75a.5.5 0 0 0-.5-.5H3.5a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5h2.75a.5.5 0 0 0 .5-.5V4.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v2.75a.5.5 0 0 0 .5.5h2.75a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5z"/></svg>';
var iconArrow = '<svg viewBox="0 0 24 24"><path id="Shape" fill="#313D3E" d="M10.506 19.916l1.903-1.953-4.744-4.67H21.31V10.55H7.665l4.744-4.682-1.903-1.953-7.95 8z"/></svg>';
var iconBold = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"><path fill="#7A8291" d="M13.2 9.819c.812-.577 1.381-1.525 1.381-2.404 0-1.948-1.465-3.448-3.348-3.448H6v12.066h5.894c1.75 0 3.106-1.465 3.106-3.267 0-1.31-.72-2.43-1.8-2.947zM8.108 6.122h2.85c.788 0 1.424.577 1.424 1.293 0 .715-.636 1.292-1.425 1.292h-2.85V6.122zm3.324 7.756H8.108v-2.585h3.324c.789 0 1.425.577 1.425 1.292 0 .716-.636 1.293-1.425 1.293z"/></svg>';
var iconCheck = '<svg viewBox="-1 -2 16 16"><path d="M4.016 11l-.648-.946a6.202 6.202 0 0 0-.157-.22 9.526 9.526 0 0 1-.096-.133l-.511-.7a7.413 7.413 0 0 0-.162-.214l-.102-.134-.265-.346a26.903 26.903 0 0 0-.543-.687l-.11-.136a21.767 21.767 0 0 0-.442-.54l-.278-.332a8.854 8.854 0 0 0-.192-.225L.417 6.28l-.283-.324L0 5.805l1.376-1.602c.04.027.186.132.186.132l.377.272.129.095c.08.058.16.115.237.175l.37.28c.192.142.382.292.565.436l.162.126c.27.21.503.398.714.574l.477.393c.078.064.156.127.23.194l.433.375.171-.205A50.865 50.865 0 0 1 8.18 4.023a35.163 35.163 0 0 1 2.382-2.213c.207-.174.42-.349.635-.518l.328-.255.333-.245c.072-.055.146-.107.221-.159l.117-.083c.11-.077.225-.155.341-.23.163-.11.334-.217.503-.32l1.158 1.74a11.908 11.908 0 0 0-.64.55l-.065.06c-.07.062-.139.125-.207.192l-.258.249-.26.265a21.72 21.72 0 0 0-.512.539 32.626 32.626 0 0 0-1.915 2.313 52.115 52.115 0 0 0-2.572 3.746l-.392.642-.19.322-.233.382H4.016z"/></svg>';
var iconChevron = '<svg viewBox="0 0 24 24"><path d="M5.123 6.33l-2.26 2.137 8.656 9.15 9.344-9.105-2.17-2.228-7.084 6.902z"/></svg>';
var iconChevronDouble = '<svg viewBox="0 0 24 24"><path d="M3.123.33L.863 2.466l8.656 9.15 9.344-9.105-2.17-2.228-7.084 6.902z" transform="translate(2 3)" id="caret"/><path d="M3.123.33L.863 2.466l8.656 9.15 9.344-9.105-2.17-2.228-7.084 6.902z" transform="translate(2 10)" id="caret"/></svg>';
var iconCircle = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle id="iconCircle-icon-circle@2x-a" cx="12" cy="12" r="4"/></svg>';
var iconClose = '<svg viewBox="0 0 24 24"><path d="M11.916 9.96L6.282 4.345 4.398 6.401l5.634 5.616-5.616 5.617 1.849 2.022 5.616-5.617 5.616 5.6 1.884-2.04L13.765 12l5.633-5.634-1.866-2.022z"/></svg>';
var iconCode = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"><path fill="#7A8291" d="M9 14.6L4.649 10 9 5.4 7.676 4 2 10l5.676 6L9 14.6zm3 0l4.351-4.6L12 5.4 13.324 4 19 10l-5.676 6L12 14.6z"/></svg>';
var iconCodeBlock = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"><path fill="#7A8291" d="M10.103 13.32L7.05 10l3.052-3.32-1.325-1.01L4.798 10l3.98 4.33 1.325-1.01zM5 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm6.927 9.32l1.217.935 3.98-4.33-3.98-4.33-1.217 1.085L14.978 10l-3.05 3.32z"/></svg>';
var iconDragHandle = '<svg viewBox="0 0 24 24"><path d="M3 15v-2h18v2H3zm0-4V9h18v2H3z"/></svg>';
var iconEye = '<svg viewBox="0 0 24 24"><path d="M22.557 11.492C21.13 10 16.849 6 12.395 6c-4.8 0-8.844 4-10.184 5.492a.798.798 0 0 0 0 1.081C3.55 14.043 7.616 18 12.395 18c4.756 0 8.8-3.914 10.162-5.405a.783.783 0 0 0 0-1.103zm-10.14 4.692a4.152 4.152 0 0 1 0-8.303 4.152 4.152 0 0 1 4.15 4.151c0 2.292-1.88 4.152-4.15 4.152zm0-2.79a1.362 1.362 0 1 0 0-2.724 1.362 1.362 0 0 0 0 2.725z"/></svg>';
var iconFolder = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path id="icon-folder@2x-a" d="M10 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7l-2-2z"/></svg>';
var iconGithub = '<svg width="32" height="32" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>';
var iconGitlab = '<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M22.616 14.971L21.52 11.5l-2.173-6.882a.37.37 0 0 0-.71 0L16.465 11.5H9.252L7.079 4.617a.37.37 0 0 0-.71 0l-2.172 6.882L3.1 14.971c-.1.317.01.664.27.86l9.487 7.094 9.487-7.094a.781.781 0 0 0 .27-.86" fill="#FC6D26"/><path d="M12.858 22.925L16.465 11.5H9.251z" fill="#E24329"/><path d="M12.858 22.925L9.251 11.5H4.197z" fill="#FC6D26"/><path d="M4.197 11.499L3.1 14.971c-.1.317.01.664.27.86l9.487 7.094L4.197 11.5z" fill="#FCA326"/><path d="M4.197 11.499H9.25L7.08 4.617a.37.37 0 0 0-.71 0l-2.172 6.882z" fill="#E24329"/><path d="M12.858 22.925L16.465 11.5h5.055z" fill="#FC6D26"/><path d="M21.52 11.499l1.096 3.472c.1.317-.01.664-.271.86l-9.487 7.094L21.52 11.5z" fill="#FCA326"/><path d="M21.52 11.499h-5.055l2.172-6.882a.37.37 0 0 1 .71 0l2.173 6.882z" fill="#E24329"/></g></svg>';
var iconGrid = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path id="icon-grid@2x-a" d="M5 3h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm11 0h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zM5 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"/></svg>';
var iconH1 = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"><path fill="#7A8291" d="M3 4h10v12H3V4zm2 0v5h6V4H5zm0 7v5h6v-5H5zm12.068 5v-5.695h-.026l-1.612.767-.325-1.482 2.236-1.04h1.638V16h-1.911z"/></svg>';
var iconH2 = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"><path fill="#7A8291" fill-rule="evenodd" d="M18.036 16h-5.532v-1.104l1.008-.912c1.704-1.524 2.532-2.4 2.556-3.312 0-.636-.384-1.14-1.284-1.14-.672 0-1.26.336-1.668.648L12.6 8.872c.588-.444 1.5-.804 2.556-.804 1.764 0 2.736 1.032 2.736 2.448 0 1.308-.948 2.352-2.076 3.36l-.72.6v.024h2.94V16zM3 8h7v8H3V8zm2 0v3h3V8H5zm0 5v3h3v-3H5z"/></svg>';
var iconHome = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path id="icon-home@2x-a" d="M21 13h-2a1 1 0 0 0-1 1v6h-4v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5H6v-6a1 1 0 0 0-1-1H3l9-9 9 9z"/></svg>';
var iconImage = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"><path fill="#7A8291" d="M5 3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm2.487 7.205l-2.34 3.232a1 1 0 0 0 .81 1.586h9.954a1 1 0 0 0 .792-1.611L13.297 9l-3.451 4.469-2.36-3.264zM8.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>';
var iconItalic = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"><path fill="#7A8291" d="M8 4.012V6h2.312l-2.925 8H5v1.988h7V14H9.953l2.925-8H15V4.012z"/></svg>';
var iconLink = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"><path fill="#7A8291" d="M14.683 10.315l-1.256-1.253 1.253-1.254a1.767 1.767 0 0 0 0-2.503 1.765 1.765 0 0 0-2.503 0L9.67 7.81a1.766 1.766 0 0 0 0 2.504l-1.25 1.247-.625-.626a2.657 2.657 0 0 1-.002-3.756l3.135-3.136a3.543 3.543 0 0 1 5.007.009 3.544 3.544 0 0 1 .003 5.007l-1.255 1.255zm-9.394-.626v-.003l1.252 1.249L5.29 12.19a1.767 1.767 0 0 0 0 2.505c.697.695 1.813.69 2.504 0l2.506-2.506a1.766 1.766 0 0 0 0-2.504l1.249-1.249.622.625a2.654 2.654 0 0 1 .006 3.756L9.04 15.953a3.539 3.539 0 0 1-5.004-.002 3.544 3.544 0 0 1-.003-5.008L5.29 9.69z"/></svg>';
var iconList = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path id="icon-list@2x-a" d="M4.5 3h15a1.5 1.5 0 0 1 0 3h-15a1.5 1.5 0 0 1 0-3zm0 5h15a1.5 1.5 0 0 1 0 3h-15a1.5 1.5 0 0 1 0-3zm0 5h15a1.5 1.5 0 0 1 0 3h-15a1.5 1.5 0 0 1 0-3zm0 5h15a1.5 1.5 0 0 1 0 3h-15a1.5 1.5 0 0 1 0-3z"/></svg>';
var iconListBulleted = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"><path fill="#7A8291" d="M5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM9 4h10v1.964H9V4zm0 5h10v2H9V9zm0 5h10v2H9v-2z"/></svg>';
var iconListNumbered = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"><path fill="#7A8291" d="M20.014 4.023v2h-11v-2h11zm0 5v2h-11v-2h11zm0 5v2h-11v-2h11zM3.604 8.985V4.23h-.018l-1.095.545-.22-1.053 1.518-.738h1.113v6H3.604zm2.458 7.997h-4v-.835l.73-.69c1.231-1.152 1.83-1.814 1.847-2.503 0-.481-.277-.862-.928-.862-.486 0-.911.254-1.206.49l-.373-.99c.425-.335 1.084-.607 1.848-.607 1.275 0 1.978.78 1.978 1.85 0 .99-.685 1.779-1.5 2.54l-.522.455v.018h2.126v1.134z"/></svg>';
var iconMarkdown = '<svg viewBox="0 0 24 24"><path d="M1 17V8h2.75l2.75 3.309L9.25 8H12v9H9.25v-5.162l-2.75 3.31-2.75-3.31V17H1zm18 0l-4-4.368h2.667V8h2.666v4.632H23L19 17z"/></svg>';
var iconMedia = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path id="icon-media@2x-a" d="M21 15.25V4.75C21 3.788 20.212 3 19.25 3H8.75C7.787 3 7 3.788 7 4.75v10.5c0 .962.787 1.75 1.75 1.75h10.5c.962 0 1.75-.788 1.75-1.75zm-9.641-3.773l1.787 2.394 2.615-3.277 3.522 4.417H8.717l2.642-3.534zM3 7v12.25c0 .962.788 1.75 1.75 1.75H17v-1.956H5.98a1 1 0 0 1-1-1V7H3z"/></svg>';
var iconMediaAlt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path id="icon-media-alt@2x-a" d="M5.027 4.045h13.975a3 3 0 0 1 3 3v9.99a3 3 0 0 1-3 3H5.027a3 3 0 0 1-3-3v-9.99a3 3 0 0 1 3-3zm2.874 8.48l-4.114 5.504h16.455l-5.485-6.88-4.073 5.105-2.783-3.73zM9.493 10a1.507 1.507 0 1 0 0-3.014 1.507 1.507 0 0 0 0 3.014z"/></svg>';
var iconNetlify = '<svg viewBox="0 0 295 284"><path d="M149.5.372l141.421 141.42L149.5 283.215 8.079 141.793 149.5.372z" fill="#3FB5A0"/><g stroke="#FFF" stroke-width="8"><path d="M247.788 191.997L1.715 142.5l246.073 49.497zM293.043 146.743L83.739 60.476l209.304 86.267zM170.006 269.78L46.97 97.244 170.006 269.78zM63.94 204.725L179.906 25.12 63.94 204.725zM175.663 264.122l36.77-206.475-36.77 206.475zM246.374 91.588L42.02 182.805l204.354-91.217z"/></g><g transform="rotate(45 19.795 213.225)" fill="#FFF"><circle class="no-fill" cx="14" cy="38" r="14"/><circle class="no-fill" cx="77" cy="12" r="12"/><circle class="no-fill" cx="116" cy="70" r="12"/><circle class="no-fill" cx="35" cy="125" r="16"/></g></svg>';
var iconNetlifyCms = '<svg viewBox="0 0 182 47"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="netlify-cms-logo" fill-rule="nonzero"><g id="Page-1" transform="translate(.038 .194)" fill="#FFF"><path d="M10.706 26.533c0 .02-.019.04-.058.08l-5.364 2.283h-.019s-.02 0-.04-.02L.907 24.581c-.02-.02-.04-.059-.02-.078.02-.019.04-.039.06-.039h.019l9.682 2.011c.039 0 .058.02.058.058zm.513-1.346c-.02 0-.02 0 0 0L.06 22.844c-.04 0-.059-.02-.059-.04s0-.038.02-.058l6.23-6.17c0-.02.02-.02.04-.02.04.02.04.02.06.04 0 .02 5.342 7.751 5.402 7.828.02.02.02.06 0 .08-.177.195-.356.41-.473.644-.02.018-.04.039-.06.039zm2.327-15.718c-.02-.02-.04-.02-.02-.058 0-.02 0-.04.02-.06L22.931.02c0-.019.02-.019.04-.019s.02 0 .04.02l4.041 4.002c.02.02.02.059 0 .078l-4.87 7.557c-.02.018-.039.038-.06.038h-.019a2.398 2.398 0 0 0-2.248.41c-.02.02-.02.02-.039.02h-.02c-.256-.118-6.25-2.656-6.25-2.656zm-.572 14.292l-5.6-8.18c-.02-.02-.02-.059 0-.078l5.028-4.999c0-.02.02-.02.04-.02h.02c0 .02 5.934 2.52 6.605 2.812.02.02.04.039.04.078a2.298 2.298 0 0 0 .592 2.128c.018.02.018.06-.001.078l-5.284 8.2c-.02.02-.04.04-.06.04h-.02a2.64 2.64 0 0 0-.67-.098c-.197 0-.413.039-.611.078h-.02c-.02 0-.039-.02-.059-.04zm1.834 5.096l10.45 15.19c.02.02.02.058 0 .078L22.97 46.41c0 .02-.02.02-.04.02 0 0-.019 0-.04-.02L9.84 33.465c-.02-.02-.02-.059 0-.078l.02-.02 2.84-4.413c.019-.018.039-.038.058-.038h.02c.295.097.572.137.867.137.375 0 .73-.08 1.085-.235h.02c.02 0 .04.02.059.039zm-3.233-.76c.019.018.019.037.019.037l-2.701 4.198c-.02.02-.04.04-.06.04 0 0-.02 0-.039-.02L6.408 29.99c-.02-.02-.02-.04-.02-.06 0-.02.02-.038.04-.038l4.89-2.09h.02c.019 0 .04.02.058.04.06.097.119.175.179.254zm4.75-1.895c0-.157-.039-.294-.058-.45 0-.039 0-.058.039-.077l14.02-5.994h.02s.019 0 .039.02c.098.097.177.155.256.214.04 0 .04.038.04.059l-1.223 7.516c0 .04-.02.06-.059.06-.67.037-1.262.429-1.597 1.014-.02.02-.04.04-.06.04h-.019L16.386 26.26c-.04 0-.06-.02-.06-.058zm12.443 5.174c.04.019.04.058 0 .058l-1.775 10.933c0 .02-.02.02-.02.04l-.63.625c0 .02-.02.02-.04.02s-.02 0-.04-.02l-10.41-15.073c-.02-.02-.02-.059 0-.078.06-.078.098-.157.158-.254.02-.02.04-.04.059-.04h.02l11.436 2.363c.039.02.058.04.058.058a2.016 2.016 0 0 0 1.184 1.368zm8.617.625c.019 0 .039.019.039.078 0 .02 0 .039-.02.058l-8.557 8.493c0 .02-.02.02-.04.02h-.04c-.02-.02-.039-.04-.039-.079l1.48-9.097c0-.02.019-.06.038-.06a2.12 2.12 0 0 0 .888-.664c.02 0 .04-.018.06-.018h.019l6.172 1.27zm-7.651-14.175c.02.02.04.039.04.077-.02.098-.04.216-.04.333v.176c0 .019-.02.038-.04.058l-13.94 5.954h-.02c-.02 0-.04 0-.059-.018-.019-.02-.019-.059 0-.08l5.226-8.102c.02-.019.04-.038.059-.038h.02c.138.019.256.038.374.038.789 0 1.519-.39 1.952-1.054.02-.019.04-.038.06-.038h.02l6.348 2.694zm15.38 6.521c.02.02.02.04.02.059 0 .018 0 .039-.02.058l-6.428 6.385c0 .02-.02.02-.04.02h-.02l-7.019-1.465c-.04 0-.059-.02-.059-.059a1.96 1.96 0 0 0-.75-1.366c-.019-.02-.019-.04-.019-.06l1.242-7.633c0-.039.04-.06.06-.06a1.976 1.976 0 0 0 1.34-.78c.02-.02.04-.02.06-.02h.019l11.614 4.921zm1.202-1.172c.04.02.04.078 0 .078l-.04.04c0 .02-.02.02-.039.02h-.019l-12.106-5.136c-.02 0-.04-.039-.04-.058 0-.02.02-.04.04-.06l4.909-2.088h.02s.02 0 .039.02l7.236 7.184zm-23.03-10.563c-.02-.02-.02-.058 0-.097l4.752-7.38c0-.02.02-.039.04-.039s.02 0 .04.02l4.219 4.197c.02.02.02.039.02.059l-1.105 6.852c0 .04-.02.06-.04.06a2.084 2.084 0 0 0-.69.35c0 .02-.019.02-.039.02h-.02l-6.743-2.87c-.02-.02-.04-.039-.04-.059a2.516 2.516 0 0 0-.394-1.113zm9.405 3.808c-.02 0-.04-.04-.059-.059l.927-5.681c0-.04.02-.059.04-.059h.02s.019 0 .039.02l4.24 4.197c.019.02.019.04.019.059 0 .02-.02.039-.04.059l-4.534 1.932h-.02c-.02 0-.02 0-.04-.02a1.963 1.963 0 0 0-.592-.448z" id="Fill-1"/><path d="M102.354 14.175h3.154v-2.812h-3.154v2.812zm9.345-1.503c-.867.858-1.3 2.088-1.3 3.69v1.308h-2.15v2.381h2.15v11.95h3.154V20.05h2.859V17.67h-2.859V16.4c0-1.58.75-2.362 2.267-2.362.454 0 .868.04 1.203.098l.08-2.52a7.316 7.316 0 0 0-1.775-.233c-1.539-.02-2.761.43-3.629 1.289zm11.712 14.72l-2.977-9.722h-3.411l4.95 14.252-.454 1.23c-.237.704-.553 1.191-.966 1.484-.394.293-1.006.45-1.795.45l-.591-.04v2.5a5.646 5.646 0 0 0 1.519.234c2.05 0 3.509-1.21 4.377-3.612l5.6-16.498h-3.373l-2.879 9.723zm-21.057 4.609h3.154V17.67h-3.154V32zm-13.566-2.773c-.217-.235-.316-.644-.316-1.191v-8.005h2.485V17.65h-2.485v-3.475h-3.154v3.475H83.01v2.382h2.307v8.122c0 2.734 1.223 4.1 3.647 4.1.671 0 1.36-.098 2.09-.312v-2.5c-.375.098-.749.138-1.104.138-.571.02-.947-.099-1.163-.352zm-10.253-5.74H72.52c.139-1.113.494-1.972 1.026-2.578.533-.624 1.243-.917 2.11-.917.868 0 1.558.273 2.05.82.494.547.77 1.367.848 2.44v.235h-.02zm-2.879-6.091a5.973 5.973 0 0 0-3.273.937c-.986.624-1.735 1.503-2.287 2.635-.533 1.132-.809 2.402-.809 3.827v.39c0 2.128.631 3.847 1.873 5.136 1.243 1.288 2.86 1.932 4.87 1.932 1.164 0 2.228-.234 3.175-.702a5.527 5.527 0 0 0 2.247-1.992l-1.695-1.66c-.907 1.191-2.09 1.797-3.53 1.797-1.025 0-1.892-.352-2.562-1.035-.69-.683-1.065-1.62-1.164-2.811h9.188v-1.29c0-2.284-.532-4.041-1.557-5.29-1.084-1.25-2.564-1.874-4.476-1.874zm-13.625 0c-1.695 0-3.056.644-4.1 1.913l-.1-1.66h-2.957V31.98h3.155V21.79c.63-1.171 1.577-1.757 2.839-1.757.867 0 1.498.215 1.893.664.394.43.571 1.113.571 2.011v9.274h3.155v-9.47c-.04-3.397-1.518-5.114-4.456-5.114zM94.309 32h3.155V11.656h-3.155v20.345z" id="Fill-3"/></g><path d="M139.256 29.651c.803 0 1.469-.233 1.998-.701.53-.468.812-1.046.847-1.734h3.031a4.724 4.724 0 0 1-.834 2.495c-.52.772-1.226 1.383-2.117 1.833a6.31 6.31 0 0 1-2.886.675c-2.003 0-3.59-.648-4.764-1.946-1.174-1.297-1.76-3.088-1.76-5.373v-.331c0-2.18.582-3.924 1.746-5.235 1.165-1.31 2.753-1.965 4.765-1.965 1.703 0 3.09.496 4.163 1.489 1.072.992 1.634 2.296 1.687 3.91h-3.03c-.036-.82-.316-1.495-.841-2.024-.525-.53-1.194-.794-2.005-.794-1.042 0-1.845.377-2.41 1.131-.564.755-.85 1.9-.86 3.435v.516c0 1.553.28 2.711.84 3.475.561.763 1.37 1.144 2.43 1.144zm11.105-12.017l.093 1.495c1.005-1.173 2.382-1.76 4.13-1.76 1.914 0 3.224.732 3.93 2.197 1.041-1.465 2.506-2.197 4.394-2.197 1.58 0 2.755.437 3.527 1.31.773.874 1.167 2.162 1.185 3.865v9.41h-3.216v-9.317c0-.91-.199-1.575-.596-1.999-.397-.424-1.054-.635-1.972-.635-.732 0-1.33.196-1.793.589-.464.392-.788.906-.973 1.542l.013 9.82h-3.216v-9.423c-.044-1.686-.905-2.528-2.581-2.528-1.288 0-2.202.525-2.74 1.575v10.376h-3.216v-14.32h3.03zm28.364 10.43c0-.574-.236-1.011-.708-1.311-.472-.3-1.255-.565-2.349-.794-1.094-.23-2.007-.52-2.74-.874-1.606-.776-2.409-1.901-2.409-3.375 0-1.235.52-2.268 1.562-3.097 1.041-.83 2.365-1.244 3.97-1.244 1.713 0 3.096.423 4.15 1.27 1.055.847 1.582 1.946 1.582 3.296h-3.216c0-.618-.23-1.132-.689-1.542-.459-.41-1.067-.615-1.826-.615-.706 0-1.282.163-1.727.49-.446.326-.669.763-.669 1.31 0 .494.208.878.622 1.151.415.274 1.253.55 2.515.827 1.262.278 2.252.61 2.971.993.72.384 1.253.845 1.602 1.383.348.538.523 1.191.523 1.96 0 1.287-.534 2.33-1.602 3.13-1.068.798-2.466 1.197-4.196 1.197-1.173 0-2.219-.212-3.136-.635-.918-.424-1.633-1.006-2.144-1.747-.512-.742-.768-1.54-.768-2.396h3.123c.045.759.331 1.343.86 1.754.53.41 1.232.615 2.105.615.847 0 1.491-.16 1.933-.483.44-.322.661-.743.661-1.264z" id="cms" fill="#C9FA4B"/></g></g></svg>';
var iconPage = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path id="icon-page@2x-a" d="M13.366 3l5.625 5.493L19 19.169C19 20.176 18.156 21 17.125 21H5.865C4.836 21 4 20.176 4 19.17V4.83C4 3.825 4.834 3 5.866 3h7.5zM6.94 12.11a.94.94 0 1 0 0 1.88h9.12a.94.94 0 0 0 0-1.88H6.94zm0 3.89a.94.94 0 1 0 0 1.88h9.12a.94.94 0 1 0 0-1.88H6.94zm5.073-6h5.139l-5.14-5.053V10z"/></svg>';
var iconPages = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path id="icon-pages@2x-a" d="M3 8h1.98v11.044a1 1 0 0 0 1 1H17V22H4.75C3.788 22 3 21.212 3 20.25V8zm6-6h6.074L20 7.041V16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm.94 8.11a.94.94 0 1 0 0 1.88h7.12a.94.94 0 0 0 0-1.88H9.94zm0 3.89a.94.94 0 1 0 0 1.88h7.12a.94.94 0 1 0 0-1.88H9.94zm4.054-6.124h4.344l-4.344-4.342v4.342z"/></svg>';
var iconPagesAlt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path id="icon-pages-alt@2x-a" d="M21 15.25c0 .962-.788 1.75-1.75 1.75H8.75C7.787 17 7 16.212 7 15.25V4.75C7 3.788 7.787 3 8.75 3h10.5c.962 0 1.75.788 1.75 1.75v10.5zM9 10v2h10v-2H9zm0-4v2h10V6H9zM3 7v12.25c0 .962.788 1.75 1.75 1.75H17v-1.956H5.98a1 1 0 0 1-1-1V7H3z"/></svg>';
var iconQuote = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"><path fill="#7A8291" d="M4.995 14.954h2.986l1.991-3.982V5H4v5.972h2.986l-1.99 3.982zm7.963 0h2.986l1.991-3.982V5h-5.972v5.972h2.986l-1.99 3.982z"/></svg>';
var iconScroll = '<svg viewBox="0 0 24 24"><path d="M12.809 8.182a.898.898 0 1 1-1.798 0V4.058L8.576 6.494a.898.898 0 1 1-1.271-1.271l3.97-3.97a.925.925 0 0 1 1.27 0l4.026 4.026a.898.898 0 1 1-1.27 1.27l-2.492-2.49v4.123zm.015 11.75l2.435-2.436a.899.899 0 1 1 1.27 1.271l-3.969 3.97a.896.896 0 0 1-1.27 0L7.264 18.71a.898.898 0 1 1 1.27-1.271l2.492 2.491v-4.124a.898.898 0 1 1 1.798 0v4.124zm-.902-6.479a1.516 1.516 0 1 1 0-3.032 1.516 1.516 0 0 1 0 3.032z"/></svg>';
var iconSearch = '<svg viewBox="0 0 24 24"><path d="M20.526 18.236a1.619 1.619 0 1 1-2.29 2.29l-3.341-3.342c-.237-.237-.666-.296-.964-.137 0 0 .04-.01-.22.108a6.881 6.881 0 1 1 3.44-3.436c-.117.258-.105.214-.105.214a.86.86 0 0 0 .138.962l3.342 3.341zm-9.677-3.466a3.921 3.921 0 1 0 0-7.842 3.921 3.921 0 0 0 0 7.842z"/></svg>';
var iconSettings = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path id="icon-settings@2x-a" d="M18.887 12.874c.037-.287.065-.575.065-.88 0-.306-.028-.594-.065-.881l1.954-1.484a.445.445 0 0 0 .11-.575L19.1 5.944c-.111-.198-.361-.27-.565-.198l-2.306.9c-.482-.36-1-.657-1.565-.882l-.352-2.382a.448.448 0 0 0-.454-.377h-3.704a.448.448 0 0 0-.454.377l-.352 2.382a7.17 7.17 0 0 0-1.565.881l-2.306-.899a.458.458 0 0 0-.565.198L3.06 9.054a.435.435 0 0 0 .111.575l1.954 1.484a6.923 6.923 0 0 0-.064.88c0 .297.027.594.064.881l-1.954 1.484a.445.445 0 0 0-.11.575l1.851 3.11c.112.198.362.27.565.198l2.306-.9c.482.36 1 .657 1.565.882l.352 2.382a.448.448 0 0 0 .454.377h3.704a.448.448 0 0 0 .454-.377l.352-2.382a7.17 7.17 0 0 0 1.565-.881l2.306.899c.213.08.454 0 .565-.198l1.852-3.11a.445.445 0 0 0-.111-.575l-1.954-1.484zm-6.878 2.132a3.017 3.017 0 0 1-3.013-3.013 3.017 3.017 0 0 1 3.013-3.014 3.017 3.017 0 0 1 3.014 3.014 3.017 3.017 0 0 1-3.014 3.013z"/></svg>';
var iconUser = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path fill="#1E2532" fill-rule="nonzero" d="M16.5 18c-3.025 0-5.5-2.634-5.5-5.854v-.292C11 8.634 13.475 6 16.5 6S22 8.634 22 11.854v.292C22 15.366 19.525 18 16.5 18zM16 29c-3.738 0-7.192-1.689-9.39-4.335-.908-1.064-.798-2.7.302-3.601C7.736 20.409 8.753 20 9.88 20h12.645c.742 0 1.43.191 2.062.491 1.43.737 1.869 2.592.88 3.874C23.24 27.175 19.875 29 16 29z"/></svg>';
var iconWorkflow = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path id="icon-workflow@2x-a" d="M10 4h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm7 0h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM3 4h3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/></svg>';
var iconWrite = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M2.975 7.004c.002-.477.412-.947.897-.948h9.451l-.816 1.896H3.872c-.485 0-.895-.47-.897-.948zm.017 8.97c.001.478.395 1.063.88 1.064H8.57c.01-.58.1-1.425.205-1.996H3.872c-.485.001-.879.524-.88 1.001v-.068zm7.921-5.008l.762-1.997H3.872c-.486 0-.933.521-.933.999 0 .477.447.998.933.998h7.041zM2.95 13.041c0 .477.437.965.922.966H9.18c.096-.258.301-.716.419-.968l.445-.964H3.872c-.485 0-.921.489-.922.966zm17.099-5.908l.395-.849a2.296 2.296 0 0 0-.176-2.374 2.39 2.39 0 0 0-2.207-.984 2.368 2.368 0 0 0-1.936 1.433l-4.712 10.19a9.619 9.619 0 0 0-.699 5.953.608.608 0 0 0 .35.435c.182.081.392.071.564-.027a9.846 9.846 0 0 0 4.104-4.436l3.628-7.843.689-1.498z"/></svg>';


var iconix = iconAdd;

var images = {
  'add': iconix,
  'add-with': iconAddWith,
  'arrow': iconArrow,
  'bold': iconBold,
  'check': iconCheck,
  'chevron': iconChevron,
  'chevron-double': iconChevronDouble,
  'circle': iconCircle,
  'close': iconClose,
  'code': iconCode,
  'code-block': iconCodeBlock,
  'drag-handle': iconDragHandle,
  'eye': iconEye,
  'folder': iconFolder,
  'github': iconGithub,
  'gitlab': iconGitlab,
  'grid': iconGrid,
  'h1': iconH1,
  'h2': iconH2,
  'home': iconHome,
  'image': iconImage,
  'italic': iconItalic,
  'link': iconLink,
  'list': iconList,
  'list-bulleted': iconListBulleted,
  'list-numbered': iconListNumbered,
  'markdown': iconMarkdown,
  'media': iconMedia,
  'media-alt': iconMediaAlt,
  'netlify': iconNetlify,
  'netlify-cms': iconNetlifyCms,
  'page': iconPage,
  'pages': iconPages,
  'pages-alt': iconPagesAlt,
  'quote': iconQuote,
  'scroll': iconScroll,
  'search': iconSearch,
  'settings': iconSettings,
  'user': iconUser,
  'workflow': iconWorkflow,
  'write': iconWrite
};

var _default = images;
export default _default;
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(iconix, 'iconix', 'src/Icon/images/_index.js');
  reactHotLoader.register(images, 'images', 'src/Icon/images/_index.js');
  reactHotLoader.register(_default, 'default', 'src/Icon/images/_index.js');
  leaveModule(module);
})();

;