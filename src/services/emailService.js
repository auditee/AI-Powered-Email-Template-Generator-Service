const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function createEmailTemplate() {
  try {
    const response = await openai.responses.create({
      model: "gpt-3.5-turbo",
      input: "Write a short professional email greeting."
    });

    return response.output_text;
  } catch (error) {
    if (error.code === "insufficient_quota") {
      // graceful fallback
      return "Hello, I hope this email finds you well. This is a sample AI-generated email template.";
    }

    throw error;
  }
}

module.exports = { createEmailTemplate };
