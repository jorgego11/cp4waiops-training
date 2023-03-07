"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[4411],{7258:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return k}});var n=a(3366),r=(a(7294),a(4983)),l=a(4295),o=["components"],i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},p=c("Accordion"),m=c("AccordionItem"),s=c("InlineNotification"),u={_frontmatter:i},d=l.Z;function k(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)(d,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to install the CP4WAIOPS Operator you first have to create the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Namespace"),(0,r.kt)("li",{parentName:"ul"},"OperatorGroup"),(0,r.kt)("li",{parentName:"ul"},"IBM Pull Secret (Entitlement)")),(0,r.kt)("a",{href:"https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.6.0?topic=manager-starter-installation-cli",target:"_blank"},"🌏 Documentation for the Task: Online starter installation of CP4WAIOPS"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",null,"🚀 TASK: Create the Namespace"),(0,r.kt)("p",null,"Create a namespace called ",(0,r.kt)("inlineCode",{parentName:"p"},"cp4waiops"),"."),(0,r.kt)(p,{mdxType:"Accordion"},(0,r.kt)(m,{title:"💡 Need Help?",mdxType:"AccordionItem"},(0,r.kt)("h3",null,"Create the namespace (project)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a namespace called ",(0,r.kt)("inlineCode",{parentName:"p"},"cp4waiops"),", by running the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"oc create namespace cp4waiops\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This creates the ",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace")," in which you will install CP4WAIOPS")))),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",null,"🚀 TASK: Create the Operator Group"),(0,r.kt)("p",null,"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"Operator Group")," as described in the Documentation."),(0,r.kt)(p,{mdxType:"Accordion"},(0,r.kt)(m,{title:"💡 Need Help?",mdxType:"AccordionItem"},(0,r.kt)("h3",null,"Create the OperatorGroup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the Operator group by running the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"cat << EOF | oc apply -f -\napiVersion: operators.coreos.com/v1\nkind: OperatorGroup\nmetadata:\n  name: cp4waiops-operator-group\n  namespace: cp4waiops\nspec:\n  targetNamespaces:\n    - cp4waiops\nEOF\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This creates the ",(0,r.kt)("inlineCode",{parentName:"p"},"OperatorGroup")," needed for the Operator to deploy into the ",(0,r.kt)("inlineCode",{parentName:"p"},"cp4waiops")," Namespace")))),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("h2",null,"🚀 TASK: Create the Pull Secret"),(0,r.kt)("p",null,"Create the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pull Secret")," as described in the Documentation with your Entitlement Key from the ",(0,r.kt)("a",{href:"https://myibm.ibm.com/products-services/containerlibrary",target:"_blank"},"MyIBM Container Software Library"),"."),(0,r.kt)(s,{kind:"error",mdxType:"InlineNotification"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Important - This step is crucial to the installation")),(0,r.kt)("p",null,"If you don’t create a secret with a valid Image Pull Token, your installation will fail. ")),(0,r.kt)(p,{mdxType:"Accordion"},(0,r.kt)(m,{title:"💡 Need Help?",mdxType:"AccordionItem"},(0,r.kt)("h3",null,"Create the entitlement key pull secret"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in to ",(0,r.kt)("a",{href:"https://myibm.ibm.com/products-services/containerlibrary",target:"_blank"},"MyIBM Container Software Library")," with the IBMid.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("em",{parentName:"p"},"Entitlement keys")," section, select ",(0,r.kt)("strong",{parentName:"p"},"Copy key")," to copy your entitlement key to the clipboard.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'oc create secret docker-registry ibm-entitlement-key \\\n    --docker-username=cp \\\n    --docker-password="_entitlement_key_from_step_2_" \\\n    --docker-server=cp.icr.io \\\n    --namespace=cp4waiops\n')),(0,r.kt)("p",{parentName:"li"}," Where ",(0,r.kt)("inlineCode",{parentName:"p"},'"_entitlement_key_from_step_2_"')," is the entitlement key that you copied in the previous step."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This creates the ",(0,r.kt)("inlineCode",{parentName:"p"},"Secret")," with your IBM Entitlement that will allow the images to be pulled from the IBM Container Registry")))))}k.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),r=a(8650),l=a.n(r),o=a(5444),i=a(9403),c=a(6835),p=a(5900),m=a.n(p),s=function(e){var t,a=e.title,r=e.theme,l=e.tabs,o=void 0===l?[]:l;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},u=function(e){var t=e.relativePagePath,a=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||r,i=l.baseUrl,c=l.subDirectory,p=i+"/edit/"+l.branch+c+"/src/pages"+t;return i?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},d=a(4275),k=a(1721),h=function(e){function t(){return e.apply(this,arguments)||this}return(0,k.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,i=r.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),c=a===i,p=new RegExp(i+"/?(#.*)?$"),s=r.replace(p,a);return n.createElement("li",{key:e,className:m()((t={},t["PageTabs-module--selected-item--aBB0K"]=c,t),"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+s},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},c))))))},t}(n.Component),b=h,N=a(2881),g=a(6958),y=a(36),f=function(e){var t=e.date,a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,r=e.location,p=e.Title,m=t.frontmatter,k=void 0===m?{}:m,h=t.relativePagePath,y=t.titleType,w=k.tabs,E=k.title,v=k.theme,C=k.description,P=k.keywords,T=k.date,x=(0,g.Z)().interiorTheme,I=(0,o.useStaticQuery)("2456312558").site.pathPrefix,O=I?r.pathname.replace(I,""):r.pathname,_=w?O.split("/").filter(Boolean).slice(-1)[0]||l()(w[0],{lower:!0}):"",S=v||x;return n.createElement(c.Z,{tabs:w,homepage:!1,theme:S,pageTitle:E,pageDescription:C,pageKeywords:P,titleType:y},n.createElement(s,{title:p?n.createElement(p,null):E,label:"label",tabs:w,theme:S}),w&&n.createElement(b,{title:E,slug:O,tabs:w,currentTab:_}),n.createElement(N.Z,{padded:!0},a,n.createElement(u,{relativePagePath:h}),n.createElement(f,{date:T})),n.createElement(d.Z,{pageContext:t,location:r,slug:O,tabs:w,currentTab:_}),n.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-03-installing-operator-03-installing-operator-03-mdx-fae47c46bca17142e6bb.js.map