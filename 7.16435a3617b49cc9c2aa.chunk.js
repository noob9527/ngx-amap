webpackJsonp([7],{UUWE:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=e("LMZF"),u=function(){},d=e("Fezl"),a=e("lH+v"),r=e("L9au"),o=e("Un6q"),i=e("Y/jx"),s=e("1sP3"),m=e("5bcs"),p=e("Fw80"),c=e("9AOW"),v=e("30xK"),g=e("qbH+"),f=[["113.864691","22.942327"],["113.370643","22.938827"],["112.985037","23.15046"],["110.361899","20.026695"],["121.434529","31.215641"],["120.682502","28.011099"],["126.687123","45.787618"],["103.970724","30.397931"],["117.212164","31.831641"],["121.411101","31.059407"],["104.137953","30.784276"],["120.499683","30.042305"],["108.94686","34.362975"],["112.873295","22.920901"],["113.373916","23.086728"],["113.250159","23.075847"],["116.675933","39.986343"],["120.75997","31.734934"],["118.314741","32.26999"],["111.723311","34.771838"],["119.537126","26.200017"],["113.830123","23.00734"],["119.273795","26.060002"],["116.466752","39.951042"],["114.20716","22.777829"],["126.118338","45.11481"],["116.366324","39.781077"],["120.377998","31.578216"],["116.611935","23.66941"],["103.787344","30.940037"],["112.911223","23.164952"],["121.946335","39.403784"],["120.172545","36.009391"],["126.609854","45.722514"],["120.531699","32.402873"],["118.914313","32.013572"],["126.597762","45.739299"],["106.540999","29.520217"],["114.033057","22.733424"],["104.041129","30.598338"],["119.917693","32.484184"],["118.371124","35.082682"],["120.926368","31.320681"],["120.355238","31.557524"],["101.775209","36.614975"],["114.499404","34.646022"],["118.087516","24.474988"],["104.638952","30.1253"],["116.492237","39.991802"],["112.898903","32.04371"],["114.104018","22.626803"],["119.969664","30.26186"],["119.530013","39.935889"]],h=function(){function l(){this.markers=f,this.demo_md_html='<ngx-amap class="demo-map-lg" [resizeEnable]="true" [center]="[105, 34]" [zoom]="4">\n  <amap-marker-clusterer [gridSize]="80">\n    <amap-marker *ngFor="let marker of markers"\n      [inCluster]="true"\n      [position]="marker"\n      [offset]="{x:-15, y:-15}">\n    </amap-marker>\n  </amap-marker-clusterer>\n</ngx-amap>',this.demo_md_ts="import { Component, OnInit } from '@angular/core';\nimport { POINTS } from '../points';\n\n@Component({\n  selector: 'app-simple',\n  templateUrl: './simple.component.html',\n  styleUrls: ['./simple.component.scss']\n})\nexport class SimpleComponent implements OnInit {\n  markers = POINTS;\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n}"}return l.prototype.ngOnInit=function(){},l}(),C=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"amap-marker",[],null,null,null,null,null)),t["\u0275did"](1,1720320,[[1,4]],1,d.h,[d.s,d.t,d.u,d.v,d.x],{position:[0,"position"],offset:[1,"offset"],inCluster:[2,"inCluster"]},null),t["\u0275qud"](603979776,2,{infoWindowComponent:1}),t["\u0275pod"](3,{x:0,y:1}),(l()(),t["\u0275ted"](-1,null,["\n        "]))],function(l,n){l(n,1,0,n.context.$implicit,l(n,3,0,-15,-15),!0)},null)}function y(l){return t["\u0275vid"](0,[t["\u0275pid"](0,a.LanguagePipe,[]),(l()(),t["\u0275eld"](1,0,null,null,58,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    \u7b80\u5355\u793a\u4f8b\n  "])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](6,0,null,null,52,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](8,0,null,null,19,"ngx-amap",[["class","demo-map-lg"]],null,null,null,r.d,r.b)),t["\u0275prd"](4608,null,d.t,d.t,[d.n,d.s,d.u,d.v,d.x]),t["\u0275prd"](4608,null,d.y,d.y,[d.n,d.s,d.u,d.w]),t["\u0275prd"](4608,null,d.z,d.z,[d.n,d.s]),t["\u0275prd"](4608,null,d.A,d.A,[d.n,d.s,d.u,d.B]),t["\u0275prd"](4608,null,d.D,d.D,[d.n,d.s]),t["\u0275prd"](4608,null,d.E,d.E,[d.n,d.s]),t["\u0275prd"](512,null,d.n,d.n,[d.p,d.s]),t["\u0275did"](16,770048,null,0,d.l,[t.ElementRef,d.n,d.s],{zoom:[0,"zoom"],center:[1,"center"],resizeEnable:[2,"resizeEnable"]},null),t["\u0275pad"](17,2),t["\u0275prd"](512,null,d.C,d.C,[d.n,d.s,d.u,d.w,d.B]),(l()(),t["\u0275ted"](-1,0,["\n      "])),(l()(),t["\u0275eld"](20,0,null,0,6,"amap-marker-clusterer",[],null,null,null,null,null)),t["\u0275did"](21,1785856,null,1,d.g,[d.s,d.C],{gridSize:[0,"gridSize"]},null),t["\u0275qud"](603979776,1,{markerList:1}),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275and"](16777216,null,null,1,null,k)),t["\u0275did"](25,802816,null,0,o.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275ted"](-1,0,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](29,0,null,null,28,"div",[["class","mt-3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](31,0,null,null,25,"tabset",[],[[2,"tab-container",null]],null,null,i.b,i.a)),t["\u0275did"](32,180224,null,0,s.a,[m.a,t.Renderer2],null,null),(l()(),t["\u0275ted"](-1,0,["\n        "])),(l()(),t["\u0275eld"](34,0,null,0,6,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](35,212992,null,0,p.a,[s.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](37,0,null,null,2,"markdown",[],null,null,null,c.b,c.a)),t["\u0275did"](38,4243456,null,0,v.MarkdownComponent,[t.ElementRef,g.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](39,2),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,0,["\n        "])),(l()(),t["\u0275eld"](42,0,null,0,6,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](43,212992,null,0,p.a,[s.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](45,0,null,null,2,"markdown",[],null,null,null,c.b,c.a)),t["\u0275did"](46,4243456,null,0,v.MarkdownComponent,[t.ElementRef,g.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](47,2),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,0,["\n        "])),(l()(),t["\u0275eld"](50,0,null,0,5,"tab",[["heading","\u652f\u6301\u7684Input"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](51,212992,null,0,p.a,[s.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](53,0,null,null,1,"a",[["href","api-doc/directives/AmapMarkerClustererDirective.html"],["target","_blank"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\u67e5\u770b\u5728\u7ebf\u6587\u6863"])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,0,["\n      "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,16,0,4,l(n,17,0,105,34),!0),l(n,21,0,80),l(n,25,0,e.markers),l(n,35,0,"HTML"),l(n,38,0,t["\u0275unv"](n,38,0,l(n,39,0,t["\u0275nov"](n,0),e.demo_md_html,"html"))),l(n,43,0,"Component"),l(n,46,0,t["\u0275unv"](n,46,0,l(n,47,0,t["\u0275nov"](n,0),e.demo_md_ts,"typescript"))),l(n,51,0,"\u652f\u6301\u7684Input")},function(l,n){l(n,31,0,t["\u0275nov"](n,32).clazz),l(n,34,0,t["\u0275nov"](n,35).id,t["\u0275nov"](n,35).active,t["\u0275nov"](n,35).addClass),l(n,42,0,t["\u0275nov"](n,43).id,t["\u0275nov"](n,43).active,t["\u0275nov"](n,43).addClass),l(n,50,0,t["\u0275nov"](n,51).id,t["\u0275nov"](n,51).active,t["\u0275nov"](n,51).addClass)})}var b=t["\u0275ccf"]("app-simple",h,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-simple",[],null,null,null,y,C)),t["\u0275did"](1,114688,null,0,h,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),z=function(){function l(){this.demo_md_html='<ngx-amap class="demo-map-lg" [resizeEnable]="true" [center]="[105, 34]" [zoom]="4">\n  <amap-marker-clusterer [gridSize]="80" [styles]="customStyles">\n    <amap-marker *ngFor="let marker of markers"\n      [inCluster]="true"\n      [position]="marker"\n      [offset]="{x:-15, y:-15}">\n    </amap-marker>\n  </amap-marker-clusterer>\n</ngx-amap>',this.demo_md_ts="import { Component, OnInit } from '@angular/core';\nimport { POINTS } from '../points';\n\n@Component({\n  selector: 'app-custom-style',\n  templateUrl: './custom-style.component.html',\n  styleUrls: ['./custom-style.component.scss']\n})\nexport class CustomStyleComponent implements OnInit {\n  customStyles =  [{\n    url: 'http://a.amap.com/jsapi_demos/static/images/blue.png',\n    size: { width: 32, height: 32 },\n    offset: { x: -16, y: -16 }\n  }, {\n      url: 'http://a.amap.com/jsapi_demos/static/images/green.png',\n      size: { width: 32, height: 32 },\n      offset: { x: -16, y: -16 }\n  }];\n\n  markers = POINTS;\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n}\n",this.customStyles=[{url:"http://a.amap.com/jsapi_demos/static/images/blue.png",size:{width:32,height:32},offset:{x:-16,y:-16}},{url:"http://a.amap.com/jsapi_demos/static/images/green.png",size:{width:32,height:32},offset:{x:-16,y:-16}}],this.markers=f}return l.prototype.ngOnInit=function(){},l}(),M=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function R(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"amap-marker",[],null,null,null,null,null)),t["\u0275did"](1,1720320,[[1,4]],1,d.h,[d.s,d.t,d.u,d.v,d.x],{position:[0,"position"],offset:[1,"offset"],inCluster:[2,"inCluster"]},null),t["\u0275qud"](603979776,2,{infoWindowComponent:1}),t["\u0275pod"](3,{x:0,y:1}),(l()(),t["\u0275ted"](-1,null,["\n        "]))],function(l,n){l(n,1,0,n.context.$implicit,l(n,3,0,-15,-15),!0)},null)}function w(l){return t["\u0275vid"](0,[t["\u0275pid"](0,a.LanguagePipe,[]),(l()(),t["\u0275eld"](1,0,null,null,51,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    \u7b80\u5355\u793a\u4f8b\n  "])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](6,0,null,null,45,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](8,0,null,null,19,"ngx-amap",[["class","demo-map-lg"]],null,null,null,r.d,r.b)),t["\u0275prd"](4608,null,d.t,d.t,[d.n,d.s,d.u,d.v,d.x]),t["\u0275prd"](4608,null,d.y,d.y,[d.n,d.s,d.u,d.w]),t["\u0275prd"](4608,null,d.z,d.z,[d.n,d.s]),t["\u0275prd"](4608,null,d.A,d.A,[d.n,d.s,d.u,d.B]),t["\u0275prd"](4608,null,d.D,d.D,[d.n,d.s]),t["\u0275prd"](4608,null,d.E,d.E,[d.n,d.s]),t["\u0275prd"](512,null,d.n,d.n,[d.p,d.s]),t["\u0275did"](16,770048,null,0,d.l,[t.ElementRef,d.n,d.s],{zoom:[0,"zoom"],center:[1,"center"],resizeEnable:[2,"resizeEnable"]},null),t["\u0275pad"](17,2),t["\u0275prd"](512,null,d.C,d.C,[d.n,d.s,d.u,d.w,d.B]),(l()(),t["\u0275ted"](-1,0,["\n      "])),(l()(),t["\u0275eld"](20,0,null,0,6,"amap-marker-clusterer",[],null,null,null,null,null)),t["\u0275did"](21,1785856,null,1,d.g,[d.s,d.C],{gridSize:[0,"gridSize"],styles:[1,"styles"]},null),t["\u0275qud"](603979776,1,{markerList:1}),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](25,802816,null,0,o.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275ted"](-1,0,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](29,0,null,null,21,"div",[["class","mt-3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](31,0,null,null,18,"tabset",[],[[2,"tab-container",null]],null,null,i.b,i.a)),t["\u0275did"](32,180224,null,0,s.a,[m.a,t.Renderer2],null,null),(l()(),t["\u0275ted"](-1,0,["\n        "])),(l()(),t["\u0275eld"](34,0,null,0,6,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](35,212992,null,0,p.a,[s.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](37,0,null,null,2,"markdown",[],null,null,null,c.b,c.a)),t["\u0275did"](38,4243456,null,0,v.MarkdownComponent,[t.ElementRef,g.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](39,2),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,0,["\n        "])),(l()(),t["\u0275eld"](42,0,null,0,6,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](43,212992,null,0,p.a,[s.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](45,0,null,null,2,"markdown",[],null,null,null,c.b,c.a)),t["\u0275did"](46,4243456,null,0,v.MarkdownComponent,[t.ElementRef,g.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](47,2),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,0,["\n      "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,16,0,4,l(n,17,0,105,34),!0),l(n,21,0,80,e.customStyles),l(n,25,0,e.markers),l(n,35,0,"HTML"),l(n,38,0,t["\u0275unv"](n,38,0,l(n,39,0,t["\u0275nov"](n,0),e.demo_md_html,"html"))),l(n,43,0,"Component"),l(n,46,0,t["\u0275unv"](n,46,0,l(n,47,0,t["\u0275nov"](n,0),e.demo_md_ts,"typescript")))},function(l,n){l(n,31,0,t["\u0275nov"](n,32).clazz),l(n,34,0,t["\u0275nov"](n,35).id,t["\u0275nov"](n,35).active,t["\u0275nov"](n,35).addClass),l(n,42,0,t["\u0275nov"](n,43).id,t["\u0275nov"](n,43).active,t["\u0275nov"](n,43).addClass)})}var E=t["\u0275ccf"]("app-custom-style",z,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-custom-style",[],null,null,null,w,M)),t["\u0275did"](1,114688,null,0,z,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),S=function(){function l(){this.demo_md_html='<ngx-amap class="demo-map-lg" [resizeEnable]="true" [center]="[105, 34]" [zoom]="4">\n  <amap-marker-clusterer [gridSize]="80">\n    <amap-marker *ngFor="let marker of markers"\n      [inCluster]="true"\n      [position]="marker"\n      [offset]="{x:-15, y:-15}">\n    </amap-marker>\n  </amap-marker-clusterer>\n</ngx-amap>',this.demo_md_ts="import { Component, OnInit, ViewChild } from '@angular/core';\nimport { AmapMarkerClustererDirective } from 'ngx-amap';\nimport { POINTS } from '../points';\n\n@Component({\n  selector: 'app-methods',\n  templateUrl: './methods.component.html',\n  styleUrls: ['./methods.component.scss']\n})\nexport class MethodsComponent implements OnInit {\n  markers = POINTS;\n\n  @ViewChild(AmapMarkerClustererDirective) cluster: AmapMarkerClustererDirective;\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  getMethods() {\n    if (this.cluster) {\n      this.cluster.getMap().then(v => console.log('getMap()', v));\n      this.cluster.getClustersCount().then(v => console.log('getClustersCount()', v));\n      this.cluster.getGridSize().then(v => console.log('getGridSize()', v));\n      this.cluster.getMarkers().then(v => console.log('getMarkers()', v));\n      this.cluster.getMaxZoom().then(v => console.log('getMaxZoom()', v));\n      this.cluster.getMinClusterSize().then(v => console.log('getMinClusterSize()', v));\n      this.cluster.getStyles().then(v => console.log('getStyles()', v));\n    }\n  }\n}",this.markers=f}return l.prototype.ngOnInit=function(){},l.prototype.getMethods=function(){this.cluster&&(this.cluster.getMap().then(function(l){return console.log("getMap()",l)}),this.cluster.getClustersCount().then(function(l){return console.log("getClustersCount()",l)}),this.cluster.getGridSize().then(function(l){return console.log("getGridSize()",l)}),this.cluster.getMarkers().then(function(l){return console.log("getMarkers()",l)}),this.cluster.getMaxZoom().then(function(l){return console.log("getMaxZoom()",l)}),this.cluster.getMinClusterSize().then(function(l){return console.log("getMinClusterSize()",l)}),this.cluster.getStyles().then(function(l){return console.log("getStyles()",l)}))},l}(),x=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"amap-marker",[],null,null,null,null,null)),t["\u0275did"](1,1720320,[[2,4]],1,d.h,[d.s,d.t,d.u,d.v,d.x],{position:[0,"position"],offset:[1,"offset"],inCluster:[2,"inCluster"]},null),t["\u0275qud"](603979776,3,{infoWindowComponent:1}),t["\u0275pod"](3,{x:0,y:1}),(l()(),t["\u0275ted"](-1,null,["\n        "]))],function(l,n){l(n,1,0,n.context.$implicit,l(n,3,0,-15,-15),!0)},null)}function _(l){return t["\u0275vid"](0,[t["\u0275pid"](0,a.LanguagePipe,[]),t["\u0275qud"](402653184,1,{cluster:0}),(l()(),t["\u0275eld"](2,0,null,null,63,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](4,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    \u8c03\u7528\u65b9\u6cd5\u793a\u4f8b (\u8bf7\u67e5\u770bconsole\u8f93\u51fa)\n  "])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](7,0,null,null,57,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](9,0,null,null,1,"button",[["class","btn btn-outline-primary"],["type","button"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.getMethods()&&t),t},null,null)),(l()(),t["\u0275ted"](-1,null,["\u8c03\u7528Getter\u65b9\u6cd5"])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](12,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](14,0,null,null,19,"ngx-amap",[["class","demo-map-lg"]],null,null,null,r.d,r.b)),t["\u0275prd"](4608,null,d.t,d.t,[d.n,d.s,d.u,d.v,d.x]),t["\u0275prd"](4608,null,d.y,d.y,[d.n,d.s,d.u,d.w]),t["\u0275prd"](4608,null,d.z,d.z,[d.n,d.s]),t["\u0275prd"](4608,null,d.A,d.A,[d.n,d.s,d.u,d.B]),t["\u0275prd"](4608,null,d.D,d.D,[d.n,d.s]),t["\u0275prd"](4608,null,d.E,d.E,[d.n,d.s]),t["\u0275prd"](512,null,d.n,d.n,[d.p,d.s]),t["\u0275did"](22,770048,null,0,d.l,[t.ElementRef,d.n,d.s],{zoom:[0,"zoom"],center:[1,"center"],resizeEnable:[2,"resizeEnable"]},null),t["\u0275pad"](23,2),t["\u0275prd"](512,null,d.C,d.C,[d.n,d.s,d.u,d.w,d.B]),(l()(),t["\u0275ted"](-1,0,["\n      "])),(l()(),t["\u0275eld"](26,0,null,0,6,"amap-marker-clusterer",[],null,null,null,null,null)),t["\u0275did"](27,1785856,[[1,4]],1,d.g,[d.s,d.C],{gridSize:[0,"gridSize"]},null),t["\u0275qud"](603979776,2,{markerList:1}),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](31,802816,null,0,o.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275ted"](-1,0,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](35,0,null,null,28,"div",[["class","mt-3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](37,0,null,null,25,"tabset",[],[[2,"tab-container",null]],null,null,i.b,i.a)),t["\u0275did"](38,180224,null,0,s.a,[m.a,t.Renderer2],null,null),(l()(),t["\u0275ted"](-1,0,["\n        "])),(l()(),t["\u0275eld"](40,0,null,0,6,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](41,212992,null,0,p.a,[s.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](43,0,null,null,2,"markdown",[],null,null,null,c.b,c.a)),t["\u0275did"](44,4243456,null,0,v.MarkdownComponent,[t.ElementRef,g.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](45,2),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,0,["\n        "])),(l()(),t["\u0275eld"](48,0,null,0,6,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](49,212992,null,0,p.a,[s.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](51,0,null,null,2,"markdown",[],null,null,null,c.b,c.a)),t["\u0275did"](52,4243456,null,0,v.MarkdownComponent,[t.ElementRef,g.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](53,2),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,0,["\n        "])),(l()(),t["\u0275eld"](56,0,null,0,5,"tab",[["heading","\u652f\u6301\u7684\u65b9\u6cd5"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](57,212992,null,0,p.a,[s.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](59,0,null,null,1,"a",[["href","api-doc/directives/AmapMarkerClustererDirective.html"],["target","_blank"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\u67e5\u770b\u5728\u7ebf\u6587\u6863"])),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,0,["\n      "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,22,0,4,l(n,23,0,105,34),!0),l(n,27,0,80),l(n,31,0,e.markers),l(n,41,0,"HTML"),l(n,44,0,t["\u0275unv"](n,44,0,l(n,45,0,t["\u0275nov"](n,0),e.demo_md_html,"html"))),l(n,49,0,"Component"),l(n,52,0,t["\u0275unv"](n,52,0,l(n,53,0,t["\u0275nov"](n,0),e.demo_md_ts,"typescript"))),l(n,57,0,"\u652f\u6301\u7684\u65b9\u6cd5")},function(l,n){l(n,37,0,t["\u0275nov"](n,38).clazz),l(n,40,0,t["\u0275nov"](n,41).id,t["\u0275nov"](n,41).active,t["\u0275nov"](n,41).addClass),l(n,48,0,t["\u0275nov"](n,49).id,t["\u0275nov"](n,49).active,t["\u0275nov"](n,49).addClass),l(n,56,0,t["\u0275nov"](n,57).id,t["\u0275nov"](n,57).active,t["\u0275nov"](n,57).addClass)})}var I=t["\u0275ccf"]("app-methods",S,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-methods",[],null,null,null,_,x)),t["\u0275did"](1,114688,null,0,S,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),T=function(){function l(){this.demo_md_html='<ngx-amap class="demo-map-lg" [resizeEnable]="true" [center]="[105, 34]" [zoom]="4">\n  <amap-marker-clusterer [gridSize]="80"\n    (ready)="onClusterEvent($event, \'ready\')"\n    (clusterClick)="onClusterEvent($event, \'clusterClick\')">\n    <amap-marker *ngFor="let marker of markers"\n      [inCluster]="true"\n      [position]="marker"\n      [offset]="{x:-15, y:-15}">\n    </amap-marker>\n  </amap-marker-clusterer>\n</ngx-amap>\n  ',this.demo_md_ts="import { Component, OnInit } from '@angular/core';\nimport { POINTS } from '../points';\n\n@Component({\n  selector: 'app-events',\n  templateUrl: './events.component.html',\n  styleUrls: ['./events.component.scss']\n})\nexport class EventsComponent implements OnInit {\n  markers = POINTS;\n\n  constructor() { }\n\n  ngOnInit() {\n  }\n\n  onClusterEvent(event: any, type: string) {\n    console.log('clusterer event:', type, event);\n  }\n}",this.markers=f}return l.prototype.ngOnInit=function(){},l.prototype.onClusterEvent=function(l,n){console.log("clusterer event:",n,l)},l}(),F=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function L(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,4,"amap-marker",[],null,null,null,null,null)),t["\u0275did"](1,1720320,[[1,4]],1,d.h,[d.s,d.t,d.u,d.v,d.x],{position:[0,"position"],offset:[1,"offset"],inCluster:[2,"inCluster"]},null),t["\u0275qud"](603979776,2,{infoWindowComponent:1}),t["\u0275pod"](3,{x:0,y:1}),(l()(),t["\u0275ted"](-1,null,["\n        "]))],function(l,n){l(n,1,0,n.context.$implicit,l(n,3,0,-15,-15),!0)},null)}function D(l){return t["\u0275vid"](0,[t["\u0275pid"](0,a.LanguagePipe,[]),(l()(),t["\u0275eld"](1,0,null,null,51,"div",[["class","card card-accent-info"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    \u70b9\u805a\u5408\u4e8b\u4ef6 (\u8bf7\u67e5\u770bconsole\u8f93\u51fa)\n  "])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275eld"](6,0,null,null,45,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](8,0,null,null,19,"ngx-amap",[["class","demo-map-lg"]],null,null,null,r.d,r.b)),t["\u0275prd"](4608,null,d.t,d.t,[d.n,d.s,d.u,d.v,d.x]),t["\u0275prd"](4608,null,d.y,d.y,[d.n,d.s,d.u,d.w]),t["\u0275prd"](4608,null,d.z,d.z,[d.n,d.s]),t["\u0275prd"](4608,null,d.A,d.A,[d.n,d.s,d.u,d.B]),t["\u0275prd"](4608,null,d.D,d.D,[d.n,d.s]),t["\u0275prd"](4608,null,d.E,d.E,[d.n,d.s]),t["\u0275prd"](512,null,d.n,d.n,[d.p,d.s]),t["\u0275did"](16,770048,null,0,d.l,[t.ElementRef,d.n,d.s],{zoom:[0,"zoom"],center:[1,"center"],resizeEnable:[2,"resizeEnable"]},null),t["\u0275pad"](17,2),t["\u0275prd"](512,null,d.C,d.C,[d.n,d.s,d.u,d.w,d.B]),(l()(),t["\u0275ted"](-1,0,["\n      "])),(l()(),t["\u0275eld"](20,0,null,0,6,"amap-marker-clusterer",[],null,[[null,"ready"],[null,"clusterClick"]],function(l,n,e){var t=!0,u=l.component;return"ready"===n&&(t=!1!==u.onClusterEvent(e,"ready")&&t),"clusterClick"===n&&(t=!1!==u.onClusterEvent(e,"clusterClick")&&t),t},null,null)),t["\u0275did"](21,1785856,null,1,d.g,[d.s,d.C],{gridSize:[0,"gridSize"]},{ready:"ready",clusterClick:"clusterClick"}),t["\u0275qud"](603979776,1,{markerList:1}),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275and"](16777216,null,null,1,null,L)),t["\u0275did"](25,802816,null,0,o.i,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275ted"](-1,0,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275eld"](29,0,null,null,21,"div",[["class","mt-3"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["\n      "])),(l()(),t["\u0275eld"](31,0,null,null,18,"tabset",[],[[2,"tab-container",null]],null,null,i.b,i.a)),t["\u0275did"](32,180224,null,0,s.a,[m.a,t.Renderer2],null,null),(l()(),t["\u0275ted"](-1,0,["\n        "])),(l()(),t["\u0275eld"](34,0,null,0,6,"tab",[["heading","HTML"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](35,212992,null,0,p.a,[s.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](37,0,null,null,2,"markdown",[],null,null,null,c.b,c.a)),t["\u0275did"](38,4243456,null,0,v.MarkdownComponent,[t.ElementRef,g.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](39,2),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,0,["\n        "])),(l()(),t["\u0275eld"](42,0,null,0,6,"tab",[["heading","Component"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),t["\u0275did"](43,212992,null,0,p.a,[s.a,t.ElementRef,t.Renderer2],{heading:[0,"heading"]},null),(l()(),t["\u0275ted"](-1,null,["\n          "])),(l()(),t["\u0275eld"](45,0,null,null,2,"markdown",[],null,null,null,c.b,c.a)),t["\u0275did"](46,4243456,null,0,v.MarkdownComponent,[t.ElementRef,g.MarkdownService],{data:[0,"data"]},null),t["\u0275ppd"](47,2),(l()(),t["\u0275ted"](-1,null,["\n        "])),(l()(),t["\u0275ted"](-1,0,["\n      "])),(l()(),t["\u0275ted"](-1,null,["\n    "])),(l()(),t["\u0275ted"](-1,null,["\n  "])),(l()(),t["\u0275ted"](-1,null,["\n"])),(l()(),t["\u0275ted"](-1,null,["\n"]))],function(l,n){var e=n.component;l(n,16,0,4,l(n,17,0,105,34),!0),l(n,21,0,80),l(n,25,0,e.markers),l(n,35,0,"HTML"),l(n,38,0,t["\u0275unv"](n,38,0,l(n,39,0,t["\u0275nov"](n,0),e.demo_md_html,"html"))),l(n,43,0,"Component"),l(n,46,0,t["\u0275unv"](n,46,0,l(n,47,0,t["\u0275nov"](n,0),e.demo_md_ts,"typescript")))},function(l,n){l(n,31,0,t["\u0275nov"](n,32).clazz),l(n,34,0,t["\u0275nov"](n,35).id,t["\u0275nov"](n,35).active,t["\u0275nov"](n,35).addClass),l(n,42,0,t["\u0275nov"](n,43).id,t["\u0275nov"](n,43).active,t["\u0275nov"](n,43).addClass)})}var H=t["\u0275ccf"]("app-events",T,function(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-events",[],null,null,null,D,F)),t["\u0275did"](1,114688,null,0,T,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),A=e("TMwh"),B=e("UHIZ"),q={title:"\u7b80\u5355\u793a\u4f8b"},P={title:"\u81ea\u5b9a\u4e49\u6837\u5f0f"},U={title:"\u8c03\u7528\u65b9\u6cd5"},N={title:"\u4e8b\u4ef6"},X=function(){},j=e("yroR"),V=e("roh2"),W=e("wTgV");e.d(n,"AmapMarkerClustererDemoModuleNgFactory",function(){return Z});var Z=t["\u0275cmf"](u,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[b,E,I,H]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,o.l,o.k,[t.LOCALE_ID,[2,o.p]]),t["\u0275mpd"](4608,A.BrowserXhr,A.BrowserXhr,[]),t["\u0275mpd"](4608,A.ResponseOptions,A.BaseResponseOptions,[]),t["\u0275mpd"](5120,A.XSRFStrategy,A["\u0275a"],[]),t["\u0275mpd"](4608,A.XHRBackend,A.XHRBackend,[A.BrowserXhr,A.ResponseOptions,A.XSRFStrategy]),t["\u0275mpd"](4608,A.RequestOptions,A.BaseRequestOptions,[]),t["\u0275mpd"](5120,A.Http,A["\u0275b"],[A.XHRBackend,A.RequestOptions]),t["\u0275mpd"](512,o.b,o.b,[]),t["\u0275mpd"](512,B.o,B.o,[[2,B.t],[2,B.l]]),t["\u0275mpd"](512,X,X,[]),t["\u0275mpd"](512,d.m,d.m,[]),t["\u0275mpd"](512,j.a,j.a,[]),t["\u0275mpd"](512,A.HttpModule,A.HttpModule,[]),t["\u0275mpd"](512,V.MarkdownModule,V.MarkdownModule,[]),t["\u0275mpd"](512,W.a,W.a,[]),t["\u0275mpd"](512,u,u,[]),t["\u0275mpd"](1024,B.j,function(){return[[{path:"",redirectTo:"/amap-marker-cluster/simple",pathMatch:"full"},{path:"simple",component:h,data:q},{path:"custom-style",component:z,data:P},{path:"methods",component:S,data:U},{path:"events",component:T,data:N}]]},[])])})}});