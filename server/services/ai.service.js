import axios from "axios";

export const getAIEmail = async (prompt) => {
  try {
    const resp = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return {
      success: true,
      message: "AI generation successful",
      data: resp.data.choices[0].message.content
    };

  } catch (error) {
    console.error(
      "Error generating email:",
      error.response?.data || error.message
    );

    return {
      success: false,
      message: "AI generation failed",
      data: null
    };
  }
};
