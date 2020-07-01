export enum DocPublishStatusEnum {
    private = 0,
    internal = 1,
    public = 2,
}

export interface Doc {
    id: string;
    event: string;
    name: string;
    url: string;
    publishStatus: DocPublishStatusEnum;
}
