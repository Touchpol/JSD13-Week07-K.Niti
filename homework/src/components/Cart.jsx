// Cart = คอมโพเนนต์แสดงรายการในตะกร้า
// รับ prop "items" (array ของสินค้าในตะกร้า) จาก App
export default function Cart({ items }) {
  // reduce วนลูปคำนวณยอดรวม = (ราคา x จำนวน) ของทุกชิ้นรวมกัน
  // เริ่มจากค่าเริ่มต้น 0 แล้วบวกไปเรื่อยๆ
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Conditional Rendering #1: ถ้าตะกร้าว่าง (ไม่มี items) แสดงข้อความแจ้งเตือน
  if (items.length === 0) {
    return (
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-8 text-center text-amber-700">
          ตะกร้ายังว่างเปล่า ว่างยิ่งกว่าความรู้สึกตอนเจอ error ก่อน deadline
          ออกไปสั่งเมนูสักแก้วเหอะ ☕
        </div>
      </section>
    );
  }

  // Conditional Rendering #2: ถ้ามีสินค้า แสดงรายการทั้งหมด
  return (
    <section className="max-w-5xl mx-auto px-6 pb-16">
      <h2 className="text-3xl font-extrabold text-amber-950">ตะกร้าของฉัน</h2>
      {/* divide-y = ขีดเส้นคั่นระหว่างรายการ */}
      <ul className="mt-6 rounded-2xl bg-white shadow-md divide-y divide-stone-200">
        {/* map วนแสดงสินค้าทีละชิ้นในตะกร้า */}
        {items.map((item) => (
          <li key={item.id} className="p-4 flex items-center justify-between">
            <div>
              <span className="font-semibold text-amber-950">
                {item.emoji} {item.name}
              </span>
              {/* แสดงจำนวนที่สั่ง (qty มาจาก state ใน App) */}
              <span className="ml-3 text-stone-500">x{item.qty}</span>
            </div>
            <span className="font-bold text-amber-700">
              ฿{item.price * item.qty}
            </span>
          </li>
        ))}
      </ul>
      {/* แถบยอดรวมทั้งหมด */}
      <div className="mt-4 flex justify-between items-center rounded-2xl bg-amber-900 text-amber-50 px-6 py-4">
        <span className="font-semibold">ยอดรวม (จะร้องไห้ทีหลังก็ได้)</span>
        <span className="text-2xl font-extrabold">฿{total}</span>
      </div>
      <p className="mt-2 text-sm text-stone-400 text-center">
        * กดบวกเยอะๆ แล้วมานั่งงงกับ state ทีหลังก็ได้นะ ไม่ว่าใคร 🥲
      </p>
    </section>
  );
}