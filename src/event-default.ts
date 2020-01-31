import { EventSettings, SettingsBadge, SettingsCheckin, CheckinOpenEnum, checkinStatCounterEnum } from './event';

export const defaultEventSettings: EventSettings = {};

export const defaultEventSettingsCheckin: SettingsCheckin = {
    open: CheckinOpenEnum.OpenToContacts,
    attendantsLimit: 0,
    validateContactBeforeCheckin: false,
    checkinStatCounter: checkinStatCounterEnum.contacts,
};

export const defaultEventSettingsBadge: SettingsBadge = {
    contactAssociation: undefined,
    qrcodeFormat: {
        field: 'vcard',
        typeNumber: 4,
        errorCorrectionLevel: 'L',
    },
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
};
