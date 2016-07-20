"use strict";
let {get, post, del, put} = require("./RestAPI_Helper.js");
import auth from './../services/Authentication';

function consumerStore() {

  let consumerList = {},
    changeListeners = [],
    consumer = {},
    error = '',
    consumerDeleted = 'false';

  function triggerListeners() {
    changeListeners.forEach(function(listener) {
      listener();
    })
  };
  function fetchconsumerList() {
    get("/api/consumers").then((data) => {
      consumerList = data;
      triggerListeners();
    });
  }
  function fetchconsumer(id) {
    get(`api/consumers/${id}`).then((data) => {
      consumer = data;
      triggerListeners();
    });
  };

  function addconsumer(consumer, history) {
    post("/api/consumers", consumer).then((g) => {
      consumer._id = g._id;
      history.pushState(null, '/consumers/' + g._id);
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }

  function editconsumer(consumer, id, history) {

    put(`api/consumers/${id}`, consumer).then((data) => {
      consumer = data;
      triggerListeners();
      history.pushState(null, '/consumers/' + data._id);
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }

  function deleteconsumer(id, history) {

    del(`api/consumers/${id}`).then((g) => {
      consumerDeleted = 'true';
      triggerListeners();
      history.pushState(null, '/consumers');
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }

  function getconsumerList() {
    return consumerList;
  };

  function getconsumer() {
    consumerDeleted = 'false';
    return consumer;
  };

  function consumerDeletionStatus() {
    return consumerDeleted;
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
    fetchconsumer: fetchconsumer,
    getError: getError,
    addconsumer: addconsumer,
    editconsumer: editconsumer,
    getconsumerList: getconsumerList,
    getconsumer: getconsumer,
    deleteconsumer: deleteconsumer,
    fetchconsumerList: fetchconsumerList,
    consumerDeletionStatus: consumerDeletionStatus
  }
}

module.exports = new consumerStore();
