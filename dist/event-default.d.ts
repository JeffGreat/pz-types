import { EventSettings, SettingsBadge, SettingsCheckin } from './event';
export declare const defaultEventSettings: EventSettings;
export declare const defaultEventSettingsCheckin: SettingsCheckin;
export declare const defaultEventSettingsBadge: SettingsBadge;
export declare const defaultEventStats: {
    contacts: {
        total: number;
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
};
