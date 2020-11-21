"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var subscription_form_1 = require("./subscription-form");
exports.defaultFormFields = [
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
exports.defaultSubscriptionForm = {
    status: 0,
    open: subscription_form_1.SubscriptionOpenEnum.OpenToAll,
    quota: -1,
    content: {
        width: 100,
        twoColumns: false,
        showLabel: true,
        inlineFields: false,
        formFields: exports.defaultFormFields,
        thanksContent: '<h3>Merci pour votre inscription</h3>',
        allowDuple: false,
        dupleContent: '<h3>Votre email est déjà inscrit pour cet événement</h3>',
    },
};
