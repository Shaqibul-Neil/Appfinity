import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 lg:pt-16 pt-12 pb-8">
      <div className="w-11/12 mx-auto lg:px-8 md:px-4 px-2">
        <div className="lg:flex lg:items-start lg:gap-8">
          <img src="../logo.png" className="mr-3 h-10 w-auto" alt="appfinity" />

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            {/* Newsletter */}
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Get the latest news!
                </h2>
                <p className="mt-4 text-gray-400">
                  At Appfinity, we turn ideas into apps that make life simpler,
                  smarter & more fun. Got a project or a wild idea? 👋 Let's
                  build it together!
                </p>
              </div>
            </div>

            {/* Subscribe Form */}
            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <div className="relative max-w-lg">
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-full border-gray-200 outline-none bg-gray-100 p-4 pe-32 text-sm font-medium"
                    id="email"
                    type="email"
                    placeholder="Your Email Here"
                  />
                  <button
                    type="submit"
                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            {/* Quick Links */}
            <div className="col-span-2 sm:col-span-1">
              <p className="relative font-medium text-white">Quick Links</p>
              <ul
                style={{ listStyle: "none" }}
                className="mt-6 space-y-4 text-sm"
              >
                <li>
                  <Link
                    to="/"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apps"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Apps
                  </Link>
                </li>
                <li>
                  <Link
                    to="/installation"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Installation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Components */}
            <div className="col-span-2 sm:col-span-1">
              <p className="relative font-medium text-white">Components</p>
              <ul
                style={{ listStyle: "none" }}
                className="mt-6 space-y-4 text-sm"
              >
                <li>
                  <Link
                    to="/"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apps"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Apps
                  </Link>
                </li>
                <li>
                  <Link
                    to="/installation"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Installation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Useful Tools */}
            <div className="col-span-2 sm:col-span-1">
              <p className="relative font-medium text-white">Useful Tools</p>
              <ul
                style={{ listStyle: "none" }}
                className="mt-6 space-y-4 text-sm"
              >
                <li>
                  <Link
                    to="/"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apps"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Apps
                  </Link>
                </li>
                <li>
                  <Link
                    to="/installation"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Installation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Free Icons */}
            <div className="col-span-2 sm:col-span-1">
              <p className="relative font-medium text-white">Free Icons</p>
              <ul
                style={{ listStyle: "none" }}
                className="mt-6 space-y-4 text-sm"
              >
                <li>
                  <Link
                    to="/"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apps"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Apps
                  </Link>
                </li>
                <li>
                  <Link
                    to="/installation"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Installation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Category */}
            <div className="col-span-2 sm:col-span-1">
              <p className="relative font-medium text-white">Category</p>
              <ul
                style={{ listStyle: "none" }}
                className="mt-6 space-y-4 text-sm"
              >
                <li>
                  <Link
                    to="/"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/apps"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Apps
                  </Link>
                </li>
                <li>
                  <Link
                    to="/installation"
                    className="transition hover:opacity-75 text-gray-200"
                  >
                    Installation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-8 border-gray-800">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-400">
              &copy; 2025. Shaqibul Neil. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
