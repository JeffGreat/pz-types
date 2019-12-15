import { WebsiteStatusEnum } from './website';

export const defaultWebsite: Website = {
    status: WebsiteStatusEnum.Draft,
    content: undefined,
    trackingCode: undefined,
};

export interface Website {
    status: WebsiteStatusEnum;
    content: string;
    trackingCode: string;
}
