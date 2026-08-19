// จุดเริ่มต้น (entry point) ของ React App
// StrictMode = ตัวช่วยดีบักในโหมด dev (ตรวจสอบปัญหาและวาร์นเป็น 2 ครั้ง)
import { StrictMode } from 'react'
// createRoot = ฟังก์ชันของ React ที่ใช้ "ต่อ" React เข้ากับ DOM จริงใน HTML
import { createRoot } from 'react-dom/client'
// นำเข้าไฟล์ CSS (มี @import "tailwindcss" อยู่ข้างใน)
import './index.css'
// นำเข้าคอมโพเนนต์หลัก App
import App from './App.jsx'

// ไปหา element <div id="root"> ใน index.html แล้วใช้เป็นจุดผูก (mount)
// จากนั้น render <App /> ลงไปในหน้าเว็บ
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
