import { ContactFieldsNameEnum, ContactFields } from './contact';
import { Website } from './website';
import { TypeNumber, ErrorCorrectionLevel } from './qrcode';
export interface Event {
    id: string;
    name: string;
    slug: string;
    date: Date;
    place: string;
    logo: string;
    banner: string;
    theme: EventTheme;
    sessions: EventSession[];
    contactFields: ContactFields;
    settingsAccess: SettingsAccess;
    settingsBadge: SettingsBadge;
    settings: EventSettings;
    website: Website;
    company: string;
}
export interface EventSession {
    name: string;
    fieldsGroup: {
        id: string;
        value: number;
    }[];
}
export interface EventTheme {
    primary: string;
    secondary: string;
    light: string;
    dark: string;
    background: string;
}
export declare enum AccessTypeEnum {
    participant = "Participant",
    conferencier = "Conf\u00E9rencier",
    moderateur = "Mod\u00E9rateur",
    emargeur = "Emargeur",
    commercial = "Commercial"
}
export declare type SettingsAccess = {
    [K in AccessTypeEnum]: {
        enabled: boolean;
        password: string;
    };
};
export declare type SettingsBadge = {
    contactAssociation?: ContactFieldsNameEnum;
    qrcodeFormat: QrcodeFormat;
};
export declare type QrcodeFormat = {
    field: string;
    typeNumber: TypeNumber;
    errorCorrectionLevel: ErrorCorrectionLevel;
};
export declare type EventSettings = {};
