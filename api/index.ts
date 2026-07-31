import app, { initPromise } from "../server";

export default async function handler(req: any, res: any) {
  if (initPromise) {
    await initPromise;
  }
  return app(req, res);
}
