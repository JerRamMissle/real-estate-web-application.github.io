(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{271:(e,a,n)=>{"use strict";n.d(a,{Z:()=>x});var r=n(1664),t=n.n(r),l=n(5675),u=n.n(l),i=n(3717),o=n(7747),s=n(4e3),c=n(3293),m=n(4644),A=n(7897),p=n(5010),v=n(7459);let d={src:"/real-estate-web-application.github.io/_next/static/media/house.852de0b3.jpg",height:600,width:800,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAAmEn/xAAbEAABBAMAAAAAAAAAAAAAAAAEAQIDEQATwf/aAAgBAQABPwAowkDcyUiSRWLV03uf/8QAGBEBAQADAAAAAAAAAAAAAAAAAQIAIZH/2gAIAQIBAT8AhpN09z//xAAXEQEAAwAAAAAAAAAAAAAAAAABABEx/9oACAEDAQE/AELwn//Z",blurWidth:8,blurHeight:6};var h=n(5893);let x=function(e){var a,n=e.property,r=n.coverPhoto,l=n.price,x=n.rentFrequency,g=n.rooms,f=n.title,y=n.baths,j=n.area,b=n.agency,w=n.isVerified,E=n.externalID;return(0,h.jsx)(t(),{href:"/property/".concat(E),passHref:!0,children:(0,h.jsxs)(i.k,{flexWrap:"wrap",w:"420px",p:"5",paddingTop:"0px",justifyContent:"flex-start",cursor:"pointer",children:[(0,h.jsx)(o.xu,{children:(0,h.jsx)(u(),{src:r?r.url:d,width:400,height:260})}),(0,h.jsxs)(o.xu,{w:"full",children:[(0,h.jsxs)(i.k,{paddingTop:"2",alignItems:"center",justifyContent:"space-between",children:[(0,h.jsxs)(i.k,{alignItems:"center",children:[(0,h.jsx)(o.xu,{paddingRight:"3",color:"green.400",children:w&&(0,h.jsx)(p.Dzu,{})}),(0,h.jsxs)(s.x,{fontWeight:"bold",fontSize:"lg",children:["AED ",l,x&&"/".concat(x)]})]}),(0,h.jsx)(o.xu,{children:(0,h.jsx)(c.q,{size:"sm",src:null==b||null===(a=b.logo)||void 0===a?void 0:a.url})})]}),(0,h.jsxs)(i.k,{alignItems:"center",p:"1",justifyContent:"space-between",w:"250px",color:"blue.400",children:[g,(0,h.jsx)(m.f0S,{})," | ",y," ",(0,h.jsx)(m.MvV,{})," | ",(0,v.ZP)(j)," sqft ",(0,h.jsx)(A.H9n,{})]}),(0,h.jsx)(s.x,{fontSize:"lg",children:f.length>30?f.substring(0,30)+"...":f})]})]})})}},4251:(e,a,n)=>{"use strict";n.r(a),n.d(a,{__N_SSP:()=>k,default:()=>B});var r=n(7294),t=n(1163),l=n(5675),u=n.n(l),i=n(8029),o=n(8329),s=n(92),c=n(2553),m=n(7897),A=n(271),p=n(9499),v=n(29),d=n(4687),h=n.n(d),x=n(243),g=n(8491),f=n(2206),y=n(8899),j=n(3858),b=[{items:[{name:"Buy",value:"for-sale"},{name:"Rent",value:"for-rent"}],placeholder:"Purpose",queryName:"purpose"},{items:[{name:"Daily",value:"daily"},{name:"Weekly",value:"weekly"},{name:"Monthly",value:"monthly"},{name:"Yearly",value:"yearly"}],placeholder:"Rent Frequency",queryName:"rentFrequency"},{items:[{name:"10,000",value:"10000"},{name:"20,000",value:"20000"},{name:"30,000",value:"30000"},{name:"40,000",value:"40000"},{name:"50,000",value:"50000"},{name:"60,000",value:"60000"},{name:"85,000",value:"85000"}],placeholder:"Min Price(AED)",queryName:"minPrice"},{items:[{name:"50,000",value:"50000"},{name:"60,000",value:"60000"},{name:"85,000",value:"85000"},{name:"110,000",value:"110000"},{name:"135,000",value:"135000"},{name:"160,000",value:"160000"},{name:"185,000",value:"185000"},{name:"200,000",value:"200000"},{name:"300,000",value:"300000"},{name:"400,000",value:"400000"},{name:"500,000",value:"500000"},{name:"600,000",value:"600000"},{name:"700,000",value:"700000"},{name:"800,000",value:"800000"},{name:"900,000",value:"900000"},{name:"1000,000",value:"1000000"}],placeholder:"Max Price(AED)",queryName:"maxPrice"},{items:[{name:"Lowest Price",value:"price-asc"},{name:"Highest Price",value:"price-des"},{name:"Newest",value:"date-asc"},{name:"Oldest",value:"date-desc"},{name:"Verified",value:"verified-score"},{name:"City Level Score",value:"city-level-score"}],placeholder:"Sort",queryName:"sort"},{items:[{name:"1000",value:"1000"},{name:"2000",value:"2000"},{name:"3000",value:"3000"},{name:"4000",value:"4000"},{name:"5000",value:"5000"},{name:"10000",value:"10000"},{name:"20000",value:"20000"}],placeholder:"Max Area(sqft)",queryName:"areaMax"},{items:[{name:"1",value:"1"},{name:"2",value:"2"},{name:"3",value:"3"},{name:"4",value:"4"},{name:"5",value:"5"},{name:"6",value:"6"},{name:"7",value:"7"},{name:"8",value:"8"},{name:"9",value:"9"},{name:"10",value:"10"}],placeholder:"Rooms",queryName:"roomsMin"},{items:[{name:"1",value:"1"},{name:"2",value:"2"},{name:"3",value:"3"},{name:"4",value:"4"},{name:"5",value:"5"},{name:"6",value:"6"},{name:"7",value:"7"},{name:"8",value:"8"},{name:"9",value:"9"},{name:"10",value:"10"}],placeholder:"Baths",queryName:"bathsMin"},{items:[{name:"Furnished",value:"furnished"},{name:"Unfurnished",value:"unfurnished"}],placeholder:"Furnish Type",queryName:"furnishingStatus"},{items:[{name:"Apartment",value:"4"},{name:"Townhouses",value:"16"},{name:"Villas",value:"3"},{name:"Penthouses",value:"18"},{name:"Hotel Apartments",value:"21"},{name:"Villa Compound",value:"19"},{name:"Residential Plot",value:"14"},{name:"Residential Floor",value:"12"},{name:"Residential Building",value:"17"}],placeholder:"Property Type",queryName:"categoryExternalID"}],w=function(e){var a=e.purpose,n=e.rentFrequency,r=e.categoryExternalID;return[{name:"purpose",value:a},{name:"rentFrequency",value:n},{name:"minPrice",value:e.minPrice},{name:"maxPrice",value:e.maxPrice},{name:"areaMax",value:e.areaMax},{name:"roomsMin",value:e.roomsMin},{name:"bathsMin",value:e.bathsMin},{name:"sort",value:e.sort},{name:"locationExternalIDs",value:e.locationExternalIDs},{name:"categoryExternalID",value:r}]},E=n(7066),C=function(){var e=(0,v.Z)(h().mark(function e(a){var n;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.Z.get(a,{headers:{"x-rapidapi-host":"bayut.p.rapidapi.com","x-rapidapi-key":"25ebede638msh9bf1b5f3559968cp1045b4jsna545f15b5746"}});case 3:if(console.log("API Response Data: ",n=e.sent.data),!(n&&n.hits)){e.next=10;break}return e.abrupt("return",n);case 10:return console.error("Expected data structure (hits) not found."),e.abrupt("return",null);case 12:e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(0),console.error("Error fetching API data:",e.t0.message),e.abrupt("return",null);case 18:case"end":return e.stop()}},e,null,[[0,14]])}));return function(a){return e.apply(this,arguments)}}();let I={src:"/real-estate-web-application.github.io/_next/static/media/noresult.54963d58.svg",height:129,width:127,blurWidth:0,blurHeight:0};var D=n(5893);function P(){var e=(0,r.useState)(b)[0],a=(0,r.useState)(""),n=a[0],l=a[1],m=(0,r.useState)(),A=m[0],d=m[1],E=(0,r.useState)(!1),P=E[0],k=E[1],B=(0,r.useState)(!1),q=B[0],N=B[1],M=(0,t.useRouter)(),Q=function(e){var a=M.pathname,n=M.query;w(e).forEach(function(a){a.value&&null!=e&&e[a.name]&&(n[a.name]=a.value)}),M.push({pathname:a,query:n})};return(0,r.useEffect)(function(){if(""!==n){var e;(e=(0,v.Z)(h().mark(function e(){var a;return h().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,C("".concat("https://bayut.p.rapidapi.com","/auto-complete?query=").concat(n));case 3:a=e.sent,N(!1),d(null==a?void 0:a.hits);case 6:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)})()}},[n]),(0,D.jsxs)(o.k,{bg:"gray.100",p:"4",justifyContent:"center",flexWrap:"wrap",children:[null==e?void 0:e.map(function(e){var a;return(0,D.jsx)(i.x,{children:(0,D.jsx)(x.P,{onChange:function(a){return Q((0,p.Z)({},e.queryName,a.target.value))},placeholder:e.placeholder,w:"fit-content",p:"2",children:null==e||null===(a=e.items)||void 0===a?void 0:a.map(function(e){return(0,D.jsx)("option",{value:e.value,children:e.name},e.value)})})},e.queryName)}),(0,D.jsxs)(o.k,{flexDir:"column",children:[(0,D.jsx)(g.z,{onClick:function(){return k(!P)},border:"1px",borderColor:"gray.200",marginTop:"2",children:"Search Location"}),P&&(0,D.jsxs)(o.k,{flexDir:"column",pos:"relative",paddingTop:"2",children:[(0,D.jsx)(f.I,{placeholder:"Type Here",value:n,w:"300px",focusBorderColor:"gray.300",onChange:function(e){return l(e.target.value)}}),""!==n&&(0,D.jsx)(c.J,{as:j.B4e,pos:"absolute",cursor:"pointer",right:"5",top:"5",zIndex:"100",onClick:function(){return l("")}}),q&&(0,D.jsx)(y.$,{margin:"auto",marginTop:"3"}),P&&(0,D.jsxs)(i.x,{height:"300px",overflow:"auto",children:[null==A?void 0:A.map(function(e){return(0,D.jsx)(i.x,{onClick:function(){Q({locationExternalIDs:e.externalID}),k(!1),l(e.name)},children:(0,D.jsx)(s.x,{cursor:"pointer",bg:"gray.200",p:"2",borderBottom:"1px",borderColor:"gray.100",children:e.name})},e.id)}),!q&&!(null!=A&&A.length)&&(0,D.jsxs)(o.k,{justifyContent:"center",alignItems:"center",flexDir:"column",marginTop:"5",marginBottom:"5",children:[(0,D.jsx)(u(),{src:I}),(0,D.jsx)(s.x,{fontSize:"xl",marginTop:"3",children:"Waiting to search!"})]})]})]})]})]})}var k=!0;let B=function(e){var a=e.properties,n=(0,r.useState)(!1),l=n[0],p=n[1],v=(0,t.useRouter)();return(0,D.jsxs)(i.x,{children:[(0,D.jsxs)(o.k,{onClick:function(){return p(!l)},cursor:"pointer",bg:"gray.100",borderBottom:"1px",borderColor:"gray.200",p:"2",fontWeight:"black",fontSize:"lg",justifyContent:"center",alignItems:"center",children:[(0,D.jsx)(s.x,{children:"Search Property By Filters"}),(0,D.jsx)(c.J,{paddingleft:"2",w:"7",as:m.r0X})]}),l&&(0,D.jsx)(P,{}),(0,D.jsxs)(s.x,{fontSize:"2xl",p:"4",fontWeight:"bold",children:["Properties ",v.query.purpose]}),(0,D.jsx)(o.k,{flexWrap:"wrap",children:a.map(function(e){return(0,D.jsx)(A.Z,{property:e},e.id)})}),0===a.length&&(0,D.jsxs)(o.k,{justifyContent:"center",alignItems:"center",flexDir:"column",marginTop:"5",marginBottom:"5",children:[(0,D.jsx)(u(),{src:I,alt:"No results found",width:200,height:200}),(0,D.jsx)(s.x,{fontSize:"xl",marginTop:"3",children:"No Result Found."})]})]})}},2774:(e,a,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return n(4251)}])}},e=>{var a=a=>e(e.s=a);e.O(0,[365,473,838,552,876,443,888,774,179],()=>a(2774)),_N_E=e.O()}]);