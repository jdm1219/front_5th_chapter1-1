import{c as i,s as o,R as r,r as l}from"./routes-S1L6IOey.js";const s=document.body.querySelector("#root"),u=i({mount:s,routes:l,beforeEnter:(e,t)=>{e.requiresAuth&&!o.loggedIn?t(r.LOGIN):e.path===r.LOGIN&&o.loggedIn?t(r.MAIN):t()}});s.addEventListener("click",e=>{var t,a;if(((t=e.target)==null?void 0:t.id)==="logout"){o.logout(),u.push(r.LOGIN);return}if(((a=e.target)==null?void 0:a.nodeName)==="A"){e.preventDefault(),u.push(e.target.href.replace(location.origin,""));return}});s.addEventListener("submit",e=>{if(e.target&&e.target.id==="login-form"){e.preventDefault();const t=e.target.querySelector("#username").value;o.setUser({username:t,email:"",bio:""}),u.push(r.MAIN);return}if(e.target&&e.target.id==="profile-form"){e.preventDefault();const t=e.target.querySelector("#username").value,a=e.target.querySelector("#email").value,n=e.target.querySelector("#bio").value;o.setUser({username:t,email:a,bio:n});return}});
