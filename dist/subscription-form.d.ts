export declare enum SubscriptionStatusEnum {
    Close = 0,
    Open = 2
}
export declare enum SubscriptionOpenEnum {
    OpenToContacts = 0,
    OpenToAll = 1
}
export declare enum FormContentBlocTypeEnum {
    contactField = 0,
    text = 1,
    separator = 2,
    saveButton = 3
}
export interface FormContentField {
    type: FormContentBlocTypeEnum;
    fieldId?: string;
    options: {
        value: string;
        textAlign: string;
    };
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
