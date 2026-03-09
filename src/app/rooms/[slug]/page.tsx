import Image from "next/image";
import Container from "@/components/common/container";

const rooms = [
  {
    slug: "standard-double",
    title: "Standard Double",
    size: "375 ft²",
    guests: "2 Guests",
    priceBB: "LKR 0,000",
    priceRO: "LKR 0,000",
    priceHB: "LKR 0,000",
    priceFB: "LKR 0,000",
    desc: "Perfect for couples seeking comfort and tranquility.",
    image: "/assets/rooms/092.jpg",
    amenities: ["Free WiFi", "AC", "Balcony", "Hot Water"],
    discount: "10%",
  },
  {
    slug: "deluxe-triple",
    title: "Deluxe Triple",
    size: "300 - 375 ft²",
    guests: "3 Guests",
    priceBB: "LKR 19,950",
    priceRO: "LKR 17,250",
    priceHB: "LKR 24,450",
    priceFB: "LKR 31,500",
    desc: "Spacious room ideal for small families or friends.",
    image: "/assets/rooms/120.jpg",
    tag: "Best Value",
    discount: "10%",
    amenities: ["Tea/Coffee Making Facility", "Split Type Air-Conditioning", "Safe Deposit Box", "Hot/Cold Water", "IDD Facility", "Writing Desk", "TV" ],
  },
  {
    slug: "deluxe-family",
    title: "Deluxe Family",
    size: "350 - 400 ft²",
    guests: "4 Guests",
    priceBB: "LKR 23,100",
    priceRO: "LKR 19,950",
    priceHB: "LKR 27,300",
    priceFB: "LKR 35,700",
    desc: "Designed for memorable family stays with extra comfort.",
    image: "/assets/rooms/080.jpg",
    tag: "Family Choice",
    discount: "10%",
    amenities: ["Tea/Coffee Making Facility", "Split Type Air-Conditioning", "Safe Deposit Box", "Hot/Cold Water", "IDD Facility", "Writing Desk", "TV" ],
  },
  {
    slug: "deluxe-double",
    title: "Deluxe Double",
    size: "380 ft²",
    guests: "2 Guests",
    priceBB: "LKR ,000",
    priceRO: "LKR ,000",
    priceHB: "LKR ,000",
    priceFB: "LKR ,000",
    desc: "Luxury experience with modern interiors.",
    image: "/assets/rooms/084.jpg",
    tag: "Luxury",
    discount: "10%",
    amenities: ["Free WiFi", "AC", "Balcony", "Hot Water"],
  },
  // add others here
];

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export default async function RoomDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    return <p className="text-center py-20">Room not found</p>;
  }

  return (
    <Container>
      <section className="py-32 space-y-20">
        {/* HERO IMAGE */}
        <div className="relative h-[70vh] rounded-[2.5rem] overflow-hidden shadow-2xl">
          <Image
            src={room.image}
            alt={room.title}
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Title */}
          <div className="absolute bottom-10 left-10 text-white max-w-xl">
            <span className="inline-block mb-4 rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">
              Jade Green Boutique Hotel
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {room.title}
            </h1>
            <p className="mt-4 text-lg text-white/90">{room.desc}</p>
          </div>
        </div>

        {/* DETAILS GRID */}
        <div className="grid gap-14 lg:grid-cols-3">
          {/* LEFT – INFO */}
          <div className="lg:col-span-2 space-y-10">
            {/* Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="rounded-2xl border p-6 text-center">
                <p className="text-sm text-gray-500">Guests</p>
                <p className="text-xl font-semibold mt-1">{room.guests}</p>
              </div>

              <div className="rounded-2xl border p-6 text-center">
                <p className="text-sm text-gray-500">Room Size</p>
                <p className="text-xl font-semibold mt-1">{room.size}</p>
              </div>

              {/* <div className="rounded-2xl border p-6 text-center">
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-xl font-bold mt-1 text-primary">
                  {room.price}
                </p>
              </div> */}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">About this room</h2>
              <p className="text-gray-600 leading-relaxed">
                {room.desc} Enjoy serene interiors, calming views, and
                thoughtful amenities designed to elevate your stay in
                Hambantota.
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Amenities</h2>

              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {room.amenities.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl bg-primary/25 px-4 py-3 text-sm font-medium text-black"
                  >
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT – BOOKING CARD */}
          <div className="sticky top-28 h-fit rounded-3xl border bg-white p-8 shadow-xl">
            <p className="text-sm text-gray-500 mb-1">Starting from</p>

            <p className="text-3xl font-bold text-green-700 mb-6">
              {room.priceRO}
              <span className="text-base font-normal text-gray-500">
                {" "}
                / Room Only
              </span>
            </p>
            <p className="text-3xl font-bold text-green-700 mb-6">
              {room.priceBB}
              <span className="text-base font-normal text-gray-500">
                {" "}
                / Bed & Breakfast
              </span>
            </p>
            <p className="text-3xl font-bold text-green-700 mb-6">
              {room.priceHB}
              <span className="text-base font-normal text-gray-500">
                {" "}
                / Half Board
              </span>
            </p>
            <p className="text-3xl font-bold text-green-700 mb-6">
              {room.priceFB}
              <span className="text-base font-normal text-gray-500">
                {" "}
                / Full Board
              </span>
            </p>

            <button className="w-full rounded-full bg-green-700 py-4 text-white font-semibold hover:bg-primary transition mb-4">
              Book This Room
            </button>
            <div className="text-center">
              {room.discount && (
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-400 px-4 py-1.5 text-xs font-semibold text-white shadow-lg w-fit">
                  {room.discount} OFF
                  <span className="text-white/80 ">online booking</span>
                </div>
              )}
            </div>

            <p className="text-xs text-gray-500 text-center">
              No credit card required · Free cancellation
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
