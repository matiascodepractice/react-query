import { githubApi } from "../../api/github.api";
import { sleep } from "../../helpers/sleep";
import { Githublabel } from "../interfaces/label.Interface";

export const getLabels = async (): Promise<Githublabel[]> => {
  await sleep(1500);
  const { data } = await githubApi.get<Githublabel[]>("/labels");
  // console.log(data);

  return data;
};
