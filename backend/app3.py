from fastapi import FastAPI
from pydantic import BaseModel
from langchain_groq import ChatGroq
from langchain_core.chat_history import BaseChatMessageHistory
from langchain_core.messages import BaseMessage
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.runnables.history import RunnableWithMessageHistory
from pydantic import BaseModel, Field
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

# --- CORS ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Production me change to your frontend domain
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- In-memory chat history class ---
class InMemoryHistory(BaseChatMessageHistory, BaseModel):
    messages: list[BaseMessage] = Field(default_factory=list)

    def add_messages(self, messages: list[BaseMessage]) -> None:
        self.messages.extend(messages)

    def clear(self) -> None:
        self.messages = []

# Simple memory storage for all users
chat_memory_store = {}

def get_by_session_id(session_id: str) -> BaseChatMessageHistory:
    if session_id not in chat_memory_store:
        chat_memory_store[session_id] = InMemoryHistory()
    return chat_memory_store[session_id]

# --- Chatbot setup ---
llm = ChatGroq(
    groq_api_key=os.getenv("GROQ_API_KEY"),
    model="llama-3.3-70b-versatile"
)

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful and friendly assistant. Only Answer the pakistan relevant topic and if the topic is irrelevant to pakistan then politely say Sorry I can only Answer Pakistan relevant questions  . If you cannot answer, say: \"Sorry, I don’t know the answer.\""),
    MessagesPlaceholder(variable_name="history"),
    ("human", "{text}")
])

chain = prompt | llm

runnable = RunnableWithMessageHistory(
    chain,
    get_by_session_id,
    input_messages_key="text",
    history_messages_key="history"
)

# --- API Schema ---
class Message(BaseModel):
    session_id: str
    text: str

# --- Chat endpoint ---
@app.post("/chat")
async def chat_api(message: Message):
    try:
        response = await runnable.ainvoke(
            {"text": message.text},
            config={"configurable": {"session_id": message.session_id}},
        )

        bot_reply = response.content if hasattr(response, "content") else str(response)

        print("USER:", message.text)
        print("BOT:", bot_reply)

        return {"response": bot_reply}

    except Exception as e:
        print("AI Error:", e)
        return {"response": "AI error occurred"}


# --- Clear chat endpoint (optional) ---
@app.post("/clear_chat")
def clear_chat(message: Message):
    if message.session_id in chat_memory_store:
        chat_memory_store[message.session_id].clear()
    return {"status": "cleared"}
