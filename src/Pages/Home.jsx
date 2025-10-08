import Banner from "../Component/Banner";
import HomeLoadingSkeleton from "../Component/HomeLoadingSkeleton";
import TrendingApps from "../Component/TrendingApps";
import useApp from "../Hooks/useApp";

const Home = () => {
  const { loading } = useApp();
  if (loading) return <HomeLoadingSkeleton />;
  return (
    <>
      <Banner />
      <TrendingApps />
    </>
  );
};

export default Home;
