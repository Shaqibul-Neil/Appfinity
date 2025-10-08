import { Outlet, useNavigation } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const RootLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isNavigating = Boolean(navigation.location);
  console.log(isNavigating);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="lg:px-8 py-2 md:px-4 px-2">
        <Navbar />
      </header>

      <main className="bg-[#f2f2f2] flex-1">
        {isNavigating && <p>Navigating</p>}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
//w-11/12 mx-auto lg:px-8 md:px-4 px-2
