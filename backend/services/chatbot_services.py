import aiohttp

CHATBOT_SERVER_URL = "http://chatbot-system-ip:8000/respond"

async def get_chatbot_response(user_input: str):
    async with aiohttp.ClientSession() as session:
        async with session.post(CHATBOT_SERVER_URL, json={"message": user_input}) as resp:
            return await resp.json()
