export default function knightMoves(start = [0, 0], end = [1, 2]) {
    let visited = [];
    for (let i = 0; i < 8; ++i) {
        visited.push([]);
        for (let j = 0; j < 8; ++j) {
            visited[i].push(0);
        }
    }
    let queue = [];
    let first = [];
    queue.push([start[0], start[1], first]);
    while (queue.length !== 0) {
        let curr = queue.shift();
        if (curr[0] < 0 || curr[0] > 7 || curr[1] < 0 || curr[1] > 7) {
            continue;
        }
        if (visited[curr[0]][curr[1]] === 1) {
            continue;
        }
        visited[curr[0]][curr[1]] = 1;
        let currPath = curr[2].slice();
        currPath.push(curr[0]);
        currPath.push(curr[1]);
        if (curr[0] === end[0] && curr[1] === end[1]) {
            let res = [];
            for (let i = 0; i < currPath.length; i += 2) {
                res.push([currPath[i], currPath[i + 1]]);
            }
            return res;
        }
        queue.push([curr[0] + 1, curr[1] + 2, currPath.slice()]);
        queue.push([curr[0] + 1, curr[1] - 2, currPath.slice()]);
        queue.push([curr[0] - 1, curr[1] + 2, currPath.slice()]);
        queue.push([curr[0] - 1, curr[1] - 2, currPath.slice()]);
        queue.push([curr[0] + 2, curr[1] + 1, currPath.slice()]);
        queue.push([curr[0] + 2, curr[1] - 1, currPath.slice()]);
        queue.push([curr[0] - 2, curr[1] + 1, currPath.slice()]);
        queue.push([curr[0] - 2, curr[1] - 1, currPath.slice()]);
    }
}
