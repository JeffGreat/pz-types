import { ContactProperties } from './contact';
export declare enum CampaignRecipientsTypeEnum {
    all = 0,
    groups = 1,
    custom = 2
}
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
    replyTo: string;
    recipients?: ContactProperties | string[];
    routerSettings?: any;
    routerResponse?: any;
}
export interface TemplateEmail {
    id: string;
    name: string;
    content: string;
    image: string;
    company: string;
}
