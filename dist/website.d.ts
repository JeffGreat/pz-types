export declare enum WebsiteStatusEnum {
    Draft = 0,
    Published = 2
}
export declare enum SubscriptionStatusEnum {
    Close = 0,
    Open = 2
}
export declare enum SubscriptionOpenEnum {
    OpenToContacts = 0,
    OpenToAll = 1
}
export interface Website {
    site: {
        status: WebsiteStatusEnum;
        content: string;
        trackingCode: string;
    };
    subscription: {
        status: SubscriptionStatusEnum;
        open: SubscriptionOpenEnum;
        quota: number;
    };
}
