(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{26:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},64:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(2),s=n.n(a),i=n(21),o=n.n(i),r=(n(43),n(26),n(18)),l=n(8),j=n(33),d=(n(44),n(45),n(46),n(19));var b=function(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsxs)("div",{className:"footert",children:[Object(c.jsx)("p",{children:"Matilda N\xe4s\xe9n"}),Object(c.jsx)("p",{children:"|"}),Object(c.jsx)("p",{children:"matildanasens@gmail.com"})]}),Object(c.jsxs)("div",{className:"footersocial",children:[Object(c.jsxs)("a",{href:" https://www.facebook.com/matilda.nasen/",children:[" ",Object(c.jsx)(d.a,{size:"20"})]}),Object(c.jsxs)("a",{href:"https://www.instagram.com/matildanasen/",children:[" ",Object(c.jsx)(d.b,{size:"20"})]}),Object(c.jsxs)("a",{href:"https://www.linkedin.com/in/matildanasen/",children:[" ",Object(c.jsx)(d.c,{size:"20"})]}),Object(c.jsxs)("a",{href:"mailto:matildanasens@gmail.com",children:[" ",Object(c.jsx)(d.d,{size:"20"})]})]})]})},m=(n(47),n(32).a.initializeApp({apiKey:"AIzaSyCZ9tSApf_TL_SfWH1a4Xf2Ok5NYQS9lSk",authDomain:"portfolio-98801.firebaseapp.com",databaseURL:"https://portfolio-98801.firebaseio.com",projectId:"portfolio-98801",storageBucket:"portfolio-98801.appspot.com",messagingSenderId:"994180628272",appId:"1:994180628272:web:32a47de838ae03c98112f5"}).firestore());var h=function(){return Object(c.jsx)("div",{id:"contact",className:"contact",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h2",{children:"Get in touch"}),Object(c.jsxs)("p",{children:["Do you want to know more about me or my work? ",Object(c.jsx)("br",{})," Or do you have a project to discuss? ",Object(c.jsx)("br",{})," Contact me on LinkedIn or send me an email! ",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"LinkedIn | ",Object(c.jsx)("a",{href:"linkedin.com/in/matildanasen/",children:"matildanasen"}),Object(c.jsx)("br",{}),"Email |"," ",Object(c.jsx)("a",{href:"mailto:matildanasen@hotmail.se",children:"matildanasen@hotmail.se"})]})]})})},u=n(35),O=n(29),f=n(30),x=n(36),p=n(34),v=(n(52),function(e){Object(x.a)(n,e);var t=Object(p.a)(n);function n(e){var c;return Object(O.a)(this,n),(c=t.call(this,e)).state={projects:[]},c}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this;m.collection("projects").get().then((function(t){var n=t.docs.map((function(e){return Object(u.a)({id:e.id},e.data())}));console.log(n),e.setState({projects:n})}))}},{key:"render",value:function(){var e=this.state.projects;return Object(c.jsxs)("div",{id:"portfolio",className:"projectMain",children:[Object(c.jsx)("h2",{children:"Portfolio"}),Object(c.jsx)("div",{className:"flexProjects",children:e.map((function(e){return Object(c.jsxs)("div",{class:"example",children:[Object(c.jsx)("div",{className:"Imageholder",children:Object(c.jsx)("img",{className:"projectImage",src:e.Image})}),Object(c.jsxs)("div",{className:"projectContent",children:[Object(c.jsx)("h3",{children:e.Title}),Object(c.jsx)("p",{children:e.Info})]})]},e.uid)}))})]})}}]),n}(s.a.Component));n(53);var g=function(){return Object(c.jsxs)("div",{id:"firstpageId",className:"firstpage",children:[Object(c.jsxs)("div",{className:"info",children:[Object(c.jsx)("h1",{className:"name",children:"Matilda N\xe4s\xe9n"}),Object(c.jsx)("h1",{className:"role",children:"Interaction Designer"})]}),Object(c.jsx)("div",{className:"arrow-down"})]})};n(54);var N=function(){return Object(c.jsxs)("div",{id:"about",className:"about",children:[Object(c.jsx)("h2",{children:"About me"}),Object(c.jsxs)("div",{className:"aboutContent",children:[Object(c.jsxs)("p",{children:["I am a UX/UI designer and developer with an MSE in Interaction Technology and Design from Ume\xe5 University where I graduated in June 2021."," "]}),Object(c.jsx)("p",{children:"My main area of interest is UX/UI and front-end development where my ideas become reality. The studies have given me a lot of knowledge in different areas such as design and programming, behavioural science, user testing, sketching technology, web design and project management. I have also taken some courses in art history, literature, visual arts and economics that have contributed a breadth and creativity to my education, which I have greatly appreciated. It is the breadth of knowledge with a depth in technology that makes the core of my engineering."}),Object(c.jsx)("p",{children:"Are you interested in cooperation or have questions about my work, feel free to contact me."}),Object(c.jsx)("p",{children:"/Matilda"}),Object(c.jsx)("div",{className:"meImage",children:Object(c.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/portfolio-98801.appspot.com/o/meme.jpg?alt=media&token=646bdce6-f0e8-4881-89d8-e24028b8b257",className:"me",alt:"Matilda"})})]})]})};var w=function(){return Object(c.jsxs)("div",{className:"home",children:[Object(c.jsx)(g,{}),Object(c.jsx)(v,{}),Object(c.jsx)(N,{}),Object(c.jsx)(h,{}),Object(c.jsx)(b,{})]})},y=(n(55),n(31)),k=n.n(y),I=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],s=t[1],i=function(e){window.location.hash="#"+e};return window.onscroll=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?(document.getElementById("navbar").style.backgroundColor="white",document.getElementById("navbar").style.transition="0.5s"):document.getElementById("navbar").style.backgroundColor="transparent"},Object(c.jsxs)("div",{id:"navbar",className:"navigation",children:[Object(c.jsx)("div",{className:"rightside"}),Object(c.jsxs)("div",{className:"leftside",children:[Object(c.jsxs)("div",{className:"links",id:n?"hidden":"",children:[Object(c.jsx)(r.b,{exact:!0,to:"portfolio",onClick:function(){return i("portfolio")},children:Object(c.jsx)("a",{children:"Portfolio"})}),Object(c.jsx)(r.b,{activeClassName:"active",exact:!0,to:"about",onClick:function(){return i("about")},children:Object(c.jsx)("a",{children:"About"})}),Object(c.jsx)(r.b,{to:"contact",exact:!0,activeClassName:"active",onClick:function(){return i("contact")},children:Object(c.jsx)("a",{children:"Contact"})})]}),Object(c.jsxs)("button",{onClick:function(){return s(!n)},className:"butt",children:[" ",""," ",Object(c.jsx)(k.a,{})," "]})]})]})};n(64);var C=function(){return Object(c.jsx)("div",{className:"projects"})};var M=function(){return Object(c.jsx)(r.a,{children:Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(I,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:w}),Object(c.jsx)(l.a,{path:"/project/BT5BqBz2L6NZi1MPeMw5",component:C}),Object(c.jsx)(l.a,{from:"*",to:"/",component:w})]})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};n(65),o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root")),S()}},[[67,1,2]]]);
//# sourceMappingURL=main.3bb21a29.chunk.js.map