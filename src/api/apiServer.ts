import axios from "axios";

const serverApi = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization:
      "Bearer be0c0c8b904571c86f45229a56087bb0093168c8f1e17796537d60c189e8fc23cab5d25b228ed0b69d75e43afe27d0a001352bf744117c55dc8f9e9ae01c7f87f332bba15e159e4392883443fa7d88490a252377553f182f43d6d1bd867542ed4fdc87083db51767dbf7c427148fd56c538f6ad611863f80176f6379bba550d1",
  },
});

export default serverApi;
