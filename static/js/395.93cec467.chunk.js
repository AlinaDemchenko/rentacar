"use strict";(self.webpackChunkrentacar=self.webpackChunkrentacar||[]).push([[395],{5790:function(e,a,n){n.d(a,{Z:function(){return o}});var r=n(8820),l=n(3855),i=n(2286),s=n(184);var t=function(e){var a=e.handlerOpenDetails,n=e.handleToggleFavorites,t=e.carData,o=t.id,c=t.year,d=t.make,m=t.model,u=t.type,h=t.img,g=t.description,x=t.rentalPrice,p=t.rentalCompany,b=t.address,v=(0,l.v9)(i.Tc),f=!!v.length&&v.find((function(e){return e.id===o})),j=(null===g||void 0===g?void 0:g.length)>220?g.split("").splice(0,220).join("")+"...":g;return(0,s.jsxs)("li",{className:"relative p-1 h-[700px]",children:[(0,s.jsx)("div",{className:"w-full h-80 overflow-hidden mb-12 rounded-sm",children:(0,s.jsx)("img",{src:h,alt:m,loading:"lazy",className:"object-cover w-full h-full"})}),(0,s.jsx)("b",{className:"price",children:x}),(0,s.jsxs)("h2",{className:"text-xl font-light tracking-wider mb-2",children:[d,(0,s.jsxs)("span",{className:"text-orange-800",children:[" ",m]})]}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{className:"mb-1",children:[(0,s.jsxs)("p",{className:"text-xl font-semibold inline mr-1",children:[c," ",(0,s.jsxs)("span",{className:"font-thin",children:["| ",u]})]}),(0,s.jsx)("button",{className:"inline font-normal align-sub",onClick:function(){n(t)},children:f?(0,s.jsx)(r.pHD,{className:"h-6 w-6 text-orange-800"}):(0,s.jsx)(r.y5j,{className:"h-6 w-6"})})]}),(0,s.jsx)("li",{className:"pr-1.5 mb-1.5",children:(0,s.jsx)("p",{className:"font-extralight",children:j})}),(0,s.jsx)("li",{children:(0,s.jsxs)("p",{children:[p,", ",b.split(", ").slice(-2).join(", ")]})})]}),(0,s.jsx)("button",{type:"button",onClick:function(){a(o)},className:"button w-5/6 absolute bottom-3 translate-x-1/2 right-1/2",children:"LEARN MORE"})]})};var o=function(e){var a=e.handlerOpenDetails,n=e.cars,r=e.handleToggleFavorites;return(0,s.jsx)("ul",{className:"grid grid-cols-4 gap-x-0.5 gap-y-8 mb-3",children:n.map((function(e){return(0,s.jsx)(t,{carData:e,handlerOpenDetails:a,handleToggleFavorites:r},e.id)}))})}},4727:function(e,a,n){var r=n(184);a.Z=function(e){var a=e.handleUploadCars;return(0,r.jsx)("button",{type:"button",onClick:function(){return a()},className:"button bg-transparent mx-auto block text-sm text-orange-800 border w-1/4 disabled:hover:shadow-none border-orange-800 hover:shadow-[0_6px_20px_-3px_rgba(0,0,0,0.3)_inset,0_6px_16px_-6px_rgba(0,0,0,0.3)_inset]",children:"LOAD MORE"})}},7568:function(e,a,n){var r=n(828),l=n(3855),i=n(2286),s=n(5705),t=n(4373),o=n(6727),c=n(8174),d=n(2791),m=n(184);a.Z=function(e){var a=e.handlerSetFilter,n=e.handlerResetPage,u=e.filteredCarList,h=(0,l.v9)(i.lv),g=(0,l.v9)(i.vw),x=(0,l.v9)(i.x_),p=(0,l.v9)(i.gg),b=(0,l.v9)(i.AD);(0,d.useEffect)((function(){b&&0===u.length&&c.Am.info("No cars match")}),[u,b]);var v=o.Ry().shape({mileageFrom:o.Rx().max(g,'Enter a number under "'.concat(g,'"')).positive("Enter a positive number").integer("Enter a whole number"),mileageTo:o.Rx().max(g,'Enter a number under "'.concat(g,'"')).positive("Enter a positive number").integer("Enter a whole number"),brand:o.Z_(),carPrice:o.Rx()}),f=(0,s.TA)({initialValues:{mileageFrom:"",mileageTo:"",brand:"",carPrice:""},validationSchema:v,onSubmit:function(e,r){var l=r.resetForm,i={};""!==e.mileageFrom&&""!==e.mileageTo&&e.mileageFrom>=e.mileageTo&&(i.mileageTo="Must be greater than 'From'"),e.mileageTo=""===e.mileageTo?g:e.mileageTo,e.carPrice=""===e.carPrice?x:e.carPrice,0===Object.keys(i).length?(a(e),n(),l()):f.setErrors(i)}});return(0,m.jsxs)("form",{onSubmit:f.handleSubmit,className:"flex w-fit h-16 mb-2.5 py-2 px-4 mx-auto gap-x-8 items-center",children:[b&&(0,m.jsxs)("button",{type:"button",onClick:function(){a(null),f.resetForm()},className:"text-orange-800 transition-transform hover:scale-125",children:[(0,m.jsx)(t.u1R,{className:"inline w-10 h-10 translate-x-[1.625rem]"}),(0,m.jsx)(t.u1R,{className:"inline w-10 h-10"})]}),(0,m.jsxs)("div",{role:"group","aria-labelledby":"chooseTheCarBrand",children:[(0,m.jsx)("label",{className:"label",htmlFor:"brand",children:"Car brand"}),(0,m.jsx)("input",{className:"input",list:"brands",name:"brand",id:"brand",placeholder:"Enter the text",type:"text",onChange:f.handleChange,onBlur:f.handleBlur,value:f.values.brand}),(0,m.jsx)("datalist",{id:"brands",children:p.map((function(e){return(0,m.jsx)("option",{children:e},e)}))})]}),(0,m.jsxs)("div",{role:"group","aria-labelledby":"choosePrice",className:" w-[230px] grow-0",children:[(0,m.jsx)("label",{className:"label",htmlFor:"carPrice",children:"Price/1 hour"}),(0,m.jsx)("input",{className:"input w-1/3",list:"prices",name:"carPrice",id:"carPrice",placeholder:"To $",type:"text",onChange:f.handleChange,onBlur:f.handleBlur,value:f.values.carPrice}),(0,m.jsx)("datalist",{id:"prices",children:h.map((function(e){return(0,m.jsx)("option",{children:e},e)}))})]}),(0,m.jsxs)("div",{className:"flex items-center",children:[(0,m.jsx)("label",{className:"label",htmlFor:"mileageRange",children:"\u0421ar mileage/km"}),(0,m.jsxs)("div",{role:"group","aria-labelledby":"chooseMileage",id:"mileageRange",className:"inline w-36 relative",children:[(0,m.jsx)("input",{className:"input rounded-e-none border-e-0 w-1/2",type:"number",name:"mileageFrom",placeholder:"0",onChange:f.handleChange,onBlur:f.handleBlur,value:f.values.mileageFrom}),f.touched.mileageFrom&&f.errors.mileageFrom?(0,m.jsx)("div",{className:"error-message",children:f.errors.mileageFrom}):null,(0,m.jsx)("input",{className:"input rounded-s-none w-1/2",type:"number",name:"mileageTo",placeholder:g,onChange:f.handleChange,onBlur:f.handleBlur,value:f.values.mileageTo}),f.touched.mileageTo&&f.errors.mileageTo?(0,m.jsx)("div",{className:"error-message",children:f.errors.mileageTo}):null]})]}),(0,m.jsx)("button",{type:"submit",className:"button w-16",disabled:Object.values(f.values).every((function(e){return""===e})),children:(0,m.jsx)(r.Yfv,{className:"w-5 h-5 block mx-auto"})})]})}},7395:function(e,a,n){n.r(a);var r=n(7568),l=n(5790),i=n(4727),s=n(2791),t=n(3855),o=n(5440),c=n(618),d=n(2286),m=n(184);a.default=function(){var e=(0,t.I0)(),a=(0,c.v9)(d.h3),n=(0,c.v9)(d.AD),u=(0,c.v9)(d.lV),h=(0,c.v9)(d.Tc);(0,s.useEffect)((function(){e((0,o.Tv)(null))}),[e]);var g=n&&a.length<=u.length||!n&&h.length<=u.length;return(0,m.jsxs)("main",{className:"p-5",children:[(0,m.jsx)(r.Z,{handlerSetFilter:function(a){e((0,o.Tv)(a))},handlerResetPage:function(){e((0,o.YA)(1))},filteredCarList:a}),(0,m.jsx)(l.Z,{handlerOpenDetails:function(a){e((0,o.dM)(a))},cars:u,handleToggleFavorites:function(a){var n=h.find((function(e){return e.id===a.id}));e((0,o.fu)(n.id))}}),!g&&(0,m.jsx)(i.Z,{handleUploadCars:function(){e((0,o.YA)())}})]})}}}]);
//# sourceMappingURL=395.93cec467.chunk.js.map