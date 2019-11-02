export enum CampaignTypeEnum {
    manual = 0,
    auto = 1,
    transac = 2,
    satisfaction = 3,
}

export enum CampaignMediaEnum {
    email = 0,
    sms = 1,
}

export enum CampaignStatusEnum {
    created = 0,
    pending = 3,
    sending = 4,
    sent = 5,
}

export interface Campaign {
    id: string;
    event: string;
    type: CampaignTypeEnum;
    media: CampaignMediaEnum;
    sendDate: Date;
    status: CampaignStatusEnum;
    name: string;
    subject?: string;
    content: string;
    sender: string;
    // recipients: ContactProperties | string[];
}
