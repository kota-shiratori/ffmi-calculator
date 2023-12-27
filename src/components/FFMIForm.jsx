"use client";
import React, { useState } from "react";

export default function FFMIForm() {
  const [weight, setWeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [results, setResults] = useState(null);

  const calculateNutrition = (e) => {
    e.preventDefault();

    // 計算
    const bodyFatWeight = weight * (bodyFat / 100);
    const leanBodyMass = weight - bodyFatWeight;
    const maintenanceCalories = leanBodyMass * 35;
    const proteinIntake = weight * 2;
    const proteinCalories = proteinIntake * 4;
    const remainingCalories = maintenanceCalories - proteinCalories;
    const fatCalories = 30 * 9;
    const carbCalories = remainingCalories - fatCalories;
    const carbIntake = carbCalories / 4;

    setResults({
      bodyFatWeight: bodyFatWeight.toFixed(2),
      leanBodyMass: leanBodyMass.toFixed(2),
      maintenanceCalories: maintenanceCalories.toFixed(2),
      proteinIntake: proteinIntake.toFixed(2),
      proteinCalories: proteinCalories.toFixed(2),
      fatCalories: fatCalories.toFixed(2),
      carbCalories: carbCalories.toFixed(2),
      carbIntake: carbIntake.toFixed(2),
    });
  };

  return (
    <main className="flex flex-col items-center">
      <form onSubmit={calculateNutrition}>
        <div className="flex items-center p-5 gap-x-1">
          {/* 体重の入力フィールド */}
          <div class="relative w-full min-w-[100px] h-10">
            <input
              class="text-xl peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
              placeholder=" "
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
              体重 (kg)
            </label>
          </div>
          {/* 体脂肪率の入力フィールド */}
          <div class="relative w-full min-w-[100px] h-10">
            <input
              class="text-xl peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
              type="number"
              placeholder=" "
              value={bodyFat}
              onChange={(e) => setBodyFat(e.target.value)}
            />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:!border-blue-500 after:border-blue-gray-200 peer-focus:after:!border-blue-500">
              体脂肪率 (%)
            </label>
          </div>
        </div>
        {/* 計算ボタン */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white rounded px-4 py-2 flex m-auto mt-4"
        >
          栄養計算
        </button>
      </form>
      {results && (
        <div className="mt-5">
          <p>体脂肪量: {results.bodyFatWeight} kg</p>
          <p>除脂肪体重: {results.leanBodyMass} kg</p>
          <p>維持(減量)カロリー: {results.maintenanceCalories} kcal</p>
          <p>タンパク質摂取量: {results.proteinIntake} g</p>
          <p>タンパク質摂取カロリー: {results.proteinCalories} kcal</p>
          <p>脂質摂取量: 30g</p>
          <p>脂質摂取カロリー: {results.fatCalories} kcal</p>
          <p>炭水化物摂取カロリー: {results.carbCalories} kcal</p>
          <p>炭水化物摂取量: {results.carbIntake} g</p>
        </div>
      )}
    </main>
  );
}
