from flask import Flask, request, Response
from flask_cors import CORS
import os
from google import genai

app = Flask(__name__)
CORS(app)

# # Gemini API key
# os.environ["GOOGLE_API_KEY"] = "AIzaSyCi-IoiHjNBt32sV07CUWvY-TJ-YQwJA44"
# client = genai.Client(api_key=os.environ["GOOGLE_API_KEY"])

# @app.route("/chat", methods=["POST"])
# def chat():
#     data = request.get_json()
#     user_message = data.get("message", "")

#     def generate():
#         stream = client.models.generate_content_stream(
#             model="gemini-2.5-flash",
#             contents=user_message
#         )
#         for chunk in stream:
#             if chunk.text:
#                 # Server-Sent Event (SSE) style
#                 yield f"data: {chunk.text}\n\n"

#     return Response(generate(), mimetype="text/event-stream")

# if __name__ == "__main__":
#     app.run(debug=True)




