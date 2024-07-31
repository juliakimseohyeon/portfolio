import imgKong from "../assets/images/projects/kong-image.jpg";
import imgKongWhat from "../assets/images/projects/kong-what.jpg";
import imgKongWhy from "../assets/images/projects/kong-why.jpg";
import imgKongHow from "../assets/images/projects/kong-how.png";
import imgKongTech from "../assets/images/projects/kong-tech.jpg";
import imgBubblefish from "../assets/images/projects/bubblefish-image.jpg";
import imgBubblefishWho from "../assets/images/projects/bubblefish-who.jpg";
import imgBubblefishWhy from "../assets/images/projects/bubblefish-why.jpg";
import imgBubblefishTech from "../assets/images/projects/bubblefish-tech.jpg";

export const projects = [
  {
    id: 0,
    project_name: "Kong",
    image: imgKong,
    intro_text:
      "Get ready to fall in love with nature! Kong is a gamified plant identification app powered by OpenAI and StabilityAI which aims to foster a love for nature in a fun and artistic way.",
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
      what: {
        image: imgKongWhat,
        subtitle: "What Is Kong?",
        text: `<p>Kong is a <b>gamified plant identification app powered by OpenAI and StabilityAI</b> which aims to foster a love towards nature in a fun and artistic way. When user uploads or takes a photo of a plant, the app identifies the plant and generates a Pokémon-like illustration. The content is then added to the user's collection.</p>`,
      },
      why: {
        image: imgKongWhy,
        subtitle: "Why is Kong necessary?",
        text: `<p>According to the World Economic Forum, <b>almost 8 out of 10 children do not recognize common plants</b> like an oak leaf or a bluebell. In a world where climate crisis is worse than ever, it is essential that we don't forget about the very basics: fostering a culture where we love and appreciate nature and have empathy towards the environment.</p>`,
      },
      tech_stack: {
        image: imgKongTech,
        subtitle: "Tech Stack",
        text: `<ul>
        <li>React</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>OpenAI API</li>
        <li>StabilityAI API</li>
        </ul>`,
      },
      how: {
        image: imgKongHow,
        subtitle: "How does it work?",
        text: `<ol>
        <li>User takes or uploads photo of a plant
</li>
        <li>MyPlantnet API identifies the plant
</li>
        <li>OpenAI API generates the plant data
</li>
        <li>StabilityAI API creates the illustration
</li>
        <li>User can read, update, or delete plant data
</li>
        </ol>`,
      },
      key_learnings: {
        subtitle: "Key Learnings",
        text: `<ul>
        <li>How to write efficient and effective prompts for OpenAI API and StableAI API</li>
        <li>Know when to change course of the project</li>
        <li>Sticking with the planned deliverable and creating a solid MVP</li>
        <li>Importance of a good night's sleep</li>
        </ul>`,
      },
      next_steps: {
        subtitle: "Next Steps",
        text: `<ul>
        <li>Create login so each user would have access to their own plant collection</li>
        <li>Incorporate Comfy UI for fine-tuned image generation</li>
        <li>Tutorial on initial start to show how app works</li>
        <li>Ability to send multiple photos to API for better identification</li>
        <li>Google Maps integration to visually represent plant's habitat</li>
        <li>Featured Plants page to show nearby plants that can be added to the collection</li>
        </ul>`,
      },
    },
  },
  {
    id: 1,
    project_name: "Bubblefish UX",
    image: imgBubblefish,
    intro_text:
      "'Dive in' to the art of user-centric design with Bubblefish UX! Their revamped website showcases their commitment to creating accessible, modern, and visually engaging user experiences.",
    url: "https://www.bubblefishux.design/",
    tags: ["Front End", "Tailwind", "Accessibility", "UI Design", "Animation"],
    description: {
      who: {
        image: imgBubblefishWho,
        subtitle: "Who is Bubblefish UX Design?",
        text: `<p>Bubblefish UX Design is a Brighton-based UX consultancy. They have provided holistic UX design services to major UK companies such as 'Chambers and Partners', 'HMRC', 'Public Health Wales', and 'Tristar Worldwide'.</p>`,
      },
      why: {
        image: imgBubblefishWhy,
        subtitle: "Why was the new website necessary?",
        text: `<p>Because their focus is on creating designs that are accessible and easy to use for everyone, Bubblefish UX needed a website that would also embody those values. They also wanted to move away from their old website design to something that was more modern and polished.</p>`,
      },
      tech_stack: {
        image: imgBubblefishTech,
        subtitle: "Tech Stack",
        text: `<ul>
        <li>React</li>
        <li>Tailwind</li>
        </ul>`,
      },
      next_steps: {
        subtitle: "Next Steps",
        text: `<ul><li>Implement additional features such as a blog or news section to keep the content fresh and engaging.</li><li>Expand the website to include case studies and client testimonials to showcase successful projects.</li><li>Regularly update the design and content to keep up with the latest trends and user expectations.</li></ul>`,
      },
    },
  },
];
