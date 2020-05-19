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
    settingsLive: SettingsLive;
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

export enum CheckinStatCounterEnum {
    contacts = 0,
    statusMaybe = 1,
    statusYes = 2,
}

export interface PrinterSettings {
    printer: string;
    enabled: boolean;
}

export type SettingsCheckin = {
    open: CheckinOpenEnum;
    validateContactBeforeCheckin: boolean;
    attendantsLimit: number;
    checkinStatCounter: CheckinStatCounterEnum;
    printer: PrinterSettings;
};

export type QrcodeFormat = {
    field: string;
    typeNumber: TypeNumber;
    errorCorrectionLevel: ErrorCorrectionLevel;
};

export enum WallDisplayModesEnum {
    side = 0,
    middle = 1,
    stripe = 2,
}

export type WallSettings = {
    messages: string[];
    displayMode: WallDisplayModesEnum;
};

export enum LiveDisplayModeEnum {
    off = 0,
    messages = 1,
    survey = 2,
}

export type LiveDocumentSettings = {
    documentId?: string;
    slide: number;
};

export type LiveSurveySettings = {
    surveyId?: string;
};

export type MessageSettings = {
    twitterQuery: string;
};

export type SettingsLive = {
    messageSettings: MessageSettings;
    wallSettings: WallSettings;
    surveySettings: LiveSurveySettings;
    displayMode: LiveDisplayModeEnum;
    documentSettings: LiveDocumentSettings;
    displayDocument: boolean;
    stream?: object;
};

export type EventSettings = {};
