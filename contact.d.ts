export interface Contact extends ContactProperties {
  id: string;
  event: string;
  company: string;
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
    default_value?: any;
}

export enum quotaTypes {
    QuotaSubscription = 'subscription_quota',
    QuotaCheckin = 'checkin_quota',
}

export interface FieldTypeGroupOptionsGroup {
    value: number;
    name: string;
    counter?: number;
    quotas?: { [K in quotaTypes]: number };
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