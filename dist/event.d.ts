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
    contact: {
        total: number;
        checkin: number;
        extra: number;
        sources: object;
    };
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
    participant = "participant",
    conferencier = "conferencier",
    moderateur = "moderateur",
    emargeur = "emargeur",
    commercial = "commercial"
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
export declare enum CheckinOpenEnum {
    OpenToContacts = 0,
    OpenToAll = 1
}
export declare type SettingsCheckin = {
    open: CheckinOpenEnum;
    validateContactBeforeCheckin: boolean;
    attendantsLimit: number;
};
export declare type QrcodeFormat = {
    field: string;
    typeNumber: TypeNumber;
    errorCorrectionLevel: ErrorCorrectionLevel;
};
export declare type EventSettings = {};
