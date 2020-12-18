import React from "react"
import Layout from "../components/Defaultlayout"
import Headshot from "../assets/headshot.jpg"
import DivingSteff from "../assets/steff-diving.jpg"
import JapanSteff from "../assets/steff-japan.jpg"
import DeerSteff from "../assets/steff-deer.jpg"
import NewYorkSteff from "../assets/steff-newyork.jpg"
import KoreaSteff from "../assets/steff-korea.jpg"
import ElephantSteff from "../assets/steff-elephant.jpg"
import TainanSteff from "../assets/steff-tainan.jpg"

// markup
const AboutPage = () => {
  return (
    <Layout>
      <title>About | Steff Yang</title>
      <div className="md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div class="md:col-span-2">
            <img src={Headshot} alt="Steff" />
          </div>
          <div className="md:col-span-3 flex flex-col space-y-20">
            <div class="md:pt-20">
              <p class="text-lg leading-relaxed md:text-xl md:leading-relaxed font-light">
                Passionate about designing for data democratization and positive behavioral change, I've been solving problems in the marketing technology domain over the past few years: empowering users to make data-driven marketing decisions and ultimately drive tangible business results.
              </p>
              <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed font-light mt-10">
                Curious by nature, I enjoy connecting, understanding, and collaborating with people. I get jazzed when working in multidisciplinary teams to find a balance between desirability, viability, and feasibility.
              </p>
              <p className="text-lg leading-relaxed md:text-xl md:leading-relaxed font-light mt-10">
                I lose track of time when I'm playing Civilization V (a 4X game), experimenting with film cameras (you can see some of my works below), throwing ceramics, or maybe reading something interesting (could be a Wikipedia page or a good book.)
              </p>
              <p class="text-lg leading-relaxed md:text-xl md:leading-relaxed font-light mt-10">
                I'm currently venturing into the uncharted territories – healthcare and personal finance – and exploring innovative and impactful solutions in these fields. I'm always open to fun side-projects. Please don't hesitate to reach out and have a chat with me!
              </p>
            </div>
            <div className="">
              <div class="grid grid-cols-1 md:grid-cols-4 md:gap-2 md:gap-4">
                <div class="md:col-span-4">
                  <p class="text-xl uppercase text-pink-400">design experience</p>
                </div>
                <div class="mt-4 md:mt-0">
                  <p class="md:text-lg">2018 – 2020</p>
                </div>
                <div class="md:col-span-3">
                  <p class="md:text-lg">
                    UNH3O Inc.
                    <span class="text-gray-400 px-4">Taipei, Taiwan</span>
                  </p>
                  <p class="md:text-lg text-pink-500">Chief Product Officer / Product Designer</p>
                </div>
                <div class="mt-4 md:mt-0">
                  <p class="md:text-lg">2015 – 2018</p>
                </div>
                <div class="md:col-span-3">
                  <p class="md:text-lg">
                    QSearch (Dolyman Inc.)
                    <span class="text-gray-400 px-4">Taipei, Taiwan</span>
                  </p>
                  <p class="md:text-lg text-pink-500">UX Engineer</p>
                </div>
                <div class="mt-4 md:mt-0">
                  <p class="md:text-lg">2015 – 2015</p>
                </div>
                <div class="md:col-span-3">
                  <p class="md:text-lg">
                    Dcard Inc.
                    <span class="text-gray-400 px-4">Taipei, Taiwan</span>
                  </p>
                  <p class="md:text-lg text-pink-500">UX Engineering Summer Intern</p>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <p class="text-xl uppercase text-pink-400">you can reach out to me through</p>
              <p class="text-lg mt-4">steffyangc@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="hidden md:grid md:grid-cols-3 gap-10 mt-40">
          <div className="col-span-2">
            <img src={DivingSteff} alt="Steff diving" />
          </div>
          <div>
            <img src={JapanSteff} alt="Taken in Japan by Steff" />
          </div>
          <div>
            <img src={KoreaSteff} alt="Taken in South Korea by Steff" />
          </div>
          <div>
            <img src={DeerSteff} alt="A deer taken in Japan by Steff" />
          </div>
          <div>
            <img src={ElephantSteff} alt="An elephant taken in Thailand by Steff" />
          </div>
          <div>
            <img src={NewYorkSteff} alt="Taken in New York by Steff" />
          </div>
          <div className="col-span-2">
            <img src={TainanSteff} alt="Steff in Tainan, Taiwan" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage