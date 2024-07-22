"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[4355],{"./packages/components/src/base-control/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Xp:()=>BaseControl,ZP:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/index.js"),_visually_hidden__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/visually-hidden/component.tsx"),_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/base-control/styles/base-control-styles.ts"),_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/context/use-context-system.js"),_context__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/components/src/context/context-connect.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const UnconnectedBaseControl=props=>{const{__nextHasNoMarginBottom=!1,id,label,hideLabelFromVision=!1,help,className,children}=(0,_context__WEBPACK_IMPORTED_MODULE_1__.y)(props,"BaseControl");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.im,{className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.ob,{className:"components-base-control__field",__nextHasNoMarginBottom,children:[label&&id&&(hideLabelFromVision?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_visually_hidden__WEBPACK_IMPORTED_MODULE_3__.Z,{as:"label",htmlFor:id,children:label}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.ar,{className:"components-base-control__label",htmlFor:id,children:label})),label&&!id&&(hideLabelFromVision?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_visually_hidden__WEBPACK_IMPORTED_MODULE_3__.Z,{as:"label",children:label}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VisualLabel,{children:label})),children]}),!!help&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.vB,{id:id?id+"__help":void 0,className:"components-base-control__help",__nextHasNoMarginBottom,children:help})]})};UnconnectedBaseControl.displayName="UnconnectedBaseControl";const UnforwardedVisualLabel=(props,ref)=>{const{className,children,...restProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_styles_base_control_styles__WEBPACK_IMPORTED_MODULE_2__.yF,{ref,...restProps,className:(0,clsx__WEBPACK_IMPORTED_MODULE_4__.Z)("components-base-control__label",className),children})};UnforwardedVisualLabel.displayName="UnforwardedVisualLabel";const VisualLabel=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(UnforwardedVisualLabel),BaseControl=Object.assign((0,_context__WEBPACK_IMPORTED_MODULE_6__.Kc)(UnconnectedBaseControl,"BaseControl"),{VisualLabel}),__WEBPACK_DEFAULT_EXPORT__=BaseControl;try{useBaseControlProps.displayName="useBaseControlProps",useBaseControlProps.__docgenInfo={description:"Generate props for the `BaseControl` and the inner control itself.\n\nNamely, it takes care of generating a unique `id`, properly associating it with the `label` and `help` elements.",displayName:"useBaseControlProps",props:{label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The HTML `id` of the control element (passed in as a child to `BaseControl`) to which labels and help text are being generated.\nThis is necessary to accessibly associate the label with that element.\n\nThe recommended way is to use the `useBaseControlProps` hook, which takes care of generating a unique `id` for you.\nOtherwise, if you choose to pass an explicit `id` to this prop, you are responsible for ensuring the uniqueness of the `id`.",name:"id",required:!1,type:{name:"string"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},help:{defaultValue:null,description:"Additional description for the control.\n\nThe element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",name:"help",required:!1,type:{name:"ReactNode"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/base-control/index.tsx#useBaseControlProps"]={docgenInfo:useBaseControlProps.__docgenInfo,name:"useBaseControlProps",path:"packages/components/src/base-control/index.tsx#useBaseControlProps"})}catch(__react_docgen_typescript_loader_error){}try{VisualLabel.displayName="VisualLabel",VisualLabel.__docgenInfo={description:"",displayName:"VisualLabel",props:{as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"enum",value:[{value:'"symbol"'},{value:'"object"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noindex"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"search"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'},{value:'"svg"'},{value:'"animate"'},{value:'"animateMotion"'},{value:'"animateTransform"'},{value:'"circle"'},{value:'"clipPath"'},{value:'"defs"'},{value:'"desc"'},{value:'"ellipse"'},{value:'"feBlend"'},{value:'"feColorMatrix"'},{value:'"feComponentTransfer"'},{value:'"feComposite"'},{value:'"feConvolveMatrix"'},{value:'"feDiffuseLighting"'},{value:'"feDisplacementMap"'},{value:'"feDistantLight"'},{value:'"feDropShadow"'},{value:'"feFlood"'},{value:'"feFuncA"'},{value:'"feFuncB"'},{value:'"feFuncG"'},{value:'"feFuncR"'},{value:'"feGaussianBlur"'},{value:'"feImage"'},{value:'"feMerge"'},{value:'"feMergeNode"'},{value:'"feMorphology"'},{value:'"feOffset"'},{value:'"fePointLight"'},{value:'"feSpecularLighting"'},{value:'"feSpotLight"'},{value:'"feTile"'},{value:'"feTurbulence"'},{value:'"filter"'},{value:'"foreignObject"'},{value:'"g"'},{value:'"image"'},{value:'"line"'},{value:'"linearGradient"'},{value:'"marker"'},{value:'"mask"'},{value:'"metadata"'},{value:'"mpath"'},{value:'"path"'},{value:'"pattern"'},{value:'"polygon"'},{value:'"polyline"'},{value:'"radialGradient"'},{value:'"rect"'},{value:'"set"'},{value:'"stop"'},{value:'"switch"'},{value:'"text"'},{value:'"textPath"'},{value:'"tspan"'},{value:'"use"'},{value:'"view"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/base-control/index.tsx#VisualLabel"]={docgenInfo:VisualLabel.__docgenInfo,name:"VisualLabel",path:"packages/components/src/base-control/index.tsx#VisualLabel"})}catch(__react_docgen_typescript_loader_error){}try{BaseControl.displayName="BaseControl",BaseControl.__docgenInfo={description:"",displayName:"BaseControl",props:{__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The HTML `id` of the control element (passed in as a child to `BaseControl`) to which labels and help text are being generated.\nThis is necessary to accessibly associate the label with that element.\n\nThe recommended way is to use the `useBaseControlProps` hook, which takes care of generating a unique `id` for you.\nOtherwise, if you choose to pass an explicit `id` to this prop, you are responsible for ensuring the uniqueness of the `id`.",name:"id",required:!1,type:{name:"string"}},help:{defaultValue:null,description:"Additional description for the control.\n\nThe element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",name:"help",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content to be displayed within the `BaseControl`.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/base-control/index.tsx#BaseControl"]={docgenInfo:BaseControl.__docgenInfo,name:"BaseControl",path:"packages/components/src/base-control/index.tsx#BaseControl"})}catch(__react_docgen_typescript_loader_error){}try{basecontrol.displayName="basecontrol",basecontrol.__docgenInfo={description:"",displayName:"basecontrol",props:{__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"The HTML `id` of the control element (passed in as a child to `BaseControl`) to which labels and help text are being generated.\nThis is necessary to accessibly associate the label with that element.\n\nThe recommended way is to use the `useBaseControlProps` hook, which takes care of generating a unique `id` for you.\nOtherwise, if you choose to pass an explicit `id` to this prop, you are responsible for ensuring the uniqueness of the `id`.",name:"id",required:!1,type:{name:"string"}},help:{defaultValue:null,description:"Additional description for the control.\n\nThe element containing the description will be programmatically associated to the BaseControl by the means of an `aria-describedby` attribute.",name:"help",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"If this property is added, a label will be generated using label property as the content.",name:"label",required:!1,type:{name:"ReactNode"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The content to be displayed within the `BaseControl`.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "big" | "blockquote" | "body" | "br" | "button" | "canvas" | ... 516 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/base-control/index.tsx#basecontrol"]={docgenInfo:basecontrol.__docgenInfo,name:"basecontrol",path:"packages/components/src/base-control/index.tsx#basecontrol"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/utils/space.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>space});const GRID_BASE="4px";function space(value){if(void 0===value)return;if(!value)return"0";const asInt="number"==typeof value?value:Number(value);return"undefined"!=typeof window&&window.CSS?.supports?.("margin",value.toString())||Number.isNaN(asInt)?value.toString():`calc(${GRID_BASE} * ${value})`}},"./node_modules/memize/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function memize(fn,options){var head,tail,size=0;function memoized(){var args,i,node=head,len=arguments.length;searchCache:for(;node;){if(node.args.length===arguments.length){for(i=0;i<len;i++)if(node.args[i]!==arguments[i]){node=node.next;continue searchCache}return node!==head&&(node===tail&&(tail=node.prev),node.prev.next=node.next,node.next&&(node.next.prev=node.prev),node.next=head,node.prev=null,head.prev=node,head=node),node.val}node=node.next}for(args=new Array(len),i=0;i<len;i++)args[i]=arguments[i];return node={args,val:fn.apply(null,args)},head?(head.prev=node,node.next=head):tail=node,size===options.maxSize?(tail=tail.prev).next=null:size++,head=node,node.val}return options=options||{},memoized.clear=function(){head=null,tail=null,size=0},memoized}__webpack_require__.d(__webpack_exports__,{Z:()=>memize})},"./packages/components/src/text-control/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithLabelAndHelpText:()=>WithLabelAndHelpText,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/text-control/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.Z,title:"Components/TextControl",argTypes:{help:{control:{type:"text"}},label:{control:{type:"text"}},onChange:{action:"onChange"},value:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/text-control",badges:[],controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},DefaultTemplate=({onChange,...args})=>{const[value,setValue]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...args,value,onChange:v=>{setValue(v),onChange(v)}})};DefaultTemplate.displayName="DefaultTemplate";const Default=DefaultTemplate.bind({});Default.args={};const WithLabelAndHelpText=DefaultTemplate.bind({});WithLabelAndHelpText.args={...Default.args,label:"Label Text",help:"Help text to explain the input."},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState('');\n  return <TextControl {...args} value={value} onChange={v => {\n    setValue(v);\n    onChange(v);\n  }} />;\n}",...Default.parameters?.docs?.source}}},WithLabelAndHelpText.parameters={...WithLabelAndHelpText.parameters,docs:{...WithLabelAndHelpText.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...args\n}) => {\n  const [value, setValue] = useState('');\n  return <TextControl {...args} value={value} onChange={v => {\n    setValue(v);\n    onChange(v);\n  }} />;\n}",...WithLabelAndHelpText.parameters?.docs?.source}}}}}]);