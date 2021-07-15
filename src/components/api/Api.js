import axios from "axios";

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

  return axios(config);
};

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

  return axios(config);
};

export const retrieveMessage = (data, receiver) => {
  let config = {
    method: "get",
    url: "http://206.189.91.54//api/v1/messages?receiver_class=User&receiver_id=1",
    headers: data,
  };

  let params = {
    sender_id: data.id,
    reciever_id: 1,
    receiver_class: "user",
  };

  axios(config, params)
    .then((response) => response)
    .then((result) => result)
    .catch((error) => error);
};

export const listOfAllUsers = (headers) => {
  // console.log(headers)
  let config = {
    method: "get",
    url: "http://206.189.91.54//api/v1/users",
    headers: {
      "access-token": headers["access-token"],
      client: headers["client"],
      expiry: headers["expiry"],
      uid: headers["uid"],
      "Content-Type": "application/json",
      crossDomain: true,
      Accept: "application/json",
    },
    // data: data,
  };

  // export const createChannel = ({name, user_ids, headers:{ token, client, expiry, uid }}) => {
  //   return axios.post(
  //     "http://206.189.91.54//api/v1/channels",
  //     {
  //      name,
  //      user_ids
  //     },
  //     {
  //       headers: {
  //         "access-token": token,
  //         "client": client,
  //         "expiry": expiry,
  //         "uid": uid,
  //       }
  //     })
  //     .then(response => response)
  //     .then(result => result)
  //     .catch(error => error)
  // }

  return axios(config);
};
