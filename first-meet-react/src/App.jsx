import Section from "./components/Section";

export default function App() {
  return (
    <div className="min-h-screen flex justify-center bg-blue-950">
      <div className="p-6 gap-y-6 flex flex-col justify-start w-[80%] lg:w-[70%]">
        <h1 className="w-full p-6 bg-amber-100 font-extrabold">
          React App Starter
        </h1>
        <Section></Section>
      </div>
    </div>
  );
}