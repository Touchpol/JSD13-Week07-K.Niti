// Hero = คอมโพเนนต์ส่วนหัว/หน้าปกของหน้าเว็บ (Static ไม่มี state)
// ไม่รับ props ใดๆ เพราะเป็นข้อมูลตายตัว (hard-code)
export default function Hero() {
  return (
    // bg-gradient-to-br = สีไล่ระดับจากมุมซ้ายบนไปขวาล่าง
    <header className="bg-gradient-to-br from-amber-800 via-amber-900 to-stone-900 text-amber-50">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <p className="text-amber-400 font-semibold tracking-widest uppercase">
          First Meet React + Tailwind (กวนตีนเวอร์ชั่น Homework)
        </p>
        <h1 className="mt-4 text-4xl lg:text-6xl font-extrabold leading-tight">
          ชงกาแฟด้วย
          <span className="text-amber-400"> React</span>
          <span className="block text-3xl lg:text-5xl mt-2 text-amber-100">
            หรือจะมานั่งมั่วนี่ก็ได้
          </span>
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-amber-200/80">
          ร้านกาแฟเล็กๆ ที่ทุกแก้วถูกประกอบด้วยคอมโพเนนต์ สั่งแล้วขึ้นผลทันทีแบบ
          Real-time ด้วย useState (ไม่ต้องเดาเอาเองนะ เดี๋ยว error)
        </p>
        {/* anchor ลิงก์ไปที่ id="menu" ในส่วนเมนู (ใช้ <a> ธรรมดาเพื่อเลื่อนหน้า) */}
        <a
          href="#menu"
          className="mt-8 inline-block px-8 py-3 rounded-full bg-amber-500 text-amber-950 font-bold hover:bg-amber-400 transition shadow-lg"
        >
          ดูเมนูกันเลย อย่ามัวแต่จ้อง ↓
        </a>
      </div>
    </header>
  );
}
