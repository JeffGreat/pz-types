export type DateComparatorType = 'before' | 'after' | 'date';

export type PairingDeviceType = 'printer' | 'scanner';

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
