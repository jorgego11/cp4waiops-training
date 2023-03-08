"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[3172],{6354:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return u}});var n=a(3366),i=(a(7294),a(4983)),l=a(4295),o=["components"],r={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},m=p("Accordion"),s=p("AccordionItem"),c=p("InlineNotification"),k={_frontmatter:r},d=l.Z;function u(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)(d,Object.assign({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section you will create the connection to Ansible Tower and create your first Runbook."),(0,i.kt)("h2",null,"🚀 TASK: Create the Ansible Tower Connection"),(0,i.kt)("a",{href:"https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.6.0?topic=connections-ansible",target:"_blank"},"🌏 Documentation for the Task: Ansible automation provider"),(0,i.kt)("p",null,"Create the connection to Ansible Tower using the following parameters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"URL for REST API:      from MY_CONFIGURATION.txt\nAuthentication type:   User ID/Password\nUser:                  admin\nPassword:              from MY_CONFIGURATION.txt\n")),(0,i.kt)(m,{mdxType:"Accordion"},(0,i.kt)(s,{title:"💡 Need Help?",mdxType:"AccordionItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"CP4WAIOPS")," “Hamburger” Menu select ",(0,i.kt)("inlineCode",{parentName:"p"},"Define"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Data and tool connections"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add connection"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Under ",(0,i.kt)("inlineCode",{parentName:"p"},"Ansible Automation Controller"),", click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Add connection"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Connect"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"🔎 Get the data from your configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"MY_CONFIGURATION.txt")," - section  ",(0,i.kt)("strong",{parentName:"p"},"2.3 Configure Runbooks - Ansible Automation Controller")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./tools/11_practicum/get_configuration_info.sh > MY_CONFIGURATION.txt\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill out the fields:"),(0,i.kt)("img",{parentName:"li",src:"./../images/29_runbook.png",alt:"image"}),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"URL for REST API:      from MY_CONFIGURATION.txt\nAuthentication type:   User ID/Password\nUser:                  admin\nPassword:              from MY_CONFIGURATION.txt\n\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Done"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Make sure that the Connection Status turn green after a few seconds"))),(0,i.kt)("h2",null,"Check integration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"CP4WAIOPS")," “Hamburger” Menu select ",(0,i.kt)("inlineCode",{parentName:"p"},"Operate"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Automations"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select tab ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify that the Ansible Playbooks have been imported"),(0,i.kt)("img",{parentName:"li",src:"./../images/30_runbook.png",alt:"image"}))))),(0,i.kt)("h2",null,"🚀 TASK: Create a runbook"),(0,i.kt)("a",{href:"https://www.ibm.com/docs/en/cloud-paks/cloud-pak-watson-aiops/3.6.0?topic=library-create-runbook",target:"_blank"},"🌏 Documentation for the Task: Creating a runbook"),(0,i.kt)("p",null,"Create a Runbook based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"CP4WAIOPS Mitigate Robotshop Ratings Outage")," Ansible Playbook."),(0,i.kt)(c,{kind:"success",mdxType:"InlineNotification"},(0,i.kt)("p",null,"🔎 The parameters can also be found in your configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"MY_CONFIGURATION.txt")," - section  ",(0,i.kt)("inlineCode",{parentName:"p"},"2.4 Configure Runbooks - Runbook Parameters")," ")),(0,i.kt)(m,{mdxType:"Accordion"},(0,i.kt)(s,{title:"💡 Need Help?",mdxType:"AccordionItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select tab ",(0,i.kt)("inlineCode",{parentName:"p"},"Runbooks"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Create Runbook"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Name it ",(0,i.kt)("inlineCode",{parentName:"p"},"RobotShop Mitigate MySQL Problem"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add automated step"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"CP4WAIOPS Mitigate Robotshop Ratings Outage"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Select this action"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapping")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"Select"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("inlineCode",{parentName:"p"},"New runbook parameter")),(0,i.kt)("img",{parentName:"li",src:"./../images/31_runbook.png",alt:"image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select tab ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"🔎 Get the data from your configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"MY_CONFIGURATION.txt")," - section  ",(0,i.kt)("inlineCode",{parentName:"p"},"2.4 Configure Runbooks - Runbook Parameters")," "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./tools/11_practicum/get_configuration_info.sh > MY_CONFIGURATION.txt\n")),(0,i.kt)("img",{parentName:"li",src:"./../images/32_runbook.png",alt:"image"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"PROVIDE: my_k8s_apiurl and my_k8s_apikey")," in field ",(0,i.kt)("inlineCode",{parentName:"p"},"Default value (optional)")," with the ",(0,i.kt)("strong",{parentName:"p"},"🗺️ Value")," from the script")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," again")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Publish")))))))}u.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return A}});var n=a(7294),i=a(8650),l=a.n(i),o=a(5444),r=a(9403),p=a(6835),m=a(5900),s=a.n(m),c=function(e){var t,a=e.title,i=e.theme,l=e.tabs,o=void 0===l?[]:l;return n.createElement("div",{className:s()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===i,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},k=function(e){var t=e.relativePagePath,a=e.repository,i=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||i,r=l.baseUrl,p=l.subDirectory,m=r+"/edit/"+l.branch+p+"/src/pages"+t;return r?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},d=a(4275),u=a(1721),N=function(e){function t(){return e.apply(this,arguments)||this}return(0,u.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,r=i.split("/").filter(Boolean).slice(-1)[0],p=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),p=a===r,m=new RegExp(r+"/?(#.*)?$"),c=i.replace(m,a);return n.createElement("li",{key:e,className:s()((t={},t["PageTabs-module--selected-item--aBB0K"]=p,t),"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},p))))))},t}(n.Component),g=N,b=a(2881),C=a(6958),f=a(36),h=function(e){var t=e.date,a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},A=function(e){var t=e.pageContext,a=e.children,i=e.location,m=e.Title,s=t.frontmatter,u=void 0===s?{}:s,N=t.relativePagePath,f=t.titleType,A=u.tabs,P=u.title,y=u.theme,E=u.description,w=u.keywords,T=u.date,I=(0,C.Z)().interiorTheme,v=(0,o.useStaticQuery)("2456312558").site.pathPrefix,x=v?i.pathname.replace(v,""):i.pathname,R=A?x.split("/").filter(Boolean).slice(-1)[0]||l()(A[0],{lower:!0}):"",O=y||I;return n.createElement(p.Z,{tabs:A,homepage:!1,theme:O,pageTitle:P,pageDescription:E,pageKeywords:w,titleType:f},n.createElement(c,{title:m?n.createElement(m,null):P,label:"label",tabs:A,theme:O}),A&&n.createElement(g,{title:P,slug:x,tabs:A,currentTab:R}),n.createElement(b.Z,{padded:!0},a,n.createElement(k,{relativePagePath:N}),n.createElement(h,{date:T})),n.createElement(d.Z,{pageContext:t,location:i,slug:x,tabs:A,currentTab:R}),n.createElement(r.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-06-configure-aimanager-06-configure-aimanager-06-mdx-3961238e9934787724b9.js.map