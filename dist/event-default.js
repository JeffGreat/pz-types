"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = require("./event");
exports.defaultEventSettings = {};
exports.defaultEventSettingsCheckin = {
    open: event_1.CheckinOpenEnum.OpenToContacts,
    attendantsLimit: 0,
};
exports.defaultEventSettingsBadge = {
    contactAssociation: undefined,
    qrcodeFormat: {
        field: 'vcard',
        typeNumber: 4,
        errorCorrectionLevel: 'L',
    },
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
};
