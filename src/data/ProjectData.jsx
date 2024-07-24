import imgKong from "../assets/images/projects/kong-image.jpg";

export const projects = [
  {
    id: 0,
    project_name: "Kong",
    image: imgKong,
    intro_text:
      "Get ready to fall in love with nature! Kong is a gamified plant identification app powered by OpenAI and StabilityAI which aims to foster a love for nature in a fun and artful way.",
    url: "https://kong-app.netlify.app/",
    github_frontend: "https://github.com/juliakimseohyeon/kong-app",
    github_backend: "https://github.com/juliakimseohyeon/kong-app-api",
    tags: [
      "Full Stack",
      "Open AI",
      "Stability AI",
      "Image Recognition",
      "Image Generation",
      "Prompt Engineering",
    ],
    description: {
      "What is Kong?":
        "Kong helps foster the love for nature by gamifying plant identification. When user uploads or takes a photo of a plant, MyPlantnet identifies it, OpenAI API provides information about the plant, and StabilityAI API generates a Pokémon-like illustration. The identified plant's illustration and information are then added to the user's collection.",
      "Why is Kong necessary?":
        "According to the World Economic Forum, almost 8 out of 10 children do not recognize common plants like an oak leaf or a bluebell. In a world where climate crisis is worse than ever, it is essential that we don't forget about the very basics: fostering a culture where we love and appreciate nature and have empathy towards the environment.",
      "Tech Stack": [
        "React",
        "Express",
        "MySQL",
        "OpenAI API",
        "StabilityAI API",
      ],
      "Key Learnings": [
        "How to write efficient and effective prompts for OpenAI API and StableAI API",
        "Know when to change course of the project",
        "Sticking with the planned deliverable and creating a solid MVP",
        "Importance of a good night's sleep",
      ],
      "Next Steps": [
        "Create login so each user would have access to their own plant collection",
        "Incorporate Comfy UI for fine-tuned image generation",
        "Tutorial on initial start to show how app works",
        "Ability to send multiple photos to API for better identification",
        "Google Maps integration to visually represent plant's habitat",
        "Featured Plants page to show nearby plants that can be added to the collection",
      ],
    },
  },
];
