var s=class{constructor(){this.event={}}subscribe(t,i){this.event[t]||(this.event[t]=[]),!(this.event[t].indexOf(i)>-1)&&this.event[t].push(i)}unSubscribe(t,i){if(!this.event[t])return;let e=this.event[t].indexOf(i);e>-1&&this.event[t].splice(e,1)}dispatch(t,i){!this.event[t]||this.event[t].forEach(e=>e(i))}},n=new s,r=n;export{r as a};
//# sourceMappingURL=chunk-QZIEMCIY.js.map
