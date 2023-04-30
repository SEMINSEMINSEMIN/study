import axios from "axios";
import { TOKEN_KEY, SERVER } from "../constant/constant";
import { getToken, removeToken } from "../utils/token";

const customAxios = axios.create({
  baseURL: SERVER,
});

customAxios.interceptors.request.use(
  (config) => {
    const token = getToken(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    // removeToken(TOKEN_KEY);
    return Promise.reject(error);
  }
);

// 이거 쓰는 이유
// 예를 들어 사용자가 로그인 한 상태에서 투두리스트 페이지에 있는데
// 임의로 로컬 스토리지 값 조정한 다음 (token: bug) 투두리스트 추가를 한다거나 그런다면??
// 강제로 로그아웃 시켜줘야 하니까!!!
customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.data.statusCode === 401) {
      removeToken("token");
      alert("세션이 만료되었습니다. 다시 로그인해 주시기 바랍니다.");

      // _self: 현재 창에서
      // _blank: 새로운 창을 엶
      // window.open("/signin", "_self");
      window.location.href = "/signin"; // 그런데 스택오버 플로우에 따르면 이게 더 선호된다고 한다. 왜인지는 모르겠음
      // 관련 링크: https://stackoverflow.com/questions/4813879/window-open-target-self-v-window-location-href
    }
    return Promise.reject(error);
  }
);

export default customAxios;
