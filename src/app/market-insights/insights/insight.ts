/**
 * Represents a Market Insights object
 * @constructor
 * @param {number} id
 * @param {any} date
 * @param {boolean} read - Boolean value checking if insight has been opened
 * @param {string} image - Image url
 * @param {string} title
 * @param {string} content
 */
export class Insight {
    id: number;
    date: any;
    read: boolean;
    image: string;
    title: string;
    content: string;
}
