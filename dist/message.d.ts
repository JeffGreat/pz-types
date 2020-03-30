export declare enum MessageWallStatus {
    hidden = 0,
    displayed = 1
}
export declare enum MessageSource {
    sms = "sms",
    twitter = "twitter",
    web = "web"
}
export declare enum MessageStatus {
    received = 0,
    selected = 1,
    wall = 2,
    archived = 3,
    deleted = 4
}
export interface Message {
    id: string;
    event: string;
    source: MessageSource;
    status: MessageStatus;
    content: string;
    contentOriginal: string;
    vote: number;
    smsNum: string;
    tweetId: string;
    tweetIdStr: string;
    userInfo: string;
    position: number;
    publishCounter: number;
    publishDate: Date;
    createdAt: Date;
    createdBy: string;
    updatedAt: Date;
    updatedBy: string;
}
