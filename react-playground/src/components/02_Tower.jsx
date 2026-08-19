import Chamber from "./03_Chamber";

export default function Tower({ question, answer, handleAnswer, podReady }) {
  return (
    <div className="flex flex-col justify-center items-center pt-10 bg-orange-500 w-[90%]">
      <h1>Tower</h1>
      {/* Render Chamber here */}
      <Chamber
        question={question}
        answer={answer}
        handleAnswer={handleAnswer}
        podReady={podReady}
      />
    </div>
  );
}
