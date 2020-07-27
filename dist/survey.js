"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SurveyStatus;
(function (SurveyStatus) {
    SurveyStatus[SurveyStatus["closed"] = 0] = "closed";
    SurveyStatus[SurveyStatus["opened"] = 1] = "opened";
    SurveyStatus[SurveyStatus["finished"] = 2] = "finished";
})(SurveyStatus = exports.SurveyStatus || (exports.SurveyStatus = {}));
var PollTypesEnum;
(function (PollTypesEnum) {
    PollTypesEnum[PollTypesEnum["text"] = 0] = "text";
    PollTypesEnum[PollTypesEnum["word"] = 2] = "word";
    PollTypesEnum[PollTypesEnum["choice"] = 3] = "choice";
    PollTypesEnum[PollTypesEnum["evaluation"] = 4] = "evaluation";
})(PollTypesEnum = exports.PollTypesEnum || (exports.PollTypesEnum = {}));
