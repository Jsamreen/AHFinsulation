export const config = { runtime: "nodejs22.x" };
export default (req, res) => res.json({ ok: true, at: new Date().toISOString() });
