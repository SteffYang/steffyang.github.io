import React from "react"
import Layout from "../../components/Workslayout"
import EngagedAICover from "../../assets/engaged-ai-cover.png"
import EngagedAIMandarin from "../../assets/engaged-ai-feature-mandarin.png"
import EngagedAIPerformance from "../../assets/engaged-ai-feature-performance.png"
import EngagedAITrend from "../../assets/engaged-ai-feature-trend.png"
import EngagedAIPricing from "../../assets/engaged-ai-feature-affordable.png"
import EngagedAILearning from "../../assets/engaged-ai-feature-learning.png"

const EngagedAIPage = () => {
    return (
      <Layout>
        <title>Engaged.AI | Steff Yang</title>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-3">
            <p class="text-2xl leading-snug lg:text-4xl lg:leading-snug font-serif font-light">Engaged.AI is the dominant Instagram analytics platform in Taiwan, <span class="text-pink-600">empowering businesses to make data-informed decisions and drive revenue through social.</span></p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-40">
          <div className="md:col-span-3">
            <img src={EngagedAICover} alt="Engaged.AI Product Interface" />
          </div>
          <div className="leading-loose text-md uppercase">
            <p class=" text-pink-400">role</p>
            <p class="">product leadership</p>
            <p class="">product design</p>
            <p class="">product marketing</p>
            <p class="">user research</p>
            <p class=" text-pink-400 mt-10">team</p>
            <p class="">gary chen, engineering lead</p>
            <p class="">ball chen, engineer</p>
            <p class="">ben wang, engineer</p>
            <p class="">molly lee, marketing</p>
            <p class="">ryan liao, data scientist</p>
            <p class="">peng-jieh wang, data scientist</p>
          </div>
          <div class="md:col-span-3 py-10">
            <p class="text-md uppercase text-pink-400 mb-4">problem</p>
            <p class="leading-normal font-light text-3xl font-serif">
                Alongside the prevalence of local businesses leveraging Instagram to promote their brands, we saw an increasing need for an Instagram analytics solution that could enable these business owners to make data-informed decisions and drive lucrative results through social.
            </p>
          </div>
          <div class="md:col-span-2 md:col-start-2 py-10">
            <p class="font-light text-lg leading-relaxed">
                We wanted to understand why existing solutions were not satisfying the need. Through conversations, data, and research, it became clear that these existing solutions were not suitable by design.
            </p>
            <p class="font-medium text-lg mt-10 leading-relaxed">
                01. Low-to-zero localization
            </p>
            <p class="font-light text-lg leading-relaxed">
                Most of these analytical platforms delivered their service in English, and their social-trend analysis and insights were limited to North America or European regions. 
            </p>
            <p class="font-medium text-lg mt-10 leading-relaxed">
                02. Seasoned social marketers only
            </p>
            <p class="font-light text-lg leading-relaxed">
                Existing solutions set out to increase social marketers' productivity when carrying out marketing strategies on Instagram. However, because of the difference in data literacy, these solutions were too complicated for local business owners who are social marketing novices to fathom and leverage.
            </p>
            <p class="font-medium text-lg mt-10 leading-relaxed">
                03. Unfriendly Pricing
            </p>
            <p class="font-light text-lg leading-relaxed">
                Catering to enterprises, existing products mostly had their price point set high; thus made small and medium business owners with less budget challenging to adopt.
            </p>
          </div>
        </div>
        <div class="text-center bg-pink-50 p-5 md:pt-20 md:pb-40 md:px-40">
          <p class="text-4xl leading-snug font-serif font-light ">Grow Your Business with Data, <span class="text-pink-600">Effortlessly</span></p>
          <p class="font-light text-lg leading-relaxed mt-8">
              We had a single message to drive home: Engaged.AI makes growing your business with data effortless. Our vision for Engaged.AI anchored critical design decisions throughout the entire product lifecycle and molded the product into the data empowerment that drives significant and tangible impacts across businesses regardless of size.
          </p>
          <div class="mt-10">
            <video preload autoplay loop controls>
              <source src="https://firebasestorage.googleapis.com/v0/b/digital-garden-f2193.appspot.com/o/engaged-screen-recording.mp4?alt=media&token=90c87d57-43fd-4f92-af95-8ceeaf07dd30" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8 py-20">
          <div class="md:col-span-2">
            <p class="text-4xl leading-snug font-serif font-light">Emphasis on the Mandarin</p>
            <p class="font-light text-lg leading-relaxed mt-10">
                To fill the lack of Mandarin-based solutions, Engaged.AI has its service – interfaces, customer support, learning community, and data collection – delivered Mandarin-first and makes it easy for users to start harnessing the power of analytics. 
            </p>
            <p class="font-medium text-lg leading-relaxed mt-10">Solutions:</p>
            <ul class="list-outside list-disc pl-10 mt-4">
                <li class="font-light text-lg leading-relaxed">Mandarin-first for interfaces, customer support, and learning community</li>
                <li class="font-light text-lg leading-relaxed mt-4">Accurate and up-to-date data collection ensured for Mandarin-speaking regions</li>
            </ul>
          </div>
          <div class="md:col-span-3">
            <img src={EngagedAIMandarin} alt="Engaged.AI has both its interface and customer support delivered in Mandarin"></img>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-20 py-20">
            <div class="md:col-span-3">
                <img src={EngagedAIPerformance} alt="One of Engaged.AI's most popular feature: Best Time to Post"></img>
                <p class="text-center md:text-left text-gray-400 italic font-light">One of Engaged.AI's most beloved features: Best Time to Post, providing suggestions on users' content schedule to ensure maximum reach and impression.</p>
            </div>
            <div class="md:col-span-2">
                <p class="text-4xl leading-snug font-serif font-light">Performance and Audience Insights Captured</p>
                <p class="font-light text-lg leading-relaxed mt-10">
                    To empower users regardless of their data literacy, Engaged.AI extracts insights into their audiences and performances from much data and visualize them in a constructive yet straightforward form.
                </p>
                <p class="font-medium text-lg leading-relaxed mt-10">Solutions:</p>
                <ul class="list-outside list-disc pl-10 mt-4">
                    <li class="font-light text-lg leading-relaxed">Demographics, geolocations, and engagements insights about one's Instagram audience</li>
                    <li class="font-light text-lg leading-relaxed mt-4">Holistic and in-depth performance measurements to help optimize one's content strategy for business impact</li>
                </ul>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-10 py-20">
            <div class="md:col-span-2">
                <p class="text-4xl leading-snug font-serif font-light">Trends and Intels Uncovered</p>
                <p class="font-light text-lg leading-relaxed mt-10">
                    Engaged.AI helps users unveil competitive insights and emerging trends by tapping into social data of competitors, hashtags, mentions. The essence of these insights and trends are then distilled via AI and statistical models.
                </p>
                <p class="font-medium text-lg leading-relaxed mt-10">Solutions:</p>
                <ul class="list-outside list-disc pl-10 mt-4">
                    <li class="font-light text-lg leading-relaxed">AI-powered hashtags and mentions monitoring to grasp the latest social trends</li>
                    <li class="font-light text-lg leading-relaxed mt-4">Extensive competitor and industry benchmarks to gauge one's performance</li>
                    <li class="font-light text-lg leading-relaxed mt-4">Opportunities and potential brand advocates identified to amplify one's business reach and influence </li>
                </ul>
            </div>
            <div class="md:col-span-3">
                <img src={EngagedAITrend} alt="Engaged.AI's recently-released feature – Industry Benchmark"/>
                <p class="text-center md:text-left text-gray-400 italic font-light">Engaged.AI's recently-released feature – Industry Benchmark – help users benchmark their performance against industries and grasp latest content trends in industries.</p>
            </div>
        </div>
        <div class="grid grid-col-1 md:grid-cols-5 gap-10 py-20">
            <div class="md:col-span-3">
                <img src={EngagedAIPricing} alt="Engaged.AI's current pricing page"/>
                <p class="text-center md:text-left text-gray-400 italic font-light">Engaged.AI's current pricing page</p>
            </div>
            <div class="md:col-span-2">
                <p class="text-4xl leading-snug font-serif font-light">Afforable Pricing</p>
                <p class="font-light text-lg leading-relaxed mt-10">
                    Realizing that price is typically the most upfront and most significant barrier for users to adopt an innovative solution, we design Engaged.AI's pricing to make its value proposition affordable.
                </p>
                <p class="font-light text-lg leading-relaxed mt-10">
                    The platform goes with a freemium pricing model and has premium plans starting from the price half of a Netflix monthly subscription.
                </p>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-10 py-20">
            <div class="md:col-span-2">
                <p class="text-4xl leading-snug font-serif font-light">Learning Community to Support</p>
                <p class="font-light text-lg leading-relaxed mt-10">
                    Aiming to not only empower businesses but also increase their ability to harness to power of analytics, we establish an online learning community for social marketing and analytics. 
                </p>
                <p class="font-light text-lg leading-relaxed mt-10">
                    Besides exchanging inspirations and creatives with peers, we also provide free courses and online boot camps to facilitate users' growth in these domains.
                </p>
            </div>
            <div class="md:col-span-3">
                <img src={EngagedAILearning} alt="Engaged.AI's online academy for social marketing and analytics"/>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:p-20">
            <div>
                <p class="text-4xl leading-snug font-serif font-light">Witnessing Impacts</p>
            </div>
            <div>
                <p class="font-light text-lg leading-relaxed">
                    Engaged.AI acquired over 3,000 customers within just one-quarter of the product launch in March 2019, with 58% of the early adopters being small businesses. 
                </p>
                <p class="font-light text-lg leading-relaxed mt-10">
                    Currently, Engaged.AI is serving over 15,000 brands ranging from small and medium businesses to enterprises.
                </p>
                <p class="font-light text-lg leading-relaxed mt-10">
                    Moreover, we continue to hear success stories from local florists, pastry chefs, non-profit organizations, and other small business owners on how they leverage the analytics provided and take on actions that drove lucrative results through social media.
                </p>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:p-20 mt-20">
            <div>
                <p class="text-4xl leading-snug font-serif font-light">Personal Reflections</p>
            </div>
            <div>
                <p class="font-light text-lg leading-relaxed">
                    This was my first time driving the entire product lifecycle from inception to building, launching, and scaling – a process where I was in charge of managing the product vision, leading product development, steering marketing experiments, and designing the E2E customer experience.
                </p>
                <p class="font-light text-lg leading-relaxed mt-10">
                    I firmly believe that Engaged.AI's incredible outcome was contributed significantly by the inspiring teamwork and the adherence to the product's mission – how might we democratize data empowerment?
                </p>
                <p class="font-light text-lg leading-relaxed mt-10">
                    I worked closely with engineers, data scientists, marketers, and customer success; we together ruthlessly prioritize, rigorously develop, and ship to learn. Sometimes we hit the mark, but often time things didn't work out as expected. But it was for these challenges that we were able to grow and thrive as a team. And all of these attempts were to build a product we believed that can meaningfully impact people.
                </p>
                <p class="font-light text-lg leading-relaxed mt-10">
                    This journey elevated my abilities and perspectives as a designer beyond the level of interfaces and experiences to encompass design at the level of business, strategy, and systems. But most importantly, it was truly fun.
                </p>
            </div>
        </div>
      </Layout>
    )
  }
  
  export default EngagedAIPage