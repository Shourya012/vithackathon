from fastapi import APIRouter
import aiohttp

router = APIRouter()

NLP_VOICE_SERVER = "http://nlp-server-ip:8001/voice-to-text"

@router.post("/voice/")
async def voice_to_text():
    async with aiohttp.ClientSession() as session:
        async with session.post(NLP_VOICE_SERVER) as resp:
            response_data = await resp.json()

    return {"transcription": response_data.get("text", "Error processing voice input")}
