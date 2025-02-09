import aiohttp

VOICE_SERVER_URL = "http://voice-processing-system-ip:8000/process"

async def process_voice_input(audio_data):
    async with aiohttp.ClientSession() as session:
        async with session.post(VOICE_SERVER_URL, files={"file": audio_data}) as resp:
            return await resp.json()
