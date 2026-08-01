import Image from "next/image";

const gallery = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
];

export default function ShopGallerySection() {
  return (
    <section className="py-24 bg-[#F8FAF5]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-green-600 font-semibold">
            Gallery
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Our Shop Gallery
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {gallery.map((img, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-3xl group shadow-md"
            >

              <Image
                src={img}
                alt="Gallery"
                width={500}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}