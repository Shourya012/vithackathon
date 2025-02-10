from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from routes import user, nutrition  # Keeping only user & nutrition routes

app = FastAPI()

# Allow frontend (React) to communicate with FastAPI backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all domains (change this in production)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Temporary database for authentication (Replace with actual DB)
users = {}

class UserSignup(BaseModel):
    name: str
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

# User Signup Route
@app.post("/signup")
def signup(user: UserSignup):
    if user.email in users:
        raise HTTPException(status_code=400, detail="Email already registered")
    users[user.email] = {"name": user.name, "password": user.password}
    return {"success": True, "message": "Signup successful"}

# User Login Route
@app.post("/login")
def login(user: UserLogin):
    if user.email not in users or users[user.email]["password"] != user.password:
        raise HTTPException(status_code=400, detail="Invalid email or password")
    return {"success": True, "user": {"email": user.email, "name": users[user.email]["name"]}}

# Register Additional Routes
app.include_router(user.router, prefix="/user", tags=["User"])
app.include_router(nutrition.router, prefix="/nutrition", tags=["Nutrition"])

# Root Endpoint
@app.get("/")
def root():
    return {"message": "Welcome to Ayurveda & Nutrition API"}
