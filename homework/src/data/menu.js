// ไฟล์ข้อมูลเมนู (แยกข้อมูลออกจากคอมโพเนนต์ เพื่อให้ง่ายต่อการแก้ไข)
// export ใช้ const เพื่อให้คอมโพเนนต์อื่น import ไปใช้ (เช่น Menu.jsx)
// แต่ละรายการมี: id (ไม่ซ้ำกัน, ใช้เป็น key), name, price (บาท), emoji, desc
export const MENU = [
  { id: 1, name: "Espresso", price: 60, emoji: "☕", desc: "เข้มข้น แก้มข้น กาแฟแท้ 100% (เชื่อเถอะ เราขี้เกียจโกหก)" },
  { id: 2, name: "Americano", price: 70, emoji: "☕", desc: "เอสเพรสโซ่ผสมน้ำร้อน หอมละมุน เหมาะกับคนเพิ่งหัด React" },
  { id: 3, name: "Latte", price: 85, emoji: "🥛", desc: "เอสเพรสโซ่ผสมนมสด นุ่มนวล เหมือนคอมเมนต์ในโค้ดของเรา" },
  { id: 4, name: "Cappuccino", price: 85, emoji: "🍮", desc: "ฟองนมหนานุ่ม โรยอบเชย ฟองหนาแบบ Promise ที่ไม่เคย Reject" },
  { id: 5, name: "Mocha", price: 95, emoji: "🍫", desc: "กาแฟผสมช็อกโกแลต หวานมัน เหมาะกับคนชอบแก้บั๊กทั้งคืน" },
  { id: 6, name: "Chocolate", price: 80, emoji: "🍫", desc: "ช็อกโกแลตร้อน เข้มข้น ตอนดึกๆ ถ้า error ก็จิบอันนี้ไปก่อน" },
];
