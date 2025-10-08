import { toast } from "react-toastify";

export const getAppFromLocalStorage = () => {
  try {
    const getApp = localStorage.getItem("appList");
    return getApp ? JSON.parse(getApp) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const updateAppList = (app) => {
  const appList = getAppFromLocalStorage();
  try {
    const isDuplicate = appList.some((el) => el.id === app.id);
    if (isDuplicate) {
      toast.error(`Already Installed ${app.title}`, {
        theme: "dark",
        position: "bottom-right",
      });
      return false;
    }
    const newAppList = [...appList, app];
    localStorage.setItem("appList", JSON.stringify(newAppList));
    toast.success(`You've Successfully Installed ${app.title}`, {
      theme: "light",
      position: "bottom-right",
      style: {
        background: "#BBF7D0",
        color: "#166534",
        fontWeight: 500,
        borderRadius: "8px",
      },
    });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/*//adding to localstorage
  const handleAddStorage = () => {
    //getting data from local storage
    const getExistingApp = JSON.parse(localStorage.getItem("appList"));
    let updatedAppList = [];
    //if data exist
    if (getExistingApp) {
      //it data is already in the storage
      const isDuplicate = getExistingApp.some((item) => item.id === app.id);
      if (isDuplicate)
        return toast.error(`Already Installed ${app.title}`, {
          theme: "dark",
          position: "bottom-right",
        });
      updatedAppList = [...getExistingApp, app];
    } else {
      updatedAppList.push(app);
    }

    //save data to local storage
    localStorage.setItem("appList", JSON.stringify(updatedAppList));
    setShowInstall(false);
    toast.success(`You've Successfully Installed ${app.title}`, {
      icon: <Download color="#166534" />,
      theme: "dark",
      position: "bottom-right",
      style: {
        background: "#BBF7D0",
        color: "#166534",
        fontWeight: 500,
        borderRadius: "8px",
      },
    });
  }; */
