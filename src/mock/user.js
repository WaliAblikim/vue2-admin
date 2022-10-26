// import { mock } from "mockjs";

export default [
  {
    url: "/tokens",
    type: "post",
    response: (req) => {
      const { username, password } = req.body;
      if (username === "admin" && password === "admin123") {
        // return mock.rendom;
        return "token-11111";
      }
      return {
        code: 400,
        message: "用户名或密码错误",
      };
    },
  },
];
