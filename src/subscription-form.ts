export enum SubscriptionStatusEnum {
    Close = 0,
    Open = 2,
}

export enum SubscriptionOpenEnum {
    OpenToContacts = 0,
    OpenToAll = 1,
}

export enum FormContentBlocTypeEnum {
    contactField = 0,
    text = 1,
    separator = 2,
    saveButton = 3,
}

export interface FormContentField {
    type: FormContentBlocTypeEnum;
    options: { value: string; textAlign: string; fieldId: string };
}

export interface FormContent {
    width: number;
    twoColumns: boolean;
    showLabel: boolean;
    inlineFields: boolean;
    content: FormContentField[][];
}

export interface SubscriptionForm {
    status: SubscriptionStatusEnum;
    open: SubscriptionOpenEnum;
    quota: number;
    content: FormContent;
}
