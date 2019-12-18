export declare const defaultFormFields: ({
    type: number;
    options: {
        value: string;
        fieldId?: undefined;
        label?: undefined;
    };
} | {
    type: number;
    options: {
        fieldId: string;
        label: any;
        value?: undefined;
    };
} | {
    type: number;
    options?: undefined;
})[];
export declare const defaultSubscriptionForm: {
    status: number;
    open: boolean;
    quota: number;
    content: {
        width: number;
        twoColumns: boolean;
        showLabel: boolean;
        inlineFields: boolean;
        formFields: ({
            type: number;
            options: {
                value: string;
                fieldId?: undefined;
                label?: undefined;
            };
        } | {
            type: number;
            options: {
                fieldId: string;
                label: any;
                value?: undefined;
            };
        } | {
            type: number;
            options?: undefined;
        })[];
    };
};
