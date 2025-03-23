export const Header = ({ loggedIn }) => {
  const getNavClassName = (path) =>
    location.pathname === path ? "text-blue-600" : "text-gray-600";

  const navContent = loggedIn
    ? `
      <li><a href="/profile" class="${getNavClassName("/profile")}">프로필</a></li>
      <li><a id="logout" href="#">로그아웃</a></li>
  `
    : `
      <li><a href="/login" class="${getNavClassName("/login")}">로그인</a></li>
    `;

  return `
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>
  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      <li><a href="/" class="${getNavClassName("/")}">홈</a></li>
      ${navContent}
    </ul>
  </nav>
`;
};
