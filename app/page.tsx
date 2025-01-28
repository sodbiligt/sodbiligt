import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hi, my name is Sodbiligt Ganbadrakh. I am a second-year student at Furman University, double majoring in Computer Science and Business Administration. I am currently seeking internship opportunities in web development, cybersecurity, software development, or related fields, where I can apply my skills and contribute meaningfully to the tech industry.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
