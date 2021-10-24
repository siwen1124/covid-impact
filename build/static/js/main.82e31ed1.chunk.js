(this.webpackJsonpcovid_impact=this.webpackJsonpcovid_impact||[]).push([[0],{152:function(t,e,n){},153:function(t,e,n){},156:function(t,e,n){"use strict";n.r(e);var a=n(3),i=n.n(a),r=n(51),s=n.n(r),o=(n(152),n(153),n(4)),c=n(5),l=n(6),d=n(7),h=n(0),u=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).handleClick=function(){var t=document.getElementsByClassName("animal");console.log(t)},a}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{id:"cd-vertical-nav",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"#home",onClick:function(){return t.handleClick()},children:[Object(h.jsx)("span",{className:"cd-dot"}),Object(h.jsx)("span",{className:"cd-label",children:"Home"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"#introduction",children:[Object(h.jsx)("span",{className:"cd-dot"}),Object(h.jsx)("span",{className:"cd-label",children:"Introduction"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"#toilet",children:[Object(h.jsx)("span",{className:"cd-dot"}),Object(h.jsx)("span",{className:"cd-label",children:"Toilet Paper"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"#stock",children:[Object(h.jsx)("span",{className:"cd-dot"}),Object(h.jsx)("span",{className:"cd-label",children:"Stock"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"#animal",children:[Object(h.jsx)("span",{className:"cd-dot"}),Object(h.jsx)("span",{className:"cd-label",children:"Animal Adoption"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"#co2",children:[Object(h.jsx)("span",{className:"cd-dot"}),Object(h.jsx)("span",{className:"cd-label",children:"CO2"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"#traffic",children:[Object(h.jsx)("span",{className:"cd-dot"}),Object(h.jsx)("span",{className:"cd-label",children:"Traffic"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)("a",{href:"#reflection",children:[Object(h.jsx)("span",{className:"cd-dot"}),Object(h.jsx)("span",{className:"cd-label",children:"Reflection"})]})})]})})}}]),n}(i.a.Component),f=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={},a.imagePath="image/doctor.jpg",a}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)(i.a.Fragment,{children:Object(h.jsx)("div",{className:"home container-fluid",id:"home",style:{height:window.innerHeight,backgroundImage:"url(".concat(this.imagePath,")"),backgroundSize:"cover",backgroundAttachment:"fixed",color:"black"},children:Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("h1",{children:"Issues with Tissues"}),Object(h.jsxs)("p",{children:["The COVID-19 pandemic and resulting economic crisis had an impact on almost every aspect of our life, including toilet paper, stock, gas, how we work, how we live and among many others. Is it all bad effects?",Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]}),Object(h.jsx)("h3",{children:"Not really."}),Object(h.jsx)("p",{id:"credit",children:"photo credit @Bryan Vectorartist"})]})})})})}}]),n}(i.a.Component),p=n(8),m=n(1),g=n(9),j=n.n(g),b=n(19);function v(){return(v=Object(b.a)(j.a.mark((function t(e,n){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.g(e);case 2:return a=t.sent,t.abrupt("return",n(a));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).componentDidMount=function(){var t=m.x(a.svgRef.current);t.attr("width",a.width).attr("height",a.height),function(t,e){return v.apply(this,arguments)}(a.state.dataPath,a.parseData).then((function(e){a.setState({data:e});var n=e.filter((function(t){return 2020===t.Year}));a.drawSVG(n,t)}))},a.parseData=function(t){return t.map((function(t){return{Year:+t.Year,Month:+t.Month,LiveOutcome:+t.LiveOutcome}}))},a.handleYearChange=function(t){var e=a.state.data.filter((function(e){return e.Year===t}));a.line.transition().duration(1e3).attr("d",a.lineGenerator(e)).style("stroke",a.colorScale(t))},a.drawSVG=function(t,e){var n=a.width-a.margin.left-a.margin.right,i=a.height-a.margin.top-a.margin.bottom,r=m.u().domain([1,12]).range([0,n]),s=m.u().domain([0,4e5]).range([i,0]).nice();a.colorScale=m.v().domain([2017,2018,2019,2020]).range(["#FCECDD","#FFC288","#FEA82F","#FF6701"]),a.g=e.append("g").attr("transform","translate(".concat(a.margin.left,", ").concat(a.margin.top,")"));var o=m.b(r).tickPadding(15),c=m.c(s).tickSize(-n).tickPadding(15),l=a.g.append("g").call(o).attr("transform","translate(0, ".concat(i,")"));l.select(".domain").remove(),l.append("text").attr("class","bg-primary").attr("y",60).attr("x",n/2).attr("fill","#d8d8d8").style("font-size","15px").text("Month");var d=a.g.append("g").call(c);d.selectAll(".domain").remove(),d.append("text").attr("class","bg-primary").attr("y",-70).attr("x",-i/2).attr("fill","#d8d8d8").attr("transform","rotate(-90)").attr("text-anchor","middle").style("font-size","15px").text("Adoption Count"),console.log(r(11)),a.lineGenerator=m.p().x((function(t){return r(function(t){return t.Month}(t))})).y((function(t){return s(function(t){return t.LiveOutcome}(t))})).curve(m.i);for(var h=function(t){var e=a.state.data.filter((function(e){return e.Year===t}));a.g.append("path").attr("class","line-path").attr("id","".concat(t)).style("stroke",a.colorScale(t)).style("opacity",.3).style("stroke-width",2).attr("d",a.lineGenerator(e))},u=2017;u<=2020;u++)h(u);a.handleMouseEnter=function(){g.style("visibility","visible"),j.style("opacity",1)},a.handleMouseMove=function(t,e){var n=m.r(t),a=Object(p.a)(n,2),i=a[0],o=a[1],c=r.invert(i),l=s.invert(o);g.style("opacity",1).attr("cx",r(c)).attr("cy",s(l)),j.text("Count: ".concat(Math.floor(l))).attr("x",r(c)+30).attr("y",s(l)).style("stroke","white")},a.handleMouseLeave=function(){g.style("visibility","hidden"),j.style("opacity",0)};var f=a.g.append("path").attr("class","line-path highlight").attr("id","".concat(t[0].Year)).attr("d",a.lineGenerator(t)).style("stroke",a.colorScale(t[0].Year)).style("stroke-width",3).on("mouseenter",a.handleMouseEnter).on("mousemove",a.handleMouseMove).on("mouseleave",a.handleMouseLeave),g=a.g.append("circle").attr("r",10).style("visibility","hidden").style("fill","none").style("stroke","white"),j=a.g.append("text").style("opacity",0).style("text-anchor","left").style("alignment-baseline","middle");a.line=f},a.state={dataPath:"./data/animal/national_shelter_count_all.csv",data:[]},a.svgRef=i.a.createRef(),a.width=window.innerWidth/2,a.height=window.innerHeight/2,console.log(a.height),a.margin={top:60,right:40,bottom:90,left:100},a.line=null,a.lineGenerator=null,a}return Object(c.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{className:"animal container-fluid d-flex align-items-center",id:"animal",style:{height:window.innerHeight},children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-7",children:Object(h.jsx)("svg",{ref:this.svgRef})}),Object(h.jsxs)("div",{className:"col-5",children:[Object(h.jsx)("h1",{children:"Animal Adoption"}),Object(h.jsxs)("div",{className:"btn-group btn-group-sm btn-group-toggle d-flex",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-outline-light",onClick:function(){return t.handleYearChange(2017)},children:"Year 2017"}),Object(h.jsx)("button",{type:"button",className:"btn btn-outline-light",onClick:function(){return t.handleYearChange(2018)},children:"Year 2018"}),Object(h.jsx)("button",{type:"button",className:"btn btn-outline-light",onClick:function(){return t.handleYearChange(2019)},children:"Year 2019"}),Object(h.jsx)("button",{type:"button",className:"btn btn-outline-light",onClick:function(){return t.handleYearChange(2020)},children:"Year 2020"})]}),Object(h.jsxs)("p",{className:"text-justify mt-2",children:["During the pandemic burst in 2020, we see more and more pets being adopted. One would find it was very hard to adopt a pet from a shelter. Was it truly having more adoptions? or was it just because the available pets were adopted a lot faster than before so that it created an illusion that more pets were adopted?",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"During the pandemic burst in 2020, we see more and more pets being adopted. One would find it was very hard to adopt a pet from a shelter. Was it truly having more adoptions? or was it just because the available pets were adopted a lot faster than before so that it created an illusion that more pets were adopted? During the pandemic burst in 2020, we see more and more pets being adopted. One would find it was very hard to adopt a pet from a shelter. Was it truly having more adoptions? or was it just because the available pets were adopted a lot faster than before so that it created an illusion that more pets were adopted?"]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("h4",{className:"text-center",children:" The answer is latter"})]})]})})}}]),n}(i.a.Component),x=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).componentDidMount=function(){var t=m.x(a.canvasRef.current);t.attr("width",a.width).attr("height",a.height),a.context=t.node().getContext("2d"),a.draw()},a.random=function(){var t=Math.random()*Math.PI*2,e=Math.random()*(a.outerRadius-a.innerRadius)+a.innerRadius;return{x:Math.cos(t)*e+a.start[0],y:Math.sin(t)*e+a.start[1],strength:a.strength,migrated:!1}},a.draw=function(){null!=a.simulation&&(a.simulation.stop(),a.simulation=null),a.tick=0,a.nodes=[];for(var t=0;t<a.n;t++)a.nodes.push(a.random());a.simulation=m.l().force("charge",m.k().strength((function(t){return t.strength}))).force("x",m.m().x((function(t){return t.migrated?a.end[0]:a.start[0]})).strength(a.centeringStrength)).force("y",m.n().y((function(t){return t.migrated?a.end[1]:a.start[1]})).strength(a.centeringStrength)).alphaDecay(0).velocityDecay(a.velocityDecay).nodes(a.nodes).on("tick",a.handleTick)},a.handleTick=function(){if(a.tick>300)return a.simulation.stop(),a.simulation=null,void console.log("hit");if(a.tick++,a.simulation.nodes(a.nodes),a.tick<=a.cycles){var t=a.simulation.find(50*(Math.random()-.5)+a.start[0],50*(Math.random()-.5)+a.start[1],10);t&&(t.migrated=!0)}a.context.clearRect(0,0,a.width,a.height),a.nodes.forEach((function(t){a.context.beginPath(),a.context.fillStyle=t.migrated?"#75d1f3":"orange",a.context.arc(t.x,t.y,2,0,2*Math.PI),a.context.fill()}))},a.handleClick=function(){a.draw()},a.state={},a.canvasRef=i.a.createRef(),a.width=3*window.innerWidth/4,a.height=window.innerWidth/3,a.context=null,a.nodes=[],a.strength=-.25,a.centeringStrength=.01,a.velocityDecay=.15,a.outerRadius=a.height/2,a.innerRadius=1/3*a.outerRadius,a.start=[a.width/4,a.height/2],a.end=[a.width*(3/4),a.height/2],a.n=1e3,a.cycles=100,a.tick=0,a.simulation=null,a}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"co2 container-fluid d-flex align-items-center ",id:"co2",style:{height:window.innerHeight},children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h1",{className:"",children:"CO2 change"})}),Object(h.jsxs)("div",{className:"col-4",children:[Object(h.jsxs)("p",{className:"text-justify",children:["The COVID-19 pandemic and resulting economic crisis had an impact on almost every aspect of how energy is produced, supplied, and consumed around the world. The pandemic defined energy and emissions trends in 2020 \u2013 it drove down fossil fuel consumption for much of the year, whereas renewables and electric vehicles, two of the main building blocks of clean energy transitions, were largely immune. As primary energy demand dropped nearly 4% in 2020, global energy-related CO2 emissions fell by 5.8% according to the latest statistical data, the largest annual percentage decline since World War II.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"In absolute terms, the decline in emissions of almost 2 000 million tonnes of CO2 is without precedent in human history \u2013 broadly speaking, this is the equivalent of removing all of the European Union\u2019s emissions from the global total. Demand for fossil fuels was hardest hit in 2020 \u2013 especially oil, which plunged 8.6%, and coal, which dropped by 4%. Oil\u2019s annual decline was its largest ever, accounting for more than half of the drop in global emissions. Global emissions from oil use plummeted by well over 1 100 Mt CO2, down from around 11 400 Mt in 2019.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"The drop in road transport activity accounted for 50% of the decline in global oil demand, and the slump in the aviation sector for around 35%. Meanwhile, low-carbon fuels and technologies, in particular, solar PV and wind, reached their highest ever annual share of the global energy mix, increasing it by more than one percentage point to over 20%."]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"button",className:"btn btn-outline-light",onClick:this.handleClick,children:"play / replay"})]}),Object(h.jsx)("div",{className:"col-8",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-12 d-flex align-items-center justify-content-center",children:[Object(h.jsx)("span",{style:{height:15,width:15,backgroundColor:"orange",borderRadius:"50%",display:"inline-block"}}),Object(h.jsx)("span",{children:"\xa0 \xa0 \xa0if one dot is representing 3 tons of CO2"})]}),Object(h.jsx)("canvas",{className:"col-12",ref:this.canvasRef}),Object(h.jsx)("div",{className:"col-6",children:Object(h.jsx)("h5",{className:"mx-auto",children:"CO2 emissions in 2019"})}),Object(h.jsx)("div",{className:"col-6",children:Object(h.jsx)("h5",{className:"mx-auto",children:"CO2 emissions decreased in 2020"})})]})})]})})}}]),n}(i.a.Component),w=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={},a.imagePath="image/activity.jpg",a}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"introduction container-fluid d-flex align-items-center",id:"introduction",style:{height:window.innerHeight},children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h1",{className:"text-left",style:{fontSize:"4em"},children:"Introduction"})}),Object(h.jsxs)("div",{className:"col-6 text-justify",children:[Object(h.jsx)("p",{children:"Coronaviruses are a large family of viruses that are known to cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). A novel coronavirus (COVID-19) was identified in 2019 in Wuhan, China. This is a new coronavirus that has not been previously identified in humans. This course provides a general introduction to COVID-19 and emerging respiratory viruses and is intended for public health professionals, incident managers and personnel working for the United Nations, international organizations and NGOs. As the official disease name was established after material creation, any mention of nCoV refers to COVID-19, the infectious disease caused by the most recently discovered coronavirus."}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Coronaviruses are a large family of viruses that are known to cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). A novel coronavirus (COVID-19) was identified in 2019 in Wuhan, China. This is a new coronavirus that has not been previously identified in humans. This course provides a general introduction to COVID-19 and emerging respiratory viruses and is intended for public health professionals, incident managers and personnel working for the United Nations, international organizations and NGOs. As the official disease name was established after material creation, any mention of nCoV refers to COVID-19, the infectious disease caused by the most recently discovered coronavirus."}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Coronaviruses are a large family of viruses that are known to cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). A novel coronavirus (COVID-19) was identified in 2019 in Wuhan, China. This is a new coronavirus that has not been previously identified in humans."})]}),Object(h.jsxs)("div",{className:"col-6",children:[Object(h.jsx)("img",{src:"".concat(this.imagePath),style:{width:"100%"}}),Object(h.jsx)("p",{className:"text-right",id:"credit",children:"photo credit @MUTI"})]})]})})}}]),n}(i.a.Component),O=n(2),C=n(18),S=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).componentDidMount=Object(b.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.setupData();case 2:a.draw();case 3:case"end":return t.stop()}}),t)}))),a.setupData=Object(b.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.collectData();case 2:a.groupData(),a.collectDate();case 4:case"end":return t.stop()}}),t)}))),a.collectDate=function(){a.data.forEach((function(t){return a.date.push({Date:t.Date})}))},a.collectData=Object(b.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=j.a.mark((function t(e){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.g(a.dataPath[e]);case 2:(n=(n=t.sent).map((function(t){var n=+t["Close/Last"].split("$")[1],i=a.dataPath[e].split("/"),r=(i=i[i.length-1].split("."))[0];return Object(C.a)({Date:new Date(t.Date)},r,n)}))).reverse(),n=n.filter((function(t){return 2020===t.Date.getFullYear()&&t.Date.getDate()%3===0})),a.data.push(n);case 7:case"end":return t.stop()}}),t)})),n=0;case 2:if(!(n<a.dataPath.length)){t.next=7;break}return t.delegateYield(e(n),"t0",4);case 4:n++,t.next=2;break;case 7:case"end":return t.stop()}}),t)}))),a.groupData=function(){var t,e=m.o(a.data.flat(),(function(t){return t.Date})),n=[],i=Object(O.a)(e.keys());try{var r=function(){var a=t.value,i={};e.get(a).forEach((function(t){Object.assign(i,t)})),n.push(i)};for(i.s();!(t=i.n()).done;)r()}catch(s){i.e(s)}finally{i.f()}a.data=n},a.draw=function(){var t=m.z().keys(a.companyList).offset(m.A)(a.data),e=m.x(a.svgRef.current);e.attr("width",a.width).attr("height",a.height);var n=e.append("g").attr("transform","translate(".concat(a.margin.left,", ").concat(a.margin.top+100,")")),i=m.w().domain([new Date(2020,0,1),new Date(2020,12,1)]).range([0,a.innerWidth]).nice(),r=m.u().domain([0,4e3]).range([0,a.height/3]),s=m.v().domain(a.companyList).range(["#03a7c1","#be1a8b","#75d1f3","#7f65aa","#01aef0","#ed0477","#5d2d91","#84bc41","#01954e","#ffc60e","#94238e","#ec6aa0","#d71b32","#f69324","#015aaa"]),o=m.b(i).ticks(m.B).tickPadding(15).tickSize(1),c=m.a().x((function(t){return i(t.data.Date)})).y0((function(t){return r(t[0])})).y1((function(t){return r(t[1])})).curve(m.h),l=m.x("#vertical").style("position","absolute").style("z-index",20).style("width","1px").style("height","".concat(a.height-a.margin.bottom,"px")).style("background","#fff").style("visibility","hidden");n.selectAll("path").data(t).enter().append("path").attr("d",c).attr("fill",(function(t,e){return s(t.key)})),n.append("g").attr("class","xAxis").attr("transform","translate(0, ".concat(a.innerHeight-250,")")).call(o).select(".domain").remove(),a.handleMouseMove=function(t,n){var r=m.r(t),s=Object(p.a)(r,2),o=s[0],c=s[1];e.selectAll("#tooltip").remove();var d=m.f((function(t){return t.Date})),h=i.invert(o),u=d.center(a.date,h),f=n.key,g=a.data[u][f];e.append("text").attr("x",o).attr("y",c+100).attr("id","tooltip").style("fill","white").style("font-weight","bold").style("font-size","20px").text("".concat(f," $").concat(g)),l.style("left","".concat(o+10,"px")).style("visibility","visible")},n.selectAll("path").attr("opacity",1).on("mouseenter",(function(t,e){var a=e.index;n.selectAll("path").transition().duration(0).attr("opacity",(function(t,e){return e!==a?.2:1}))})).on("mousemove",a.handleMouseMove).on("mouseleave",(function(t,a){n.selectAll("path").transition().duration(250).attr("opacity",1),e.selectAll("#tooltip").remove(),l.style("visibility","hidden")}))},a.state={},a.svgRef=i.a.createRef(),a.margin={top:30,right:0,bottom:30,left:0},a.width=window.innerWidth,a.height=680,a.innerWidth=a.width-a.margin.left-a.margin.right,a.innerHeight=a.height-a.margin.top-a.margin.bottom,a.dataPath=[],a.companyList=["Delta","Moderna","ExxonMobil","Nordstrom","Disney","Uber","Netflix","Boeing","Chewy","Zillow","Zoom","Facebook","Tesla","Google","Amazon"],a.companyList.forEach((function(t){a.dataPath.push("./data/stock/".concat(t,".csv"))})),a.data=[],a.date=[],a}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"stock container-fluid",id:"stock",style:{height:window.innerHeight},children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-5",children:[Object(h.jsx)("h1",{children:"Stock"}),Object(h.jsx)("p",{className:"text-justify",children:"The COVID-19 pandemic and resulting economic crisis had an impact on almost every aspect of our life, including toilet paper, stock, gas, how we work, how we live and among many others. Is it all bad effects?"})]})}),Object(h.jsx)("div",{className:"row row-full",children:Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("div",{id:"vertical"}),Object(h.jsx)("svg",{ref:this.svgRef})]})})]})}}]),n}(i.a.Component),k=n(29),N=function t(e,n){var a=this;Object(o.a)(this,t),this.resize=function(){var t;a.sections.each((function(e,n,i){var r=i[n].getBoundingClientRect().top;0===n&&(t=r),a.sectionPositions.push(r-t)})),a.containerStart=a.container.node().getBoundingClientRect().top+window.scrollY},this.position=function(){var t=window.scrollY-10-a.containerStart,e=m.e(a.sectionPositions,t);e=Math.min(a.sections.size()-1,e),console.log(e),a.currentIndex!==e&&(a.dispatch.call("active",a,e),a.currentIndex=e);var n=Math.max(e-1,0),i=a.sectionPositions[n],r=(t-i)/(a.sectionPositions[e]-i);a.dispatch.call("progress",a,a.currentIndex,r)},this.getContainer=function(){return a.container},this.setContainer=function(t){a.container=t},this.on=function(t,e){a.dispatch.on(t,e)},this.container=n,this.sections=e,this.sectionPositions=[],this.currentIndex=-1,this.containerStart=0,this.dispatch=m.j("active","progress"),m.x(window).on("scroll.scroller",this.position).on("resize.scroller",this.resize),this.resize()},A=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).width=window.innerWidth/3,a.height=a.width,a.margin={top:10,left:10,bottom:10,right:10},a.lastIndex=-1,a.activeIndex=0,a.squareSize=window.innerWidth/198,a.squarePad=a.squareSize,a.numPerRow=a.width/(a.squareSize+a.squarePad),a.svg=null,a.g=null,a.activateFunctions=[],a.updateFunctions=[],a.rollsRaw=[{Country:"US",Rolls:141},{Country:"Germany",Rolls:134},{Country:"UK",Rolls:127},{Country:"Japan",Rolls:91},{Country:"Australia",Rolls:88},{Country:"Spain",Rolls:81},{Country:"France",Rolls:71},{Country:"Italy",Rolls:70},{Country:"China",Rolls:49},{Country:"Brazil",Rolls:38}],a.componentDidMount=function(){m.C("./data/words.tsv").then((function(t){a.init(t)}))},a.init=function(t){a.setupData(t),a.setupVis(m.x("#vis")),a.setupOverallIncrease(),a.setupInvention(),a.setupGrid(),a.setupBarChart(),a.setupHistogram(),a.setupScroller(),a.setupSections()},a.setupData=function(t){a.wordData=a.getWords(t),a.fillerWords=a.getFillerWords(a.wordData),a.generateRolls()},a.setupVis=function(t){a.svg=t.selectAll("svg").data([a.wordData]);var e=a.svg.enter().append("svg");a.svg=a.svg.merge(e),a.svg.attr("width",a.width+a.margin.left+a.margin.right),a.svg.attr("height",a.height+a.margin.top+a.margin.bottom),a.svg.append("g"),a.g=a.svg.select("g").attr("transform","translate(".concat(a.margin.left,",").concat(a.margin.top,")"))},a.setupOverallIncrease=function(){a.g.append("text").attr("class","title tp-overall-increase highlight").attr("x",a.width/2).attr("y",a.height/3).text("40%"),a.g.append("text").attr("class","sub-title tp-overall-increase").attr("x",a.width/2).attr("y",a.height/3+a.height/5).text("Overall Increase").style("fill","#fff"),a.g.selectAll(".tp-overall-increase").attr("opacity",0)},a.setupInvention=function(){a.g.append("image").attr("class","tp-invention-img").attr("x",0).attr("y",0).attr("width",a.width).attr("height",a.height).attr("xlink:href","./image/toilet_paper_invention.jpg").attr("opacity",0)},a.setupGrid=function(){var t=["US","Germany","UK","Japan","Australia","Spain","France","Italy","China","Brazil"];a.colorScale=m.v().domain(t).range(["#ef3f5d","#00aaa9","#fcf001","#75d1f3","#ed0477","#84bc41","#01954e","#ffc60e","#ec6aa0","#f69324"]);var e=a.g.selectAll(".square").data(a.rollsProcessed),n=e.enter().append("rect").classed("square",!0);e=e.merge(n).attr("width",a.squareSize).attr("height",a.squareSize).attr("fill",(function(t){return a.colorScale(t.Country)})).attr("x",(function(t){return t.x})).attr("y",(function(t){return t.y})).attr("opacity",0).attr("transform","translate(0, ".concat(50,")"));a.g.selectAll(".legend").data(t).enter().append("rect").classed("legend",!0).attr("width",a.squareSize).attr("height",a.squareSize).attr("fill",(function(t){return a.colorScale(t)})).attr("x",(function(t,e){return e*a.squareSize*6})).attr("y",0).attr("opacity",0),a.g.selectAll(".legend-text").data(t).enter().append("text").attr("class","legend-text").text((function(t){return t})).attr("x",(function(t,e){return e*a.squareSize*6})).attr("y",0).attr("transform","translate(0, ".concat(a.squareSize+15,")")).style("font-size",10).attr("fill","white").attr("opacity",0)},a.setupBarChart=function(){},a.setupHistogram=function(){a.colors={0:"#84bc41",1:"#fcf001",2:"#75d1f3",3:"#ef3f5d"},a.changeColorScale=m.u().domain([0,1]).range(["#84bc41","#75d1f3"]),a.xHistScale=m.u().domain([1,13]).range([0,a.width-20]),a.xAxisHist=m.b().scale(a.xHistScale),a.g.append("g").attr("class","x axis").attr("transform","translate(0, ".concat(a.height-40,")")).call(a.xHistScale),a.g.select(".x.axis").style("opacity",0);var t=a.getOtherHist(),e=m.q(t,(function(t){return t.length}));a.yHistScale=m.u().domain([0,e]).range([a.height,0]);var n=a.g.selectAll(".hist").data(t),i=n.enter().append("rect").attr("class","hist");n=n.merge(i).attr("x",(function(t){return a.xHistScale(t.x0)})).attr("y",a.height).attr("height",0).attr("width",a.xHistScale(t[0].x1)-a.xHistScale(t[0].x0)-1).attr("transform","translate(0, ".concat(-40,")")).attr("fill",a.colors[0]).attr("opacity",0)},a.setupScroller=function(){var t=new N(m.y(".step"),m.x("#graphic"));t.on("active",(function(t){m.y(".step").style("opacity",(function(e,n){return n===t?1:.1})),a.activate(t)})),t.on("progress",(function(t,e){a.update(t,e)})),a.vis=document.querySelector("#vis"),a.measure=document.querySelector("#graphic > .col"),a.flexContainer=document.querySelector("#graphic"),a.targetStart=a.measure.offsetTop,a.targetEnd=a.targetStart+a.measure.offsetHeight,a.rect=a.vis.getBoundingClientRect(),a.virtualElement=document.createElement("div"),a.virtualElement.style.height="".concat(parseInt(a.rect.height),"px"),window.addEventListener("scroll",a.makeStick)},a.makeStick=function(){var t=window.scrollY,e=window.innerHeight+t,n=a.vis.classList.contains("stick");t>=a.targetStart&&e<=a.targetEnd&&!n?(a.vis.classList.add("stick"),a.vis.style.width="".concat(parseInt(a.rect.width),"px"),a.vis.parentNode.insertBefore(a.virtualElement,a.vis),a.flexContainer.classList.remove("align-items-end"),a.flexContainer.classList.add("align-items-start")):(t<=a.targetStart&&n||e>=a.targetEnd&&n)&&(a.vis.classList.remove("stick"),a.vis.style.width="auto",a.vis.parentNode.removeChild(a.virtualElement))},a.setupSections=function(){a.activateFunctions.push(a.showTitle,a.showInventionImg,a.showSquares,a.expandGrid,a.highlightGrid,a.showHistPart,a.showHistAll,a.showCough,a.showNothing);for(var t=0;t<a.activateFunctions.length;t++)a.updateFunctions[t]=function(){};a.updateFunctions[7]=a.updateCough},a.activate=function(t){a.activeIndex=t;var e=a.activeIndex>a.lastIndex?1:-1;m.s(a.lastIndex+e,a.activeIndex+e,e).forEach((function(t){a.activateFunctions[t]()})),a.lastIndex=a.activeIndex},a.update=function(t,e){a.updateFunctions[t](e)},a.getWords=function(t){return t.map((function(t,e){return t.filler="1"===t.filler,t.time=+t.time,t.min=Math.floor(t.time/60),t.col=e%a.numPerRow,t.row=Math.floor(e/a.numPerRow),t.x=t.col*(a.squareSize+a.squarePad),t.y=t.row*(a.squareSize+a.squarePad),t}))},a.getFillerWords=function(t){return t.filter((function(t){return t.filler}))},a.getOtherHist=function(){var t=[];return[2,4,90,42,17,8,10,5,1,9,55,50].forEach((function(e,n){for(var a=0;a<e;a++)t.push({Month:n+1})})),m.d().thresholds(a.xHistScale.ticks()).value((function(t){return t.Month}))(t)},a.groupByWord=function(t){return k.a().key((function(t){return t.word})).rollup((function(t){return t.length})).entries(t).sort((function(t,e){return e.value-t.value}))},a.generateRolls=function(){a.rollsProcessed=[],a.rollsRaw.forEach((function(t,e){for(var n=0;n<t.Rolls;n++)a.rollsProcessed.push({Country:t.Country})})),a.rollsProcessed.map((function(t,e){return t.col=e%a.numPerRow,t.row=Math.floor(e/a.numPerRow),t.x=t.col*(a.squareSize+a.squarePad),t.y=t.row*(a.squareSize+a.squarePad),t}))},a.showTitle=function(){a.g.selectAll(".tp-invention-img").transition().duration(0).attr("opacity",0),a.g.selectAll(".tp-overall-increase").transition().duration(600).attr("opacity",1)},a.showInventionImg=function(){a.g.selectAll(".tp-overall-increase").transition().duration(0).attr("opacity",0),a.g.selectAll(".square").transition().duration(0).attr("opacity",0),a.g.selectAll(".legend").transition().duration(0).attr("opacity",0),a.g.selectAll(".legend-text").transition().duration(0).attr("opacity",0),a.g.selectAll(".tp-invention-img").transition().duration(600).attr("opacity",1)},a.showSquares=function(){a.g.selectAll(".tp-invention-img").transition().duration(0).attr("opacity",0),a.g.selectAll(".square").transition().duration(600).delay((function(t){return 5*t.row})).attr("x",0).attr("y",(function(t){return t.y})).attr("fill",(function(t){return a.colorScale(t.Country)})).transition().duration(0).attr("opacity",1),a.g.selectAll(".legend").transition().duration(600).attr("opacity",1),a.g.selectAll(".legend-text").transition().duration(1e3).attr("opacity",1),a.g.selectAll(".hist").transition().duration(600).attr("height",(function(){return 0})).attr("y",(function(){return a.height})).style("opacity",0)},a.expandGrid=function(){a.g.selectAll(".tp-invention-img").transition().duration(0).attr("opacity",0),a.hideAxis(),a.g.selectAll(".square").transition().duration(600).delay((function(t){return 5*t.row})).attr("x",(function(t){return t.x})).attr("y",(function(t){return t.y})).attr("fill",(function(t){return a.colorScale(t.Country)})).attr("opacity",1),a.g.selectAll(".legend").transition().duration(600).attr("opacity",1),a.g.selectAll(".legend-text").transition().duration(600).attr("opacity",1)},a.highlightGrid=function(){a.hideAxis(),a.g.selectAll(".hist").transition().duration(600).attr("y",a.height).attr("height",0).style("opacity",1),a.g.selectAll(".square").transition().attr("x",(function(t){return t.x})).attr("y",(function(t){return t.y})).delay((function(t){return 5*t.col})).duration(600).attr("opacity",1),a.g.selectAll(".legend").transition().duration(0).attr("opacity",1),a.g.selectAll(".legend-text").transition().duration(0).attr("opacity",1),a.g.selectAll(".square").transition("move-fills").duration(800).attr("opacity",1).attr("fill",(function(t){return"US"===t.Country?a.colorScale("US"):"lightgrey"}))},a.showHistPart=function(){a.g.selectAll(".square").transition().duration(600).delay((function(t){return 5*t.col})).attr("y",a.height-100).attr("opacity",0),a.g.selectAll(".legend").transition().duration(0).attr("opacity",0),a.g.selectAll(".legend-text").transition().duration(0).attr("opacity",0),a.showAxis(a.xAxisHist),a.g.selectAll(".hist").transition().duration(600).attr("y",(function(t){return t.x0<=2?a.yHistScale(t.length):a.height})).attr("height",(function(t){return t.x0<=2?a.height-a.yHistScale(t.length):0})).style("opacity",(function(t){return t.x0<=2?1:1e-6}))},a.showHistAll=function(){a.showAxis(a.xAxisHist),a.g.selectAll(".hist").transition().duration(1200).attr("y",(function(t){return a.yHistScale(t.length)})).attr("height",(function(t){return a.height-a.yHistScale(t.length)})).attr("fill",(function(t){return t.x0<=2?a.colors[0]:a.colors[3]})).style("opacity",1)},a.showCough=function(){a.hideAxis(),a.g.selectAll(".hist").transition().duration(300).style("opacity",0)},a.showNothing=function(){a.hideAxis()},a.showAxis=function(t){a.g.select(".x.axis").call(t).transition().duration(500).style("opacity",1)},a.hideAxis=function(){a.g.select(".x.axis").transition().duration(500).style("opacity",0)},a.updateCough=function(t){},a.state={},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"container-fluid",id:"toilet",children:Object(h.jsxs)("div",{className:"row d-flex align-items-start",id:"graphic",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{id:"sections",children:[Object(h.jsxs)("section",{className:"step",children:[Object(h.jsx)("div",{className:"title",children:"Issues With Tissues"}),"The COVID-19 pandemic has been associated with a worldwide increase in toilet paper hoarding. Why do people hoard toilet paper?"]}),Object(h.jsxs)("section",{className:"step",children:[Object(h.jsx)("div",{className:"title",children:"Invention"}),"The origins of Toilet Paper can be dated back to 14th Century China, where it was used by the Emperor and his family.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"In the 15th Century, paper became easier to produce, but the 19th Century is where it boomed thanks to mass production. A man by the name of Joseph C. Gayetty created the first ever commercial toilet paper - which were not in rolls, but arrived as flat sheets sold in bulk Ever since the mass commercialisation of toilet paper, new advances came into play such as Walter Alcocks paper, which was perforated.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"In other parts of the world, St. Andrew's Paper Mill in the UK developed the first 2 ply toilet paper Toilet paper has been developing ever since - until the 21st century, where finally people it became a limited necessity due to hoarding across the world."]}),Object(h.jsxs)("section",{className:"step",children:[Object(h.jsx)("div",{className:"title",children:"The Rank"}),"the US is taking a lead on toilet paper consumption with 91 rolls per capita."]}),Object(h.jsxs)("section",{className:"step",children:[Object(h.jsx)("div",{className:"title",children:"The World"}),"If each square is one roll of toilet paper, this is the top 10 country rank on toile paper consumption."]}),Object(h.jsxs)("section",{className:"step",children:[Object(h.jsx)("div",{className:"title",children:"The US VS The World"}),"The proportion between US and the rest of the top 10 countries"]}),Object(h.jsxs)("section",{className:"step",children:[Object(h.jsx)("div",{className:"title",children:"Pre-COVID"}),"And here are all the fillers I used in those 30 minutes."]}),Object(h.jsxs)("section",{className:"step",children:[Object(h.jsx)("div",{className:"title",children:"Panic Mode"}),"I hoped that all these blunders were toward the beginning of my talk. And the data suggests that fewer fillers are used as I get into it. Perhaps the talk started out rough and improved as I found my groove."]})]})}),Object(h.jsx)("div",{className:"col d-flex align-items-center",style:{marginTop:150,marginLeft:15,marginRight:15},children:Object(h.jsx)("div",{id:"vis",style:{height:window.innerHeight}})})]})})}}]),n}(i.a.Component),R=(i.a.Component,function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).state={},a.imagePath="image/activity.jpg",a}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"introduction container-fluid d-flex align-items-center",id:"introduction",style:{height:window.innerHeight},children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h1",{className:"text-left",style:{fontSize:"4em"},children:"Reflection"})}),Object(h.jsxs)("div",{className:"col-6 text-justify",children:[Object(h.jsx)("p",{children:"Coronaviruses are a large family of viruses that are known to cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). A novel coronavirus (COVID-19) was identified in 2019 in Wuhan, China. This is a new coronavirus that has not been previously identified in humans. This course provides a general introduction to COVID-19 and emerging respiratory viruses and is intended for public health professionals, incident managers and personnel working for the United Nations, international organizations and NGOs. As the official disease name was established after material creation, any mention of nCoV refers to COVID-19, the infectious disease caused by the most recently discovered coronavirus."}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Coronaviruses are a large family of viruses that are known to cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). A novel coronavirus (COVID-19) was identified in 2019 in Wuhan, China. This is a new coronavirus that has not been previously identified in humans. This course provides a general introduction to COVID-19 and emerging respiratory viruses and is intended for public health professionals, incident managers and personnel working for the United Nations, international organizations and NGOs. As the official disease name was established after material creation, any mention of nCoV refers to COVID-19, the infectious disease caused by the most recently discovered coronavirus."}),Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"Coronaviruses are a large family of viruses that are known to cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS). A novel coronavirus (COVID-19) was identified in 2019 in Wuhan, China. This is a new coronavirus that has not been previously identified in humans."})]}),Object(h.jsxs)("div",{className:"col-6",children:[Object(h.jsx)("img",{src:"".concat(this.imagePath),style:{width:"100%"}}),Object(h.jsx)("p",{className:"text-right",id:"credit",children:"photo credit @MUTI"})]})]})})}}]),n}(i.a.Component));function I(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(u,{}),Object(h.jsx)(f,{}),Object(h.jsx)(w,{}),Object(h.jsx)(A,{}),Object(h.jsx)(S,{}),Object(h.jsx)(y,{}),Object(h.jsx)(x,{}),Object(h.jsx)(R,{})]})}s.a.render(Object(h.jsx)(I,{}),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.82e31ed1.chunk.js.map