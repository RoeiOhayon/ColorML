from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import requests
import uvicorn

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "https://example.com",
    "https://example.net"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/colorize/{image}")
def colorize_image(image: str):
    print(image)
    r = requests.post(
        "https://api.deepai.org/api/colorizer",
        data={
            'image': image,
        },
        headers={'api-key': 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K'}
    )
    print(r)

    colorized_image = r.json()
    print(colorized_image)

    return colorized_image


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
