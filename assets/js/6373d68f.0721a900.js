"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[874],{3905:(e,n,a)=>{a.r(n),a.d(n,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>p});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},i.apply(this,arguments)}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function m(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=t.createContext({}),p=function(e){return function(n){var a=s(n.components);return t.createElement(e,i({},n,{components:a}))}},s=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):m(m({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(d.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},x=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(a),c=o,u=p["".concat(r,".").concat(c)]||p[c]||f[c]||i;return a?t.createElement(u,m(m({ref:n},d),{},{components:a})):t.createElement(u,m({ref:n},d))}));function h(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=x;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m[u]="string"==typeof e?e:o,r[1]=m;for(var d=2;d<i;d++)r[d]=a[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}x.displayName="MDXCreateElement"},54112:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>m,metadata:()=>d,toc:()=>s});var t=a(83117),o=a(80102),i=(a(67294),a(3905)),r=["components"],m={id:"source-map-format",title:"Source Map Format"},l=void 0,d={unversionedId:"source-map-format",id:"source-map-format",title:"Source Map Format",description:"Metro produces standard source maps along with its JavaScript bundle output. In addition to the standard information, Metro encodes extra information in vendor-specific fields within the source map. This page serves as a specification for this encoding.",source:"@site/../docs/SourceMapFormat.md",sourceDirName:".",slug:"/source-map-format",permalink:"/metro/docs/source-map-format",draft:!1,editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/SourceMapFormat.md",tags:[],version:"current",lastUpdatedAt:1676458555,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{id:"source-map-format",title:"Source Map Format"},sidebar:"docs",previous:{title:"Module Resolution",permalink:"/metro/docs/resolution"}},p={},s=[{value:"<code>x_facebook_sources</code>",id:"x_facebook_sources",level:2},{value:"Metadata tuple",id:"metadata-tuple",level:3},{value:"Function map",id:"function-map",level:4},{value:"Function map <code>mappings</code> field encoding",id:"function-map-mappings-field-encoding",level:5},{value:"Example",id:"example",level:3}],c={toc:s},u="wrapper";function f(e){var n=e.components,a=(0,o.Z)(e,r);return(0,i.mdx)(u,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Metro produces standard ",(0,i.mdx)("a",{parentName:"p",href:"https://sourcemaps.info/spec.html"},"source maps")," along with its JavaScript bundle output. In addition to the standard information, Metro encodes extra information in ",(0,i.mdx)("a",{parentName:"p",href:"https://sourcemaps.info/spec.html#h.ghqpj1ytqjbm"},"vendor-specific fields")," within the source map. This page serves as a specification for this encoding."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"The content on this page assumes familiarity with the ",(0,i.mdx)("a",{parentName:"p",href:"https://sourcemaps.info/spec.html"},"source map specification"),". Check out ",(0,i.mdx)("a",{parentName:"p",href:"https://www.bugsnag.com/blog/source-maps"},"Anatomy of source maps")," for a general introduction to source maps and how they work.")),(0,i.mdx)("h2",{id:"x_facebook_sources"},(0,i.mdx)("inlineCode",{parentName:"h2"},"x_facebook_sources")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"x_facebook_sources")," field encodes metadata about source files in a source map. Each piece of metadata represents some attribute intrinsic to the source code of that particular file - for example, the result of running some analysis over the AST. This allows tools such as debuggers and JS engines to access such analyses efficiently, without needing to parse or even have access to the source code."),(0,i.mdx)("p",null,"In the same way that the standard ",(0,i.mdx)("a",{parentName:"p",href:"https://sourcemaps.info/spec.html#h.ghqpj1ytqjbm:~:text=sourceRoot%22%3A%20%22%22%2C-,%22sources%22%3A,-%5B%22foo.js%22%2C%20%22bar"},(0,i.mdx)("inlineCode",{parentName:"a"},"sources"))," field is a list of source URLs and ",(0,i.mdx)("a",{parentName:"p",href:"https://sourcemaps.info/spec.html#h.ghqpj1ytqjbm:~:text=js%22%2C%20%22bar.js%22%5D%2C-,%22sourcesContent%22%3A,-%5Bnull%2C%20null%5D%2C"},(0,i.mdx)("inlineCode",{parentName:"a"},"sourcesContent"))," is a list of (optional) source code strings, ",(0,i.mdx)("inlineCode",{parentName:"p"},"x_facebook_sources")," is a list of optional ",(0,i.mdx)("strong",{parentName:"p"},"metadata tuples"),". The ",(0,i.mdx)("em",{parentName:"p"},"i"),"-th metadata tuple (",(0,i.mdx)("inlineCode",{parentName:"p"},"x_facebook_sources[i]"),") corresponds to the source file whose URL is ",(0,i.mdx)("inlineCode",{parentName:"p"},"sources[i]"),"."),(0,i.mdx)("p",null,"In nested (indexed) source maps, ",(0,i.mdx)("inlineCode",{parentName:"p"},"x_facebook_sources")," may appear as part of any nested source map in ",(0,i.mdx)("a",{parentName:"p",href:"https://sourcemaps.info/spec.html#h.535es3xeprgt"},(0,i.mdx)("inlineCode",{parentName:"a"},"sections"))," that itself has a ",(0,i.mdx)("inlineCode",{parentName:"p"},"sources")," field."),(0,i.mdx)("p",null,"If present, ",(0,i.mdx)("inlineCode",{parentName:"p"},"x_facebook_sources")," may be a different length than ",(0,i.mdx)("inlineCode",{parentName:"p"},"sources")," (but usually shouldn't be). In particular, if it's shorter than ",(0,i.mdx)("inlineCode",{parentName:"p"},"sources"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"x_facebook_sources")," interpreted as if it were padded with ",(0,i.mdx)("inlineCode",{parentName:"p"},"null")," values to match the length of ",(0,i.mdx)("inlineCode",{parentName:"p"},"sources"),"."),(0,i.mdx)("admonition",{type:"info"},(0,i.mdx)("p",{parentName:"admonition"},"If you are writing a tool that processes source maps generated by Metro, and want to generate a new source map containing a valid ",(0,i.mdx)("inlineCode",{parentName:"p"},"x_facebook_sources")," field, you'll mainly need to ensure that ",(0,i.mdx)("inlineCode",{parentName:"p"},"x_facebook_sources[i]")," still corresponds to ",(0,i.mdx)("inlineCode",{parentName:"p"},"sources[i]")," in the output - even if your tool reorders, adds or deletes elements in ",(0,i.mdx)("inlineCode",{parentName:"p"},"sources"),". Notably, this can be done ",(0,i.mdx)("em",{parentName:"p"},"without")," parsing/decoding the metadata tuples: unless your tool actively needs to access the information within them, you can treat them as opaque blobs of JSON."),(0,i.mdx)("p",{parentName:"admonition"},"If a tool cannot guarantee that the ",(0,i.mdx)("inlineCode",{parentName:"p"},"sources")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"x_facebook_sources")," arrays will stay in sync, it should delete the ",(0,i.mdx)("inlineCode",{parentName:"p"},"x_facebook_sources")," field from its output.")),(0,i.mdx)("h3",{id:"metadata-tuple"},"Metadata tuple"),(0,i.mdx)("p",null,"Each metadata tuple is encoded as an array of zero or more entries. Each entry may be ",(0,i.mdx)("inlineCode",{parentName:"p"},"null")," to signify that it's missing. A run of trailing ",(0,i.mdx)("inlineCode",{parentName:"p"},"null"),"s may be truncated from the end of the tuple with no change in meaning. The metadata tuple itself may also be ",(0,i.mdx)("inlineCode",{parentName:"p"},"null")," to signify that the source file has no associated metadata."),(0,i.mdx)("p",null,"The indices in each metadata tuple are assigned as follows:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Index 0: ",(0,i.mdx)("a",{parentName:"li",href:"#function-map"},"Function map")," or ",(0,i.mdx)("inlineCode",{parentName:"li"},"null"),".",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"In Metro, this is the result of calling ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/facebook/metro/blob/main/packages/metro-source-map/src/generateFunctionMap.js"},(0,i.mdx)("inlineCode",{parentName:"a"},"generateFunctionMap"))," on the source AST."))),(0,i.mdx)("li",{parentName:"ul"},"Index 1-\u221e: Reserved for future use.")),(0,i.mdx)("h4",{id:"function-map"},"Function map"),(0,i.mdx)("p",null,"A function map is encoded as an object with the following two fields:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"names"),": An array of strings."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"mappings"),": A string following the ",(0,i.mdx)("a",{parentName:"li",href:"#function-map-mappings-field-encoding"},"encoding")," described below.")),(0,i.mdx)("p",null,"When decoded, ",(0,i.mdx)("inlineCode",{parentName:"p"},"mappings")," represents a list of 3-tuples of integers: ",(0,i.mdx)("inlineCode",{parentName:"p"},"(column, nameIndex, line), (column, nameIndex, line), ..."),". The list is ordered by ",(0,i.mdx)("inlineCode",{parentName:"p"},"line")," and then ",(0,i.mdx)("inlineCode",{parentName:"p"},"column"),"."),(0,i.mdx)("p",null,"The presence of a 3-tuple ",(0,i.mdx)("inlineCode",{parentName:"p"},"(column, nameIndex, line)")," means that the ",(0,i.mdx)("em",{parentName:"p"},"local function name")," in the code region beginning at ",(0,i.mdx)("inlineCode",{parentName:"p"},"line")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"column")," (in the source file described by the current metadata tuple) is ",(0,i.mdx)("inlineCode",{parentName:"p"},"names[nameIndex]"),"."),(0,i.mdx)("h5",{id:"function-map-mappings-field-encoding"},"Function map ",(0,i.mdx)("inlineCode",{parentName:"h5"},"mappings")," field encoding"),(0,i.mdx)("p",null,"The value of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"mappings")," field is described by the ",(0,i.mdx)("em",{parentName:"p"},"Mappings")," production of the grammar detailed below."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},'Mappings =  [ ";" ] LineMappings { ";" { ";" } LineMappings }')),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},'LineMappings =  FirstColumnMapping "," ColumnMapping')),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"FirstColumnMapping =  VLQ VLQ VLQ")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"ColumnMapping =  VLQ VLQ [ VLQ ]")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("inlineCode",{parentName:"li"},"VLQ =")," ",(0,i.mdx)("em",{parentName:"li"},"A single Base64-encoded variable-length quantity, as defined in the ",(0,i.mdx)("a",{parentName:"em",href:"https://sourcemaps.info/spec.html#h.crcf4lqeivt8"},"source map specification")),".")),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"The above grammar uses the following BNF-like notation:"),(0,i.mdx)("table",{parentName:"admonition"},(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Notation"),(0,i.mdx)("th",{parentName:"tr",align:null},"Meaning"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"[ X ]")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("em",{parentName:"td"},"X")," appears zero or 1 times.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"{ X }")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("em",{parentName:"td"},"X")," appears 0 or more times.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},'"foo"')),(0,i.mdx)("td",{parentName:"tr",align:null},"The literal characters ",(0,i.mdx)("inlineCode",{parentName:"td"},"foo"),"."))))),(0,i.mdx)("p",null,"The three VLQs in ",(0,i.mdx)("em",{parentName:"p"},"FirstColumnMapping")," or ",(0,i.mdx)("em",{parentName:"p"},"ColumnMapping")," represent, in this order:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("strong",{parentName:"li"},"Column delta"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"In ",(0,i.mdx)("em",{parentName:"li"},"FirstColumnMapping"),": The column offset from the beginning of the line. (0 = first column)"),(0,i.mdx)("li",{parentName:"ul"},"In ",(0,i.mdx)("em",{parentName:"li"},"ColumnMapping"),": The column offset from the last-encountered ",(0,i.mdx)("em",{parentName:"li"},"FirstColumnMapping")," or ",(0,i.mdx)("em",{parentName:"li"},"ColumnMapping"),"."))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("strong",{parentName:"li"},"Name delta"),": The name index offset from the last-encountered ",(0,i.mdx)("em",{parentName:"li"},"FirstColumnMapping")," or ",(0,i.mdx)("em",{parentName:"li"},"ColumnMapping"),". This is ",(0,i.mdx)("em",{parentName:"li"},"not")," reset between lines."),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("strong",{parentName:"li"},"Line delta"),": The line offset from the last-encountered ",(0,i.mdx)("em",{parentName:"li"},"FirstColumnMapping")," or ",(0,i.mdx)("em",{parentName:"li"},"ColumnMapping"),". This is ",(0,i.mdx)("em",{parentName:"li"},"not")," reset between lines.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"This MUST be 0 (Base64 VLQ: ",(0,i.mdx)("inlineCode",{parentName:"li"},"A"),") if it is part of a ",(0,i.mdx)("em",{parentName:"li"},"ColumnMapping"),"."),(0,i.mdx)("li",{parentName:"ul"},"Implementations SHOULD omit this field from the encoded form of ",(0,i.mdx)("em",{parentName:"li"},"ColumnMapping"),".")))),(0,i.mdx)("h3",{id:"example"},"Example"),(0,i.mdx)("p",null,"Given a single source file called ",(0,i.mdx)("inlineCode",{parentName:"p"},"file.js"),", a complete source map might look like this:"),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"Comments are for illustrative purposes - the source map format does not allow comments.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "version": 3,\n  "sources": ["file.js"],\n  "sourcesContent": ["function a(){} function b(){}"],\n  "mappings": "AAAA", // NOTE: Simplified\n  "x_facebook_sources": [\n    // Metadata tuple for source #0 (file.js)\n    [\n      // Metadata item #0.0 = function map for source #0 (file.js)\n      {\n        // a from 1:0\n        // <global> from 1:14\n        // b from 1:15\n        // (See detailed decoding procedure below.)\n        "mappings": "AAA,cC,CC",\n        "names": [\n          "a",\n          "<global>",\n          "b",\n        ]\n      }\n    ]\n  ]\n}\n')),(0,i.mdx)("p",null,"The decoding procedure for the function map in the above example is illustrated by the following code:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"const decoded = [];\nconst names = ['a', '<global>', 'b']; // From the function map\n\nlet column = 0, nameIndex = 0, line = 1;\ncolumn += 0 /* A */; nameIndex += 0 /* A */; line += 0 /* A */;\ndecoded.push({column, name: names[nameIndex] /* 'a' */, line});\n\ncolumn += 14 /* c */; nameIndex += 1 /* C */; // no line delta\ndecoded.push({column, name: names[nameIndex] /* '<global>' */, line});\n\ncolumn += 1 /* C */; nameIndex += 1 /* C */; // no line delta\ndecoded.push({column, name: names[nameIndex] /* 'b' */, line});\n\n/*\n  decoded = [\n    {column: 0, name: 'a', line: 1},\n    {column: 14, name: '<global>', line: 1},\n    {column: 15, name: 'b', line: 1},\n  ]\n*/\n")))}f.isMDXComponent=!0}}]);