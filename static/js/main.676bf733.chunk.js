(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,r,o,c,i,s,l,u=n(0),h=n.n(u),d=n(9),p=n.n(d),b=n(5),g=n(6),j=n(8),f=n(7),m=n(10),x=n(3),y=n(4),O=y.a.header(a||(a=Object(x.a)(["\n  width: 100%;\n  height: 50px;\n  background-color: lightgrey;\n"]))),v=y.a.form(r||(r=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 15px;\n"]))),w=y.a.input(o||(o=Object(x.a)(["\n  width: 250px;\n  height: 15px;\n"]))),k=y.a.button(c||(c=Object(x.a)(["\n  &:hover,\n  &:focus {\n    background-color: white;\n    cursor: pointer;\n  }\n"]))),C=n(1),S=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleInputChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):m.b.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441")},e}return Object(g.a)(n,[{key:"render",value:function(){return Object(C.jsx)(O,{children:Object(C.jsxs)(v,{onSubmit:this.handleSubmit,children:[Object(C.jsx)(w,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleInputChange}),Object(C.jsx)(k,{type:"submit",children:Object(C.jsx)("span",{children:"Search"})})]})})}}]),n}(u.Component),L=n(12),Q=y.a.ul(i||(i=Object(x.a)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n"]))),U=y.a.li(s||(s=Object(x.a)(["\n  width: 300px;\n  height: 200px;\n  margin: 5px;\n  object-fit: cover;\n\n  &:hover,\n  &:focus {\n    // border: 1px solid lightgrey;\n    cursor: pointer;\n  }\n"])));y.a.img(l||(l=Object(x.a)(["\n  display: inline-block;\n  object-fit: cover;\n"])));function I(e){var t=e.webformatURL,n=e.tags,a=e.onClick;return Object(C.jsx)(U,{onClick:a,children:Object(C.jsx)("img",{src:t,alt:n,width:"300",height:"200"})})}n(24);var M,R=n(14),B=n.n(R);function F(){return Object(C.jsx)(B.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}var E,A,D=y.a.button(M||(M=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  width: 150px;\n  wight: 35px;\n  margin: 0 auto;\n\n  background-color: white;\n  border: 1px solid grey;\n  border-radius: 7%;\n\n  &:hover,\n  &:focus {\n    background-color: grey;\n    border: 1px solid white;\n    cursor: pointer;\n  }\n"])));function K(e){var t=e.onClick;return Object(C.jsx)(D,{type:"button",onClick:t,children:"Load more"})}var T=y.a.div(E||(E=Object(x.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n"]))),q=y.a.div(A||(A=Object(x.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 600px;\n  width: 960px;\n  padding: 12px;\n  background-color: #fff;\n  border-radius: 3px;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n"]))),H=document.querySelector("#modal-root"),J=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeydown=function(t){"Escape"===t.code&&e.props.onModalClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onModalClose()},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown),document.body.style.overflow="hidden"}},{key:"componentWillUnmount",value:function(){window.addEventListener("keydown",this.handleKeydown),document.body.style.overflow="unset"}},{key:"render",value:function(){return Object(d.createPortal)(Object(C.jsx)(T,{onClick:this.handleBackdropClick,children:Object(C.jsx)(q,{children:Object(C.jsx)("img",{src:this.props.largeImageUrl,alt:this.props.tags,width:"960",height:"600"})})}),H)}}]),n}(u.Component),P=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],page:1,largeImageURL:null,status:"idle"},e.handleLoadMoreBtnClick=function(t){t.preventDefault(),e.setState((function(e){return{page:e.page+1}}))},e.onModalClose=function(){e.setState({largeImageURL:null})},e}return Object(g.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this,a=this.props.searchQuery,r=e.searchQuery,o=t.page,c=this.state.page,i=this.state.page;a===r&&o===c||function(e,t){return fetch("https://pixabay.com/api/?key=".concat("22675606-31d87174acbb5d82d82bc8eb4","&q=").concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=20")).then((function(e){return e.json()}))}(a,i).then((function(e){return 0===e.totalHits?n.setState({status:"rejected"}):1===n.state.page?(n.setState({status:"pending"}),n.setState({images:e.hits,status:"resolved"})):n.state.page>1?(window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),n.setState((function(t){return{images:[].concat(Object(L.a)(t.images),Object(L.a)(e.hits)),status:"resolved"}}))):void 0}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.status,a=t.images,r=t.largeImageURL;return"idle"===n?Object(C.jsx)("p",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441."}):"pending"===n?Object(C.jsx)(F,{}):"resolved"===n?Object(C.jsxs)(Q,{children:[a.map((function(t){var n=t.id,a=t.webformatURL,r=t.tags,o=t.largeImageURL;return Object(C.jsx)(I,{webformatURL:a,tags:r,largeImageURL:o,onClick:function(){e.setState({largeImageURL:o})}},n)})),r&&Object(C.jsx)(J,{largeImageUrl:r,onModalClose:this.onModalClose}),Object(C.jsx)(K,{onClick:this.handleLoadMoreBtnClick})]}):"rejected"===n?Object(C.jsxs)("p",{children:["\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ",this.props.searchQuery," \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b!"]}):void 0}}]),n}(u.Component),_=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.handleFormSubmit=function(t){e.setState({searchQuery:t})},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this.state.searchQuery;return Object(C.jsxs)("div",{children:[Object(C.jsx)(S,{onSubmit:this.handleFormSubmit}),Object(C.jsx)(P,{searchQuery:e}),Object(C.jsx)(m.a,{})]})}}]),n}(u.Component),z=_;n(45),n(46);p.a.render(Object(C.jsx)(h.a.StrictMode,{children:Object(C.jsx)(z,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.676bf733.chunk.js.map