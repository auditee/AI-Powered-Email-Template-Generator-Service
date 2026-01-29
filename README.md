# AI-Powered Email Template Generator (Backend)

This project is a simple backend service built using **Node.js and
Express.js**.\
It demonstrates clean backend architecture with **controller--service
separation** and **AI integration** using environment variables.

------------------------------------------------------------------------

## Tech Stack

-   Node.js
-   Express.js
-   OpenAI API
-   dotenv

------------------------------------------------------------------------

## Project Structure

    AI-Powered-Email-Template-Generator-Service/
    │── src/
    │   ├── app.js
    │   ├── controllers/
    │   │   └── emailController.js
    │   └── services/
    │       └── emailService.js
    │── .env
    │── package.json
    │── README.md

------------------------------------------------------------------------

##  Environment Variables

Create a `.env` file in the root directory:

    OPENAI_API_KEY=your_openai_api_key_here

> The API key is never hardcoded and is securely accessed using
> environment variables.

------------------------------------------------------------------------

## ▶️ How to Run the Project

1.  Install dependencies:

``` bash
npm install
```

2.  Start the server:

``` bash
node src/app.js
```

3.  Server will run on:

```{=html}
<!-- -->
```
    http://localhost:3000

------------------------------------------------------------------------

## API Endpoint

### GET `/email`

Generates an AI-powered email template (or a fallback response if quota
is exceeded).

#### Sample Response

``` json
{
  "aiResponse": "Hello, I hope this email finds you well. This is a sample AI-generated email template."
}
```

------------------------------------------------------------------------

##  AI Quota Handling

If OpenAI API quota is exceeded, the application gracefully returns a
predefined AI-style email response instead of crashing.\
This ensures API stability and reliable behavior.

------------------------------------------------------------------------

## AI Prompt Design Explanation

The AI prompt was designed to be simple, clear, and task-focused.\
It specifies the tone and purpose of the email to generate concise and
professional content.\
The prompt avoids unnecessary complexity to reduce token usage and
ensure reliable responses.

------------------------------------------------------------------------

##  Assignment Highlights

-   Clean separation of controller and service logic
-   Secure API key handling using `.env`
-   AI integration logic implemented in service layer
-   Graceful error handling and fallback response

------------------------------------------------------------------------

##  Conclusion

This project demonstrates backend development best practices, AI
integration, and clean architecture suitable for real-world
applications.

