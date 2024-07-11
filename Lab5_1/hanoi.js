const hanoi = (n, fromRod, toRod, auxRod) => {
    if (n === 0) {
        return;
    }
    hanoi(n - 1, fromRod, auxRod, toRod);
    console.log(`${fromRod} --> ${toRod}`);
    hanoi(n - 1, auxRod, toRod, fromRod);
};

// ตัวอย่างการเรียกใช้งาน
const n = 3; // จำนวนแผ่นหิน
hanoi(n, 'a', 'c', 'b');
