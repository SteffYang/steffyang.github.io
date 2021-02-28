import * as React from "react"
import Layout from "../components/Defaultlayout"
import { Link } from "gatsby"
import EngagedAICover from "../assets/engaged-ai-cover.png"
import LinkByCover from "../assets/linkby-cover.png"

// styles

// markup
const IndexPage = () => {
  return (
    <Layout>
      <title>Steff Yang</title>
      <div className="grid grid-cols-5 py-10 lg:py-20">
        <div className="col-span-4">
          <p className="text-3xl leading-normal lg:text-5xl lg:leading-normal font-serif font-light">Hi <span role="img" aria-label="waving-hands">&#x1F44B;&#x1F3FB;</span></p>
          <p className="text-3xl leading-normal lg:text-5xl lg:leading-normal font-serif font-light">I'm Steff, an avid problem-solver who employs design to create meaningful impacts.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div>
          <p className="text-xl uppercase text-pink-400">currently in</p>
          <p className="text-xl uppercase">singapore</p>
        </div>
        <div>
          <p className="text-xl uppercase text-pink-400">previously at</p>
          <p className="text-xl uppercase">
            <a className="border-b-0 hover:border-b-2 hover:border-pink-600" rel="noreferrer" href="https://unh3o.com/" target="_blank">unh3o inc.</a>, <a class="border-b-0 hover:border-b-2 hover:border-pink-600" rel="noreferrer" href="https://en.wikipedia.org/wiki/Taiwan" target="_blank">taiwan</a></p>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-4xl lg:text-6xl pt-20 lg:pt-40">Selected Works</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 py-20 gap-10">
        <Link className="md:col-span-2" to="/works/engaged-ai/">
          <img src={EngagedAICover} alt="Engaged.AI Product Interface" />
        </Link>
        <div>
          <p class="text-pink-700 font-bold text-3xl leading-normal">Engaged.AI</p>
          <p class="mt-2 text-pink-600 uppercase font-light">2018-2020 @ UNH3O Inc.</p>
          <p class="mt-2 font-light">
            Empowering businesses to make data-informed decisions and drive revenue through social.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 py-20 gap-10">
        <div>
          <p class="text-pink-700 font-bold text-3xl leading-normal">LinkBy</p>
          <p class="mt-2 text-pink-600 uppercase font-light">2020-2020 @ UNH3O Inc.</p>
          <p class="mt-2 font-light">
            Leading the vision of transactional experiences on social.
          </p>
        </div>
        <Link className="md:col-span-2" to="/works/linkby/">
          <img src={LinkByCover} alt="LinkBy Product Interface" />
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage
