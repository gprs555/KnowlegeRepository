(function(){var m=window.cfx,b=window.sfx,s={Version:"7.2.5289.19355"};m.highlow=s;var o=function j(){j._ic();this.a=this.b=0};o.prototype={_0dM:function(j,a){j.x==a.x?(this.a=j.x,this.b=b.D.e):(this.a=(a.y-j.y)/(a.x-j.x),this.b=a.y-this.a*a.x);return this},d:function(j){if(this.a==j.a)return new b.e;var a=0,c=0;b.D.h(this.b)?(a=this.a,c=j.a*a+j.b):(a=(j.b-this.b)/(this.a-j.a),c=this.a*a+this.b);return(new b.e)._01e(a,c)}};o._dt("CWHL",b.Sy,0);var k=function a(){a._ic();this.d=this.e=this.j=this.k=
null;this.h=!1;this.c=0;this.f=this.g=null;this.i=0;this.l=this.b=this.m=this.a=null;this._0_1()};s.HighLow=k;k.prototype={_0_1:function(){this.o=new b.m;this.n=new b.m;return this},p:function(a,c,d,t,e){var f=new b.e,i=this.a.Se();if(!a){var l=this.a.So(i-2).x,h=this.a.So(i-1).x,g=(new o)._0dM((new b.e)._01e(l,this.a.So(i-2).y),(new b.e)._01e(h,this.a.So(i-1).y)),l=(new o)._0dM((new b.e)._01e(l,this.b.So(i-2)),(new b.e)._01e(h,this.b.So(i-1)));f._cf(g.d(l));i--}g=2*i;a||g++;l=b.f._ca(g);for(g=h=
0;g<i;g++,h++)l[h]._cf(this.a.So(g));a||(l[h++]=b.e.f(f));for(g=i-1;0<=g;g--,h++)l[h]._i1(this.a.So(g).x,this.b.So(g));g=null;h=0;0<this.c?(g=this.k,h=c.d-1):(g=this.j,h=c.d);0!=(c.u&8)&&(h=h.toString(),h=(new m.c5)._01c5("Attribute"+h),h.e="C,"+(c.d-1).toString(),c.c.sidc(h));c.c.idQ(g,l);if(c.b.a.b){l=c.d;h=c.e;null==this.d&&(this.d=(new m.cJ)._01cJ(b.m.c()._nc(),1,0),this.e=(new m.cJ)._01cJ(b.m.c()._nc(),1,2));var p=null,q=null,k=0,r=0;0<this.c?(p=this.d,q=this.e,k=5,r=-5):(p=this.e,q=this.d,k=
-5,r=5);p.sy(this.o);q.sy(this.n);var n=0;0!=this.i&&(n=1,i--);0==e&&i++;for(g=0;g<i;g++,n++)c.e=this.i+g,c.d=1,c.aY((new b.e)._01e(this.a.So(n).x,this.a.So(n).y+r),!1,q),c.d=0,c.aY((new b.e)._01e(this.a.So(n).x,this.b.So(n)+k),!1,p);c.e=h;c.d=l}a||(this.a.clear(),this.b.clear(),this.a.Si(b.e.f(f)),this.b.Si(f.y),this.a.Si(b.e.f(t)),this.b.Si(d))},t:function(a){this.a=(new b._L)._0_L();this.b=(new b._L)._0_L();this.m=(new b._L)._0_L();this.l=(new b._L)._0_L();this.j=a.z.b();this.f=(new b.ao)._03ao(a.p.d(),
a.b.l.a);this.n._cf(a.b.a.a);a.aK(a.d-1);a.P(!0);this.k=a.z;this.g=(new b.ao)._03ao(a.p.d(),a.b.l.a);this.o._cf(a.b.a.a)},r:function(){this.g._d();this.f._d();this.k._d();this.j._d();null!=this.e&&(this.e._d(),this.d._d());this.d=this.e=this.j=this.k=this.f=this.g=null},reset:function(){},icX:function(){return 2},icY:function(){return 553988},icW:function(a,b,d){switch(b){case 5:return"%s\n%l - %l\n%v - %v\n%s2\n%v~ - %v~";case 11:return this.q(d)}return null},icZ:function(a,c,d){a.b=1;a.a=0;var k=
c=!1;if(d.e==d.n){k=!0;if(this.h)return;this.i=d.e;this.t(d)}else if(d.e==d.q){this.h=!this.h;if(!this.h){this.r();return}c=!0}else if(this.h)return;var e=d.w,f=0;0<d.l?(f=e,e=d.a.b.iaP().getItem(d.d+1,d.e)):f=d.a.b.iaP().getItem(d.d-1,d.e);if(!(d.Q||1.0E108==f))if(a=0,a=e==f?0:e<f?-1:1,e=d.h.valueToPixel(f),f=(new b.e)._01e(d.k.b,d.k.a),this.m.Si(b.e.f(f)),this.l.Si(e),k)this.c=a,this.a.Si(b.e.f(f)),this.b.Si(e);else{if(a==this.c&&(0==a?(this.a.sSo(0,(new b.f)._01e(f.x,f.y)),this.b.sSo(0,e)):(this.a.Si(b.e.f(f)),
this.b.Si(e)),!c))return;this.a.Si(b.e.f(f));this.b.Si(e);if(0!=this.c||c)if(this.p(a==this.c,d,e,f,a),0==a&&(this.a.clear(),this.b.clear(),this.a.Si(b.e.f(f)),this.b.Si(e)),c&&a!=this.c&&(this.c=a,this.p(!0,d,e,f,a)),c){c=this.m.toArray();if(k=0!=(d.u&8))e=d.d-1,e=(new m.c5)._01c5("AttributeLine Attribute"+e.toString()+"Line"),d.c.sidc(e);d.c.idA(this.g,c);for(e=0;e<c.length;e++)c[e].y=this.l.So(e);k&&(e=(new m.c5)._01c5("AttributeLine Attribute"+d.d.toString()+"Line"),d.c.sidc(e));d.c.idA(this.f,
c)}this.c=a;this.i=d.e}},q:function(a){a=a.a;a.e=1;a.b=4096;return null}};k._dt("CWHH",b.Sy,0,m.icV)})();
