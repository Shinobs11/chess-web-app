
import { ActivePiece } from '../types/ChessTypes';
import * as P from '../public/index'
export const pieceSVGMap: { [index: number]: any } = [
    P.WhitePawn,
    P.BlackPawn,
    P.WhiteKnight,
    P.BlackKnight,
    P.WhiteBishop,
    P.BlackBishop,
    P.WhiteRook,
    P.BlackRook,
    P.WhiteQueen,
    P.BlackQueen,
    P.WhiteKing,
    P.BlackKing
]



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

export const pieceTagsFromNumber: { [index: number]: string } = {
    0: "white pawn",
    1: "black pawn",
    2: "white knight",
    3: "black knight",
    4: "white bishop",
    5: "black bishop",
    6: "white rook",
    7: "black rook",
    8: "white queen",
    9: "black queen",
    10: "white king",
    11: "black king"
}


export const initialBoardState = [
    [pieceMap.b_rook, pieceMap.b_knight, pieceMap.b_bishop, pieceMap.b_king, pieceMap.b_queen, pieceMap.b_bishop, pieceMap.b_knight, pieceMap.b_rook],
    [pieceMap.b_pawn, pieceMap.b_pawn, pieceMap.b_pawn, pieceMap.b_pawn, pieceMap.b_pawn, pieceMap.b_pawn, pieceMap.b_pawn, pieceMap.b_pawn],
    [12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 12, 12, 12, 12, 12],
    [12, 12, 12, 12, 12, 12, 12, 12],
    [pieceMap.w_pawn, pieceMap.w_pawn, pieceMap.w_pawn, pieceMap.w_pawn, pieceMap.w_pawn, pieceMap.w_pawn, pieceMap.w_pawn, pieceMap.w_pawn],
    [pieceMap.w_rook, pieceMap.w_knight, pieceMap.w_bishop, pieceMap.w_king, pieceMap.w_queen, pieceMap.w_bishop, pieceMap.w_knight, pieceMap.w_rook]
]

export const initialActivePieces: Array<ActivePiece> =
    [
        {
            "pieceType": 7,
            "position": [
                0,
                0
            ]
        },
        {
            "pieceType": 3,
            "position": [
                0,
                1
            ]
        },
        {
            "pieceType": 5,
            "position": [
                0,
                2
            ]
        },
        {
            "pieceType": 11,
            "position": [
                0,
                3
            ]
        },
        {
            "pieceType": 9,
            "position": [
                0,
                4
            ]
        },
        {
            "pieceType": 5,
            "position": [
                0,
                5
            ]
        },
        {
            "pieceType": 3,
            "position": [
                0,
                6
            ]
        },
        {
            "pieceType": 7,
            "position": [
                0,
                7
            ]
        },
        {
            "pieceType": 1,
            "position": [
                1,
                0
            ]
        },
        {
            "pieceType": 1,
            "position": [
                1,
                1
            ]
        },
        {
            "pieceType": 1,
            "position": [
                1,
                2
            ]
        },
        {
            "pieceType": 1,
            "position": [
                1,
                3
            ]
        },
        {
            "pieceType": 1,
            "position": [
                1,
                4
            ]
        },
        {
            "pieceType": 1,
            "position": [
                1,
                5
            ]
        },
        {
            "pieceType": 1,
            "position": [
                1,
                6
            ]
        },
        {
            "pieceType": 1,
            "position": [
                1,
                7
            ]
        },
        {
            "pieceType": 0,
            "position": [
                6,
                0
            ]
        },
        {
            "pieceType": 0,
            "position": [
                6,
                1
            ]
        },
        {
            "pieceType": 0,
            "position": [
                6,
                2
            ]
        },
        {
            "pieceType": 0,
            "position": [
                6,
                3
            ]
        },
        {
            "pieceType": 0,
            "position": [
                6,
                4
            ]
        },
        {
            "pieceType": 0,
            "position": [
                6,
                5
            ]
        },
        {
            "pieceType": 0,
            "position": [
                6,
                6
            ]
        },
        {
            "pieceType": 0,
            "position": [
                6,
                7
            ]
        },
        {
            "pieceType": 6,
            "position": [
                7,
                0
            ]
        },
        {
            "pieceType": 2,
            "position": [
                7,
                1
            ]
        },
        {
            "pieceType": 4,
            "position": [
                7,
                2
            ]
        },
        {
            "pieceType": 10,
            "position": [
                7,
                3
            ]
        },
        {
            "pieceType": 8,
            "position": [
                7,
                4
            ]
        },
        {
            "pieceType": 4,
            "position": [
                7,
                5
            ]
        },
        {
            "pieceType": 2,
            "position": [
                7,
                6
            ]
        },
        {
            "pieceType": 6,
            "position": [
                7,
                7
            ]
        }
    ]