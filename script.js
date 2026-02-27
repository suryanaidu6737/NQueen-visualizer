let board = [];
let N = 8;
let isPaused = false;
let isStopped = false;

let attempts = 0;
let placements = 0;
let rejections = 0;
let backtracks = 0;
let solutions = 0;

let allSolutions = [];
let startTime;

/* Board */
function createBoard() {
    const boardDiv = document.getElementById("board");
    boardDiv.innerHTML = "";
    boardDiv.style.gridTemplateColumns = `repeat(${N}, 1fr)`;
    boardDiv.style.gridTemplateRows = `repeat(${N}, 1fr)`;

    board = new Array(N).fill(-1);

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.classList.add((i + j) % 2 === 0 ? "white" : "black");
            cell.id = `cell-${i}-${j}`;
            boardDiv.appendChild(cell);
        }
    }
}

/* Utils */
function getSpeed() {
    let sliderValue = parseInt(document.getElementById("speedSlider").value);
    return 600 - sliderValue;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitIfPaused() {
    while (isPaused) await sleep(100);
}

/* Safety */
function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
        if (
            board[i] === col ||
            board[i] - i === col - row ||
            board[i] + i === col + row
        ) return false;
    }
    return true;
}

/* Highlight */
async function highlightSolution(solution) {
    for (let i = 0; i < N; i++) {
        let cell = document.getElementById(`cell-${i+1}-${solution[i]+1}`);
        cell.classList.add("solution-highlight");
    }
    await sleep(800);
    for (let i = 0; i < N; i++) {
        let cell = document.getElementById(`cell-${i+1}-${solution[i]+1}`);
        cell.classList.remove("solution-highlight");
    }
}

/* Show Selected Solution */
function showSolution(index) {

    let cards = document.querySelectorAll(".solution-card");
    cards.forEach(c => c.classList.remove("active"));
    cards[index].classList.add("active");

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            document.getElementById(`cell-${i}-${j}`).classList.remove("placed");
        }
    }

    let solution = allSolutions[index];

    for (let i = 0; i < N; i++) {
        let cell = document.getElementById(`cell-${i+1}-${solution[i]+1}`);
        cell.classList.add("placed");
    }
}

/* Solver */
async function solve(row = 0) {

    if (isStopped) return;

    if (row === N) {

        solutions++;
        document.getElementById("solutions").innerText = solutions;

        let solutionCopy = [...board];
        allSolutions.push(solutionCopy);

        let tuple = "(" + solutionCopy.map(x => x + 1).join(", ") + ")";

        let container = document.getElementById("solutionList");

        let card = document.createElement("div");
        card.classList.add("solution-card");

        card.innerHTML = `<strong>Solution ${solutions}</strong><br>${tuple}`;

        let index = allSolutions.length - 1;
        card.onclick = () => showSolution(index);

        container.appendChild(card);
        container.scrollTop = container.scrollHeight;

        await highlightSolution(solutionCopy);
        return;
    }

    for (let col = 0; col < N; col++) {

        if (isStopped) return;

        await waitIfPaused();
        let speed = getSpeed();

        attempts++;
        document.getElementById("attempts").innerText = attempts;

        let cell = document.getElementById(`cell-${row+1}-${col+1}`);
        cell.classList.add("try");
        await sleep(speed);

        if (isSafe(row, col)) {

            placements++;
            document.getElementById("placements").innerText = placements;

            board[row] = col;
            cell.classList.remove("try");
            cell.classList.add("placed");

            await solve(row + 1);

            backtracks++;
            document.getElementById("backtracks").innerText = backtracks;

            board[row] = -1;
            cell.classList.remove("placed");

        } else {

            rejections++;
            document.getElementById("rejections").innerText = rejections;

            cell.classList.remove("try");
            cell.classList.add("reject");
            await sleep(speed);
            cell.classList.remove("reject");
        }
    }
}

/* Controls */
async function start() {
    resetStats();
    isPaused = false;
    isStopped = false;
    allSolutions = [];
    document.getElementById("solutionList").innerHTML = "";

    N = parseInt(document.getElementById("nInput").value);
    createBoard();

    startTime = performance.now();
    await solve();
    document.getElementById("time").innerText =
        Math.floor(performance.now() - startTime);
}

function pause() { isPaused = true; }
function resume() { isPaused = false; }
function stopExecution() { isStopped = true; isPaused = false; }

function resetBoard() {
    isStopped = true;
    isPaused = false;
    resetStats();
    createBoard();
    allSolutions = [];
    document.getElementById("solutionList").innerHTML = "";
}

function resetStats() {
    attempts = placements = rejections = backtracks = solutions = 0;
    document.getElementById("attempts").innerText = 0;
    document.getElementById("placements").innerText = 0;
    document.getElementById("rejections").innerText = 0;
    document.getElementById("backtracks").innerText = 0;
    document.getElementById("solutions").innerText = 0;
    document.getElementById("time").innerText = 0;
}

createBoard();