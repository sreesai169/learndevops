"use strict";(self.webpackChunkldo_docs=self.webpackChunkldo_docs||[]).push([[3295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:7},i="06-Cart",s={unversionedId:"RoboShop-Project/cart",id:"RoboShop-Project/cart",title:"06-Cart",description:"Cart is a microservice that is responsible for Cart Service in RobotShop e-commerce portal.",source:"@site/docs/RoboShop-Project/cart.md",sourceDirName:"RoboShop-Project",slug:"/RoboShop-Project/cart",permalink:"/learndevopsonline/build/docs/RoboShop-Project/cart",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/RoboShop-Project/cart.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"05-User",permalink:"/learndevopsonline/build/docs/RoboShop-Project/user"},next:{title:"07-MySQL",permalink:"/learndevopsonline/build/docs/RoboShop-Project/mysql"}},p={},l=[],c={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"06-cart"},"06-Cart"),(0,a.kt)("p",null,"Cart is a microservice that is responsible for Cart Service in RobotShop e-commerce portal."),(0,a.kt)("admonition",{title:"Hint",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Developer has chosen NodeJs, Check with developer which version of NodeJS is needed. ")),(0,a.kt)("p",null,"Setup NodeJS repos. Vendor is providing a script to setup the repos. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sL https://rpm.nodesource.com/setup_lts.x | bash\n")),(0,a.kt)("p",null,"Install NodeJS "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yum install nodejs -y\n")),(0,a.kt)("p",null,"Configure the application. Here"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Our application developed by the own developer is not having any RPM software just like other softwares. So we need to configure every step manually")),(0,a.kt)("admonition",{title:"Recap",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We already discussed in Linux basics section that applications should run as nonroot user.")),(0,a.kt)("p",null,"Add application User"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"useradd roboshop\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"User ",(0,a.kt)("strong",{parentName:"p"},"roboshop")," is a function / daemon user to run the application. Apart from that we dont use this user to login to server."),(0,a.kt)("p",{parentName:"admonition"},"Also, username ",(0,a.kt)("strong",{parentName:"p"},"roboshop")," has been picked because it more suits to our project name.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We keep application in one standard location. This is a usual practice that runs in the organization.")),(0,a.kt)("p",null,"Lets setup an app directory. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir /app \n")),(0,a.kt)("p",null,"Download the application code to created app directory. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L -o /tmp/cart.zip https://roboshop-artifacts.s3.amazonaws.com/cart.zip \ncd /app \nunzip /tmp/cart.zip\n")),(0,a.kt)("p",null,"Every application is developed by development team will have some common softwares that they use as libraries. This application also have the same way of defined dependencies in the application configuration."),(0,a.kt)("p",null,"Lets download the dependencies. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /app \nnpm install \n")),(0,a.kt)("p",null,"We need to setup a new service in ",(0,a.kt)("strong",{parentName:"p"},"systemd")," so ",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl")," can manage this service"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We already discussed in linux basics that advantages of systemctl managing services, Hence we are taking that approach. Which is also a standard way in the OS. ")),(0,a.kt)("p",null,"Setup SystemD Cart Service "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-unit",metastring:"file (systemd) title=/etc/systemd/system/cart.service",file:!0,"(systemd)":!0,title:"/etc/systemd/system/cart.service"},"[Unit]\nDescription = Cart Service\n[Service]\nUser=roboshop\n// highlight-start\nEnvironment=REDIS_HOST=<REDIS-SERVER-IP>\nEnvironment=CATALOGUE_HOST=<CATALOGUE-SERVER-IP>\nEnvironment=CATALOGUE_PORT=8080\n// highlight-end\nExecStart=/bin/node /app/server.js\nSyslogIdentifier=cart\n\n[Install]\nWantedBy=multi-user.target\n")),(0,a.kt)("admonition",{title:"RECAP",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can create file by using ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"vim /etc/systemd/system/cart.service")))),(0,a.kt)("p",null,"Load the service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl daemon-reload\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This above command is because we added a new service, We are telling systemd to reload so it will detect new service.")),(0,a.kt)("p",null,"Start the service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"systemctl enable cart \nsystemctl start cart\n")))}d.isMDXComponent=!0}}]);