import React from "react"
import Layout from "../../components/Workslayout"
import LinkByCover from "../../assets/linkby-cover.png"
import LinkByLightweight from "../../assets/linkby-lightweight.png"
import LinkBySocial from "../../assets/linkby-social.png"
import LinkByPersonal from "../../assets/linkby-personal.png"

const LinkByPage = () => {
  return (
    <Layout>
    <title>LinkBy | Steff Yang</title>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      <div className="md:col-span-3">
        <p class="text-2xl leading-snug lg:text-4xl lg:leading-snug font-serif font-light">
        LinkBy is the uprising platform in Taiwan that aims to reform transactional experiences on social. <span class="text-pink-600">We convert creators' passion into income by connecting product sources, creators, and fans.</span>
        </p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 md:mt-40">
      <div className="md:col-span-3">
        <img src={LinkByCover} alt="LinkBy Product Interface" />
      </div>
      <div className="leading-loose text-md uppercase">
        <p class=" text-pink-400">role</p>
        <p class="">product leadership</p>
        <p class="">product design</p>
        <p class="">user research</p>
        <p class=" text-pink-400 mt-10">team</p>
        <p class="">gary chen, engineering lead</p>
        <p class="">ball chen, engineer</p>
        <p class="">ben wang, engineer</p>
        <p class="">cindy huang, product designer</p>
        <p class="">anau wu, operations</p>
        <p class="">rosemary chao, business</p>
        <p class="">johann liu, business</p>
      </div>
      <div class="md:col-span-3 py-10">
        <p class="text-md uppercase text-pink-400 mb-4">problem</p>
        <p class="leading-normal md:leading-normal text-2xl font-light md:text-3xl font-serif">
        Nowadays, there is an increasing number of creators on social platforms generating engaging content. They are game-changers, trendsetters, thought leaders, and most importantly, they connect millions of people with creativity. However, passion does not guarantee income, which leads us to wonder – "how might we help creators make more money without depriving them of their time and effort to create entertaining content?"
        </p>
      </div>
      <div class="md:col-span-2 md:col-start-2 py-10">
        <p class="font-light text-lg leading-relaxed">
          Selling products or merch through creative content is one of the proven-successful approaches. However, most creators are not e-commerce experts; it has been painful for them to decide what products they should sell, set up their e-commerce websites, handle the logistics, etc. 
        </p>
        <p class="font-light text-lg mt-10 leading-relaxed">
        Aside from the demanding process, there is also the problem of power imbalance. Existing solutions often emphasize product sources/brands rather than creators. Brands have total control over how the creators should promote and sell the product, leaving little space in the process for content makers to insert their creativity.
        </p>
      </div>
    </div>
    <div class="text-center bg-pink-50 p-5 md:pt-20 md:pb-20 md:px-40 md:mt-40">
      <p class="text-4xl leading-snug font-serif font-light ">To Empower and Connect</p>
      <p class="font-light text-lg leading-relaxed mt-8">
        LinkBy is an internet platform that establishes the connection between trustworthy product sources, creators, and fans. The platform distinguishes itself from the competition by design: we empower and connect. The prime users are fitness coaches, yoga instructors, mom bloggers, YouTubers, celebrities, etc. 
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-10 py-20">
      <div class="md:col-span-2">
        <p class="text-4xl leading-snug font-serif font-light">As Lightweight as Possible</p>
        <p class="font-light text-lg leading-relaxed mt-10">
          Traditional e-commerce builders provide an extensive and customizable set of features. Seemingly helpful, these complicated features produce a large mental load for creators, burdening them when crafting their e-commerce websites. 
        </p>
        <p class="font-light text-lg leading-relaxed mt-10">
          Seeing such an overkill, we design Linkby to be as lightweight as possible, reducing excessive steps and decisions needed for creators.
        </p>
        <p class="font-medium text-lg leading-relaxed mt-10">Solutions:</p>
        <ul class="list-outside list-disc pl-10 mt-4">
            <li class="font-light text-lg leading-relaxed">Ready-to-use templates to help creators establish their e-commerce website within 10 minutes</li>
            <li class="font-light text-lg leading-relaxed mt-4">Contextual information to facilitate decision-making when creators are sourcing products to sell</li>
        </ul>
      </div>
      <div class="md:col-span-3">
        <img src={LinkByLightweight} alt="LinkBy Product Interface" />
        <p class="text-center md:text-left text-gray-400 italic font-light">LinkBy breaks down the complex online-store-establishing process to steps easy to follow and complete; furthermore, LinkBy guides creators through the process with on-boardings.</p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-10 py-20">
      <div class="md:col-span-3">
        <img src={LinkBySocial} alt="LinkBy Product Interface" />
      </div>
      <div class="md:col-span-2">
        <p class="text-4xl leading-snug font-serif font-light">Contextualizing Products with Social Content</p>
        <p class="font-light text-lg leading-relaxed mt-10">
          LinkBy differentiates itself from existing e-commerce solutions through its "social" factor. We maximize creators' capability of driving sales by contextualizing products with creative social content.
        </p>
        <p class="font-medium text-lg leading-relaxed mt-10">Solutions:</p>
        <ul class="list-outside list-disc pl-10 mt-4">
            <li class="font-light text-lg leading-relaxed">Surfacing products with creators' content, rather than monotonous product images, to help fans easily envision how they can utilize the product post-purchase</li>
            <li class="font-light text-lg leading-relaxed mt-4">Connecting creators' e-commerce websites with their social presence, enabling a seamless shopping experience – from seeing creators' content to placing an order – for fans</li>
        </ul>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-5 gap-10 py-20">
      <div class="md:col-span-2">
        <p class="text-4xl leading-snug font-serif font-light">Personalizing Shopping Experiences at Scale</p>
        <p class="font-light text-lg leading-relaxed mt-10">
          Every fan wants to have a shopping experience that is "just for me." And they should have one. Furthermore, we believe that such personal touch is what elevates fans' satisfaction and loyalty towards creators.
        </p>
        <p class="font-light text-lg leading-relaxed mt-10">Hence, we design LinkBy to support personalizing shopping experiences for every fan at scale.</p>
        <p class="font-medium text-lg leading-relaxed mt-10">Solutions:</p>
        <ul class="list-outside list-disc pl-10 mt-4">
            <li class="font-light text-lg leading-relaxed">Effortlessly manage and control fans' access to hundreds of "Private Shops"</li>
            <li class="font-light text-lg leading-relaxed mt-4">Tailor shopping experience for each fan by adding personalized shop onboardings</li>
        </ul>
      </div>
      <div class="md:col-span-3">
        <img src={LinkByPersonal} alt="LinkBy Product Interface" />
        <p class="text-center md:text-left text-gray-400 italic font-light">LinkBy's simple interface helps creators manage shops personalized for fans, such as controlling the access, customizing the appearance and descriptions, and analyzing the performance.</p>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:p-20">
      <div>
        <p class="text-4xl leading-snug font-serif font-light">On the Rise</p>
      </div>
      <div>
        <p class="font-light text-lg leading-relaxed">
        As of January 2021, most features in this vision have been released, with some still in development. Furthermore, within just two months of platform launch, LinkBy served more than 500 personal trainers, yoga instructors, and creators: helping them converting passion to income.
        </p>
        <p class="font-light text-lg leading-relaxed mt-10">
          Thriving in the social commerce scene, LinkBy was featured by <a class="border-b-0 hover:border-b-2 hover:border-pink-600 active:border-b-2 active:border-pink-600" href="https://www.gq.com.tw/life/article/linkby" target="_blank">GQ Taiwan</a> in February 2021.
        </p>
      </div>
    </div>
    </Layout>
  )
}
export default LinkByPage