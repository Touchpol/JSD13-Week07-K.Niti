// Navbar = คอมโพเนนต์แถบเมนูด้านบน
// รับ props (properties) ชื่อ cartCount มาจาก App เพื่อแสดงจำนวนสินค้าในตะกร้า
// การส่งข้อมูลจากคอมโพเนนต์แม่ -> ลูก เรียกว่า "Props Drilling"
export default function Navbar({ cartCount }) {
  return (
    // sticky = แถบติดค้างอยู่ด้านบนเวลาเลื่อนหน้า
    // z-10 = ให้อยู่ layer เหนือเนื้อหาอื่น / backdrop-blur = พื้นหลังเบลอ
    <nav className="sticky top-0 z-10 bg-amber-900/95 backdrop-blur text-amber-50 shadow-lg">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-extrabold tracking-wide">
          ☕ Cafe <span className="text-amber-400">React</span>
          {/* คำโปรยเล็กๆ เอาไว้กวนใจลูกค้าตอนเช้าๆ */}
          <span className="block text-xs font-medium text-amber-300/70">
            กาแฟเราดีจริง รับประกันว่ามั่วนะ
          </span>
        </h1>
        {/* ปุ่ม Cart พร้อม badge ตัวเลขจำนวนสินค้า */}
        <button className="relative px-4 py-2 rounded-full bg-amber-700 hover:bg-amber-600 transition font-semibold">
          🛒 Cart
          {/* relative + absolute = ย้าย badge ไปไว้มุมขวาบนของปุ่ม */}
          {/* {cartCount} = แสดงค่าจาก props ที่รับมา (อัปเดตอัตโนมัติเมื่อ state เปลี่ยน) */}
          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
            {cartCount}
          </span>
        </button>
      </div>
    </nav>
  );
}
