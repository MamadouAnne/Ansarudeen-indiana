import Image from "next/image";
import Layout from "./layout";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">About Ansarudeen Indiana</h1>
        
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Our History and Mission</h2>
          <p className="text-lg mb-4">
            Ansarudeen Indiana was founded in 2010 by a group of devoted followers of the Tijaniyya order. Our mission is to spread the teachings of Cheikh Ahmada Tijani and Cheikh Ibrahim Niass, fostering spiritual growth and building a vibrant community rooted in Islamic teachings and Tijaniyya principles.
          </p>
          <p className="text-lg mb-4">
            Over the years, we have grown from a small study circle to a thriving community, dedicated to spiritual enlightenment and service to humanity. Our core values include love, compassion, knowledge, and unity.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Cheikh Ahmada Tijani</h2>
          <div className="flex flex-col md:flex-row items-center">
            <Image
              src="/cheikh-ahmada-tijani.jpg"
              alt="Cheikh Ahmada Tijani"
              width={300}
              height={400}
              className="mb-4 md:mr-8"
            />
            <div>
              <p className="text-lg mb-4">
                Cheikh Ahmada Tijani (1737-1815) was the founder of the Tijaniyya Sufi order. Born in Algeria, he was a renowned scholar and spiritual leader who received a divine vision to establish a new Sufi path.
              </p>
              <h3 className="text-2xl font-bold mb-2">Contributions</h3>
              <ul className="list-disc list-inside">
                <li>Established the Tijaniyya order, emphasizing direct spiritual connection with the Prophet Muhammad (peace be upon him)</li>
                <li>Authored numerous spiritual works, including "Jawahir al-Ma'ani"</li>
                <li>Introduced unique spiritual practices, such as the Wazifa and Lazim</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Cheikh Ibrahim Niass</h2>
          <div className="flex flex-col md:flex-row items-center">
            <Image
              src="/cheikh-ibrahim-niass.jpg"
              alt="Cheikh Ibrahim Niass"
              width={300}
              height={400}
              className="mb-4 md:mr-8"
            />
            <div>
              <p className="text-lg mb-4">
                Cheikh Ibrahim Niass (1900-1975), also known as Baye Niass, was a prominent Senegalese Islamic scholar and leader within the Tijaniyya order. He played a crucial role in spreading the Tijaniyya teachings globally.
              </p>
              <h3 className="text-2xl font-bold mb-2">Contributions</h3>
              <ul className="list-disc list-inside">
                <li>Popularized the concept of Tarbiya (spiritual training) within the Tijaniyya order</li>
                <li>Authored numerous books on Islamic spirituality and Tijaniyya teachings</li>
                <li>Established a global network of Tijaniyya communities, particularly in West Africa and beyond</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}