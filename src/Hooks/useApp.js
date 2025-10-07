import axios from "axios";
import { useEffect, useState } from "react";

const useApp = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("../apps.json")
      .then((res) => {
        setTimeout(() => {
          setApps(res.data);
          setLoading(false);
        }, 3000);
      })
      .catch((err) => setError(err))
      .finally();
  }, []);

  return { apps, loading, error };
};
export default useApp;
