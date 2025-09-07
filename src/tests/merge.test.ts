import { merge } from '../lib/merge';

describe('Merge function', () => {
  it('should merge three collections correctly with distinct numbers', () => {
    const collection_1: number[] = [10, 8, 5];
    const collection_2: number[] = [1, 3, 7];
    const collection_3: number[] = [2, 6, 9];
    const expected: number[] = [1, 2, 3, 5, 6, 7, 8, 9, 10];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it('should handle collections with overlapping numbers', () => {
    const collection_1: number[] = [9, 5, 1];
    const collection_2: number[] = [1, 5, 10];
    const collection_3: number[] = [3, 5, 8];
    const expected: number[] = [1, 1, 3, 5, 5, 5, 8, 9, 10];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it('should handle empty collections', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [2, 4, 6];
    const collection_3: number[] = [];
    const expected: number[] = [2, 4, 6];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it('should return an empty array if all collections are empty', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const expected: number[] = [];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it('should handle collections of different lengths', () => {
    const collection_1: number[] = [100, 50];
    const collection_2: number[] = [1, 2, 3, 4, 5];
    const collection_3: number[] = [60, 80];
    const expected: number[] = [1, 2, 3, 4, 5, 50, 60, 80, 100];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it('should handle negative numbers correctly', () => {
    const collection_1: number[] = [5, 0, -2];
    const collection_2: number[] = [-8, -1, 3];
    const collection_3: number[] = [-5, 4];
    const expected: number[] = [-8, -5, -2, -1, 0, 3, 4, 5];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it('should handle mixing numbers correctly', () => {
    const collection_1: number[] = [5, 0, -2, 1];
    const collection_2: number[] = [-8, -1, 3, -5];
    const collection_3: number[] = [-5, 4, 2];
    const expected: number[] = [-8, -5, -5, -2, -1, 0, 1, 2, 3, 4, 5];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

});
