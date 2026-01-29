console.log("API KEY:", process.env.OPENAI_API_KEY);

const { createEmailTemplate } = require("../services/emailService");

async function generateEmail(req, res) {
  try {
    const result = await createEmailTemplate();

    res.json({
      aiResponse: result
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "AI call failed"
    });
  }
}

module.exports = { generateEmail };
