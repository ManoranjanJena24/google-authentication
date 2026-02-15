import React from "react";
import { useGoogleLogin } from "@react-oauth/google";

const GoogleLogin = () => {
  const responseGoogle = async (authResult) => {
    try {
      console.log(authResult);
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: (error) => console.log(error),
    flow: "auth-code",
  });

  return (
    <div className="App">
      <button onClick={() => googleLogin()}>Login With Google</button>
    </div>
  );
};

export default GoogleLogin;
