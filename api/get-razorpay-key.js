module.exports = (req, res) => {
  // Read live Razorpay Key ID from Vercel Environment Variables
  const keyId = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  return res.status(200).json({ keyId });
};
