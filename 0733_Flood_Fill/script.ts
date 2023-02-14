function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  //   const queue = new Queue();

  //   queue.enqueue([sr, sc]);

  //   const curCol = image[sr][sc];

  //   const rowList = [1, 0, 0, -1];
  //   const colList = [0, 1, -1, 0];

  //   const rowLen = image.length;
  //   const colLen = image[0].length;

  //   image[sr][sc] = color;

  //   if (color === curCol) return image;

  //   while (!queue.isEmpty()) {
  //     const [row, col] = queue.dequeue();

  //     for (let i = 0; i < 4; i++) {
  //       const deltaRow = row + rowList[i];
  //       const deltaCol = col + colList[i];

  //       if (
  //         deltaRow < 0 ||
  //         deltaCol < 0 ||
  //         deltaRow >= rowLen ||
  //         deltaCol >= colLen
  //       )
  //         continue;

  //       if (deltaRow === row && deltaCol === col) continue;
  //       if (image[deltaRow][deltaCol] === curCol) {
  //         image[deltaRow][deltaCol] = color;
  //         queue.enqueue([deltaRow, deltaCol]);
  //       }
  //     }
  //   }

  return image;
}
