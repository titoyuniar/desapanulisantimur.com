export class ErhanesiaException extends Error {
  private code: number;
  constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }
  getCode() {
    return this.code;
  }
}
