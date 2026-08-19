// useState = Hook ที่ใช้เก็บข้อมูลที่จะเปลี่ยนแปลง (state) ของคอมโพเนนต์
import { useState } from "react";
// นำเข้าคอมโพเนนต์ลูกต่างๆ มาใช้ประกอบหน้าเว็บ (แต่คอมโพเนนต์)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

// App = คอมโพเนนต์หลัก เปรียบเสมือน "ราก" ของต้นไม้คอมโพเนนต์ทั้งแอป
export default function App() {
  // cart = state เก็บรายการในตะกร้า (เป็น array)
  // setCart = ฟังก์ชันไว้แก้ไข state (ห้ามแก้ cart ตรงๆ เด็ดขาด)
  // เริ่มต้นด้วย array ว่าง [] = ยังไม่สั่งอะไรเลย
  const [cart, setCart] = useState([]);

  // ฟังก์ชันรับรายการเมนู แล้วเพิ่มเข้าไปใน state cart
  // setCart รับฟังก์ชันที่ได้ "ค่าก่อนหน้า (prev)" มาเป็น input
  // เพื่อให้ React คำนวณ state ใหม่จากค่าล่าสุดได้อย่างถูกต้อง
  const addToCart = (item) => {
    setCart((prev) => {
      // หาว่ามีรายการ id เดียวกันอยู่ในตะกร้าแล้วหรือยัง
      const found = prev.find((i) => i.id === item.id);
      if (found) {
        // ถ้ามีแล้ว -> ใช้ map สร้าง array ใหม่ โดยเพิ่ม qty ของรายการนั้น +1
        // (map ไม่แก้ array เดิม แต่คืน array ใหม่ = React จะ re-render)
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i,
        );
      }
      // ถ้ายังไม่มี -> ใช้ spread (...) คัดลอก array เดิม แล้วต่อท้ายรายการใหม่ (qty = 1)
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // ลด (reduce) เอา qty ทุกตัวในตะกร้ามารวมกัน = จำนวนสินค้ารวมในปุ่ม Cart
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // สร้างข้อความกวนตีนตามจำนวนสินค้าในตะกร้า (เช็ค state แล้วแสดงผลต่างกัน)
  // นี่คือ Conditional Rendering ในแบบ "ง่ายๆ แต่กวนใจ"
  let notice = "ยังไม่สั่งอะไรเลย กดปุ่มบวกก็ได้นะ ไม่กัด";
  if (cartCount >= 1 && cartCount <= 2) {
    notice = "เริ่มสั่งแล้ว เยี่ยม! ยังไงซะก็ดื่มไม่หมดอยู่ดี";
  } else if (cartCount >= 3 && cartCount <= 5) {
    notice = "โห หลายแก้วจัง ใครดื่มหมดรับผิดชอบเองนะ";
  } else if (cartCount > 5) {
    notice = "เบาๆ หน่อยครับคุณลูกค้า ร่างกายคือ state ใช้แล้วไม่คืนกับใคร";
  }

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800">
      <Navbar cartCount={cartCount} />
      <Hero />
      {/* แถบแจ้งเตือนกวนตีน: ข้อความเปลี่ยนไปตามค่า cartCount (state) */}
      <div className="bg-amber-200 text-amber-900 text-center text-sm font-medium py-2 px-4">
        ⚠️ {notice}
      </div>
      <Menu onAdd={addToCart} />
      <Cart items={cart} />
      <footer className="border-t border-amber-200 py-8 text-center text-stone-500">
        Made with React 19 + Tailwind CSS 4 + ความมั่วระดับ Homework ✨
      </footer>
    </div>
  );
}