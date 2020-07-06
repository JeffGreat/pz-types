import { BadgeFormat } from './badge';

export const badgeResolution = {
    cm: 120,
    mm: 12,
    inch: 300,
};

export const badgeFormats: { [K: string]: BadgeFormat } = {
    a4: {
        id: 'a4',
        name: 'Format A4 pliable',
        image: '/assets/images/icons/a4.svg',
        orientation: 'p',
        width: 210,
        height: 297,
        canvasWidth: 2520,
        canvasHeight: 3564,
        pdfFormat: 'a4',
        unit: 'mm',
        margin: {
            secureMargin: 5,
            hole: {
                position: 'top',
                radius: 5,
            },
        },
    },
    a6: {
        id: 'a6',
        name: 'Format A6',
        image: '/assets/images/icons/a6.svg',
        orientation: 'p',
        width: 105,
        height: 148,
        canvasWidth: 1260,
        canvasHeight: 1776,
        pdfFormat: 'a6',
        unit: 'mm',
        margin: {
            secureMargin: 5,
            hole: {
                position: 'top',
                radius: 5,
            },
        },
    },
    cb: {
        id: 'cb',
        name: 'Format CB',
        image: '/assets/images/icons/cb.svg',
        orientation: 'l',
        pdfFormat: 'credit-card',
        width: 85.7,
        height: 54.03,
        canvasWidth: 1028,
        canvasHeight: 648,
        unit: 'mm',
        margin: {
            secureMargin: 3,
            hole: {
                position: 'top',
                radius: 3,
            },
        },
    },
    etiquette: {
        id: 'etiquette',
        name: 'Format étiquette (55x35mm)',
        image: '/assets/images/icons/cb.svg',
        orientation: 'l',
        pdfFormat: 'credit-card',
        width: 55,
        height: 35,
        canvasWidth: 1028,
        canvasHeight: 654,
        unit: 'mm',
        margin: {
            secureMargin: 3,
        },
    },
    etiquetteXL: {
        id: 'etiquetteXL',
        name: 'Format étiquette (70x32mm)',
        image: '/assets/images/icons/cb.svg',
        orientation: 'l',
        pdfFormat: 'credit-card',
        width: 70,
        height: 32,
        canvasWidth: 1028,
        canvasHeight: 470,
        unit: 'mm',
        margin: {
            secureMargin: 3,
        },
    },
};
