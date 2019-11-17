import {ContactProperties, Contact} from './contact';

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
    scheduled = 2,
    pending = 10,
    sending = 20,
    sent = 50,
}

export enum CampaignTriggerEnum {
    subscription = 10,
    status = 20,
    checkin = 30,
}

export interface CampaignTrigger {
    trigger: CampaignTriggerEnum;
    source?: Contact[];
}

export type CampaignTriggerType = Date | CampaignTrigger;

export interface Campaign {
    id: string;
    event: string;
    type: CampaignTypeEnum;
    media: CampaignMediaEnum;
    trigger: CampaignTriggerType;
    sendDate: Date;
    status: CampaignStatusEnum;
    name: string;
    subject?: string;
    content: string;
    sender: string;
    recipients: ContactProperties | string[];
    routerSettings: any;
    routerResponse: any;
}
