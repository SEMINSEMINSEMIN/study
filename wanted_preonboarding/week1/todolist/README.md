# 폴더 구조에 대해

- api 폴더: 요청 관련 함수
- types 폴더: 타입에 관한거를 모아놓은 폴더, 재사용성을 높이기 위함
- utils 폴더: 리액트 컴포넌트나 훅이 아닌, 그냥 일반적인 함수
  - 예시: validation.ts - 폼 유효성 검사 함수로, 따로 utils 폴더 안에 빼놓았기 때문에 관리가 수월
- lib 폴더: 라이브러리 관련 함수
  - customAxios.ts: axios 이용 함수 -> 이걸 api 폴더의 함수에서 사용
  - axios와 요청 상세 로직을 분리하는 형태
- constant 폴더: 상수 관련 함수, 토큰 키나 서버 주소 같은거!

# HOC

참고 파일

- index.ts
- AuthHOC.ts

[참고 링크 바로가기](https://www.notion.so/seminkang/HOC-Higher-Order-Components-617aca4e954a407c8a49ce2bc8778de7?pvs=4)
