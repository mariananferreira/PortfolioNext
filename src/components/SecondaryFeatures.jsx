import Image from 'next/image'
import { Container } from '@/components/Container'
import pc from '@/images/5.png'


const posts = [
  {
    title: "Web Applications Development",
    description:
      "A well-designed website can help establish credibility for your business. A professional-looking website with accurate and up-to-date information can convey that your business is trustworthy and legitimate, which can be crucial for attracting customers and building relationships with them",
    imageUrl: pc,
  },
  {
    title: "Business Strategy",
    description:
      "A website can help increase the visibility of your business by allowing potential customers to find you online. With the right SEO (Search Engine Optimization) techniques, your website can appear at the top of search engine results pages, making it easier for potential customers to find you.",
    imageUrl: pc,
  },
    {
    title: "Ongoing Support",
    description:
      "Your website is always growing. Whether you’re adding new features or making improvements I am here to help. I won’t leave you guessing how your own website works and will always be available to answer any questions you might have.",
    imageUrl: pc,
  },

];


export function SecondaryFeatures() {
  return (
    <section
      id="whatido"
      aria-label=""
      className="lg:pb-24"
    >
      <Container>
        <div className="mx-auto max-w-4xl md:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl marginAdjust sectionTitles">
            Ways that I can be useful
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4 sectionTitles">
            A website can help you establish and promote your brand identity. By creating a website that reflects your brand values and messaging, you can increase brand awareness and recognition.          
          </p>
        </div>
        <div className="mx-auto mt-6 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 marginAdjust">
          {posts.map(post => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-41 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                  priority
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <a className="mt-2 block">
                    <p className="text-xl font-semibold title">{post.title}</p>
                    <p className="mt-3 summmaryText text-gray-500">
                      {post.description}
                    </p>
                  </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
