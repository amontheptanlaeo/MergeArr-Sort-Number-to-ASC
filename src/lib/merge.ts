export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[],
): number[] {

  // รวม Array ทั้งหมดเป็น Array เดียว
  const mixArr: number[] = [...collection_1, ...collection_2, ...collection_3];

  // ถ้า Array ที่รวมกันแล้วไม่มีสมาชิก ก็ return Array ว่างกลับไป
  if (mixArr.length === 0) {
    return [];
  }

  // สร้าง Array ไว้เก็บผลลัพธ์
  const sortedNumber: number[] = [];

  while (mixArr.length > 0) {
    let minIndex: number = 0;
    let minValue: number = mixArr[0];

    // หาค่าที่น้อยที่สุด minValue และตำแหน่งของมัน minIndex ใน mixArr
    for (let i = 1; i < mixArr.length; i++) {
      if (mixArr[i] < minValue) {
        minValue = mixArr[i];
        minIndex = i;
      }
    }

    // นำค่าที่น้อยที่สุดที่เจอเก็บเข้า sortedNumber
    sortedNumber.push(minValue);

    //ลบค่าที่น้อยที่สุดออกจาก mixArr
    mixArr.splice(minIndex, 1);
  }

  return sortedNumber;
}