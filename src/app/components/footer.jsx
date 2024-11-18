export default function footer() {
  return (
    <footer className="bottom-0 w-full flex justify-center pt-24 items-center mt-12 flex-col bg-gray-100 px-4">
      <div className="container-block text-[24px] text-gray-600 font-bold flex flex-col gap-y-4">
        <span>Contact Me</span>
        <span className="text-sm font-normal text-gray-400">
          I will be most available through my email.
        </span>
        <div className="w-full grid md:grid-cols-3 md:py-12 gap-y-4">
          <div className="flex flex-col">
            <span>Location</span>
            <span className="text-sm font-normal text-gray-400">
              Marigondon, Lapu-Lapu City
            </span>
          </div>
          <div className="flex flex-col">
            <span>Phone</span>
            <span className="text-sm font-normal text-gray-400">
              09924030496
            </span>
          </div>
          <div className="flex flex-col">
            <span>Email</span>
            <span className="text-sm font-normal text-gray-400">
              c.iyac123@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="text-sm font-normal text-gray-400 py-12">
        This is Owned by Clifford Jay Iyac © 2024
      </div>
    </footer>
  );
}
