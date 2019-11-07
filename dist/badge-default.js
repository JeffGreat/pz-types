"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badgeFormats = {
    a4: {
        id: 'a4',
        name: 'Format A4 pliable',
        image: '/assets/images/icons/a4.svg',
        orientation: 'p',
        width: 210,
        height: 297,
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
        unit: 'mm',
        margin: {
            secureMargin: 3,
            hole: {
                position: 'top',
                radius: 3,
            },
        },
    },
};
