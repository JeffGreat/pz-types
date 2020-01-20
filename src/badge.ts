import { ContactFields } from './contact';

export interface BadgeFormat {
    id: string;
    name: string;
    image: string;
    orientation: 'p' | 'l';
    width: number;
    height: number;
    canvasHeight: number;
    canvasWidth: number;
    pdfFormat?: string;
    unit: string;
    margin?: {
        fullBleed?: number;
        secureMargin: number;
        hole?: {
            position: 'top' | 'left' | 'right' | 'bottom';
            radius: number;
        };
    };
}

export interface Badge {
    id: string;
    name: string;
    content: object;
    format: BadgeFormat;
    contactAssociation?: string;
    contacts: ContactFields;
    event: string;
}
