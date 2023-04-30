import React, { useState, useEffect } from "react";

// 폼에 관련된 타입들
import { FormData } from "../../types/form/formData.type"; // 이메일, 비밀번호는 문자
import { FormType } from "../../types/form/formData.type"; // 로그인, 회원가입 페이지 구분 문자

import { formDataValidater } from "../../utils/validation";
import { useNavigate } from "react-router-dom";
import AuthApi from "../../api/AuthApi";
import { AxiosError } from "axios";
import { setToken } from "../../utils/token";

// 로그인 성공시 응답 받는 토큰의 형태는 문자열
import { SigninResponse } from "../../types/api/auth";

const useAuth = () => {
  // 이메일, 비밀번호 값 관리 state
  // import 받은 FormData 타입 적용
  // 인풋에 대한 값을 객체로 관리함으로써 state 수를 줄이고 코드를 간결하게 함.
  const [userInfo, setUserInfo] = useState<FormData>({
    email: "",
    password: "",
  });

  // 폼이 유효한지 여부
  // 타입: useState<boolean>
  const [isValid, setIsValid] = useState<boolean>(false);

  const navigate = useNavigate();

  // formDataValidator를 utils 함수에! 왜냐하면 단순히 유효성 여부 검사하는 함수이지, 리액트 컴포넌트나 훅 아니니까!
  // 근데 어디서 디바운싱이 일어나는거지.....?
  useEffect(() => {
    setIsValid(formDataValidater(userInfo));
  }, [userInfo]);

  // React.FormEvent: onSubmit과 관련된 타입
  //// 대신, <HTMLFormElement>에 관련된 onSubmit만!
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    formType: FormType
  ) => {
    event.preventDefault();
    const submitFunction =
      formType === "SIGNIN" ? AuthApi.signIn : AuthApi.signUp;
    const successMessage =
      formType === "SIGNIN" ? "로그인 성공" : "회원가입 성공";
    const redirectPath = formType === "SIGNIN" ? "/todo" : "/signin";
    try {
      const result = await submitFunction(userInfo); // 회원가입, 로그인에 따라 폼제출시 동작할 함수 호출

      // 로그인일 경우
      if (formType === "SIGNIN") {
        const signinResponse = result as SigninResponse; // 응답받은 토큰값(이때 타입 적용)
        setToken("token", signinResponse.access_token); // 로컬 스토리지의 키값 업데이트
      }

      window.alert(successMessage); // 성공 메시지 띄우기
      navigate(redirectPath); // 로그인 -> 투두리스트, 회원가입 -> 로그인
    } catch (error) {
      // 만약 에러가 axios 요청에 관련된 것일 경우
      if (error instanceof AxiosError) {
        // ?.를 사용한 이유
        // Optional chaining allows you to safely access properties of an object without causing an error if the property or any parent object is nullish
        const errorMessage = error?.response?.data.message;
        window.alert(errorMessage);
      }
    }
  };

  // HTML name을 이용해 onChange 함수를 추상화 -> 이메일, 비밀번호 인풋 모두에 잘 적용되도록
  // React.ChangeEvent: onChange와 관련된 타입
  //// 대신, <HTMLInputElement>에 관련된 onChange만!
  // 인풋의 값이 바뀔 때마다, name을 기준으로 email 또는 password state 업데이트
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo((prev) => ({ ...prev, [target.name]: target.value }));
  };

  return {
    isValid,
    userInfo,
    handleChange,
    handleSubmit,
  };
};

export default useAuth;
