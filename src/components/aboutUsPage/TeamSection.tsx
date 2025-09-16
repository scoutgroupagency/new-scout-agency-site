import Link from "next/link";
import CloudinaryImage from "../CloudinaryImage";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { teamMembers } from "@/constData/aboutPage";

export default function TeamSection() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap md:flex-nowrap justify-center items-start gap-12">
          <div className="w-full md:w-6/12 lg:w-4/12">
            <div className="min-h-96 w-11/12 rounded-lg bg-scoutGreen4"></div>
            <CloudinaryImage
              src="Joanne_Founder_Image_a7sawq"
              height={800}
              width={800}
              alt="scount agency founder image"
              className="object-cover h-full w-full rounded-lg -mt-80 pl-6"
            />
          </div>
          <div className="w-full md:w-6/12 lg:w-4/12">
            <h2 className="text-2xl font-thin text-stone-400 mt-12 mb-12">
              The Team
            </h2>
            <div className="space-y-4">
              <h3 className="text-4xl font-bold 0">Joanne Ndirangu</h3>
              <p className="text2xl font-bold">Founder & Director</p>
              <p className=" leading-8">
                &quot;Supporting accessible tourism has been incredibly
                rewarding. Knowing that my contribution helps create inclusive
                travel experiences for all makes a real difference.&quot;
              </p>
              <div className="w-32 flex  justify-evenly items-center gap-2">
                <Link href={"https://x.com/home"}>
                  <X className="border border-black size-7 hover:scale-110 transition duration-300 rounded-lg p-1" />
                </Link>
                <Link href={"https://www.instagram.com/"}>
                  <Instagram className=" size-7 hover:scale-110 transition duration-300 rounded-lg" />
                </Link>
                <Link href={"https://www.facebook.com/"}>
                  <Facebook className="border border-black size-7 hover:scale-110 transition duration-300 rounded-lg p-1" />
                </Link>
                <Link href={"https://www.linkedin.com/"}>
                  <Linkedin className="border border-black size-7 hover:scale-110 transition duration-300 rounded-lg p-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-12 mt-20 ">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-wrap md:flex-nowrap justify-center items-center gap-12"
            >
              <div className="w-full md:w-6/12 lg:w-12/12">
                <div className="min-h-80 w-11/12 rounded-lg bg-scoutGreen4"></div>
                <CloudinaryImage
                  src={member.imageSrc}
                  height={800}
                  width={800}
                  alt={`${member.name} image`}
                  // className="object-cover h-full w-full rounded-lg -mt-80 pl-6"
                  className="object-top object-cover  h-80 w-full rounded-lg -mt-64 pl-6"
                />
              </div>
              <div className="w-full md:w-6/12 lg:w-6/12">
                <h2 className="hidden text-2xl font-thin text-stone-400 mt-12 mb-12">
                  The Team
                </h2>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold 0">{member.name}</h3>
                  <p className="text-">{member.position}</p>
                  <p className=" hidden leading-8">
                    &quot;{member.statement}&quot;
                  </p>
                  <div className="w-32 flex  justify-evenly items-center gap-2">
                    <Link href={member.xLink}>
                      <X className="border border-black size-5 hover:scale-110 transition duration-300 rounded-lg p-1" />
                    </Link>
                    <Link href={member.instagramLink}>
                      <Instagram className=" size-5 hover:scale-110 transition duration-300 rounded-lg" />
                    </Link>
                    <Link href={member.facebookLink}>
                      <Facebook className="border border-black size-5 hover:scale-110 transition duration-300 rounded-lg p-1" />
                    </Link>
                    <Link href={member.linkedInLink}>
                      <Linkedin className="border border-black size-5 hover:scale-110 transition duration-300 rounded-lg p-1" />
                    </Link>
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
