import { EventSettings, SettingsBadge, SettingsLive, WallDisplayModesEnum, LiveDisplayModeEnum } from './event';
import { SettingsCheckin, CheckinOpenEnum, CheckinStatCounterEnum } from './checkin';

export const defaultEventSettings: EventSettings = {};

export const defaultEventSettingsCheckin: SettingsCheckin = {
    open: CheckinOpenEnum.OpenToContacts,
    attendantsLimit: 0,
    validateContactBeforeCheckin: false,
    firmRequired: false,
    checkinStatCounter: CheckinStatCounterEnum.contacts,
    printer: { enabled: false, printer: 'pz-printer' },
};

export const defaultEventSettingsBadge: SettingsBadge = {
    contactAssociation: undefined,
    qrcodeFormat: {
        field: 'vcard',
        typeNumber: 4,
        errorCorrectionLevel: 'L',
    },
};

export const defaultEventSettingsLive: SettingsLive = {
    wallSettings: { messages: [], messageDisplayMode: WallDisplayModesEnum.side },
    messageSettings: {
        twitterQuery: undefined,
    },
    surveySettings: {},
    displayMode: LiveDisplayModeEnum.off,
    documentSettings: { slide: 0 },
    displayDocument: false,
};

export const defaultEventStats = {
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

export const defaultTheme = {
    primary: '',
    secondary: '',
    light: '',
    dark: '',
    background: '',
};

export const defaultSettingsAccess = {
    participant: { enabled: false, password: '' },
    conferencier: { enabled: false, password: '' },
    moderateur: { enabled: false, password: '' },
    emargeur: { enabled: false, password: '' },
    commercial: { enabled: false, password: '' },
    streamer: { enabled: false, password: '' },
};
