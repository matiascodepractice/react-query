import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions/get-label-action";
// import { Githublabel } from "../interfaces/label.Interface";

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
    // initialData: [
    //   {
    //     id: 196858374,
    //     node_id: "MDU6TGFiZWwxOTY4NTgzNzQ=",
    //     url: "https://api.github.com/repos/facebook/react/labels/CLA%20Signed",
    //     name: "CLA Signed",
    //     color: "e7e7e7",
    //     default: false,
    //   } satisfies Githublabel,
    //   {
    //     id: 196858375,
    //     node_id: "MDU6TGFiZWwxOTY4NTgzNzU=",
    //     url: "https://api.github.com/repos/facebook/react/labels/Good%20first%20issue",
    //     name: "Good first issue",
    //     color: "7057ff",
    //     default: false,
    //   } satisfies Githublabel,
    // ],
  });
  return { labelsQuery };
};
