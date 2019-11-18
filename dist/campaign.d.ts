import { ContactProperties } from './contact';
export declare enum CampaignTypeEnum {
    manual = 0,
    auto = 1,
    transac = 2,
    satisfaction = 3
}
export declare enum CampaignMediaEnum {
    email = 0,
    sms = 1
}
export declare enum CampaignStatusEnum {
    created = 0,
    scheduled = 2,
    pending = 10,
    sending = 20,
    sent = 50
}
export declare enum CampaignTriggerActionEnum {
    subscription = 10,
    status = 20,
    checkin = 30
}
export interface CampaignTrigger {
    action: CampaignTriggerActionEnum;
    source?: ContactProperties;
}
export interface Campaign {
    id: string;
    event: string;
    type: CampaignTypeEnum;
    media: CampaignMediaEnum;
    trigger?: CampaignTrigger;
    sendDate?: Date;
    status: CampaignStatusEnum;
    name: string;
    subject?: string;
    content?: string;
    sender: string;
    recipients?: ContactProperties | string[];
    routerSettings?: any;
    routerResponse?: any;
}
