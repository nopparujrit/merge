import { merge } from "../src/merge";


describe('merge', () => {
    test('merge collection_1(ascending) , collection_2(ascending) and collection_3(descending)', () => {
        const collection_1 = [1, 3, 5, 15];
        const collection_2 = [2, 4, 6];
        const collection_3 = [8, 7, 5, 3]; 
        const expected = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 15];
        const expected2 = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8 , 8, 10 , 15];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
        expect(merge(collection_1, [2, 4, 6, 8, 10], collection_3)).toEqual(expected2);
    });

    test('empty collection', () => {
        expect(merge([], [], [])).toEqual([]);
        expect(merge([1], [], [])).toEqual([1]);
    });


});