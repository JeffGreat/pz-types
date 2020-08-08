import { ContactFieldsNameEnum, ContactFields } from './contact';
import { Website } from './website';
import { TypeNumber, ErrorCorrectionLevel } from './qrcode';
import { SubscriptionForm } from './subscription-form';
import { SettingsCheckin } from './checkin';
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
    id: string;
    name: string;
    position: number;
    fieldsGroup: {
        id: string;
        value: number | number[];
    }[];
    settingsCheckin: SettingsCheckin;
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
    commercial = "commercial",
    streamer = "streamer"
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
export declare enum WallDisplayModesEnum {
    side = 0,
    middle = 1,
    stripe = 2
}
export declare type WallSettings = {
    messages: string[];
    messageDisplayMode: WallDisplayModesEnum;
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
