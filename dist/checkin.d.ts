import { Contact, ContactProperties } from './contact';
import { Event, EventSession } from './event';
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
    checkinFilter?: ContactProperties;
    validateContactBeforeCheckin: boolean;
    attendantsLimit: number;
    firmRequired: boolean;
    checkinStatCounter: CheckinStatCounterEnum;
    printer: PrinterSettings;
};
export interface CheckinInterface {
    id: string;
    date: Date;
    contact: Contact['id'];
    event: Event['id'];
    session: EventSession['id'];
    checkedIn: boolean;
    extras: number;
}
