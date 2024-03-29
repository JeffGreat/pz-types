"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = require("./event");
var checkin_1 = require("./checkin");
exports.defaultEventSettings = {};
exports.defaultEventSettingsCheckin = {
    open: checkin_1.CheckinOpenEnum.OpenToContacts,
    attendantsLimit: 0,
    validateContactBeforeCheckin: false,
    firmRequired: false,
    firmCgu: '',
    checkinStatCounter: checkin_1.CheckinStatCounterEnum.contacts,
    printer: { enabled: false, printer: 'pz-printer' },
};
exports.defaultEventSettingsBadge = {
    contactAssociation: undefined,
    qrcodeFormat: {
        field: 'vcard',
        typeNumber: 4,
        errorCorrectionLevel: 'L',
    },
};
exports.defaultEventSettingsLive = {
    wallSettings: { messages: [], messageDisplayMode: event_1.WallDisplayModesEnum.side },
    messageSettings: {
        twitterQuery: undefined,
    },
    surveySettings: {},
    displayMode: event_1.LiveDisplayModeEnum.off,
    documentSettings: { slide: 0 },
    displayDocument: false,
};
exports.defaultEventStats = {
    contact: {
        total: 0,
        extra: 0,
        source: {
            import: 0,
            subscription: 0,
            coOpt: 0,
            checkin: 0,
            added: 0,
        },
    },
};
exports.defaultTheme = {
    primary: '',
    secondary: '',
    light: '',
    dark: '',
    background: '',
};
exports.defaultSettingsAccess = {
    participant: { enabled: false, password: '' },
    conferencier: { enabled: false, password: '' },
    moderateur: { enabled: false, password: '' },
    emargeur: { enabled: false, password: '' },
    commercial: { enabled: false, password: '' },
    streamer: { enabled: false, password: '' },
};
