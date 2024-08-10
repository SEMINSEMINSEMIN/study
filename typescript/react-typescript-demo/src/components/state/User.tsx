import { useState } from "react";

type AuthUser = {
    name: string;
    email: string;
};

export const User = () => {
    // 보통 처음에는 로그인을 안 했을테니까,null로 initialize
    // 처음 state는 null이지만, 미래에는 AuthUser type일 수 있다고 알려주는 것
    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        setUser({
            name: "Semin",
            email: "ksm9802@gmail.com",
        });
    };
    const handleLogout = () => {
        setUser(null);
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    );
};
