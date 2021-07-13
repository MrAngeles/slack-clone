import axios from "axios"


export const registrationUser = (data) => {

    var config = {
      method: "post",
      url: "http://206.189.91.54//api/v1/auth/",
      headers: {
        "Content-Type": "application/json",
        crossDomain: true,
        Accept: "application/json",
      },
      data: JSON.stringify(data),
    };

    return axios(config)
}


export const loginUser = (data) => {

  var config = {
    method: "post",
    url: "http://206.189.91.54//api/v1/auth/sign_in",
    headers: {
      "Content-Type": "application/json",
      crossDomain: true,
      Accept: "application/json",
    },
    data: data,
  };

  return axios(config)
}