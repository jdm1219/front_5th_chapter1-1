import{R as r,a as n,s as o,r as i}from"./routes-CQ6Wh4Lc.js";console.log(r);console.log(r.LOGIN);console.log(r.MAIN);const l=document.body.querySelector("#root"),s=n({mount:l,routes:i,beforeEnter:(e,t)=>{e.requiresAuth&&!o.loggedIn?t(r.LOGIN):e.path===r.LOGIN&&o.loggedIn?t(r.MAIN):t()}});l.addEventListener("click",e=>{var t,a;((t=e.target)==null?void 0:t.id)==="logout"&&(o.logout(),s.push(r.LOGIN)),((a=e.target)==null?void 0:a.nodeName)==="A"&&(e.preventDefault(),s.push(e.target.href.replace(location.origin,"")))});l.addEventListener("submit",e=>{if(e.target&&e.target.id==="login-form"){e.preventDefault();const t=e.target.querySelector("#username").value;o.setUser({username:t,email:"",bio:""}),s.push(r.MAIN)}if(e.target&&e.target.id==="profile-form"){e.preventDefault();const t=e.target.querySelector("#username").value,a=e.target.querySelector("#email").value,u=e.target.querySelector("#bio").value;o.setUser({username:t,email:a,bio:u})}});
