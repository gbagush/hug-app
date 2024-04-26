"use client";
import React, { useState, useEffect } from "react";
import Question from "@/components/question/Question";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import questionsData from "./questions.json";
import swal from "sweetalert";

export default function Test() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [totalScore, setTotalScore] = useState<number>(0);
  const [mentalHealthStatus, setMentalHealthStatus] = useState<string>("");

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateTotalScore();
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerSelection = (optionIndex: number, score: number) => {
    setAnswers({ ...answers, [currentQuestionIndex]: score });
  };

  const allQuestionsAnswered =
    Object.keys(answers).length === questionsData.length;

  const calculateTotalScore = () => {
    let sum = 0;
    Object.values(answers).forEach((score) => {
      sum += score;
    });

    const totalScore = (sum / (questionsData.length * 3)) * 100;
    setTotalScore(Math.floor(totalScore));

    let mentalHealthStatus = "";
    if (totalScore >= 80) {
      mentalHealthStatus = "Kesehatan mental baik";
    } else if (totalScore >= 60) {
      mentalHealthStatus = "Kesehatan mental sedang";
    } else {
      mentalHealthStatus = "Kesehatan mental kurang";
    }
    setMentalHealthStatus(mentalHealthStatus);

    swal(`${totalScore.toString()}%`, mentalHealthStatus, "success");
  };

  return (
    <>
      <Navbar />
      <section id="test" className="py-20">
        <div className="container max-w-4xl mx-auto mt-10 md:px-12">
          <h1 className="text-sm leading-none text-cyan-500 font-extrabold lg:leading-tight mb-2">
            {`Pertanyaan ${currentQuestionIndex + 1} dari ${
              questionsData.length
            }`}
          </h1>
          <Question
            question={questionsData[currentQuestionIndex].question}
            onAnswerSelect={handleAnswerSelection}
            selectedOptionIndex={answers[currentQuestionIndex]}
          />
          <div className="flex justify-end mt-7 gap-4">
            <button
              type="button"
              onClick={goToPreviousQuestion}
              className="text-orange-500 border border-orange-500 text-xs font-semibold rounded-full px-8 py-4 hover:bg-orange-500 hover:text-white hover:drop-shadow-md transition duration-200"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={goToNextQuestion}
              className="text-white bg-orange-500 text-xs font-semibold rounded-full px-8 py-4 hover:bg-orange-600 hover:drop-shadow-md transition duration-200 disabled:bg-orange-400 disabled:cursor-not-allowed"
              disabled={answers[currentQuestionIndex] == undefined}
            >
              {currentQuestionIndex === questionsData.length - 1
                ? "Finish"
                : "Next"}
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
