import serverApi from "./apiServer";

export const fetchFeaturedProducts = async (url: string) => {
  try {
    const data = await serverApi.get(`${url}`);
    return data.data.data;
  } catch (error) {
    console.log(error);
  }
};
