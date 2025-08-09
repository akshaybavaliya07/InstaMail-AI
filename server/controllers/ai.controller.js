import { getAIEmail } from "../services/aiService.js";

export const generateEmail = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
        data: null
      });
    }

    const emailText = await getAIEmail(prompt);

    res.status(200).json({
      success: true,
      message: "AI generation successful",
      data: emailText
    });
    
  } catch (err) {
    console.error("AI generation error:", err.message || err);

    res.status(500).json({
      success: false,
      message: "AI generation failed"
    });
  }
};
