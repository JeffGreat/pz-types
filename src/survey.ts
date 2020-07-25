import { Event } from './event';

export enum SurveyStatus {
    closed = 0,
    opened = 1,
    finished = 2,
}

export interface Survey {
    id: string;
    event: Event['id'];
    name: string;
    compiledResult: object;
    status: SurveyStatus;
    options: string;
    pointSystem: number;
    totalPoint: number;
    polls: Poll[];
    publishDate: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface SurveyResult {
    id: string;
    event: Event['id'];
    survey: Survey['id'];
    sessionId: string;
    totalPoints: number;
}

export enum PollType {
    text = 0,
    choice = 1,
    evaluation = 2,
    date = 3,
}

export interface Poll {
    id: string;
    title: string;
    type: PollType;
    options: object;
    validators: object;
    compiledResult: object;
    position: number;
    totalPoint: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface PollAnwser {
    id: string;
    event: Event['id'];
    survey: Survey['id'];
    poll: Poll['id'];
    surveyResult: SurveyResult['id'];
    sessionId: string;
    value: string;
    compiledValue: object;
    point: number;
}
