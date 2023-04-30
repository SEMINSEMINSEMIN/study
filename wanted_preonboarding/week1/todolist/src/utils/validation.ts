import { FormData } from "../types/form/formData.type";

// (data: FormData): boolean의 의미
//// 인수는 FormData의 형식(객체인데, 이메일 키와 비밀번호 키의 값의 타입은 문자열
//// formDataValidator는 boolean(폼 유효성 여부)을 반환한다.
export const formDataValidater = (data: FormData): boolean => {
  return data.email.includes("@") && data.password.length >= 8;
};
