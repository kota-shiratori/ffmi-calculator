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
    <main className="flex flex-col items-center p-24">
      <form onSubmit={calculateNutrition}>
        <label>
          体重 (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <br />
        <label>
          体脂肪率 (%):
          <input
            type="number"
            value={bodyFat}
            onChange={(e) => setBodyFat(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" class="bg-blue-600 hover:bg-blue-500 text-white rounded px-4 py-2">栄養計算</button>
      </form>
      {results && (
        <div>
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
