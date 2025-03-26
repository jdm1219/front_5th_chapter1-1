(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const i={_user:JSON.parse(localStorage.getItem("user"))||null,get loggedIn(){return!!this._user},get user(){return this._user},setUser(t){localStorage.setItem("user",JSON.stringify(t)),this._user=t},logout(){localStorage.removeItem("user"),this._user=null},init(){window.addEventListener("storage",()=>{this._user=JSON.parse(localStorage.getItem("user"))||null})}};i.init();function I({mount:t,routes:e,beforeEnter:o,getRoutePath:l,navigate:s,eventType:n}){const d=t instanceof HTMLElement?t:document.body.querySelector(t||"#root");function m(a=l()){return e.find(c=>c.path===a)||m("*")}function f(a){d.innerHTML=a()}function g(a=l()){const c=m(a);if(!o){f(c.component);return}o(c,u=>{u&&u!==a?s(u,!0):f(c.component)})}function x(a){s(a,!1)}function y(a){s(a,!0)}function w(a){window.addEventListener(a,()=>g()),g()}return w(n),{push:x,replace:y}}function O({mount:t,routes:e,beforeEnter:o}){return I({mount:t,routes:e,beforeEnter:o,getRoutePath:()=>location.pathname,navigate:(l,s)=>{history[s?"replaceState":"pushState"](null,"",l),window.dispatchEvent(new PopStateEvent("popstate"))},eventType:"popstate"})}const v=()=>{const t=i.loggedIn,e=l=>location.pathname===l?"text-blue-600 font-bold":"text-gray-600",o=t?`
      <li><a href="${r.PROFILE}" class="${e(r.PROFILE)}">프로필</a></li>
      <li><a id="logout" href="#">로그아웃</a></li>
  `:`
      <li><a href="${r.LOGIN}" class="${e(r.LOGIN)}">로그인</a></li>
    `;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="${r.MAIN}" class="${e(r.MAIN)}">홈</a></li>
        ${o}
      </ul>
    </nav>
  `},h=()=>`
  <footer class="bg-gray-200 p-4 text-center">
    <p>&copy; 2024 항해플러스. All rights reserved.</p>
  </footer>
`,L=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
    ${v()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>

        <div class="space-y-4">

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">홍길동</p>
                <p class="text-sm text-gray-500">5분 전</p>
              </div>
            </div>
            <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">김철수</p>
                <p class="text-sm text-gray-500">15분 전</p>
              </div>
            </div>
            <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">이영희</p>
                <p class="text-sm text-gray-500">30분 전</p>
              </div>
            </div>
            <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">박민수</p>
                <p class="text-sm text-gray-500">1시간 전</p>
              </div>
            </div>
            <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">정수연</p>
                <p class="text-sm text-gray-500">2시간 전</p>
              </div>
            </div>
            <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
        </div>
      </main>
    ${h()}
    </div>
  </div>
`,N=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,S=()=>{const t=i.user;return`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
    ${v()}
      <main class="p-4">
        <div class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
            내 프로필
          </h2>
          <form id="profile-form">
            <div class="mb-4">
              <label
                for="username"
                class="block text-gray-700 text-sm font-bold mb-2"
                >사용자 이름</label
              >
              <input
                type="text"
                id="username"
                name="username"
                value="${t.username}"
                class="w-full p-2 border rounded"
              />
            </div>
            <div class="mb-4">
              <label
                for="email"
                class="block text-gray-700 text-sm font-bold mb-2"
                >이메일</label
              >
              <input
                type="email"
                id="email"
                name="email"
                value="${t.email}"
                class="w-full p-2 border rounded"
              />
            </div>
            <div class="mb-6">
              <label
                for="bio"
                class="block text-gray-700 text-sm font-bold mb-2"
                >자기소개</label
              >
              <textarea
                id="bio"
                name="bio"
                rows="4"
                class="w-full p-2 border rounded"
              >${t.bio}</textarea
              >
            </div>
            <button
              type="submit"
              class="w-full bg-blue-600 text-white p-2 rounded font-bold"
            >
              프로필 업데이트
            </button>
          </form>
        </div>
      </main>
      ${h()}
    </div>
  </div>
`},E=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,$="/front_5th_chapter1-1";function R(t="/",e={}){return t=t.replace(/\/+$/,""),Object.fromEntries(Object.entries(e).map(([o,l])=>l==="*"?[o,l]:[o,`${t}/${l.replace(/^\/+/,"")}`]))}const r=R($,{MAIN:"/",LOGIN:"/login",PROFILE:"/profile",ERROR:"*"}),A=[{path:r.MAIN,component:L},{path:r.LOGIN,component:N},{path:r.PROFILE,component:S,requiresAuth:!0},{path:r.ERROR,component:E}],b=document.body.querySelector("#root"),p=O({mount:b,routes:A,beforeEnter:(t,e)=>{t.requiresAuth&&!i.loggedIn?e(r.LOGIN):t.path===r.LOGIN&&i.loggedIn?e(r.MAIN):e()}});b.addEventListener("click",t=>{var e,o;((e=t.target)==null?void 0:e.id)==="logout"&&(i.logout(),p.push(r.LOGIN)),((o=t.target)==null?void 0:o.nodeName)==="A"&&(t.preventDefault(),p.push(t.target.href.replace(location.origin,"")))});b.addEventListener("submit",t=>{if(t.target&&t.target.id==="login-form"){t.preventDefault();const e=t.target.querySelector("#username").value;i.setUser({username:e,email:"",bio:""}),p.push(r.MAIN)}if(t.target&&t.target.id==="profile-form"){t.preventDefault();const e=t.target.querySelector("#username").value,o=t.target.querySelector("#email").value,l=t.target.querySelector("#bio").value;i.setUser({username:e,email:o,bio:l})}});
