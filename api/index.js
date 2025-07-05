export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { birthDate, birthTime, birthPlace } = req.body;

  if (!birthDate || !birthTime || !birthPlace) {
    res.status(400).json({ error: 'Missing fields' });
    return;
  }

  // Your hardcoded or dynamic HD chart logic here
  const result = {
    type: "Manifesting Generator",
    authority: "Sacral",
    strategy: "Respond",
    profile: "1/3",
    definedCenters: ["Sacral", "Root", "Throat"],
    undefinedCenters: ["Head", "Ajna"],
    incarnationCross: "Right Angle Cross of the Sleeping Phoenix",
    gates: [34, 20, 10, 57],
    channels: ["34-20", "10-57"]
  };

  res.status(200).json(result);
}
