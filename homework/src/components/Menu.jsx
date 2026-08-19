// นำเข้าคอมโพเนนต์การ์ดเมนู กับข้อมูลเมนู (import จากไฟล์ข้อมูล)
import MenuCard from "./MenuCard";
import { MENU } from "../data/menu";

// Menu = คอมโพเนนต์แสดงรายการเมนูทั้งหมด
// รับ prop "onAdd" (ฟังก์ชันจาก App) แล้วส่งต่อลงไปให้ MenuCard ใช้
export default function Menu({ onAdd }) {
  return (
    // id="menu" ไว้ให้ Hero กดปุ่ม "ดูเมนู" แล้วลิงก์ #menu เลื่อนมาที่นี่
    <section id="menu" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-extrabold text-amber-950">เมนูของเรา</h2>
      <p className="mt-1 text-stone-500">
        กดปุ่มเพื่อเพิ่มลงตะกร้า แล้วดูยอดรวมเปลี่ยนทันที
      </p>
      {/* grid = จัดเรียงการ์ดเป็นตาราง (1 คอลัมน์มือถือ / 2 แท็บเล็ต / 3 จอใหญ่) */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* map วนลูปแสดง MenuCard ทีละรายการ */}
        {/* key = ค่าที่ไม่ซ้ำกัน ช่วยให้ React จดจำแต่ละรายการตอน re-render */}
        {MENU.map((item) => (
          <MenuCard key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}