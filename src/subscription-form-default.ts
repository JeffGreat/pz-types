export const defaultFormFields = [
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
            value: 'Enregistrer ma venue',
        },
    },
    {
        type: 1,
        options: {
            value: "En m'inscrivant j'accepte les conditions générales d'utilisation.",
        },
    },
];

export const defaultSubscriptionForm = {
    status: 0,
    open: true,
    quota: -1,
    content: {
        width: 100,
        twoColumns: false,
        showLabel: true,
        inlineFields: false,
        formFields: defaultFormFields,
    },
};
