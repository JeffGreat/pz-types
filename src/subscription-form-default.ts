import { SubscriptionForm, SubscriptionOpenEnum, FormContentField } from './subscription-form';

export const defaultFormFields: FormContentField[] = [
    {
        type: 1,
        options: {
            value: '<h1>Inscription</h1>',
        },
    },
    {
        type: 0,
        options: {
            fieldId: 'firstName',
            label: null,
        },
    },
    {
        type: 0,
        options: {
            fieldId: 'lastName',
            label: null,
        },
    },
    {
        type: 0,
        options: {
            fieldId: 'email',
            label: null,
        },
    },
    {
        type: 0,
        options: {
            fieldId: 'status',
            label: null,
        },
    },
    {
        type: 2,
    },
    {
        type: 3,
        options: {
            value: 'Enregistrer',
        },
    },
    {
        type: 1,
        options: {
            value: "En m'inscrivant j'accepte les conditions générales d'utilisation.",
        },
    },
];

export const defaultSubscriptionForm: SubscriptionForm = {
    status: 0,
    open: SubscriptionOpenEnum.OpenToAll,
    quota: -1,
    content: {
        width: 100,
        twoColumns: false,
        showLabel: true,
        inlineFields: false,
        formFields: defaultFormFields,
    },
};
