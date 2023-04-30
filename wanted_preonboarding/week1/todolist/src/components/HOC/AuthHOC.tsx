import { ComponentType, useEffect } from "react";
import { TOKEN_KEY } from "../../constant/constant";
import { useNavigate } from "react-router-dom";

// 파라미터 설명
// 1. SpecificComponent는 페이지 컴포넌트(함수형)
//// 타입: ComponentType
////// ComponentType은 클래스형 컴포넌트, 함수형 컴포넌트 유니언 타입을 가지고 있으며, 컴포넌트의 props에 대한 제네릭 타입을 정의할 수 있다.
// 2. option
//// 타입: boolean
//// true -> 로그인한 유저"만" 출입이 가능한 페이지 (투두리스트 페이지)
//// false -> 로그인한 유저는 출입이 불가능한 페이지 (로그인, 회원가입 페이지)

// 로그인, 회원가입, 투두리스트 페이지는 AuthHOC로 감싸져 있다.
// 각 페이지 컴포넌트에 리다이렉션을 적용한 "새로운 컴포넌트"를 라우터에 이용한다.
// 각 페이지 링크로 이동시 작동 방식은 다음과 같다.
// 1. 로컬 스토리지에서 토큰 키를 받는다.
// 2. useEffect를 이용해 페이지가 처음 마운트 될 때 (사실 navigate에 의존하긴 하나, AuthHOC가 어쨌든 페이지 컴포넌트보다 상위 컴포넌트이고, 이 컴포넌트에 state등이 없어 다시 렌더링 평가할 필요가 없음. 따라서 navigate가 바뀌는 일이 거의 없기 때문에 처음 렌더링될 때로 봐도 됨)
//// 토큰키 여부에 따라 navigate를 달리함
//// 토큰키가 있는 경우: 투두리스트 페이지로 간다.
//// 토큰키가 없는 경우: 투두리스트 페이지의 경우에만 로그인 페이지로 간다.

const AuthHOC = (SpecificComponent: ComponentType, option: boolean) => {
  // AuthenticationCheck: 페이지 컴포넌트에 리다이렉션 로직 추가
  function AuthenticationCheck() {
    const token = localStorage.getItem(TOKEN_KEY); // 로컬 스토리지로 토큰 키 받기
    const navigate = useNavigate();
    useEffect(() => {
      if (!token) {
        if (option) navigate("/signin");
      } else {
        navigate("/todo");
      }
    }, [navigate]);

    return <SpecificComponent />;
  }

  // 페이지 컴포넌트에 리다이렉션 로직 추가한 AuthenticationCheck 반환
  return AuthenticationCheck;
};

export default AuthHOC;
