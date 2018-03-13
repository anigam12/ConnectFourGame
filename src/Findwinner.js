export function checkMatch(a,b,c,d) {
    return ((a !== null) && (a === b) && (a === c) && (a === d));
}

export function checkWinner(boardstate) {
  //vertical match
    for (let c = 0; c < 7; c++)
        for (let r = 0; r < 4; r++)
            if (checkMatch(boardstate[c][r], boardstate[c][r+1], boardstate[c][r+2], boardstate[c][r+3]))
                return boardstate[c][r] + ' wins!'
//horizontal match
    for (let r = 0; r < 6; r++)
         for (let c = 0; c < 4; c++)
             if (checkMatch(boardstate[c][r], boardstate[c+1][r], boardstate[c+2][r], boardstate[c+3][r]))
                 return boardstate[c][r] + ' wins!'
//diagonal forward
    for (let r = 0; r < 3; r++)
         for (let c = 0; c < 4; c++)
             if (checkMatch(boardstate[c][r], boardstate[c+1][r+1], boardstate[c+2][r+2], boardstate[c+3][r+3]))
                 return boardstate[c][r] + ' wins!'
//diagona; backward
    for (let r = 0; r < 4; r++)
         for (let c = 3; c < 6; c++)
             if (checkMatch(boardstate[c][r], boardstate[c-1][r+1], boardstate[c-2][r+2], boardstate[c-3][r+3]))
                 return boardstate[c][r] + ' wins!'

    return "";
}
