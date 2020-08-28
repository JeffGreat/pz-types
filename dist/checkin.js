"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckinOpenEnum;
(function (CheckinOpenEnum) {
    CheckinOpenEnum[CheckinOpenEnum["OpenToContacts"] = 0] = "OpenToContacts";
    CheckinOpenEnum[CheckinOpenEnum["OpenToAll"] = 1] = "OpenToAll";
})(CheckinOpenEnum = exports.CheckinOpenEnum || (exports.CheckinOpenEnum = {}));
var CheckinStatCounterEnum;
(function (CheckinStatCounterEnum) {
    CheckinStatCounterEnum[CheckinStatCounterEnum["contacts"] = 0] = "contacts";
    CheckinStatCounterEnum[CheckinStatCounterEnum["statusMaybe"] = 1] = "statusMaybe";
    CheckinStatCounterEnum[CheckinStatCounterEnum["statusYes"] = 2] = "statusYes";
})(CheckinStatCounterEnum = exports.CheckinStatCounterEnum || (exports.CheckinStatCounterEnum = {}));
