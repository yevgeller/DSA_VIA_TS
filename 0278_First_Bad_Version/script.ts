/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let min = 0,
      max = n;
    while (min <= max) {
      let mid = (max - min) / 2 + min;
      if(isBadVersion(mid)){
        //bad version, need to move on
      }
    }

    return -1;
  };
};
