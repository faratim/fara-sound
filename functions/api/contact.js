export async function onRequestPost(context) {
  try {
    // Get form data from request
    const formData = await context.request.json();
    const { name, email, number, message } = formData;

    // Validate form data
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Missing required fields",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Construct email content
    const emailContent = `
      New Contact Form Submission from Fara Sound:
      
      Name: ${name}
      Email: ${email}
      Phone: ${number || "Not provided"}
      
      Message:
      ${message}
    `;

    // Send email using Cloudflare Email Workers
    // You'll need to set up Email Routing in your Cloudflare dashboard
    await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "faratim@gmail.com", name: "Fara Sound" }],
          },
        ],
        from: {
          email: "tim@farasound.com",
          name: "Fara Sound Contact Form",
        },
        subject: "New Contact Form Submission",
        content: [
          {
            type: "text/plain",
            value: emailContent,
          },
        ],
      }),
    });

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully",
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Return error response
    return new Response(
      JSON.stringify({
        success: false,
        message: "An error occurred",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
