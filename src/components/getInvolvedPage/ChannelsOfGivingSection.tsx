import { channelsOfGivingEntries } from "@/constData/getInvolvedPage";
import { ArrowRight } from "lucide-react";

export default function ChannelsOfGivingSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="text-xl font-thin text-stone-400">
            Channels Of giving
          </h2>
          <p className="text-center leading-8">
            What matters most is that we choose to act. Join us today and help
            create a world where every child gets to explore, learn, and belong.
          </p>
        </div>
        {/* <div className="flex flex-wrap justify-evenly items-center gap-12 mt-20"> */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-end gap-12 mt-20">
          {channelsOfGivingEntries.map((entry) => (
            // <div key={entry.id} className="w-full md:w-5/12 min-h-[40vh] bg-green-300 rounded-lg bg-[url('https://res.cloudinary.com/dh8qlzbzk/image/upload/v1757587242/sponsor_school_1_fim9pg_hfh96u.webp')] bg-cover bg-center ">
            <div
              key={entry.id}
              className="w-full min-h-[40vh] bg-green-300 rounded-lg  bg-cover bg-center pb-4"
              style={{ backgroundImage: `url(${entry.backGroundImage})` }}
            >
              <div className="bg-green-700 text-slate-100 rounded-lg px-4 py-3 mt-52 min-h-48 mx-4">
                <div className="flex justify-start items-center gap-2 px-2">
                  <div className="c">
                    <p className=" text-lg font-semibold mb-10">
                      {entry.tiltle}
                    </p>
                    <ul className="list-disc text-sm space-y-2">
                      {entry.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="c">
                    <ArrowRight className="size-10" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
