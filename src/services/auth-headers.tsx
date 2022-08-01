export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("userInfo")!);

  if (user && user.token.accessToken) {
    return {
      Authorization: user.token.idToken,
      "Content-Type": "application/json",
    };
  } else {
    return {} as any;
  }
}
