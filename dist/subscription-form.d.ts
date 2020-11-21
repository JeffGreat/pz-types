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
    options?: {
        value?: string;
        label?: string;
        display?: {
            checkbox?: boolean;
            contentAlign?: 'left' | 'center' | 'right';
            textColor?: string;
            btnColor?: string;
            btnRadius?: 'none' | 'light' | 'strong';
            selector?: 'collapsed' | 'extended';
        };
        required?: boolean;
        textAlign?: string;
        fieldId?: string;
    };
}
export interface FormContent {
    width: number;
    twoColumns: boolean;
    showLabel: boolean;
    inlineFields: boolean;
    formFields: FormContentField[];
    thanksContent: string;
    allowDuple: boolean;
    dupleContent: string;
}
export interface SubscriptionForm {
    status: SubscriptionStatusEnum;
    open: SubscriptionOpenEnum;
    quota: number;
    content: FormContent;
}
