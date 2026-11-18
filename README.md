# School Progress Report Generator

A web-based **School Progress Report / Marksheet Generator** built using HTML, CSS, and JavaScript. This project displays a student's academic performance in a structured report card format, including subject-wise marks, totals, percentages, divisions, rank, class average, and attendance.

## 📸 Project Overview

The progress report is designed for:

**SMT. RAMDEVI SOBHRAJ BAJAJ ARYA VIDYA MANDIR**

It includes student information, academic details, scholastic performance, and overall results for Terminal and Final examinations.

## ✨ Features

- Student information display
- Academic year, class, roll number, and admission number
- Dynamic subject-wise marks table
- Terminal and Final examination sections
- Automatic calculation of total marks
- Automatic percentage calculation
- Automatic division calculation
- Rank and class average display
- Attendance information
- Remarks section
- Clean and structured report card layout

## 🧮 JavaScript Functionality

The project uses JavaScript to perform the following operations:

1. **Dynamic Data Rendering:** Displays student information using JavaScript objects.
2. **Dynamic Table Generation:** Creates subject rows using `forEach()` and `createElement()`.
3. **Total Calculation:** Calculates the total marks for Terminal and Final examinations.
4. **Percentage Calculation:** Calculates percentages based on the applicable subjects.
5. **Division Calculation:** Determines the division based on percentage.

### Division Criteria

| Percentage | Division |
|---|---|
| 89.5% – 100% | Distinction |
| 74.5% – 89.49% | 1st Division |
| 59.5% – 74.49% | 2nd Division |
| 39.5% – 59.49% | 3rd Division |
| Below 39.5% | Fail |

## 🛠️ Technologies Used

- HTML5 – Structure of the report card
- CSS3 – Styling and layout
- JavaScript – Dynamic content and calculations

## 📂 Project Structure

```text
task4/
│
├── index.html
├── style.css
├── main.js
│
└── img/
    ├── avm_logo.png
    └── signature.png
```

## 🚀 How to Run

1. Clone this repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Open the project folder in VS Code.

3. Open `index.html` in your browser.

4. The progress report will be displayed on the screen.

## 🎯 Project Objective

The main objective of this project is to practice JavaScript DOM manipulation, objects, arrays, loops, conditional statements, functions, and mathematical calculations while developing a practical school progress report interface.

## 👨‍💻 Author

**Ayush Singh**

GitHub: [@Ayu015](https://github.com/Ayu015)

---

⭐ If you find this project useful, consider giving it a star!
