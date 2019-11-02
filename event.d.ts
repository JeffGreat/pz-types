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
    fieldsGroup: { id: string; value: number }[];
}
export interface EventTheme {
    primary: string;
    secondary: string;
    light: string;
    dark: string;
    background: string;
}

export enum AccessTypeEnum {
    participant = 'Participant',
    conferencier = 'Conférencier',
    moderateur = 'Modérateur',
    emargeur = 'Emargeur',
    commercial = 'Commercial',
}
export type SettingsAccess = {
    [K in AccessTypeEnum]: { enabled: boolean; password: string };
};

export type SettingsBadge = {
    contactAssociation: ContactFieldsNameEnum;
    qrcodeFormat: QrcodeFormat;
};

export type QrcodeFormat = {
    field: string;
    typeNumber: TypeNumber;
    errorCorrectionLevel: ErrorCorrectionLevel;
};

export type EventSettings = {};
