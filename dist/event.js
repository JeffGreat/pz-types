"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccessTypeEnum;
(function (AccessTypeEnum) {
    AccessTypeEnum["participant"] = "participant";
    AccessTypeEnum["conferencier"] = "conferencier";
    AccessTypeEnum["moderateur"] = "moderateur";
    AccessTypeEnum["emargeur"] = "emargeur";
    AccessTypeEnum["commercial"] = "commercial";
})(AccessTypeEnum = exports.AccessTypeEnum || (exports.AccessTypeEnum = {}));
var CheckinOpenEnum;
(function (CheckinOpenEnum) {
    CheckinOpenEnum[CheckinOpenEnum["OpenToContacts"] = 0] = "OpenToContacts";
    CheckinOpenEnum[CheckinOpenEnum["OpenToAll"] = 1] = "OpenToAll";
})(CheckinOpenEnum = exports.CheckinOpenEnum || (exports.CheckinOpenEnum = {}));
var checkinStatCounterEnum;
(function (checkinStatCounterEnum) {
    checkinStatCounterEnum[checkinStatCounterEnum["contacts"] = 0] = "contacts";
    checkinStatCounterEnum[checkinStatCounterEnum["statusMaybe"] = 1] = "statusMaybe";
    checkinStatCounterEnum[checkinStatCounterEnum["statusYes"] = 2] = "statusYes";
})(checkinStatCounterEnum = exports.checkinStatCounterEnum || (exports.checkinStatCounterEnum = {}));
