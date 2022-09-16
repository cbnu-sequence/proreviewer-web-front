## OAUTH

FLOW:

1. 화면에서 버튼을 통해 해당 OAUTH 로그인 창으로 리다이렉팅(ex:github.com/oauth)
2. 리다이렉팅 된 곳에서 로그인 성공 시 지정한 프론트 리다이렉팅 페이지로 authorization code를 가지고 돌아옴(proreviewer.com/?code=hihihihi)
3. url에 있는 authorization code를 파싱해서 백엔드에 post (/react-query/hooks/auth.ts)
4. 백엔드가 해당 oauth code를 이용해 oauth 쪽 백엔드(github, kakao, naver등)에 요청을 통해 정보를 받는다.
5. 인증을 끝낸 백엔드는 프론트에 인가 관련 정보(accessToken, refreshToken)을 보내준다.

### refresh token 관리

refresh token을 http only 쿠키를 통해서 관리하려고 한다.
쿠키를 파싱하는 라이브러리 중에 js-cookie라이브러리가 있는데
해당 라이브러리를 고르는 이유는

1. 용량이 27.4 kB로 작다.
2. dependency가 없다.
3. 모든 브라우저에서 작동한다.
