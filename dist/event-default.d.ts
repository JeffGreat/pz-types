import { EventSettings, SettingsBadge, SettingsLive } from './event';
import { SettingsCheckin } from './checkin';
export declare const defaultEventSettings: EventSettings;
export declare const defaultEventSettingsCheckin: SettingsCheckin;
export declare const defaultEventSettingsBadge: SettingsBadge;
export declare const defaultEventSettingsLive: SettingsLive;
export declare const defaultEventStats: {
    contact: {
        total: number;
        extra: number;
        source: {
            import: number;
            subscription: number;
            coOpt: number;
            checkin: number;
            added: number;
        };
    };
};
export declare const defaultTheme: {
    primary: string;
    secondary: string;
    light: string;
    dark: string;
    background: string;
};
export declare const defaultSettingsAccess: {
    participant: {
        enabled: boolean;
        password: string;
    };
    conferencier: {
        enabled: boolean;
        password: string;
    };
    moderateur: {
        enabled: boolean;
        password: string;
    };
    emargeur: {
        enabled: boolean;
        password: string;
    };
    commercial: {
        enabled: boolean;
        password: string;
    };
    streamer: {
        enabled: boolean;
        password: string;
    };
};
