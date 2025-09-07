import { merge } from './lib/merge';

// Mockup Data
const collection_1: number[] = [15, 12, 9, 4];   // Sorted DESC
const collection_2: number[] = [1, 5, 10, 16];   // Sorted ASC
const collection_3: number[] = [3, 8, 11, 13];   // Sorted ASC


const mergedResult: number[] = merge(collection_1, collection_2, collection_3);


console.log('Result:', mergedResult);
