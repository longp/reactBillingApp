"use strict";
let {get, post, del, put} = require("./RestAPI_Helper.js");
import auth from './../services/Authentication';

function loginStore() {

  let loginList = {},
    changeListeners = [],
    login = {},
    error = '',
    loginDeleted = 'false';

  function triggerListeners() {
    changeListeners.forEach(function(listener) {
      listener();
    })
  };
  function fetchloginList() {
    get("/api/logins").then((data) => {
      loginList = data;
      triggerListeners();
    });
  }
  function fetchlogin(id) {
    get(`api/logins/${id}`).then((data) => {
      login = data;
      triggerListeners();
    });
  };

  function addlogin(login, history) {
    post("/api/logins", login).then((g) => {
      login._id = g._id;
      history.pushState(null, '/logins/' + g._id);
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }

  function editlogin(login, id, history) {

    put(`api/logins/${id}`, login).then((data) => {
      login = data;
      triggerListeners();
      history.pushState(null, '/logins/' + data._id);
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }

  function deletelogin(id, history) {

    del(`api/logins/${id}`).then((g) => {
      loginDeleted = 'true';
      triggerListeners();
      history.pushState(null, '/logins');
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }

  function getloginList() {
    return loginList;
  };

  function getlogin() {
    loginDeleted = 'false';
    return login;
  };

  function loginDeletionStatus() {
    return loginDeleted;
  };

  function onChange(listener) {
    changeListeners.push(listener);
  }

  function removeChangeListener(listener) {
    var index = changeListeners.findIndex(i => i === listener);
    changeListeners.splice(index, 1);
  }
  function authCheck(history) {
    auth.logout();
    history.pushState(null, '/signin', {session: false});
  }

  function getError() {
    return error;
  };

  return {
    onChange: onChange,
    removeChangeListener: removeChangeListener,
    fetchlogin: fetchlogin,
    getError: getError,
    addlogin: addlogin,
    editlogin: editlogin,
    getloginList: getloginList,
    getlogin: getlogin,
    deletelogin: deletelogin,
    fetchloginList: fetchloginList,
    loginDeletionStatus: loginDeletionStatus
  }
}

module.exports = new loginStore();
