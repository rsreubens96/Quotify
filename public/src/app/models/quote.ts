// quotee: {
//     type: String,
//     trim: true,
//     required:true
// },
// body: {
//     type: String,
//     trim: true,
//     required: true
// },
// dateQuoted: {
//     type: Date,
//     default: Date.now
// },
// dateCreated: {
//     type: Date,
//     default: Date.now
// }
export default class Quote {
    _id: string;
    quotee: string;
    body: string;
    dateQuoted: Date;
    dateCreated: Date;  
}