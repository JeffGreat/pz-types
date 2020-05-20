"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccessTypeEnum;
(function (AccessTypeEnum) {
    AccessTypeEnum["participant"] = "participant";
    AccessTypeEnum["conferencier"] = "conferencier";
    AccessTypeEnum["moderateur"] = "moderateur";
    AccessTypeEnum["emargeur"] = "emargeur";
    AccessTypeEnum["commercial"] = "commercial";
    AccessTypeEnum["streamer"] = "streamer";
})(AccessTypeEnum = exports.AccessTypeEnum || (exports.AccessTypeEnum = {}));
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
var WallDisplayModesEnum;
(function (WallDisplayModesEnum) {
    WallDisplayModesEnum[WallDisplayModesEnum["side"] = 0] = "side";
    WallDisplayModesEnum[WallDisplayModesEnum["middle"] = 1] = "middle";
    WallDisplayModesEnum[WallDisplayModesEnum["stripe"] = 2] = "stripe";
})(WallDisplayModesEnum = exports.WallDisplayModesEnum || (exports.WallDisplayModesEnum = {}));
var LiveDisplayModeEnum;
(function (LiveDisplayModeEnum) {
    LiveDisplayModeEnum[LiveDisplayModeEnum["off"] = 0] = "off";
    LiveDisplayModeEnum[LiveDisplayModeEnum["messages"] = 1] = "messages";
    LiveDisplayModeEnum[LiveDisplayModeEnum["survey"] = 2] = "survey";
})(LiveDisplayModeEnum = exports.LiveDisplayModeEnum || (exports.LiveDisplayModeEnum = {}));
