export interface ResponseType {
  type: string;
  payload: any;
}


export interface CreateGameResponse extends ResponseType{
  type: string;
  payload: {
    gameState: string;
    gameUIDCookie: GoCookieType;
  }
}
export interface GoCookieType {
  Domain: string;
  Expires: string;
  HttpOnly: boolean;
  MaxAge: number;
  Name: string;
  Path: string;
  Raw: string;
  RawExpires: string;
  SameSite: number;
  Secure: boolean;
  Unparsed: null;
  Value: string;
}