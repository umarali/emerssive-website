import Image from "next/image";
const testimonials = [
  {
    name: "Michael Leach",
    role: "Founder & CEO",
    company: "iDialogue",
    image: "/assets/testimonials/michael-leach.png",
    quote:
      "The team studied and learned our API to build a full-featured fiduciary case management app. Adapted seamlessly to many changes from the end client. Guided us through both Apple and Google mobile app stores ",
  },
  {
    name: "Jerry Shu",
    role: "Co-Founder",
    company: "Lendica",
    image: "/assets/testimonials/jerry-shu-lendica.png",
    quote:
      "Working with Umar was an extremely pleasant experience as he was extremely communicative and flexible, and was able to complete our task of setting up a CI/CD pipeline faster than our expected timeline. Would highly recommend his services to anyone in need!",
  },
  {
    name: "Adi Chirilov",
    role: "CTO",
    company: "AppSeed",
    image: "/assets/testimonials/adi-chirilov-appseed.png",
    quote:
      "Umar helped our team with many projects, from average to high complexity. Besides his excellent technical skills, Umar is a good communicator and a proactive team member, positively influencing the whole team's performance. Highly recommended for React, Javascript tasks, and Tech Lead jobs",
  },
  {
    name: "Lindsey Holmes",
    role: "Chief of Product",
    company: "Code3Apps",
    image: "/assets/testimonials/lindsey-holmes-code3apps.png",
    quote:
      "Umar and Code3Apps worked together for a couple years and Umar demonstrated a great work ethic, good technical knowledge (our project was a web based platform with an app interface), and was overall a pleasure to interact with.",
  },
  {
    name: "Justus Luttig",
    role: "Investment Associate",
    company: "Authentic Ventures",
    image: "/assets/testimonials/justus-luttig-authentic-ventures.png",
    quote:
      "We hired Umar to help with a complex problem on our website back end. He has a great understanding and proficiency in Vue, Node.js, MongoDB, and Heroku. Highly recommend Umar!",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold text-primary-dark">
            Client feedback
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            In their own words
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-secondary-dark bg-white p-7"
            >
              <blockquote className="text-sm leading-7 text-text">
                “{item.quote.trim()}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <Image
                  src={item.image}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs leading-5 text-text-light">
                    {item.role} · {item.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
