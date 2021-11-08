export enum SubscriptionStatusEnum {
    Close = 0,
    Open = 2,
}

export enum SubscriptionOpenEnum {
    OpenToContacts = 0,
    OpenToAll = 1,
}

export enum SubscriptionInviteModalEnum {
    ShowInviteModal = 1,
    HideInviteModal = 0,
}

export enum FormContentBlocTypeEnum {
    contactField = 0,
    text = 1,
    separator = 2,
    saveButton = 3,
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
        readOnly?: boolean;
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
    inviteModal: SubscriptionInviteModalEnum;
    quota: number;
    content: FormContent;
}
