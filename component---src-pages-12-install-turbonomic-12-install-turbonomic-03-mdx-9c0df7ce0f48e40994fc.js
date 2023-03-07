"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[624],{1523:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return p}});var a,r=n(3366),l=(n(7294),n(4983)),o=n(4295),i=["components"],s={},m=(a="InlineNotification",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),u={_frontmatter:s},c=o.Z;function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)(c,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"🚀 STEP: Create the Turbonomic Instance"),(0,l.kt)("a",{href:"https://www.ibm.com/docs/en/tarm/8.7.5?topic=clusters-installing-using-red-hat-openshift-operatorhub",target:"_blank"},"🌏 Documentation for the Task: Create the Turbonomic Instance (Start at Step 5.)"),(0,l.kt)("p",null,"In this section you will deploy a Turbonomic Instance into your Cluster using the Operator installed in the previous section."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on ",(0,l.kt)("inlineCode",{parentName:"p"},"Turbonomic Platform Operator")),(0,l.kt)("img",{parentName:"li",src:"./../images/turbonomic/09_turbo.png",alt:"turbo"}))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"On the Turbonomic Operator page you have all the relevant information for the Operator.\nClick ",(0,l.kt)("inlineCode",{parentName:"p"},"Create Instance")),(0,l.kt)("img",{parentName:"li",src:"./../images/turbonomic/10_turbo.png",alt:"turbo"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You could specify all the parameters in the Form View, but for convenience, switch to the YAML view.\nClick on ",(0,l.kt)("inlineCode",{parentName:"p"},"YAML View")),(0,l.kt)("img",{parentName:"li",src:"./../images/turbonomic/11_turbo.png",alt:"turbo"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Paste the code below into the YAML code field, overwriting the existing content"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: charts.helm.k8s.io/v1\nkind: Xl\nmetadata:\n  name: xl-release\n  namespace: turbonomic\nspec:\n  webhook:\n    enabled: true\n  servicenow:\n    enabled: true\n  websphere:\n    enabled: true\n  jvm:\n    enabled: true\n  actionscript:\n    enabled: true\n  xen:\n    enabled: false\n  mysql:\n    enabled: true\n  global:\n    customImageNames: false\n    repository: registry.connect.redhat.com/turbonomic\n    storageClassName: ibmc-block-gold\n    storageSelector: false\n    tag: 8.7.5\n  tomcat:\n    enabled: true\n  netapp:\n    enabled: true\n  hyperflex:\n    enabled: true\n  ucs:\n    enabled: true\n  udt:\n    enabled: true\n  mssql:\n    enabled: true\n  nutanix:\n    enabled: true\n  weblogic:\n    enabled: false\n  hyperv:\n    enabled: true\n  vcenter:\n    enabled: true\n  hpe3par:\n    enabled: true\n  oneview:\n    enabled: true\n  vmax:\n    enabled: true\n  instana:\n    enabled: true\n  azure:\n    enabled: true\n  actionstream-kafka:\n    enabled: false\n  scaleio:\n    enabled: false\n  wmi:\n    enabled: true\n  newrelic:\n    enabled: true\n  gcp:\n    enabled: true\n  appdynamics:\n    enabled: true\n  vmm:\n    enabled: true\n  jboss:\n    enabled: true\n  pure:\n    enabled: true\n  ibmstorage-flashsystem:\n    enabled: true\n  horizon:\n    enabled: true\n  appinsights:\n    enabled: true\n  dynatrace:\n    enabled: true\n  aws:\n    enabled: true\n  openshiftingress:\n    enabled: true\n  snmp:\n    enabled: true\n  oracle:\n    enabled: true\n  kubeturbo:\n    enabled: true\n  prometheus:\n    enabled: true\n  prometurbo:\n    enabled: true\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"The result should look like this.\nClick on ",(0,l.kt)("inlineCode",{parentName:"p"},"Create")),(0,l.kt)("img",{parentName:"li",src:"./../images/turbonomic/13_turbo.png",alt:"turbo"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on ",(0,l.kt)("inlineCode",{parentName:"p"},"Create")),(0,l.kt)("img",{parentName:"li",src:"./../images/turbonomic/14_turbo.png",alt:"turbo"}))),(0,l.kt)("h2",null,"Create ClusterRolesBindings"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open your Openshift Web Console")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on the ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," in the upper right corner"),(0,l.kt)("img",{parentName:"li",src:"./../images/prereqs/01_prereqs.png",alt:"image"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy and paste the following code"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\nname: turbonomic-admin1\nsubjects:\n- kind: ServiceAccount\n    name: t8c-operator\n    namespace: turbonomic\nroleRef:\napiGroup: rbac.authorization.k8s.io\nkind: ClusterRole\nname: cluster-admin\n---\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\nname: turbonomic-admin2\nsubjects:\n- kind: ServiceAccount\n    name: turbo-user\n    namespace: turbonomic\nroleRef:\napiGroup: rbac.authorization.k8s.io\nkind: ClusterRole\nname: cluster-admin\n---\nkind: ClusterRoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\nname: turbonomic-admin2\nsubjects:\n- kind: ServiceAccount\n    name: default\n    namespace: turbonomic\nroleRef:\napiGroup: rbac.authorization.k8s.io\nkind: ClusterRole\nname: cluster-admin\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("inlineCode",{parentName:"p"},"Create")))),(0,l.kt)("h2",null,"Follow Installation Progress"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on ",(0,l.kt)("inlineCode",{parentName:"p"},"Workloads/Pods")),(0,l.kt)("img",{parentName:"li",src:"./../images/turbonomic/16_turbo.png",alt:"turbo"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Make sure you have selected the ",(0,l.kt)("inlineCode",{parentName:"p"},"turbonomic")," Project"),(0,l.kt)("img",{parentName:"li",src:"./../images/turbonomic/17_turbo.png",alt:"turbo"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Sort by ",(0,l.kt)("inlineCode",{parentName:"p"},"Ready")," column "),(0,l.kt)("img",{parentName:"li",src:"./../images/turbonomic/18_turbo.png",alt:"turbo"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Wait for all Pods to have ",(0,l.kt)("inlineCode",{parentName:"p"},"1/1")," Status."),(0,l.kt)("img",{parentName:"li",src:"./../images/turbonomic/19_turbo.png",alt:"turbo"}))),(0,l.kt)(m,{kind:"error",mdxType:"InlineNotification"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Important - Installation takes some time")),(0,l.kt)("p",null,"Installation can take 10-30 minutes, just ignore error states like ",(0,l.kt)("inlineCode",{parentName:"p"},"CrashLoopBackOff"),"."),(0,l.kt)("p",null,"If after 30 minutes there are still errors, please check with your instructor.")),(0,l.kt)(m,{kind:"success",mdxType:"InlineNotification"},(0,l.kt)("p",null,"You have successfully finished this Chapter."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"You are now done with the chapter on  Installing Turbonomic")),(0,l.kt)("p",null,"Please continue to the next chapter to learn how to Configure Turbonomic.")))}p.isMDXComponent=!0},4295:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(7294),r=n(8650),l=n.n(r),o=n(5444),i=n(9403),s=n(6835),m=n(5900),u=n.n(m),c=function(e){var t,n=e.title,r=e.theme,l=e.tabs,o=void 0===l?[]:l;return a.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===r,t))},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},n)))))},p=function(e){var t=e.relativePagePath,n=e.repository,r=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,l=n||r,i=l.baseUrl,s=l.subDirectory,m=i+"/edit/"+l.branch+s+"/src/pages"+t;return i?a.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"bx--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},d=n(4275),b=n(1721),k=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,r=e.slug,i=r.split("/").filter(Boolean).slice(-1)[0],s=n.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),s=n===i,m=new RegExp(i+"/?(#.*)?$"),c=r.replace(m,n);return a.createElement("li",{key:e,className:u()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},a.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},a.createElement("nav",{"aria-label":t},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(a.Component),g=k,h=n(2881),N=n(6958),f=n(36),v=function(e){var t=e.date,n=new Date(t);return t?a.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(f.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},C=function(e){var t=e.pageContext,n=e.children,r=e.location,m=e.Title,u=t.frontmatter,b=void 0===u?{}:u,k=t.relativePagePath,f=t.titleType,C=b.tabs,w=b.title,y=b.theme,E=b.description,x=b.keywords,P=b.date,T=(0,N.Z)().interiorTheme,I=(0,o.useStaticQuery)("2456312558").site.pathPrefix,R=I?r.pathname.replace(I,""):r.pathname,S=C?R.split("/").filter(Boolean).slice(-1)[0]||l()(C[0],{lower:!0}):"",_=y||T;return a.createElement(s.Z,{tabs:C,homepage:!1,theme:_,pageTitle:w,pageDescription:E,pageKeywords:x,titleType:f},a.createElement(c,{title:m?a.createElement(m,null):w,label:"label",tabs:C,theme:_}),C&&a.createElement(g,{title:w,slug:R,tabs:C,currentTab:S}),a.createElement(h.Z,{padded:!0},n,a.createElement(p,{relativePagePath:k}),a.createElement(v,{date:P})),a.createElement(d.Z,{pageContext:t,location:r,slug:R,tabs:C,currentTab:S}),a.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-12-install-turbonomic-12-install-turbonomic-03-mdx-9c0df7ce0f48e40994fc.js.map