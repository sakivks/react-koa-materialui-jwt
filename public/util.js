import axios from "axios";

const util = {
  startUp() {
    // axios.interceptors.response.use(
    //   function axiosInterceptor(response) {
    //     if (response.data && response.data.store) {
    //       console.log("triggered");
    //       Object.keys(response.data.store).forEach((key, val) => {
    //         util.setStoreData(key, val);
    //       });
    //     }
    //     return response;
    //   },
    //   function axiosErrorInterceptor(error) {
    //     // Do something with response error
    //     return Promise.reject(error);
    //   }
    // );
  },

  fetch(details) {
    return axios(details);
  },

  setStoreData(key, val) {
    // localStorage.setItem(key, val);
  },

  getStoreData(key) {
    // localStorage.getItem(key);
  },

  clearSession() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
    localStorage.removeItem("user.name");
    window.location.replace("/");
  }
};

export default util;
