"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SubscriptionStatusEnum;
(function (SubscriptionStatusEnum) {
    SubscriptionStatusEnum[SubscriptionStatusEnum["Close"] = 0] = "Close";
    SubscriptionStatusEnum[SubscriptionStatusEnum["Open"] = 2] = "Open";
})(SubscriptionStatusEnum = exports.SubscriptionStatusEnum || (exports.SubscriptionStatusEnum = {}));
var SubscriptionOpenEnum;
(function (SubscriptionOpenEnum) {
    SubscriptionOpenEnum[SubscriptionOpenEnum["OpenToContacts"] = 0] = "OpenToContacts";
    SubscriptionOpenEnum[SubscriptionOpenEnum["OpenToAll"] = 1] = "OpenToAll";
})(SubscriptionOpenEnum = exports.SubscriptionOpenEnum || (exports.SubscriptionOpenEnum = {}));
var FormContentBlocTypeEnum;
(function (FormContentBlocTypeEnum) {
    FormContentBlocTypeEnum[FormContentBlocTypeEnum["contactField"] = 0] = "contactField";
    FormContentBlocTypeEnum[FormContentBlocTypeEnum["text"] = 1] = "text";
    FormContentBlocTypeEnum[FormContentBlocTypeEnum["separator"] = 2] = "separator";
    FormContentBlocTypeEnum[FormContentBlocTypeEnum["saveButton"] = 3] = "saveButton";
})(FormContentBlocTypeEnum = exports.FormContentBlocTypeEnum || (exports.FormContentBlocTypeEnum = {}));
