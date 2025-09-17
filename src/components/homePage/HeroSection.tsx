import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <>
      <section className="min-h-[90dvh] bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1757586549/scout_home_Hero_image_c0mmak_vn8g1b.webp')] bg-no-repeat bg-cover bg-bottom">
        {/* <div className="min-h-[90dvh] bg-black/60 backdrop-blur"> */}
          <div className="container mx-auto px-4 py-10">
            <div className="min-h-[90dvh]  flex  justify-start items-center gap-4 ">
              <div className="max-w-2xl ml-0 lg:ml-16 pt-0 lg:pt-10 space-y-6 text-slate-100">
                <h1 className="text-5xl font-semibold">
                  Opening Doors to Inclusive Journeys
                </h1>
                <p className="text-2xl leading-8">
                  Because everyone should have access to great travel
                  experiences
                </p>
                <Button
                  asChild
                  size="lg"
                  className="text-xl bg-scoutGreen1 hover:bg-green-500 hover:scale-110 transition duration-300"
                >
                  <Link href={`/get-involved`}>
                    Get Involved
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>
    </>
  );
}
