import { EventSettings, SettingsBadge } from './event';

export const defaultEventSettings: EventSettings = {};

export const defaultEventSettingsBadge: SettingsBadge = {
    contactAssociation: undefined,
    qrcodeFormat: {
        field: 'vcard',
        typeNumber: 4,
        errorCorrectionLevel: 'L',
    },
};
