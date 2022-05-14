import * as React from "react";
import { useState, useEffect } from "react";
import type { PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
import ChessBoard from "./ChessBoard";
import useWebSocket from "../hooks/useWebSocket";
import {updateGameState} from '../ducks/ChessDuck';
import type {CreateGameResponse, GoCookieType} from '../types/APITypes';
import Cookies from 'js-cookie';
interface PropTypes {}

export default function ChessGame({ ...props }: PropsWithChildren<PropTypes>) {
  const {
    sendJsonMessage,
    ws,
    messageQueue,
    closeWebsocket,
    hasMessages,
    popFromQueue,
  } = useWebSocket();
  const dispatch = useDispatch();
  useEffect(() => {
    if (hasMessages()) {
      const message = popFromQueue();
      if (message) {
        console.log(message);
        switch (message.type) {
          case "CreateGameResponse": {
            dispatch(updateGameState((message as CreateGameResponse).payload.gameState));
            const cookie:GoCookieType = (message as CreateGameResponse).payload.gameUIDCookie;
            const opt:Cookies.CookieAttributes = {
              "domain": cookie.Domain,
              "expires": Date.parse(cookie.Expires),
              "path": cookie.Path,
              "sameSite": "Lax",
              "secure": false
            }
            Cookies.set(
              cookie.Name,
              cookie.Value,
              opt
            )
            break;
          }
          default:
            break;
        }
      }
    }
  }, [messageQueue]);

  const C = {
    createGameType: "CreateGame",
    webSocketOpen: "WebSocketOpen",
    requestDraw: "RequestDraw",
    resign: "Resign",
    requestLegalMoves: "RequestLegalMoves",
  };

  const webSocketOpen = () => {
    sendJsonMessage({
      type: C.webSocketOpen,
      payload: null,
    });
  };
  const createGame = () => {
    sendJsonMessage({
      type: C.createGameType,
      payload: null,
    });
  };
  const requestDraw = () => {
    sendJsonMessage({
      type: C.requestDraw,
      payload: null,
    });
  };
  const resign = () => {
    sendJsonMessage({
      type: C.resign,
      payload: null,
    });
  };
  const requestLegalMoves = () => {
    sendJsonMessage({
      type: C.requestLegalMoves,
      payload: null,
    });
  };

  const actionMap = {
    WebSocketOpen: webSocketOpen,
    CreateGame: createGame,
    RequestDraw: requestDraw,
    Resign: resign,
    RequestLegalMoves: requestLegalMoves,
    CloseWebSocket: closeWebsocket,
  };
  return <ChessBoard actionMap={actionMap} />;
}
