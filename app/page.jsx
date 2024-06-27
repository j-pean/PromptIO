import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className ="w-full flex center flex-col">
        <h1 className="head_text text-center">Discover and Share
            <br className ="max-md:hidden" />
            <span className= "blue_gradient text-center">AI Powered Prompts</span>
        </h1>
        <p className = "desc text-center">Prompt.IO is a way for students to share AI prompts that helped them learn important concepts</p>
        <Feed/>
        </section>
  )
}

export default Home