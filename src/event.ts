import { ContactFieldsNameEnum, ContactFields } from './contact';
import { Website } from './website';
import { TypeNumber, ErrorCorrectionLevel } from './qrcode';
import { SubscriptionForm } from './subscription-form';

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
    settingsCheckin: SettingsCheckin;
    settings: EventSettings;
    website: Website;
    subscriptionForm: SubscriptionForm;
    eventStats: EventStats;
    company: string;
}

export interface EventStats {
    total: number;
    extras: number;
    sources: object;
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
    participant = 'participant',
    conferencier = 'conferencier',
    moderateur = 'moderateur',
    emargeur = 'emargeur',
    commercial = 'commercial',
}
export type SettingsAccess = {
    [K in AccessTypeEnum]: { enabled: boolean; password: string };
};

export type SettingsBadge = {
    contactAssociation?: ContactFieldsNameEnum;
    qrcodeFormat: QrcodeFormat;
};

export enum CheckinOpenEnum {
    OpenToContacts = 0,
    OpenToAll = 1,
}

export type SettingsCheckin = {
    open: CheckinOpenEnum;
    attendantsLimit: number;
};

export type QrcodeFormat = {
    field: string;
    typeNumber: TypeNumber;
    errorCorrectionLevel: ErrorCorrectionLevel;
};

export type EventSettings = {};
