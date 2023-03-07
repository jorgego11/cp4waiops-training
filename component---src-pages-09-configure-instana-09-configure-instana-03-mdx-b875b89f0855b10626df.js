"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[8960],{1906:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return k}});var n=a(3366),i=(a(7294),a(4983)),l=a(4295),r=["components"],o={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},s=p("Accordion"),c=p("AccordionItem"),m=p("InlineNotification"),d={_frontmatter:o},u=l.Z;function k(e){var t=e.components,a=(0,n.Z)(e,r);return(0,i.kt)(u,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",null,"🚀 TASK: Create RobotShop Application in Instana"),(0,i.kt)("a",{href:"https://www.ibm.com/docs/en/instana-observability/current?topic=applications-application-perspectives#creating-an-application-perspective",target:"_blank"},"🌏 Documentation for the Task: Creating an application perspective"),(0,i.kt)("p",null,"In this section you will create an Application Perspective for RobotShop instance using the following parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Kind:             Kubernetes or Container\n\nFilter:           Kubernetes.Namespace = robot-shop\n\n")),(0,i.kt)(s,{mdxType:"Accordion"},(0,i.kt)(c,{title:"💡 Need Help?",mdxType:"AccordionItem"},(0,i.kt)("h2",null,"Create the connection"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On ",(0,i.kt)("inlineCode",{parentName:"p"},"Instana")," homepage click ",(0,i.kt)("inlineCode",{parentName:"p"},"New Applciation Perspective")),(0,i.kt)("img",{parentName:"li",src:"./../images/instana/instana_app_01.png",alt:"slack1"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubernetes or Container")),(0,i.kt)("img",{parentName:"li",src:"./../images/instana/instana_app_02.png",alt:"slack1"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Next"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"+ Add Filter"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Type ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace")," in the search field")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"robot-shop")," "),(0,i.kt)("img",{parentName:"li",src:"./../images/instana/instana_app_03.png",alt:"slack1"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Next"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Name your Application Perspective ",(0,i.kt)("inlineCode",{parentName:"p"},"RobotShop")),(0,i.kt)("img",{parentName:"li",src:"./../images/instana/instana_app_04.png",alt:"slack1"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Create"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After a short while you should see the application information"),(0,i.kt)("img",{parentName:"li",src:"./../images/instana/instana_app_05.png",alt:"slack1"}))))),(0,i.kt)(m,{kind:"error",mdxType:"InlineNotification"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important - Data Collection takes some time")),(0,i.kt)("p",null,"Data Collection can take 10-30 minutes.")))}k.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(7294),i=a(8650),l=a.n(i),r=a(5444),o=a(9403),p=a(6835),s=a(5900),c=a.n(s),m=function(e){var t,a=e.title,i=e.theme,l=e.tabs,r=void 0===l?[]:l;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=r.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===i,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,i=(0,r.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||i,o=l.baseUrl,p=l.subDirectory,s=o+"/edit/"+l.branch+p+"/src/pages"+t;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:s},"Edit this page on GitHub"))):null},u=a(4275),k=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,k.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,o=i.split("/").filter(Boolean).slice(-1)[0],p=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),p=a===o,s=new RegExp(o+"/?(#.*)?$"),m=i.replace(s,a);return n.createElement("li",{key:e,className:c()((t={},t["PageTabs-module--selected-item--aBB0K"]=p,t),"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:""+m},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},p))))))},t}(n.Component),N=g,b=a(2881),h=a(6958),f=a(36),v=function(e){var t=e.date,a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},E=function(e){var t=e.pageContext,a=e.children,i=e.location,s=e.Title,c=t.frontmatter,k=void 0===c?{}:c,g=t.relativePagePath,f=t.titleType,E=k.tabs,C=k.title,x=k.theme,y=k.description,w=k.keywords,P=k.date,T=(0,h.Z)().interiorTheme,_=(0,r.useStaticQuery)("2456312558").site.pathPrefix,A=_?i.pathname.replace(_,""):i.pathname,D=E?A.split("/").filter(Boolean).slice(-1)[0]||l()(E[0],{lower:!0}):"",S=x||T;return n.createElement(p.Z,{tabs:E,homepage:!1,theme:S,pageTitle:C,pageDescription:y,pageKeywords:w,titleType:f},n.createElement(m,{title:s?n.createElement(s,null):C,label:"label",tabs:E,theme:S}),E&&n.createElement(N,{title:C,slug:A,tabs:E,currentTab:D}),n.createElement(b.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(v,{date:P})),n.createElement(u.Z,{pageContext:t,location:i,slug:A,tabs:E,currentTab:D}),n.createElement(o.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-09-configure-instana-09-configure-instana-03-mdx-b875b89f0855b10626df.js.map