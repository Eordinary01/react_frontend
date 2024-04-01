import axios from "axios";
class User {
  create(formData) {
    const url = "http://127.0.0.1:8088/api/create-user";
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  }

  getUsers() {
    const url = "http://127.0.0.1:8088/api/get-user";
    return axios.get(url);
  }
  deleteUser(formData) {
    const url = "http://127.0.0.1:8088/api/delete-user";
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
   return axios.post(url, formData, config);
  }
  update(formData){
    const url = "http://127.0.0.1:8088/api/update-user";
    const config ={
      headers:{
        'Content-Type':'multipart/form-data',
      }

    };
    return axios.post(url,formData,config);
  }
}

export default new User();
