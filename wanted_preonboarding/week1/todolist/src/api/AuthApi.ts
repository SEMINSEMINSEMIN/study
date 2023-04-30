import customAxios from "../lib/customAxios";
import { SigninResponse, SigninParam, SignupParam } from "../types/api/auth";

// async 함수는 "프로미스"를 반환한다.

const AuthApi = () => {
  // signin 함수의 경우, 로그인 요청 후 응답 받은 토큰을 resolve한 프로미스를 반환
  const signIn = async (formData: SigninParam): Promise<SigninResponse> => {
    const result = await customAxios.post("/auth/signin", formData);
    return result.data;
  };

  // signup 함수의 경우, 회원가입 요청 후 응답값으로 반환할게 없음. (void)
  const signUp = async (formData: SignupParam): Promise<void> => {
    await customAxios.post("/auth/signup", formData);
  };

  return { signUp, signIn };
};

export default AuthApi();
