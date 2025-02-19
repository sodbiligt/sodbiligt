import textwrap
import shutil

# Get the terminal width
terminal_width = shutil.get_terminal_size().columns

# The text to be centered
text = """
Hi 👋 I'm Sodbiligt Ganbadrakh

💡 About Me:
I'm a second-year Computer Science and Business Administration student at Furman University with an interest in web development, data analysis, and business strategy. I enjoy working on projects that combine technology and problem-solving.

🚀 What I'm Up To:

Learning more about data analysis and visualization tools like Python and Tableau
Managing Instagram pages with over 200K followers and experimenting with social media strategies
Exploring investment research as part of the Furman University Investment Club
Working as a TA for CSC121 and helping students with programming fundamentals

🎓 Experience & Projects:

Built a micro-blogging platform using PHP and MySQL
Developed data insights for a wildlife conservation project
Worked on SEO and engagement strategies for social media pages
Gained experience in business research and analysis through coursework and clubs

🌐 Connect with me:
LinkedIn

💻 Tech Stack:
Languages: Python, SQL, PHP, JavaScript, HTML/CSS
Tools: Tableau, Google Analytics, Power BI, Git
Frameworks & Platforms: React, Flask, TailwindCSS
"""

# Function to center text
def center_text(text, width):
    centered_lines = []
    for line in text.splitlines():
        centered_line = line.center(width)
        centered_lines.append(centered_line)
    return "\n".join(centered_lines)

# Center the text
centered_text = center_text(text, terminal_width)

# Print the centered text
print(centered_text)
