"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CampaignRecipientsTypeEnum;
(function (CampaignRecipientsTypeEnum) {
    CampaignRecipientsTypeEnum[CampaignRecipientsTypeEnum["all"] = 0] = "all";
    CampaignRecipientsTypeEnum[CampaignRecipientsTypeEnum["groups"] = 1] = "groups";
    CampaignRecipientsTypeEnum[CampaignRecipientsTypeEnum["custom"] = 2] = "custom";
})(CampaignRecipientsTypeEnum = exports.CampaignRecipientsTypeEnum || (exports.CampaignRecipientsTypeEnum = {}));
var CampaignTypeEnum;
(function (CampaignTypeEnum) {
    CampaignTypeEnum[CampaignTypeEnum["manual"] = 0] = "manual";
    CampaignTypeEnum[CampaignTypeEnum["auto"] = 1] = "auto";
    CampaignTypeEnum[CampaignTypeEnum["transac"] = 2] = "transac";
    CampaignTypeEnum[CampaignTypeEnum["satisfaction"] = 3] = "satisfaction";
})(CampaignTypeEnum = exports.CampaignTypeEnum || (exports.CampaignTypeEnum = {}));
var CampaignMediaEnum;
(function (CampaignMediaEnum) {
    CampaignMediaEnum[CampaignMediaEnum["email"] = 0] = "email";
    CampaignMediaEnum[CampaignMediaEnum["sms"] = 1] = "sms";
})(CampaignMediaEnum = exports.CampaignMediaEnum || (exports.CampaignMediaEnum = {}));
var CampaignStatusEnum;
(function (CampaignStatusEnum) {
    CampaignStatusEnum[CampaignStatusEnum["created"] = 0] = "created";
    CampaignStatusEnum[CampaignStatusEnum["scheduled"] = 2] = "scheduled";
    CampaignStatusEnum[CampaignStatusEnum["pending"] = 10] = "pending";
    CampaignStatusEnum[CampaignStatusEnum["sending"] = 20] = "sending";
    CampaignStatusEnum[CampaignStatusEnum["sent"] = 50] = "sent";
})(CampaignStatusEnum = exports.CampaignStatusEnum || (exports.CampaignStatusEnum = {}));
var CampaignTriggerActionEnum;
(function (CampaignTriggerActionEnum) {
    CampaignTriggerActionEnum[CampaignTriggerActionEnum["subscription"] = 10] = "subscription";
    CampaignTriggerActionEnum[CampaignTriggerActionEnum["status"] = 20] = "status";
    CampaignTriggerActionEnum[CampaignTriggerActionEnum["checkin"] = 30] = "checkin";
})(CampaignTriggerActionEnum = exports.CampaignTriggerActionEnum || (exports.CampaignTriggerActionEnum = {}));
