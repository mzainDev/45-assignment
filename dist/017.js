"use strict";
// You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let dinnerTable = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
let moreGuests = ["Frank", "Grace", "Henry"];
// Adding more guests to the dinner table
let moreGuest = dinnerTable.push(...moreGuests);
console.log(moreGuest);
