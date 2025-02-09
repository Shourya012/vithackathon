from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import user, chatbot, voice, nutrition

app = FastAPI()

# Allow frontend (React) to communicate with FastAPI backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all domains (change this in production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routes
app.include_router(user.router, prefix="/user", tags=["User"])
app.include_router(chatbot.router, prefix="/chatbot", tags=["Chatbot"])
app.include_router(voice.router, prefix="/voice", tags=["Voice"])
app.include_router(nutrition.router, prefix="/nutrition", tags=["Nutrition"])

@app.get("/")
def root():
    return {"message": "Welcome to Ayurveda & Nutrition API"}
