"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SurveyStatus;
(function (SurveyStatus) {
    SurveyStatus[SurveyStatus["closed"] = 0] = "closed";
    SurveyStatus[SurveyStatus["opened"] = 1] = "opened";
    SurveyStatus[SurveyStatus["finished"] = 2] = "finished";
})(SurveyStatus = exports.SurveyStatus || (exports.SurveyStatus = {}));
var PollType;
(function (PollType) {
    PollType[PollType["text"] = 0] = "text";
    PollType[PollType["choice"] = 1] = "choice";
    PollType[PollType["evaluation"] = 2] = "evaluation";
    PollType[PollType["date"] = 3] = "date";
})(PollType = exports.PollType || (exports.PollType = {}));
