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
    fieldsGroup: { id: string; value: number | number[] }[];
    settingsCheckin: SettingsCheckin
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
    streamer = 'streamer',
}
export type SettingsAccess = {
    [K in AccessTypeEnum]: { enabled: boolean; password: string };
};

export type SettingsBadge = {
    contactAssociation?: ContactFieldsNameEnum;
    qrcodeFormat: QrcodeFormat;
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
    messageDisplayMode: WallDisplayModesEnum;
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
