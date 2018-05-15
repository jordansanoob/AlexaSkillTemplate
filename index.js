"use strict";

var Alexa = require('alexa-sdk')

var states = {
    START: "_START",
    RUNNING: "_RUNNING",
    END: "_END"
}

const handlers = {

    "NewSession": function () {
        console.log("New Session")
    },
    "LaunchRequest": function () {
        console.log("Launch Request")
    },
    "IntentRequest": function () {
        console.log("Intent Request")
    },
    "SessionEndedRequest": function () {
        console.log("Session Ended Request")
    },
    "AMAZON.StartOverIntent": function () {

    },
    "AMAZON.StopIntent": function () {

    },
    "AMAZON.CancelIntent": function () {

    },
    "AMAZON.HelpIntent": function () {

    },
    "Unhandled": function () {

    }
}


exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = appId;
    alexa.registerHandlers(handlers);
    alexa.execute();
}

