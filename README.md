# 👑 N-Queens Visualizer

An interactive web-based visualizer that demonstrates how the **Backtracking Algorithm** solves the classic **N-Queens Problem** step-by-step.

This project allows users to see how queens are placed on a chessboard while avoiding conflicts in rows, columns, and diagonals.

---

## 📌 Problem Statement

The **N-Queens Problem** asks:

> Place **N queens** on an **N × N chessboard** so that **no two queens attack each other**.

That means:
- No two queens share the same **row**
- No two queens share the same **column**
- No two queens share the same **diagonal**

The solution is typically implemented using a **Backtracking algorithm**.

---

## 🚀 Features

✔ Interactive chessboard visualization  
✔ Real-time **queen placement animation**  
✔ **Backtracking visualization** when a conflict occurs  
✔ Adjustable **algorithm speed**  
✔ **Pause / Resume / Stop** execution  
✔ **Statistics panel** showing:
- Attempts
- Placements
- Rejections
- Backtracks
- Total Solutions
- Execution Time  

✔ **Solution cards** displaying each valid solution  
✔ Click any solution card to **display that solution on the board**

---

## 🖥️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- DOM Manipulation
- Async / Await animations

---

## 📂 Project Structure


nqueens-visualizer/
│
├── index.html # Main UI
├── style.css # Styling and animations
└── script.js # Backtracking logic and visualization


---

## ▶️ How to Run the Project

1. Clone the repository

```bash
git clone https://github.com/suryanaidu6737/nqueens-visualizer.git

Open the folder

Run the project by opening

index.html

Or use Live Server in VS Code.

🎮 How to Use

Enter a value for N (4–12).

Click Start to begin solving.

Use the controls:

Pause – temporarily stop the algorithm

Resume – continue solving

Stop – terminate execution

Reset – clear the board

Adjust the speed slider to control animation speed.

Click any solution card to view that solution on the board.

📊 Example Output

Example solution for N = 4:

(2, 4, 1, 3)
(3, 1, 4, 2)

Each number represents the column position of a queen in each row.

💡 Concepts Demonstrated

Backtracking Algorithm

Recursion

Constraint Checking

Algorithm Visualization

DOM Manipulation

Asynchronous JavaScript

📸 Preview

<img width="1919" height="880" alt="Screenshot 2026-03-10 201704" src="https://github.com/user-attachments/assets/76259910-dfe4-4a2c-8547-404bdd69b893" />


🔮 Future Improvements

Step-by-step trace mode

Solution replay animation

Dark / Light theme

Mobile optimized UI

Algorithm complexity visualization

👨‍💻 Author

Surya Yarramsetti

If you like this project, feel free to ⭐ the repository.

📜 License

This project is open source and available under the MIT License.
