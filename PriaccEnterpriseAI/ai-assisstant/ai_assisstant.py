import os
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from dotenv import load_dotenv

from langchain_openai import ChatOpenAI
from langchain_core.prompts import PromptTemplate

load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

if not OPENAI_API_KEY:
    raise ValueError("OPENAI_API_KEY not set in .env")

llm = ChatOpenAI(
    model="gpt-4o",
    temperature=0,
    openai_api_key=OPENAI_API_KEY
)

app = FastAPI()

class UserRequest(BaseModel):
    user_id: str
    message: str

prompt = PromptTemplate(
    input_variables=["message"],
    template="""
    Classify this user request into:
    - apply_leave
    - create_po
    - cancel_po
    - check_inventory
    - get_vendor_list
    - view_profile
    Only return the intent word.
    Message: {message}
    """
)

@app.post("/process-message")
async def process_message(req: UserRequest):
    response = llm.invoke(prompt.format(message=req.message))
    intent = response.content.strip().lower()

    valid_intents = [
        "apply_leave", "create_po", "cancel_po",
        "check_inventory", "get_vendor_list", "view_profile"
    ]

    if intent not in valid_intents:
        raise HTTPException(status_code=400, detail="Unknown intent")

    payload = {
        "user_id": req.user_id,
        "intent": intent,
        "message": req.message
    }

    return {"status": "success", "payload": payload}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("ai_assistant:app", host="0.0.0.0", port=8000, reload=True)
