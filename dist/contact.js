"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FieldTypeEnum;
(function (FieldTypeEnum) {
    FieldTypeEnum[FieldTypeEnum["Text"] = 0] = "Text";
    FieldTypeEnum[FieldTypeEnum["YesNo"] = 1] = "YesNo";
    FieldTypeEnum[FieldTypeEnum["Date"] = 2] = "Date";
    FieldTypeEnum[FieldTypeEnum["Range"] = 3] = "Range";
    FieldTypeEnum[FieldTypeEnum["Group"] = 4] = "Group";
    FieldTypeEnum[FieldTypeEnum["LongText"] = 5] = "LongText";
    FieldTypeEnum[FieldTypeEnum["Image"] = 6] = "Image";
    FieldTypeEnum[FieldTypeEnum["Link"] = 7] = "Link";
    FieldTypeEnum[FieldTypeEnum["Number"] = 8] = "Number";
    FieldTypeEnum[FieldTypeEnum["Signature"] = 9] = "Signature";
})(FieldTypeEnum = exports.FieldTypeEnum || (exports.FieldTypeEnum = {}));
var QuotaTypes;
(function (QuotaTypes) {
    QuotaTypes["QuotaSubscription"] = "subscription_quota";
    QuotaTypes["QuotaCheckin"] = "checkin_quota";
})(QuotaTypes = exports.QuotaTypes || (exports.QuotaTypes = {}));
var TextFormatEnum;
(function (TextFormatEnum) {
    TextFormatEnum[TextFormatEnum["Uppercase"] = 0] = "Uppercase";
    TextFormatEnum[TextFormatEnum["Lowercase"] = 1] = "Lowercase";
    TextFormatEnum[TextFormatEnum["Capitalize"] = 2] = "Capitalize";
})(TextFormatEnum = exports.TextFormatEnum || (exports.TextFormatEnum = {}));
exports.NoIndex = 0;
exports.YesIndex = 1;
var FieldDisplayModeEnum;
(function (FieldDisplayModeEnum) {
    FieldDisplayModeEnum[FieldDisplayModeEnum["Hidden"] = 0] = "Hidden";
    FieldDisplayModeEnum[FieldDisplayModeEnum["ReadOnly"] = 10] = "ReadOnly";
    FieldDisplayModeEnum[FieldDisplayModeEnum["Required"] = 20] = "Required";
    FieldDisplayModeEnum[FieldDisplayModeEnum["Writable"] = 30] = "Writable";
})(FieldDisplayModeEnum = exports.FieldDisplayModeEnum || (exports.FieldDisplayModeEnum = {}));
var FieldDisplayModeInterfaceEnum;
(function (FieldDisplayModeInterfaceEnum) {
    FieldDisplayModeInterfaceEnum["ContactList"] = "contactList";
    FieldDisplayModeInterfaceEnum["Checkin"] = "checkin";
    FieldDisplayModeInterfaceEnum["CheckinNewContact"] = "checkinNewContact";
    FieldDisplayModeInterfaceEnum["FormFields"] = "formFields";
})(FieldDisplayModeInterfaceEnum = exports.FieldDisplayModeInterfaceEnum || (exports.FieldDisplayModeInterfaceEnum = {}));
var ContactFieldsNameEnum;
(function (ContactFieldsNameEnum) {
    ContactFieldsNameEnum["picture"] = "picture";
    ContactFieldsNameEnum["firstName"] = "firstName";
    ContactFieldsNameEnum["lastName"] = "lastName";
    ContactFieldsNameEnum["email"] = "email";
    ContactFieldsNameEnum["mobile"] = "mobile";
    ContactFieldsNameEnum["checkin"] = "checkin";
    ContactFieldsNameEnum["status"] = "status";
    ContactFieldsNameEnum["signature"] = "signature";
    ContactFieldsNameEnum["optin"] = "optin";
    ContactFieldsNameEnum["attendants"] = "attendants";
    ContactFieldsNameEnum["champ0"] = "champ0";
    ContactFieldsNameEnum["champ1"] = "champ1";
    ContactFieldsNameEnum["champ2"] = "champ2";
    ContactFieldsNameEnum["champ3"] = "champ3";
    ContactFieldsNameEnum["champ4"] = "champ4";
    ContactFieldsNameEnum["champ5"] = "champ5";
    ContactFieldsNameEnum["champ6"] = "champ6";
    ContactFieldsNameEnum["champ7"] = "champ7";
    ContactFieldsNameEnum["champ8"] = "champ8";
    ContactFieldsNameEnum["champ9"] = "champ9";
    ContactFieldsNameEnum["champ10"] = "champ10";
    ContactFieldsNameEnum["champ11"] = "champ11";
    ContactFieldsNameEnum["champ12"] = "champ12";
    ContactFieldsNameEnum["champ13"] = "champ13";
    ContactFieldsNameEnum["champ14"] = "champ14";
    ContactFieldsNameEnum["champ15"] = "champ15";
})(ContactFieldsNameEnum = exports.ContactFieldsNameEnum || (exports.ContactFieldsNameEnum = {}));
