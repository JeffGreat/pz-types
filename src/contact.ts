export interface Contact extends ContactProperties, ContactLogProperties {
    id: string;
    event: string;
    company: string;
}

export interface ContactSource {
    source: ContactSourceType;
    sourceInfo1: string;
    sourceInfo2: string;
    date: Date;
    author: string;
}

export enum ContactSourceType {
    Single = 0,
    Import = 1,
    Checkin = 2,
    Website = 3,
    EmbedForm = 4,
}

export enum FieldTypeEnum {
    Text = 0,
    YesNo = 1,
    Date = 2,
    Range = 3,
    Group = 4,
    LongText = 5,
    Image = 6,
    Link = 7,
    Number = 8,
    Signature = 9,
}

export interface BaseFieldTypeOptions {
    defaultValue?: any;
}

export enum QuotaTypes {
    QuotaSubscription = 'subscription_quota',
    QuotaCheckin = 'checkin_quota',
}

export enum TextFormatEnum {
    NoFormat = 0,
    Uppercase = 1,
    Lowercase = 2,
    Capitalize = 3,
}

export interface FieldTypeGroupOptionsGroup {
    value: number;
    name: string;
    counter?: number;
    quotas?: { [K in QuotaTypes]: number };
    position?: number;
}

export interface FieldTypeGroupOptions extends FieldTypeYesNoOptions {
    multiple: boolean;
    groups: FieldTypeGroupOptionsGroup[];
}

export interface FieldTypeLinkOptions extends BaseFieldTypeOptions {
    url: string;
    label: string;
    image_url: string;
}

export interface FieldTypeRangeOptions extends BaseFieldTypeOptions {
    min: number;
    max: number;
    step: number;
}

export interface FieldTypeNumberOptions extends BaseFieldTypeOptions {
    min?: number;
    max?: number;
}

export interface FieldTypeDateOptions extends BaseFieldTypeOptions {
    min: Date;
    max: Date;
}

export interface FieldTypeTextOptions extends BaseFieldTypeOptions {
    format: TextFormatEnum;
}

export const NoIndex = 0;
export const YesIndex = 1;
export interface FieldTypeYesNoOptions extends BaseFieldTypeOptions {
    groups: FieldTypeGroupOptionsGroup[];
}
export interface FieldTypeImageOptions extends BaseFieldTypeOptions {
    width: string;
    height: string;
}

export enum FieldDisplayModeEnum {
    Hidden = 0,
    ReadOnly = 10,
    Required = 20,
    Writable = 30,
}

export enum FieldDisplayModeInterfaceEnum {
    ContactList = 'contactList',
    Checkin = 'checkin',
    CheckinNewContact = 'checkinNewContact',
    FormFields = 'formFields',
}

export type FieldTypeOptions =
    | FieldTypeGroupOptions
    | FieldTypeDateOptions
    | FieldTypeLinkOptions
    | FieldTypeNumberOptions
    | FieldTypeRangeOptions
    | FieldTypeYesNoOptions
    | FieldTypeTextOptions
    | FieldTypeImageOptions;

export type ContactProperties = { [K in ContactFieldsNameEnum]: any }; // object clé-valeur
export type ContactFields = { [K in ContactFieldsNameEnum]: ContactField };
export enum ContactFieldsNameEnum {
    picture = 'picture',
    firstName = 'firstName',
    lastName = 'lastName',
    email = 'email',
    mobile = 'mobile',
    checkin = 'checkin',
    status = 'status',
    signature = 'signature',
    enterprise = 'enterprise',
    optin = 'optin',
    attendants = 'attendants',
    champ0 = 'champ0',
    champ1 = 'champ1',
    champ2 = 'champ2',
    champ3 = 'champ3',
    champ4 = 'champ4',
    champ5 = 'champ5',
    champ6 = 'champ6',
    champ7 = 'champ7',
    champ8 = 'champ8',
    champ9 = 'champ9',
    champ10 = 'champ10',
    champ11 = 'champ11',
    champ12 = 'champ12',
    champ13 = 'champ13',
    champ14 = 'champ14',
    champ15 = 'champ15',
}
export type ContactLogProperties = {
    source: ContactSource;
    updatedAt: Date;
    updatedBy: Date;
    updatedStatusAt: Date;
    updatedStatusBy: string;
    updatedCheckinAt: Date;
    updatedCheckinBy: string;
    createdAt: Date;
    createdBy: Date;
};
export enum ContactLogPropertiesNameEnum {
    source = 'source',
    updatedAt = 'updatedAt',
    updatedBy = 'updatedBy',
    updatedStatusAt = 'updatedStatusAt',
    updatedStatusBy = 'updatedStatusBy',
    updatedCheckinAt = 'updatedCheckinAt',
    updatedCheckinBy = 'updatedCheckinBy',
    createdAt = 'createdAt',
    createdBy = 'createdBy',
}

export interface ContactField {
    id: string;
    name: string;
    type: FieldTypeEnum;
    isSystem: boolean;
    enabled: boolean;
    position: number;
    options?: FieldTypeOptions;
    display: { [K in FieldDisplayModeInterfaceEnum]: FieldDisplayModeEnum };
}

export interface ContactDoublon {
    _id: { email: string };
    count: number;
    contacts: Contact[];
}
