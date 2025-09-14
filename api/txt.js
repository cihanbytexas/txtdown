export default function handler(req, res) {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({ error: "Metin eksik" });
  }

  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Content-Disposition", "attachment; filename=metin.txt");
  res.send(text);
}
