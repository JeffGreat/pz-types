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
