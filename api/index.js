res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
res.setHeader('Access-Control-Allow-Methods', 'POST');
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { birthDate, birthTime, birthPlace } = req.body;

  if (!birthDate || !birthTime || !birthPlace) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Simulate sample chart response — replace with your HD logic
  res.status(200).json({
    type: "Manifesting Generator",
    authority: "Sacral",
    strategy: "Respond",
    profile: "1/3",
    definedCenters: ["Sacral", "Root", "Throat"],
    undefinedCenters: ["Head", "Ajna"],
    incarnationCross: "Right Angle Cross of the Sleeping Phoenix",
    gates: [34, 20, 10, 57],
    channels: ["34-20", "10-57"]
  });
}
