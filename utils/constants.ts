



export const pieceMap = {
    "w_pawn": 0,
    "b_pawn": 1,
    "w_knight": 2,
    "b_knight": 3,
    "w_bishop": 4,
    "b_bishop": 5,
    "w_rook": 6,
    "b_rook": 7,
    "w_queen": 8,
    "b_queen": 9,
    "w_king": 10,
    "b_king": 11,
    "empty": 12
}


export const initialPiecePositions = [
[pieceMap.b_rook, pieceMap.b_knight, pieceMap.b_bishop, pieceMap.b_king, pieceMap.b_queen, pieceMap.b_bishop, pieceMap.b_knight, pieceMap.b_rook],
[pieceMap.b_pawn, pieceMap.b_pawn, pieceMap.b_pawn, pieceMap.b_pawn, pieceMap.b_pawn, pieceMap.b_pawn, pieceMap.b_pawn, pieceMap.b_pawn],
[12, 12, 12, 12, 12, 12, 12, 12],
[12, 12, 12, 12, 12, 12, 12, 12],
[12, 12, 12, 12, 12, 12, 12, 12],
[12, 12, 12, 12, 12, 12, 12, 12],
[pieceMap.w_pawn, pieceMap.w_pawn, pieceMap.w_pawn, pieceMap.w_pawn, pieceMap.w_pawn, pieceMap.w_pawn, pieceMap.w_pawn, pieceMap.w_pawn],
[pieceMap.w_rook, pieceMap.w_knight, pieceMap.w_bishop, pieceMap.w_king, pieceMap.w_queen, pieceMap.w_bishop, pieceMap.w_knight, pieceMap.w_rook]
]