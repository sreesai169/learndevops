"use strict";(self.webpackChunkldo_docs=self.webpackChunkldo_docs||[]).push([[3467],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},l),{},{components:n})):a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:12},i="11-Dispatch",s={unversionedId:"RoboShop-Project/dispatch",id:"RoboShop-Project/dispatch",title:"11-Dispatch",description:"Dispatch is the service which dispatches the product after purchase. It is written in GoLang, So wanted to install GoLang.",source:"@site/docs/RoboShop-Project/dispatch.md",sourceDirName:"RoboShop-Project",slug:"/RoboShop-Project/dispatch",permalink:"/learndevopsonline/build/docs/RoboShop-Project/dispatch",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/RoboShop-Project/dispatch.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"10-Payment",permalink:"/learndevopsonline/build/docs/RoboShop-Project/payment"},next:{title:"How Tos",permalink:"/learndevopsonline/build/docs/category/how-tos"}},p={},c=[],l={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"11-dispatch"},"11-Dispatch"),(0,o.kt)("p",null,"Dispatch is the service which dispatches the product after purchase. It is written in GoLang, So wanted to install GoLang."),(0,o.kt)("admonition",{title:"Hint",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Developer has chosen GoLang, Check with developer which version of GoLang is needed.")),(0,o.kt)("p",null,"Install GoLang"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yum install golang -y\n")),(0,o.kt)("p",null,"Configure the application."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Our application developed by the developer of our org and it is not having any RPM software just like other softwares. So we need to configure every step manually")),(0,o.kt)("admonition",{title:"Recap",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We already discussed in Linux basics section that applications should run as nonroot user.")),(0,o.kt)("p",null,"Add application User"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"useradd roboshop\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"User ",(0,o.kt)("strong",{parentName:"p"},"roboshop")," is a function / daemon user to run the application. Apart from that we dont use this user to login to server."),(0,o.kt)("p",{parentName:"admonition"},"Also, username ",(0,o.kt)("strong",{parentName:"p"},"roboshop")," has been picked because it more suits to our project name.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We keep application in one standard location. This is a usual practice that runs in the organization.")),(0,o.kt)("p",null,"Lets setup an app directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir /app \n")),(0,o.kt)("p",null,"Download the application code to created app directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -o /tmp/dispatch.zip https://roboshop-artifacts.s3.amazonaws.com/dispatch.zip \ncd /app \nunzip /tmp/dispatch.zip\n")),(0,o.kt)("p",null,"Every application is developed by development team will have some common softwares that they use as libraries. This application also have the same way of defined dependencies in the application configuration."),(0,o.kt)("p",null,"Lets download the dependencies & build the software."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd /app \ngo mod init dispatch\ngo get \ngo build\n")),(0,o.kt)("p",null,"We need to setup a new service in ",(0,o.kt)("strong",{parentName:"p"},"systemd")," so ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl")," can manage this service"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We already discussed in linux basics that advantages of systemctl managing services, Hence we are taking that approach. Which is also a standard way in the OS.")),(0,o.kt)("p",null,"Setup SystemD Payment Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-unit",metastring:"file (systemd) title=/etc/systemd/system/dispatch.service",file:!0,"(systemd)":!0,title:"/etc/systemd/system/dispatch.service"},"[Unit]\nDescription = Dispatch Service\n[Service]\nUser=roboshop\n// highlight-start\nEnvironment=AMQP_HOST=RABBITMQ-IP\n// highlight-end\nEnvironment=AMQP_USER=roboshop\nEnvironment=AMQP_PASS=roboshop123\nExecStart=/app/dispatch\nSyslogIdentifier=dispatch\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Hint! You can create file by using ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"vim /etc/systemd/system/dispatch.service")))),(0,o.kt)("p",null,"Load the service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This above command is because we added a new service, We are telling systemd to reload so it will detect new service.")),(0,o.kt)("p",null,"Start the service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable dispatch \nsystemctl start dispatch\n")))}d.isMDXComponent=!0}}]);