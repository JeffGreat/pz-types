import { WebsiteStatusEnum } from './website';
export declare const defaultWebsite: Website;
export interface Website {
    status: WebsiteStatusEnum;
    content: string;
    trackingCode: string;
}
