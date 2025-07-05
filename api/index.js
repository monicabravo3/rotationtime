export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { date, time, place } = req.body;

  if (!date || !time || !place) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // Temporary fake data (replace later with real chart logic)
  return res.status(200).json({
    type: "Manifesting Generator",
    authority: "Sacral",
    strategy: "To Respond",
    profile: "1/3",
    gates: [34, 20, 10],
    definedCenters: ["Sacral", "Throat"],
    undefinedCenters: ["Heart", "Solar Plexus"],
    incarnationCross: "Right Angle Cross of the Sleeping Phoenix"
  });
}
