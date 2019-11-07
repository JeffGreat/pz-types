"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebsiteStatusEnum;
(function (WebsiteStatusEnum) {
    WebsiteStatusEnum[WebsiteStatusEnum["Draft"] = 0] = "Draft";
    WebsiteStatusEnum[WebsiteStatusEnum["Published"] = 2] = "Published";
})(WebsiteStatusEnum = exports.WebsiteStatusEnum || (exports.WebsiteStatusEnum = {}));
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
