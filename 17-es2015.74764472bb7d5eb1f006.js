(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"6YZw":function(n,e,t){"use strict";t.r(e),t.d(e,"PlusMenuPageModule",(function(){return b}));var c=t("ofXK"),i=t("8lIJ"),o=t("alW4"),l=t("tyNb"),u=t("fXoL"),p=t("LMvA");const s=function(n,e){return[n,e]},a=function(n,e,t){return[n,e,t]},m=[{path:"",component:(()=>{class n{constructor(){this.upload={description:"Upload a plugin",hotkey:"ctrl+alt+u",icon:"upload-outline"},this.create={description:"Create",hotkey:"ctrl+alt+n",icon:"add-circle-thin"},this.search={description:"Search",icon:"search"}}onClick(n){console.log(n)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=u.Fb({type:n,selectors:[["app-plus-menu-page"]],decls:81,vars:27,consts:[[1,"style-header"],["sectionTitle","Plus Menu - Right - Two Items",1,"shadow"],[1,"container-right"],["menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Right - Three Items",1,"shadow"],["menuColor","#CDD2DD","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Bottom - Two Items",1,"shadow"],[1,"container-bottom"],["position","bottom","menuColor","#01E1B9","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Bottom - Three Items",1,"shadow"],["position","bottom","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Top - Two Items",1,"shadow"],[1,"container-top"],["position","top","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Top - Three Items",1,"shadow",2,"margin-bottom","300px"]],template:function(n,e){1&n&&(u.Rb(0,"h3",0),u.Ec(1,"Plus Menu"),u.Qb(),u.Ec(2,"\n"),u.Rb(3,"ngx-section",1),u.Ec(4,"\n  "),u.Rb(5,"div",2),u.Ec(6,"\n    "),u.Rb(7,"ngx-plus-menu",3),u.Yb("clickItem",(function(n){return e.onClick(n)})),u.Qb(),u.Ec(8,"\n  "),u.Qb(),u.Ec(9,"\n  "),u.Rb(10,"app-prism"),u.Ec(11,"\n    "),u.Ec(12,'\n    <ngx-plus-menu\n      [items]="[upload, create]"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),u.Ec(13,"\n  "),u.Qb(),u.Ec(14,"\n"),u.Qb(),u.Ec(15,"\n\n"),u.Rb(16,"ngx-section",4),u.Ec(17,"\n  "),u.Rb(18,"div",2),u.Ec(19,"\n    "),u.Rb(20,"ngx-plus-menu",5),u.Yb("clickItem",(function(n){return e.onClick(n)})),u.Qb(),u.Ec(21,"\n  "),u.Qb(),u.Ec(22,"\n  "),u.Rb(23,"app-prism"),u.Ec(24,"\n    "),u.Ec(25,'\n    <ngx-plus-menu\n      [items]="[upload, create, search]"\n      menuColor="#CDD2DD"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),u.Ec(26,"\n  "),u.Qb(),u.Ec(27,"\n"),u.Qb(),u.Ec(28,"\n\n"),u.Rb(29,"ngx-section",6),u.Ec(30,"\n  "),u.Rb(31,"div",7),u.Ec(32,"\n    "),u.Rb(33,"ngx-plus-menu",8),u.Yb("clickItem",(function(n){return e.onClick(n)})),u.Qb(),u.Ec(34,"\n  "),u.Qb(),u.Ec(35,"\n  "),u.Rb(36,"app-prism"),u.Ec(37,"\n    "),u.Ec(38,'\n    <ngx-plus-menu\n      [items]="[upload, create]"\n      position="bottom"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),u.Ec(39,"\n  "),u.Qb(),u.Ec(40,"\n"),u.Qb(),u.Ec(41,"\n\n"),u.Rb(42,"ngx-section",9),u.Ec(43,"\n  "),u.Rb(44,"div",7),u.Ec(45,"\n    "),u.Rb(46,"ngx-plus-menu",10),u.Yb("clickItem",(function(n){return e.onClick(n)})),u.Qb(),u.Ec(47,"\n  "),u.Qb(),u.Ec(48,"\n  "),u.Rb(49,"app-prism"),u.Ec(50,"\n    "),u.Ec(51,'\n    <ngx-plus-menu\n      [items]="[upload, create, search]"\n      position="bottom"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),u.Ec(52,"\n  "),u.Qb(),u.Ec(53,"\n"),u.Qb(),u.Ec(54,"\n\n"),u.Rb(55,"ngx-section",11),u.Ec(56,"\n  "),u.Rb(57,"div",12),u.Ec(58,"\n    "),u.Rb(59,"ngx-plus-menu",13),u.Yb("clickItem",(function(n){return e.onClick(n)})),u.Qb(),u.Ec(60,"\n  "),u.Qb(),u.Ec(61,"\n  "),u.Rb(62,"app-prism"),u.Ec(63,"\n    "),u.Ec(64,'\n    <ngx-plus-menu\n      [items]="[upload, create]"\n      position="top"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),u.Ec(65,"\n  "),u.Qb(),u.Ec(66,"\n"),u.Qb(),u.Ec(67,"\n\n"),u.Rb(68,"ngx-section",14),u.Ec(69,"\n  "),u.Rb(70,"div",12),u.Ec(71,"\n    "),u.Rb(72,"ngx-plus-menu",13),u.Yb("clickItem",(function(n){return e.onClick(n)})),u.Qb(),u.Ec(73,"\n  "),u.Qb(),u.Ec(74,"\n  "),u.Rb(75,"app-prism"),u.Ec(76,"\n    "),u.Ec(77,'\n    <ngx-plus-menu\n      [items]="[upload, create, search]"\n      position="top"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),u.Ec(78,"\n  "),u.Qb(),u.Ec(79,"\n"),u.Qb(),u.Ec(80,"\n\n")),2&n&&(u.yb(7),u.ic("items",u.mc(6,s,e.upload,e.create)),u.yb(13),u.ic("items",u.nc(9,a,e.upload,e.create,e.search)),u.yb(13),u.ic("items",u.mc(13,s,e.upload,e.create)),u.yb(13),u.ic("items",u.nc(16,a,e.upload,e.create,e.search)),u.yb(13),u.ic("items",u.mc(20,s,e.upload,e.create)),u.yb(13),u.ic("items",u.nc(23,a,e.upload,e.create,e.search)))},directives:[i.wb,i.lb,p.a],styles:["app-plus-menu-page .container-bottom,app-plus-menu-page .container-right,app-plus-menu-page .container-top{position:relative}app-plus-menu-page .container-bottom ngx-plus-menu,app-plus-menu-page .container-right ngx-plus-menu,app-plus-menu-page .container-top ngx-plus-menu{position:absolute}app-plus-menu-page app-prism{margin-top:30px;display:block}app-plus-menu-page .container-right ngx-plus-menu{top:-20px;right:0}app-plus-menu-page .container-bottom{display:flex;justify-content:center}app-plus-menu-page .container-bottom ngx-plus-menu{bottom:-10px}app-plus-menu-page .container-top{display:flex;justify-content:center}app-plus-menu-page .container-top ngx-plus-menu{top:-20px}"],encapsulation:2,changeDetection:0}),n})()}];let r=(()=>{class n{}return n.\u0275mod=u.Jb({type:n}),n.\u0275inj=u.Ib({factory:function(e){return new(e||n)},imports:[[l.g.forChild(m)],l.g]}),n})(),b=(()=>{class n{}return n.\u0275mod=u.Jb({type:n}),n.\u0275inj=u.Ib({factory:function(e){return new(e||n)},imports:[[c.c,o.a,i.yb,i.mb,r]]}),n})()}}]);