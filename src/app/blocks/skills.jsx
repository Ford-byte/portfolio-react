export default function skills({ logo, title, desc }) {

  return (
    <section
      className="bg-white rounded-md flex flex-col gap-y-2"

    >
      <div className={`animate-bounce`}>
        {logo}
      </div>
      <div className="text-gray-600 text-xl font-bold max-w-[200px]">
        {title}
      </div>
      <div className="text-gray-400 text-sm">{desc}</div>
    </section>
  );
}
