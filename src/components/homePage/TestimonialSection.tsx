import CloudinaryImage from "../CloudinaryImage";
import { Button } from "../ui/button";
import clsx from "clsx";

export default function TestimonialSection() {
  return (
    <>
      {/* <section className="container mx-auto my-40 px-4"> */}
      <section className="bg-scoutGreen3 py-4">
        <div className=" container mx-auto my-40 px-4 flex flex-col md:flex-row items-center justify-center gap-x-24 gap-y-24">
          <div className="relative ">
            <div className=" rounded-lg w-full h-full  absolute top-20 md:left-10">
              <CloudinaryImage
                src="Julius_Mbura_renano"
                height={400}
                width={400}
                alt="Person"
                className="object-cover object-top  w-full h-full rounded-xl  "
              />
            </div>
            <div className="bg-scoutGreen4 rounded-lg size-96"></div>
          </div>
          <div className="flex flex-col space-y-8 w-full md:w-[30vw] text-slate-100">
            <p className="font-thin "></p>
            <p className="font-medium text-3xl">Julius Mbura</p>
            <p className="font-semibold text-sm">Advisory Board Member - Disability Advocate</p>
            <p className="c">
              &quot;Involving children with disabilities on trips to
              destinations like the museum and national parks opens their world
              exponentially. It&apos;s an eye opener to blind kids who get to feel
              animals for the first time giving them an idea of what the world
              looks like. The exposure is truly impactful both in their social
              and academic life as they reshape their dreams and goals. It means
              the world to them.&quot;
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map((_, index) => (
                <Button
                  key={index}
                  size="icon"
                  className={clsx(
                    " bg-transparent  size-4 rounded-full",
                    index == 1 && "bg-white border-green-600"
                  )}
                ></Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
