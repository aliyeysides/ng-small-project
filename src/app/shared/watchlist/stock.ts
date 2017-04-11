/**
 * Represents all info given about a single stock symbol
 * @param {Object} EPSData
 * @param {ObjectArray} metaInfo
 * @param {ObjectArray} pgr
 * @param {Object} fundamentalData
 * @param {string} status Status of call, expect "success"
 */
export class Stock {
    EPSData: Object;
    metaInfo: Object[];
    pgr: Object[];
    fundamentalData: Object;
    status: string;
}