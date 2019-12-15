export declare enum WebsiteStatusEnum {
    Draft = 0,
    Published = 2
}
export interface Website {
    status: WebsiteStatusEnum;
    content: string;
    trackingCode: string;
}
