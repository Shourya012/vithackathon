from fastapi import APIRouter, HTTPException
import aiohttp

router = APIRouter()

RASA_CHATBOT_URL = "http://rasa-server-ip:5005/webhooks/rest/webhook"

@router.post("/chat/")
async def chat(data: dict):
    user_message = data.get("message")
    if not user_message:
        raise HTTPException(status_code=400, detail="No message provided")

    async with aiohttp.ClientSession() as session:
        async with session.post(RASA_CHATBOT_URL, json={"sender": "user", "message": user_message}) as resp:
            rasa_response = await resp.json()

    response_text = rasa_response[0]["text"] if rasa_response else "No response"
    return {"response": response_text}
