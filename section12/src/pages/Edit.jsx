import { useParams } from "react-router-dom";

const Edit = () => {
  const useParam = useParams();
  console.log(useParam);
  return <div> Edit</div>;
};
export default Edit;
