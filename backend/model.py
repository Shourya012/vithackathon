import mysql.connector
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import random

app = FastAPI()


# Step 1: Set up Database Connection
def get_db_connection():
    return mysql.connector.connect(
        host="localhost",  # E.g., localhost or an IP address
        user="root",  # E.g., root
        password="2005",  # Your MySQL password
        database="vithackathon_db"  # The database you created earlier
    )


# Step 2: Define Pydantic Models for Request and Response
class UserHealthData(BaseModel):
    user_id: int


class MealPlan(BaseModel):
    breakfast: str
    lunch: str
    dinner: str


# Step 3: Fetch Data and Generate Personalized Diet Plan
@app.post("/generate_diet_plan", response_model=MealPlan)
async def generate_diet_plan(health_data: UserHealthData):
    user_id = health_data.user_id

    # Step 4: Fetch user profile and health conditions
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    # Fetch user data
    cursor.execute("SELECT * FROM users WHERE user_id = %s", (user_id,))
    user = cursor.fetchone()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Fetch health conditions for the user
    cursor.execute("SELECT * FROM health_conditions WHERE user_id = %s", (user_id,))
    health_conditions = cursor.fetchall()

    # Fetch food classification and effects
    cursor.execute("SELECT * FROM food_classification")
    food_classification = cursor.fetchall()

    # Fetch nutritional breakdown of foods
    cursor.execute("SELECT * FROM nutritional_breakdown")
    nutritional_data = cursor.fetchall()

    # Fetch body food response (how body reacts to foods)
    cursor.execute("SELECT * FROM body_take_food_response")
    body_food_response = cursor.fetchall()

    # Fetch Indian food competition (nutrition values)
    cursor.execute("SELECT * FROM indian_food_competition")
    indian_food_competition = cursor.fetchall()

    conn.close()

    # Step 5: Generate the Personalized Diet Plan
    meal_plan = generate_personalized_diet_plan(user, health_conditions, food_classification, nutritional_data,
                                                body_food_response, indian_food_competition)

    return meal_plan


# Step 6: Function to generate the personalized diet plan based on user data
def generate_personalized_diet_plan(user, health_conditions, food_classification, nutritional_data, body_food_response,
                                    indian_food_competition):
    # Initialize an empty meal plan
    meal_plan = MealPlan(breakfast="", lunch="", dinner="")

    # Step 7: Adjust diet plan based on health conditions
    for condition in health_conditions:
        if condition['condition_name'] == 'Diabetes':
            meal_plan.lunch = "Leafy greens, low-carb, high-fiber foods"
            meal_plan.dinner = "Avoid sugary foods, focus on low-carb options"
        elif condition['condition_name'] == 'Hypertension':
            meal_plan.dinner = "Low-sodium foods like grilled chicken with quinoa"
        elif condition['condition_name'] == 'Cholesterol':
            meal_plan.breakfast = "Oats with flaxseeds and almond butter (low in cholesterol)"

    # Step 8: Select foods based on body food response
    if user['body_type'] == 'Ectomorph':
        meal_plan.breakfast = choose_food_based_on_body_type('Ectomorph', food_classification)
        meal_plan.lunch = choose_food_based_on_body_type('Ectomorph', food_classification)
        meal_plan.dinner = choose_food_based_on_body_type('Ectomorph', food_classification)
    elif user['body_type'] == 'Mesomorph':
        meal_plan.breakfast = choose_food_based_on_body_type('Mesomorph', food_classification)
        meal_plan.lunch = choose_food_based_on_body_type('Mesomorph', food_classification)
        meal_plan.dinner = choose_food_based_on_body_type('Mesomorph', food_classification)
    elif user['body_type'] == 'Endomorph':
        meal_plan.breakfast = choose_food_based_on_body_type('Endomorph', food_classification)
        meal_plan.lunch = choose_food_based_on_body_type('Endomorph', food_classification)
        meal_plan.dinner = choose_food_based_on_body_type('Endomorph', food_classification)

    # Step 9: Nutritional balance
    meal_plan.breakfast += " with proper nutritional balance: " + get_nutritional_balance('breakfast', nutritional_data)
    meal_plan.lunch += " with proper nutritional balance: " + get_nutritional_balance('lunch', nutritional_data)
    meal_plan.dinner += " with proper nutritional balance: " + get_nutritional_balance('dinner', nutritional_data)

    return meal_plan


# Step 10: Function to choose food based on body type
def choose_food_based_on_body_type(body_type, food_classification):
    suitable_foods = [food['food_name'] for food in food_classification if food['body_type'] == body_type]
    return random.choice(suitable_foods)


# Step 11: Function to get nutritional balance for each meal
def get_nutritional_balance(meal, nutritional_data):
    meal_nutrition = [nutrient for nutrient in nutritional_data if nutrient['meal_type'] == meal]
    nutritional_balance = ", ".join([f"{nutrient['nutrient']} - {nutrient['value']}" for nutrient in meal_nutrition])
    return nutritional_balance

# Run FastAPI with: uvicorn filename:app --reload