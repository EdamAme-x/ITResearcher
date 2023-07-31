function NumHash(f){var $;function x(f,$){return $>>>f|$<<32-f}function _(f,$){let _=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298,],c=Array(64);for(let e=0;e<16;e++)c[e]=(255&f[4*e])<<24|(255&f[4*e+1])<<16|(255&f[4*e+2])<<8|255&f[4*e+3];for(let a=16;a<64;a++){let b=x(7,c[a-15])^x(18,c[a-15])^c[a-15]>>>3,t=x(17,c[a-2])^x(19,c[a-2])^c[a-2]>>>10;c[a]=c[a-16]+b+c[a-7]+t&4294967295}let d=$[0],n=$[1],l=$[2],r=$[3],o=$[4],u=$[5],i=$[6],h=$[7];for(let p=0;p<64;p++){let g=x(6,o)^x(11,o)^x(25,o),s=o&u^~o&i,m=h+g+s+_[p]+c[p]&4294967295,S=x(2,d)^x(13,d)^x(22,d),j=d&n^d&l^n&l,v=S+j&4294967295;h=i,i=u,u=o,o=r+m&4294967295,r=l,l=n,n=d,d=m+v&4294967295}$[0]=$[0]+d&4294967295,$[1]=$[1]+n&4294967295,$[2]=$[2]+l&4294967295,$[3]=$[3]+r&4294967295,$[4]=$[4]+o&4294967295,$[5]=$[5]+u&4294967295,$[6]=$[6]+i&4294967295,$[7]=$[7]+h&4294967295}let c=function f($){for($.push(128);8*$.length%512!=448;)$.push(0);let x=8*$.length;return $.concat([x>>>56&255,x>>>48&255,x>>>40&255,x>>>32&255,x>>>24&255,x>>>16&255,x>>>8&255,255&x,])}(($=f).split("").map(f=>f.charCodeAt(0))),e=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225,];for(let a=0;a<c.length;a+=64){let b=c.slice(a,a+64);_(b,e)}let t={a:"0",b:"1",c:"2",d:"3",e:"4",f:"5","-":"6"},d=e.map(function f($){return $.toString(16).padStart(8,"0")}).join(""),n="";for(let l=0;l<d.length;l++)t[d[l]]?n+=t[d[l]]:n+=d[l];return n}

module.exports = NumHash;