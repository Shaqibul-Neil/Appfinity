import { useParams } from "react-router";

const AppDetails = () => {
  const id = useParams();
  console.log(id);
  return <div>App details</div>;
};

export default AppDetails;
