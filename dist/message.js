"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageWallStatusEnum;
(function (MessageWallStatusEnum) {
    MessageWallStatusEnum[MessageWallStatusEnum["hidden"] = 0] = "hidden";
    MessageWallStatusEnum[MessageWallStatusEnum["displayed"] = 1] = "displayed";
})(MessageWallStatusEnum = exports.MessageWallStatusEnum || (exports.MessageWallStatusEnum = {}));
var MessageSourceEnum;
(function (MessageSourceEnum) {
    MessageSourceEnum["sms"] = "sms";
    MessageSourceEnum["twitter"] = "twitter";
    MessageSourceEnum["web"] = "web";
})(MessageSourceEnum = exports.MessageSourceEnum || (exports.MessageSourceEnum = {}));
var MessageStatusEnum;
(function (MessageStatusEnum) {
    MessageStatusEnum[MessageStatusEnum["received"] = 0] = "received";
    MessageStatusEnum[MessageStatusEnum["selected"] = 1] = "selected";
    MessageStatusEnum[MessageStatusEnum["wall"] = 2] = "wall";
    MessageStatusEnum[MessageStatusEnum["archived"] = 3] = "archived";
    MessageStatusEnum[MessageStatusEnum["deleted"] = 4] = "deleted";
})(MessageStatusEnum = exports.MessageStatusEnum || (exports.MessageStatusEnum = {}));
