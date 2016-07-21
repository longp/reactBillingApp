"use strict";
let {get, post, del, put} = require("./RestAPI_Helper.js");
import auth from './../services/Authentication';

function medicationStore() {

  let medicationList = {},
    changeListeners = [],
    medication = {},
    error = '',
    medicationDeleted = 'false';

  function triggerListeners() {
    changeListeners.forEach(function(listener) {
      listener();
    })
  };
  function fetchmedicationList() {
    get("/api/medications").then((data) => {
      medicationList = data;
      triggerListeners();
    });
  }
  function fetchmedication(id) {
    get(`api/medications/${id}`).then((data) => {
      medication = data;
      triggerListeners();
    });
  };

  function addmedication(medication, history) {
    post("/api/medications", medication).then((g) => {
      medication._id = g._id;
      history.pushState(null, '/medications/' + g._id);
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }

  function editmedication(medication, id, history) {

    put(`api/medications/${id}`, medication).then((data) => {
      medication = data;
      triggerListeners();
      history.pushState(null, '/medications/' + data._id);
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }

  function deletemedication(id, history) {

    del(`api/medications/${id}`).then((g) => {
      medicationDeleted = 'true';
      triggerListeners();
      history.pushState(null, '/medications');
    }).catch((err) => {
      if (err.status == 401) {
        error = err.message;
        authCheck(history);
      }
    })
  }

  function getmedicationList() {
    return medicationList;
  };

  function getmedication() {
    medicationDeleted = 'false';
    return medication;
  };

  function medicationDeletionStatus() {
    return medicationDeleted;
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
    fetchmedication: fetchmedication,
    getError: getError,
    addmedication: addmedication,
    editmedication: editmedication,
    getmedicationList: getmedicationList,
    getmedication: getmedication,
    deletemedication: deletemedication,
    fetchmedicationList: fetchmedicationList,
    medicationDeletionStatus: medicationDeletionStatus
  }
}

module.exports = new medicationStore();
