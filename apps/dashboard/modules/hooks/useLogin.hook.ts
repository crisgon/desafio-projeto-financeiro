import { userState } from "app/recoil/atoms/userAtom";
import { createUserRequest, loginUserRequest } from "app/services/user";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useSetRecoilState } from "recoil";
import useSWRMutation from "swr/mutation";

export const useLogin = () => {
  const [_, setCookie] = useCookies(["userToken"]);
  const setUser = useSetRecoilState(userState);

  const { trigger: createUserMutation } = useSWRMutation(
    "/user",
    createUserRequest,
  );
  const { trigger: loginUserMutation } = useSWRMutation(
    "/user/auth",
    loginUserRequest,
  );

  useEffect(() => {
    createUserMutation({
      username: "Usuário",
      email: "user@teste.com",
      password: "teste1234",
    }).then((responseUserCreated) => {
      setUser(responseUserCreated.data.result);

      loginUserMutation({
        email: "user@teste.com",
        password: "teste1234",
      }).then((response) => {
        setCookie("userToken", response.data.result.token);
      });
    });
  }, []);
};
