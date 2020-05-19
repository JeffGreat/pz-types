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
export declare enum CheckinStatCounterEnum {
    contacts = 0,
    statusMaybe = 1,
    statusYes = 2
}
export interface PrinterSettings {
    printer: string;
    enabled: boolean;
}
export declare type SettingsCheckin = {
    open: CheckinOpenEnum;
    validateContactBeforeCheckin: boolean;
    attendantsLimit: number;
    checkinStatCounter: CheckinStatCounterEnum;
    printer: PrinterSettings;
};
export declare type QrcodeFormat = {
    field: string;
    typeNumber: TypeNumber;
    errorCorrectionLevel: ErrorCorrectionLevel;
};
export declare enum WallDisplayModesEnum {
    side = 0,
    middle = 1,
    stripe = 2
}
export declare type WallSettings = {
    messages: string[];
    displayMode: WallDisplayModesEnum;
};
export declare enum LiveDisplayModeEnum {
    off = 0,
    messages = 1,
    survey = 2
}
export declare type LiveDocumentSettings = {
    documentId?: string;
    slide: number;
};
export declare type LiveSurveySettings = {
    surveyId?: string;
};
export declare type MessageSettings = {
    twitterQuery: string;
};
export declare type SettingsLive = {
    messageSettings: MessageSettings;
    wallSettings: WallSettings;
    surveySettings: LiveSurveySettings;
    displayMode: LiveDisplayModeEnum;
    documentSettings: LiveDocumentSettings;
    displayDocument: boolean;
    stream?: object;
};
export declare type EventSettings = {};
