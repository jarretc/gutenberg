(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({81:"components-inserter-stories-index-story",139:"guide-stories-index-story",204:"heading-stories-index-story",243:"scroll-lock-stories-index-story",309:"toggle-group-control-stories-index-story",408:"popover-stories-index-story",698:"navigation-stories-index-story",772:"date-time-stories-time-story",869:"components-dimensions-tool-stories-scale-tool-story",951:"components-block-mover-stories-index-story",970:"angle-picker-control-stories-index-story",983:"components-dimensions-tool-stories-index-story",988:"stories-index-story",1057:"visually-hidden-stories-index-story",1101:"palette-edit-stories-index-story",1638:"placeholder-stories-index-story",1656:"components-block-draggable-stories-index-story",1791:"search-control-stories-index-story",1802:"form-toggle-stories-index-story",1821:"sandbox-stories-index-story",1960:"base-control-stories-index-story",1998:"gradient-picker-stories-index-story",2057:"docs-introduction-mdx",2211:"dropdown-menu-stories-index-story",2419:"text-highlight-stories-index-story",2728:"composite-current-stories-index-story",2900:"tooltip-stories-index-story",3134:"custom-select-control-v2-stories-index-story",3218:"components-url-popover-stories-index-story",3267:"item-group-stories-index-story",3417:"icon-stories-index-story",3421:"combobox-control-stories-index-story",3517:"dropdown-menu-v2-stories-index-story",3614:"navigator-stories-index-story",3732:"date-time-stories-date-story",3754:"truncate-stories-index-story",3772:"view-stories-index-story",3788:"radio-group-stories-index-story",3813:"components-text-decoration-control-stories-index-story",3933:"tab-panel-stories-index-story",3953:"border-box-control-stories-index-story",4214:"composite-legacy-stories-index-story",4317:"alignment-matrix-control-stories-index-story",4325:"number-control-stories-index-story",4355:"text-control-stories-index-story",4520:"docs-components-contributing-mdx",4593:"resizable-box-stories-index-story",4595:"components-global-styles-stories-index-story",4662:"draggable-stories-index-story",4706:"select-control-stories-index-story",4770:"components-dimensions-tool-stories-width-height-tool-story",4831:"navigable-container-stories-navigable-menu-story",4836:"drop-zone-stories-index-story",4895:"unit-control-stories-index-story",4972:"components-dimensions-tool-stories-aspect-ratio-tool-story",5008:"button-stories-index-story",5100:"toggle-control-stories-index-story",5106:"menu-items-choice-stories-index-story",5151:"scrollable-stories-index-story",5175:"custom-gradient-picker-stories-index-story",5194:"components-text-transform-control-stories-index-story",5309:"font-size-picker-stories-index-story",5367:"h-stack-stories-index-story",5619:"menu-group-stories-index-story",5735:"dropdown-stories-index-story",5739:"menu-item-stories-index-story",5745:"tip-stories-index-story",5825:"components-resolution-tool-stories-index-story",5891:"animate-stories-index-story",6180:"box-control-stories-index-story",6246:"spinner-stories-index-story",6265:"components-height-control-stories-index-story",6510:"query-controls-stories-index-story",6605:"card-stories-index-story",6610:"icon-stories-index-story-tsx",6758:"form-file-upload-stories-index-story",6764:"modal-stories-index-story",6869:"flex-stories-index-story",6883:"surface-stories-index-story",6932:"form-token-field-stories-index-story",6939:"border-control-stories-index-story",7066:"date-time-stories-time-input-story",7131:"spacer-stories-index-story",7137:"elevation-stories-index-story",7152:"input-control-stories-index-story",7196:"duotone-picker-stories-duotone-picker-story",7211:"tabs-stories-index-story",7306:"color-indicator-stories-index-story",7351:"radio-control-stories-index-story",7552:"dimension-control-stories-index-story",7577:"color-palette-stories-index-story",7637:"tree-select-stories-index-story",7707:"button-group-stories-index-story",7716:"textarea-control-stories-index-story",7752:"snackbar-stories-index-story",7844:"color-picker-stories-index-story",7875:"tree-grid-stories-index-story",8035:"range-control-stories-index-story",8067:"shortcut-stories-index-story",8108:"v-stack-stories-index-story",8147:"duotone-picker-stories-duotone-swatch-story",8297:"checkbox-control-stories-index-story",8518:"tools-panel-stories-index-story",8628:"snackbar-stories-list-story",8633:"date-time-stories-date-time-story",8673:"confirm-dialog-stories-index-story",8748:"components-line-height-control-stories-index-story",8751:"focal-point-picker-stories-index-story",8768:"external-link-stories-index-story",8772:"playground-index-story",8773:"custom-select-control-stories-index-story",8821:"icon-stories-index-story-js",8917:"slot-fill-stories-index-story",8930:"circular-option-picker-stories-index-story",8953:"keyboard-shortcuts-stories-index-story",8958:"toolbar-stories-index-story",8971:"z-stack-stories-index-story",9003:"disabled-stories-index-story",9170:"progress-bar-stories-index-story",9189:"notice-stories-index-story",9379:"divider-stories-index-story",9475:"text-stories-index-story",9501:"docs-components-readme-mdx",9696:"navigable-container-stories-tabbable-container-story",9812:"grid-stories-index-story",9828:"theme-stories-index-story",9837:"components-text-alignment-control-stories-index-story",9901:"responsive-wrapper-stories-index-story",9943:"panel-stories-index-story"}[chunkId]||chunkId)+"."+{58:"2053c122",81:"6d63bd23",88:"3d3fa3f7",139:"c042b9c9",175:"701c46fc",204:"0d16cf14",243:"b12e4688",309:"2b67eb34",408:"3f362653",417:"a83e64e1",698:"e933dfa4",738:"39f6ed76",772:"e039f72d",856:"8658429c",869:"28608a68",951:"3b1d5baa",970:"b1bb7712",983:"8034b639",988:"26af59c6",1057:"e522eba5",1074:"1cd533c9",1093:"15da3edb",1099:"907efdaf",1101:"9e37e37f",1221:"49963b4f",1329:"a2fb13e7",1579:"6ac34f4d",1599:"fb43f9be",1629:"71f7b433",1638:"15105096",1656:"ea1cb743",1778:"c9a54931",1791:"77545660",1802:"a81bdc21",1821:"15c15834",1901:"12d4e078",1960:"c34ec140",1998:"fb129db2",2057:"d2bed04d",2102:"643d66f9",2122:"eb429ca4",2211:"7b5dd77d",2296:"1c522a89",2311:"2a8ea535",2343:"28b3f587",2419:"53beb0f4",2611:"5310e3d9",2728:"f5ac3027",2760:"26ad9b1f",2769:"cb1c5b0a",2865:"a585ba59",2891:"eb7c7956",2899:"20e711cd",2900:"1b4ce37e",2942:"4eee4a5c",3020:"53a11d8e",3049:"68d43a54",3051:"e5c23f2d",3134:"fc3f3e9d",3218:"e5e0cc34",3233:"c2fac385",3244:"1c919922",3267:"38756cf0",3406:"df8430ed",3417:"0b38fd95",3421:"3220636e",3426:"c352302a",3434:"4f6173b7",3517:"4749f631",3614:"bc6331c2",3732:"3d4c85a1",3754:"2c4a80fd",3772:"16078289",3788:"ec758fd0",3813:"f8a3cfb0",3887:"82feed92",3933:"b3b16f80",3953:"dfd9ce84",3978:"1c835968",4171:"5daa6bf8",4214:"ee89eef4",4317:"1a9ab09c",4325:"9cb84c5f",4355:"cf1db2a8",4366:"bb39a240",4520:"1efd1293",4539:"8b254fe5",4546:"1c63192e",4593:"5dde5bc7",4595:"697bc389",4662:"43886a86",4666:"8d7cb43e",4706:"2d0c7c83",4770:"25eb375d",4822:"0f5b6aae",4831:"2fa85f1c",4836:"bb542681",4878:"2c5994fa",4895:"b29359ee",4972:"ac65a185",5008:"e7fd4ddc",5041:"a073276a",5100:"b51732f0",5106:"717030ab",5151:"5f271393",5175:"4f6f0a29",5194:"75a8e399",5273:"f7534de6",5309:"4428171c",5325:"26601169",5361:"01281093",5367:"7eb134c5",5378:"c31afd69",5543:"275bbedb",5619:"fff960d7",5667:"770033a9",5735:"b11eb3a6",5739:"09cc3e1b",5745:"44c148a7",5825:"55f887ec",5828:"166ccc51",5891:"d52395cc",5942:"2f67123b",6180:"20a88c28",6246:"065671ad",6260:"6aed7cb3",6265:"39f0263f",6399:"9bfc55d5",6510:"319867f9",6511:"ac37489e",6579:"24eb71e1",6605:"67d796a2",6607:"7f6cc1f8",6610:"39fb1c7c",6751:"71cbbb69",6758:"df109164",6764:"de7997c2",6786:"d011f176",6869:"c68ca83f",6883:"3761861f",6913:"3f64432d",6932:"0407a3b1",6933:"bf3a09d5",6939:"75235627",7066:"c5e3db03",7076:"9363ea90",7131:"e0731222",7137:"fbdeaa2c",7143:"f4786e38",7152:"41705fea",7196:"f54f04dc",7211:"20dfecab",7233:"63816e2b",7238:"5ec6e479",7306:"07d22d29",7351:"75a63254",7463:"2609d3e7",7492:"4f11eb58",7552:"147ff9c1",7577:"6e166787",7637:"46e3f661",7707:"1bd8eb55",7716:"69b9f8a7",7752:"bc1e8997",7781:"384fa548",7844:"a662b2a3",7875:"afb0b7d8",8035:"c7191b21",8067:"cfb0bd93",8108:"b7606ed9",8127:"e5e56b15",8147:"32f3a43f",8169:"c7e92d15",8176:"edb59ad7",8297:"f636d3c0",8301:"b6a17419",8443:"ee877e86",8487:"e1ee18b6",8496:"e04879e2",8518:"7209c2f9",8575:"0c5a182b",8587:"9fe6d566",8628:"ed14342e",8631:"abceaa18",8633:"47c2a4d9",8673:"e39b43ba",8700:"14daec88",8748:"6b7feb94",8751:"a5308e5f",8768:"d4f498b4",8772:"3598f68b",8773:"4655ad96",8797:"23690913",8821:"636f0d33",8836:"e86813cc",8896:"12a82040",8917:"4a2a30e9",8918:"a3ae0485",8930:"b9c9b72d",8953:"cf364f8f",8958:"2642d25d",8971:"417ae2cd",8989:"781a8f4b",9e3:"4c72bae1",9003:"d7b54e4c",9115:"c4c064fd",9119:"a99577ac",9170:"ac854178",9189:"fbc89156",9273:"a05433e5",9370:"f0414bb0",9379:"b129036e",9390:"7a848764",9395:"cfd84633",9433:"1a3e1619",9475:"a7fbe1fb",9501:"74846ebe",9574:"e8b8af24",9696:"2673def5",9722:"9e1028f1",9812:"d249f9b4",9828:"65c7a1be",9837:"52c701be",9901:"a2bd2ec8",9943:"69897a96"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="gutenberg:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","gutenberg:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();