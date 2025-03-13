export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
  const result: number[] = [];
  let i = 0; 
  let j = 0; 
  let k = collection_3.length - 1; 

  while (i < collection_1.length || j < collection_2.length || k >= 0) {
      const candidates: number[] = [];
      
      if (i < collection_1.length) candidates.push(collection_1[i]);
      if (j < collection_2.length) candidates.push(collection_2[j]);
      if (k >= 0) candidates.push(collection_3[k]);

      if (candidates.length === 0) break;

      const minVal = Math.min(...candidates);

      if (i < collection_1.length && collection_1[i] === minVal) {
          result.push(collection_1[i]);
          i++;
      }
      else if (j < collection_2.length && collection_2[j] === minVal) {
          result.push(collection_2[j]);
          j++;
      }
      else {
          result.push(collection_3[k]);
          k--;
      }
  }

  return result;
}