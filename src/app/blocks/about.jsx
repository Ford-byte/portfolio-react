import Image from "next/image";

export default function about() {
  return (
    <section className="relative centralize">
      <div className="container-block gap-8 grid md:grid-cols-2">
        <div className="w-full justify-center sm:justify-center md:justify-start">
          <Image
            src={"/images/profile.jpeg"}
            width={100}
            height={100}
            alt="profile"
            className="h-[700px] w-full md:rounded-3xl object-cover"
          />
        </div>
        <div>
          <div className="flex flex-col gap-y-4">
            <h1 className="text-[50px] font-semibold font-sans text-gray-600">
              About Me
            </h1>
            <p className="flex flex-wrap text-gray-400">
              My name is Alex Fattouche, I am a software engineer that is
              passionate about code, networking, infrastructure, video games and
              all things tech. I enjoy solving cutting edge problems, working on
              personal projects and contributing to software communities through
              code. For more information related to technical skills and
              experience, please see my resume.
            </p>
            <div>
              <button className="py-6 bg-gray-100 hover:bg-gray-200 text-gray-600 p-4 font-semibold">
                Download Resume
              </button>
            </div>
            <div className="mt-12">
              <h1 className="text-[40px] font-semibold font-sans text-gray-600">
                My Skills
              </h1>
            </div>
            <div>
              <ul className="font-semibold font-sans text-gray-600 flex gap-y-4 flex-col pb-12 md:pb-0">
                <li>Operations/Production Engineering/Site Reliability</li>
                <li>Back End Development</li>
                <li>Full Stack Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
