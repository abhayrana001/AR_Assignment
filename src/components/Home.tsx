const Home = () => {
    return (
        <section className="h-60 md:h-150 bg-[url('/home.png')] bg-cover flex  ">
            <div className="m-auto text-white md:mx-[350px] md:my-[230px] ">
                <h1 className="text-3xl md:text-4xl font-bold">Welcome to </h1>
                <h2 className="text-2xl font-semibold md:text-3xl">our Portfolio</h2>
                <p className="md:text-xl">We love to show our work</p>
            </div>
        </section>
    )
}

export default Home