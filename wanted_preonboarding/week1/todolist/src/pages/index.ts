import AuthHOC from "../components/HOC/AuthHOC";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import TodoPage from "./TodoPage";

export { default as NotFoundPage } from "./404Page";

// 로그인, 회원가입, 투두리스트 페이지는 AuthHOC로 감싸져 있다.
// 각 페이지 링크로 이동시 AuthHOC로 감싸진 페이지 컴포넌트 실행
export const AuthSignInPage = AuthHOC(SignInPage, false);
export const AuthSignUpPage = AuthHOC(SignUpPage, false);
export const AuthTodoPage = AuthHOC(TodoPage, true);
