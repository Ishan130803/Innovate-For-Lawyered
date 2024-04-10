# LegalEase (Web App)

A chatbot app which generates legal templates according to the user's requests!

LegalEase (Mobile App) -> https://github.com/vishrutgrover/legaleaseapp/

# Model Design

LegalEase transforms the way legal documents are created and understood, utilizing the advanced capabilities of Retrieval-Augmented Generation (RAG) to serve users' needs with unmatched precision. RAG combines the depth of large language models with targeted information retrieval to produce accurate, relevant legal texts and provide clear, concise answers to user queries. This approach ensures that documents and responses are not only generated with great accuracy but also with minimal errors, addressing the specific requirements of each query with information grounded in factual content. Whether generating complex legal documents or clarifying intricate legal doubts, LegalEase stands as a beacon of innovation, offering clarity and reliability in the often-complicated legal landscape.

Advantages over traditional fine-tuning: 
Reduces hallucinations as generated text are referenced from real world documents with valid information.
Faster and more natural responses.

# Tech Stack

Front-end - Next.JS (web-app) , Flutter (mobile-app)
Back-end - Python (FastAPI, Uvicorn, Pydantic, Azure/AWS)
AI frameworks - llama-index, HuggingFace, Pytorch.
Database - ChromaDB

#Video Demo (Mobile App)

https://drive.google.com/file/d/11FeaJM3erpHiE5fp0Cu8
LlM58LdCTquT/view?usp=sharing

#Preview of WebApp:

![Screenshot (102)](https://github.com/Ishan130803/Innovate-For-Lawyered/assets/96647844/d389d27b-afc2-4c1b-97f5-cfa2beea834f)

![Screenshot (99)](https://github.com/Ishan130803/Innovate-For-Lawyered/assets/96647844/f6c35153-693c-48a4-a0e7-780a4b2a9275)

![Screenshot (101)](https://github.com/Ishan130803/Innovate-For-Lawyered/assets/96647844/6eea36e8-50c7-4914-9fb3-630a19cc3b86)

## Using the WebApp (On Local Machine)

Once launched the app in vscode run the following script to install all the packages required for this project
```bash
npm init
```


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000/login) with your browser to see the result.

