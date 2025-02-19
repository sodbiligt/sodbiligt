class Bio:
    def __init__(self, name, university, degree, interests, projects, experiences, tech_stack, linkedin):
        self.name = name
        self.university = university
        self.degree = degree
        self.interests = interests
        self.projects = projects
        self.experiences = experiences
        self.tech_stack = tech_stack
        self.linkedin = linkedin

    def display_bio(self):
        print(f"Hi 👋 I'm {self.name}")
        print("💡 About Me:")
        print(f"I'm a {self.degree} student at {self.university}, originally from Mongolia 🇲🇳.")
        print(f"I have a strong interest in {', '.join(self.interests)} and enjoy working on projects that combine technology and problem-solving.\n")

        print("🚀 What I'm Up To:")
        for item in self.projects:
            print(f"- {item}")
        print()

        print("🎓 Experience & Projects:")
        for item in self.experiences:
            print(f"- {item}")
        print()

        print("🌐 Connect with me:")
        print(self.linkedin)
        print()

        print("💻 Tech Stack:")
        print(f"Languages: {', '.join(self.tech_stack['languages'])}")
        print(f"Tools: {', '.join(self.tech_stack['tools'])}")
        print(f"Frameworks & Platforms: {', '.join(self.tech_stack['frameworks'])}")


bio_info = Bio(
    name="Sodbiligt Ganbadrakh",
    university="Furman University",
    degree="second-year Computer Science and Business Administration",
    interests=["web development", "data analysis", "business strategy"],
    projects=[
        "Learning more about data analysis and visualization tools like Python and Tableau",
        "Managing Instagram pages with over 200K followers and experimenting with social media strategies",
        "Exploring investment research as part of the Furman University Investment Club",
        "Working as a TA for CSC121 and helping students with programming fundamentals"
    ],
    experiences=[
        "Built a micro-blogging platform using PHP and MySQL",
        "Developed data insights for a wildlife conservation project",
        "Worked on SEO and engagement strategies for social media pages",
        "Gained experience in business research and analysis through coursework and clubs"
    ],
    tech_stack={
        "languages": ["Python", "SQL", "PHP", "JavaScript", "HTML/CSS"],
        "tools": ["Tableau", "Google Analytics", "Power BI", "Git"],
        "frameworks": ["React", "Flask", "TailwindCSS"]
    },
    linkedin="LinkedIn"
)

bio_info.display_bio()
