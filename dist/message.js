"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageWallStatus;
(function (MessageWallStatus) {
    MessageWallStatus[MessageWallStatus["hidden"] = 0] = "hidden";
    MessageWallStatus[MessageWallStatus["displayed"] = 1] = "displayed";
})(MessageWallStatus = exports.MessageWallStatus || (exports.MessageWallStatus = {}));
var MessageSource;
(function (MessageSource) {
    MessageSource["sms"] = "sms";
    MessageSource["twitter"] = "twitter";
    MessageSource["web"] = "web";
})(MessageSource = exports.MessageSource || (exports.MessageSource = {}));
var MessageStatus;
(function (MessageStatus) {
    MessageStatus[MessageStatus["received"] = 0] = "received";
    MessageStatus[MessageStatus["selected"] = 1] = "selected";
    MessageStatus[MessageStatus["wall"] = 2] = "wall";
    MessageStatus[MessageStatus["archived"] = 3] = "archived";
    MessageStatus[MessageStatus["deleted"] = 4] = "deleted";
})(MessageStatus = exports.MessageStatus || (exports.MessageStatus = {}));
