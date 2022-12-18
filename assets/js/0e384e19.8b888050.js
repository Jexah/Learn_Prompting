"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,g=m["".concat(p,".").concat(h)]||m[h]||u[h]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a=n.p+"assets/images/novice-a26ecc0bd9cc1ea2a01750b07d889680.png",i={sidebar_position:1},s="Welcome",p={unversionedId:"intro",id:"intro",title:"Welcome",description:"Welcome to this course on Prompt Engineering!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v0.0.2/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\ud83d\ude03 Basics",permalink:"/docs/category/-basics"}},l={},c=[{value:"The single most important part of this course is your feedback!",id:"the-single-most-important-part-of-this-course-is-your-feedback",level:2},{value:"Course Philosophy",id:"course-philosophy",level:2},{value:"How to read",id:"how-to-read",level:2},{value:"Chapters",id:"chapters",level:2},{value:"Novices",id:"novices",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"welcome"},"Welcome"),(0,r.kt)("p",null,"Welcome to this course on Prompt Engineering! "),(0,r.kt)("p",null,'I like to think of Prompt Engineering (PE) as "',(0,r.kt)("strong",{parentName:"p"},"How to communicate with AI to get it to do what you want"),'". '),(0,r.kt)("p",null,"With many of the recent advances in AI,\nthis has become a particularly important skill.\nThis course focuses on applied prompt engineering techniques. Minimal knowledge of\nmachine learning is expected; if you have no idea what any of this stuff means, read ",(0,r.kt)("a",{parentName:"p",href:"#novices"},"this"),"."),(0,r.kt)("h2",{id:"the-single-most-important-part-of-this-course-is-your-feedback"},"The single most important part of this course is your feedback!"),(0,r.kt)("p",null,"If you have any questions, comments, or suggestions, please make an ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"issue")),", email me at ",(0,r.kt)("a",{parentName:"p",href:"mailto:learnprompting@gmail.com"},"learnprompting@gmail.com"),", or reach out over ",(0,r.kt)("a",{parentName:"p",href:"https://learnprompting.org/discord"},"Discord"),"/",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/learn_prompting"},"Twitter"),"."),(0,r.kt)("p",null,"Even the smallest amount of feedback is very helpful!"),(0,r.kt)("h2",{id:"course-philosophy"},"Course Philosophy"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Quick Iterations")," - Since new PE content is published almost daily,\nI will update this course frequently with short articles about new techniques.\nLet me know what you want to hear more about!"),(0,r.kt)("p",null,"Part of this philosophy is ",(0,r.kt)("strong",{parentName:"p"},"error iteration"),"; if you ever see something that you\ndon't quite understand, even something small, that's on me. ",(0,r.kt)("strong",{parentName:"p"},"Please make an ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"issue")),"!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Focus on Practicality")," - I will focus on applied, practical techniques that you can use\nimmediately for your applications."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples ASAP")," - I try to put examples in the articles as soon as possible,\nso that you can get a feel for the techniques as soon as possible."),(0,r.kt)("p",null,"I'll philosophize more about this when I have time to \ud83d\ude0a"),(0,r.kt)("h2",{id:"how-to-read"},"How to read"),(0,r.kt)("p",null,"It is not necessary to read all chapters in order. Read what interests you!"),(0,r.kt)("p",null,"That being said, Basics is a good place to start,\nand it discusses some very simple, but powerful, prompt engineering techniques."),(0,r.kt)("h2",{id:"chapters"},"Chapters"),(0,r.kt)("p",null,"Here is a quick summary of each chapter:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Basics"),": Intro to PE and simple PE techniques"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Advanced Applications"),": Some very powerful, but more advanced applications of PE"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Applied Prompting"),": Some complete walkthroughs of the PE process written by community members"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reliability"),": How to make LLMs more reliable"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Images"),": PE for text to image models like DALLE and Stable Diffusion!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prompt Injection"),": Hacking, but for PE"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prompting IDEs"),": Different PE tools"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prompt Tuning"),": Fine tune prompts with gradients"),(0,r.kt)("h2",{id:"novices"},"Novices"),(0,r.kt)("p",null,"If you already have a general idea of prompt engineering, you can skip this section."),(0,r.kt)("p",null,"Otherwise, here is a quick introduction to AI and prompt engineering. Before we get into that,\nit is important to note that you don't need any technical background to do prompt engineering.\nMost of it is trial and error, and you can learn as you go."),(0,r.kt)("p",null,"In recent years, researchers have developed a new class of AI models called ",(0,r.kt)("strong",{parentName:"p"},"Language Models")," (LMs).\nThese models are trained on large amounts of text, and can be used to generate text. Humans can also interact\nwith these models by typing in a some text (a prompt) and seeing what the model says in response.\n",(0,r.kt)("a",{parentName:"p",href:"https://beta.openai.com/playground"},"This website")," is a good place\nto experiment with talking to a language model. Here is a screengrab from the website:"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:a,style:{width:"750px"}})),(0,r.kt)("p",null,'I just typed in "What is the opposite of the word start?" and the AI said "Stop".\nPretty cool! Try asking it to write a story, solve a math problem, or philosophize about the meaning of life.'),(0,r.kt)("p",null,"Sometimes when you ask questions in a better way, the AI will give you a better answer.\nThe process of figuring out these good ways of asking questions is called ",(0,r.kt)("strong",{parentName:"p"},"prompt engineering"),".\nThat is the focus of the rest of this guide."))}m.isMDXComponent=!0}}]);