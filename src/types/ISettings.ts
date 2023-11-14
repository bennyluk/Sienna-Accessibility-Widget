export interface ISettingsStates {
    fontSize?: number,
    contrast?: string,
    [key: string]: any;
}

export interface ISettings {
    lang?: string;
    states?: ISettingsStates;
    updatedAt?: Date;
}