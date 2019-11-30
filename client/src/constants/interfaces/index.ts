export interface IAlert {
    res: string;
    scalar: boolean;
}

export interface IAlertMap {
    alerts: Map<string, IAlert>;
}

export interface ILog {
    text: string;
    type: string;
}
