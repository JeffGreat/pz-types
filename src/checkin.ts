import { Contact, ContactField, ContactProperties } from './contact';
import { Event, EventSession } from './event';

export enum CheckinOpenEnum {
    OpenToContacts = 0,
    OpenToAll = 1,
    OpenToSome = 2,
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
    openFilter?: ContactProperties;
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
