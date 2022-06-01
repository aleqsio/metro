"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[76],{13591:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>x,frontMatter:()=>m,metadata:()=>o,toc:()=>p});var a=n(87462),d=n(63366),r=(n(67294),n(3905)),l=["components"],m={id:"cli",title:"Metro CLI Options"},i=void 0,o={unversionedId:"cli",id:"cli",isDocsHomePage:!1,title:"Metro CLI Options",description:"The metro command line runner has a number of useful options. You can run `metro",source:"@site/../docs/CLI.md",sourceDirName:".",slug:"/cli",permalink:"/metro/docs/cli",editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/CLI.md",tags:[],version:"current",lastUpdatedAt:1654086865,formattedLastUpdatedAt:"6/1/2022",frontMatter:{id:"cli",title:"Metro CLI Options"},sidebar:"docs",previous:{title:"Configuring Metro",permalink:"/metro/docs/configuration"},next:{title:"Troubleshooting",permalink:"/metro/docs/troubleshooting"}},p=[{value:"<code>build &lt;entry&gt;</code>",id:"build-entry",children:[{value:"Options",id:"options",children:[]}]},{value:"<code>serve</code>",id:"serve",children:[]},{value:"<code>get-dependencies</code>",id:"get-dependencies",children:[{value:"Options",id:"options-1",children:[]}]}],u={toc:p};function x(e){var t=e.components,n=(0,d.Z)(e,l);return(0,r.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"metro")," command line runner has a number of useful options. You can run ",(0,r.mdx)("inlineCode",{parentName:"p"},"metro\n--help")," to view all available options. Here is a brief overview:"),(0,r.mdx)("h2",{id:"build-entry"},(0,r.mdx)("inlineCode",{parentName:"h2"},"build <entry>")),(0,r.mdx)("p",null,"Generates a JavaScript bundle containing the specified entrypoint and its descendants."),(0,r.mdx)("h3",{id:"options"},"Options"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Option"),(0,r.mdx)("th",{parentName:"tr",align:null},"Alias"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Value"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"out")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"O")),(0,r.mdx)("td",{parentName:"tr",align:null},"File name where to store the output"),(0,r.mdx)("td",{parentName:"tr",align:null},"String")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"platform")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"p")),(0,r.mdx)("td",{parentName:"tr",align:null},"Which platform to bundle for"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"web"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"android"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"ios"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"minify")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"z")),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether Metro should minify the bundle"),(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"dev")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"g")),(0,r.mdx)("td",{parentName:"tr",align:null},"Create a development version of the build (",(0,r.mdx)("inlineCode",{parentName:"td"},"process.env.NODE_ENV = 'development'"),")"),(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"config")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"c")),(0,r.mdx)("td",{parentName:"tr",align:null},"Location of the ",(0,r.mdx)("inlineCode",{parentName:"td"},"metro.config.js")," to use"),(0,r.mdx)("td",{parentName:"tr",align:null},"String")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"max-workers")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"j")),(0,r.mdx)("td",{parentName:"tr",align:null},"The number of workers Metro should parallelize the transformer on"),(0,r.mdx)("td",{parentName:"tr",align:null},"Number")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"project-roots")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"P")),(0,r.mdx)("td",{parentName:"tr",align:null},"The root folder of your project"),(0,r.mdx)("td",{parentName:"tr",align:null},"Array")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"source-map")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether Metro should generate source maps"),(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"source-map-url")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"URL where the source map can be found"),(0,r.mdx)("td",{parentName:"tr",align:null},"String")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"legacy-bundler")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether Metro should use the legacy bundler"),(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean")))),(0,r.mdx)("h2",{id:"serve"},(0,r.mdx)("inlineCode",{parentName:"h2"},"serve")),(0,r.mdx)("p",null,"Starts Metro on the given port, building bundles on the fly."),(0,r.mdx)("h2",{id:"get-dependencies"},(0,r.mdx)("inlineCode",{parentName:"h2"},"get-dependencies")),(0,r.mdx)("p",null,"Lists dependencies."),(0,r.mdx)("h3",{id:"options-1"},"Options"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Option"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"entry-file")),(0,r.mdx)("td",{parentName:"tr",align:null},"Absolute path to the root JS file")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"output")),(0,r.mdx)("td",{parentName:"tr",align:null},"File name where to store the output, ex. /tmp/dependencies.txt")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"platform")),(0,r.mdx)("td",{parentName:"tr",align:null},"The platform extension used for selecting modules")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"transformer")),(0,r.mdx)("td",{parentName:"tr",align:null},"Specify a custom transformer to be used")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"max-workers")),(0,r.mdx)("td",{parentName:"tr",align:null},"Specifies the maximum number of workers the worker-pool will spawn for transforming files. This defaults to the number of the cores available on your machine.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"dev")),(0,r.mdx)("td",{parentName:"tr",align:null},"If false, skip all dev-only code path")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"verbose")),(0,r.mdx)("td",{parentName:"tr",align:null},"Enables logging")))))}x.isMDXComponent=!0}}]);