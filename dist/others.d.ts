export declare type DateComparatorType = 'before' | 'after' | 'date';
export declare type PairingDeviceType = 'printer' | 'scanner';
export interface PairingDevice {
    deviceType: PairingDeviceType;
    deviceName: string;
}
export interface Pairing {
    paringDate: Date;
    lastSeenDate: Date;
    connected: boolean;
    printerDevice: PairingDevice;
    scannerDevice: PairingDevice;
    event: string;
}
