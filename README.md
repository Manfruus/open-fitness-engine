# 🏋️‍♂️ Open Fitness Engine

A lightweight, zero-dependency JavaScript utility to calculate BMR (Basal Metabolic Rate), TDEE (Total Daily Energy Expenditure), and macronutrient distribution.

## 🚀 Quick Start

```javascript
const { calculateBMR, calculateTDEE, calculateMacros } = require('./index');

// 1. Calculate BMR
const bmr = calculateBMR(75, 175, 25, 'male'); 

// 2. Calculate TDEE
const tdee = calculateTDEE(bmr, 'moderate');

// 3. Get Macro split
const macros = calculateMacros(tdee, 'weightLoss');

console.log({ bmr, tdee, macros });
