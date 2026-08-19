// MenuCard = การ์ดแสดงเมนูหนึ่งรายการ (เป็นคอมโพเนนต์แบบ "รับข้อมูลจากข้างนอก")
// props: item = ข้อมูลเมนูตัวหนึ่ง, onAdd = ฟังก์ชันที่ใช้เมื่อกดปุ่มเพิ่ม
export default function MenuCard({ item, onAdd }) {
  return (
    // hover:-translate-y-1 = การ์ดยกขึ้นนิดหน่อยตอนชี้เมาส์ (transition ทำให้ลื่น)
    <article className="rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition p-6 flex flex-col">
      {/* ใช้ข้อมูลจาก props item.xxx มาแสดงผล */}
      <div className="text-5xl mb-4">{item.emoji}</div>
      <h3 className="text-lg font-bold text-amber-950">{item.name}</h3>
      <p className="mt-1 text-sm text-stone-500 flex-1">{item.desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="font-extrabold text-amber-700">฿{item.price}</span>
        {/* onClick = event ตอนคลิก เรียก onAdd(item) ซึ่งเป็นฟังก์ชันของ App */}
        <button
          onClick={() => onAdd(item)}
          className="px-4 py-2 rounded-full bg-amber-600 text-white text-sm font-semibold hover:bg-amber-500 transition"
        >
          + เพิ่มลงตะกร้า
        </button>
      </div>
    </article>
  );
}