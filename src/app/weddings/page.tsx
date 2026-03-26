"use client";

import Container from "@/components/common/container";
import BeSearchForm from "@/components/be-forms/BeSearchForm";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Heart,
  Check,
  GlassWater,
  Soup,
  Salad,
  UtensilsCrossed,
  Fish,
  Leaf,
  IceCream,
  Sparkles,
  Drumstick,
} from "lucide-react";
import { GiChicken, GiChickenLeg } from "react-icons/gi";

const packages = [
  {
    name: "Silver Menu",
    price: "Rs 2600 / Net",
    accent: "from-zinc-700 to-zinc-500",
    badge: "Elegant Essential",
    image: "/assets/gallery/weddings/080.jpg",

    highlights: [
      "Welcome drink",
      "Soup",
      "1 salad choice",
      "2 rice & noodle choices",
      "1 chicken choice",
      "1 seafood choice",
      "4 vegetable choices",
      "2 dessert choices",
    ],

    sampleMenu: {
      drink: ["Guava", "Orange Fruit Punch", "Mix Fruit"],

      soup: ["Cream of Vegetable Soup", "Vegetable Cutlet"],

      salads: ["Coleslaw Salad", "Cabbage & Pineapple Salad"],

      riceAndNoodles: [
        "Steam White Rice",
        "Red Rice",
        "Egg & Vegetable Fried Rice",
        "Yellow Rice with Nuts",
        "Vegetable Fried Noodles",
      ],

      chicken: [
        "Chillie Chicken",
        "Chicken Stew",
        "Chicken Black Curry",
        "Chicken Devilled / Grilled",
      ],

      seafood: [
        "Fish Devilled Grilled",
        "Cuttle Fish Devilled",
        "Fish White Curry",
        "Fish Ambulthiyal",
      ],

      vegetables: [
        "Dhal Tempered / Curry",
        "Brinjal Moju",
        "Batter Fried Mushroom",
        "Beans Tempered",
        "Vegetable Chopsuey",
        "Potato Tempered / Fried",
        "Stir Fried Kangkung",
      ],

      condiments: [
        "Lime Pickle",
        "Chutney Dry Fish",
        "Onion & Green Chillie in Vinegar",
        "Pappadam",
        "Dry Chillie",
        "Chillie Paste",
      ],

      desserts: [
        "Ice Cream Vanilla",
        "Ice Cream Chocolate",
        "Ice Cream Strawberry",
        "Jelly with Custard",
        "Fresh Cut Fruits",
        "Fruit Salad",
        "Bread Pudding",
      ],
    },
  },

  {
    name: "Gold Menu",
    price: "Rs 3150 / Net",
    accent: "from-amber-600 to-yellow-500",
    badge: "Most Popular",
    image: "/assets/gallery/weddings/084.jpg",

    highlights: [
      "Welcome drink",
      "Soup",
      "1 salad choice",
      "3 rice & noodle choices",
      "1 chicken choice",
      "2 seafood choices",
      "5 vegetable choices",
      "2 dessert choices",
      "Free iced coffee",
    ],

    sampleMenu: {
      drink: ["Guava", "Orange Fruit Punch", "Mix Fruit"],

      soup: ["Cream of Vegetable Soup", "Fish Cutlet"],

      salads: ["Coleslaw Salad", "Cabbage & Pineapple Salad"],

      riceAndNoodles: [
        "Steam White Rice",
        "Red Rice",
        "Egg & Vegetable Fried Rice",
        "Yellow Rice with Nuts",
        "Vegetable Fried Noodles",
      ],

      chicken: [
        "Chillie Chicken",
        "Chicken Stew",
        "Chicken Black Curry",
        "Chicken Devilled / Grilled",
      ],

      seafood: [
        "Fish Devilled Grilled",
        "Cuttle Fish Devilled",
        "Fish White Curry",
        "Fish Ambulthiyal",
      ],

      vegetables: [
        "Dhal Tempered / Curry",
        "Brinjal Moju",
        "Batter Fried Mushroom",
        "Beans Tempered",
        "Green Pea & Carrot Curry",
        "Vegetable Chopsuey",
        "Potato Tempered / Fried",
        "Stir Fried Kangkung",
      ],

      condiments: [
        "Lime Pickle",
        "Chutney Dry Fish",
        "Onion & Green Chillie in Vinegar",
        "Pappadam",
        "Dry Chillie",
        "Chillie Paste",
      ],

      desserts: [
        "Coffee Pudding",
        "Yogurt Pudding with Mango",
        "Ice Cream Vanilla",
        "Ice Cream Chocolate",
        "Ice Cream Strawberry",
        "Jelly with Custard",
        "Fresh Cut Fruits",
        "Fruit Salad",
        "Bread Pudding",
      ],

      extras: ["Free Iced Coffee"],
    },
  },

  {
    name: "Platinum Menu",
    price: "Rs 3750 / Net",
    accent: "from-cyan-600 to-sky-500",
    badge: "Premium Celebration",
    image: "/assets/gallery/weddings/107.jpg",

    highlights: [
      "Welcome drink",
      "Soup",
      "3 salad choices",
      "4 rice & noodle choices",
      "1 chicken choice",
      "3 seafood choices",
      "5 vegetable choices",
      "4 dessert choices",
      "Free iced coffee",
    ],

    sampleMenu: {
      drink: ["Guava", "Orange Fruit Punch", "Mix Fruit"],

      soup: [
        "Brown Onion Soup",
        "Sweet Corn & Egg Drop Soup",
        "Cream of Vegetable Soup",
        "Fish Cutlet",
      ],

      salads: [
        "Pasta Salad",
        "Coleslaw Salad",
        "Cabbage & Pineapple Salad",
        "Egg Boats",
        "Mix Garden Salad",
      ],

      riceAndNoodles: [
        "Steam White Rice",
        "Red Rice",
        "Egg & Vegetable Fried Rice",
        "Yellow Rice with Nuts & Raisins",
        "Vegetable Fried Noodles",
        "Egg Pasta",
        "Biriyani Rice",
        "Savoury Rice",
      ],

      chicken: [
        "Chillie Chicken",
        "Chicken Stew",
        "Chicken Black Curry",
        "Chicken Devilled / Grilled",
      ],

      seafood: [
        "Fish Devilled Grilled",
        "Cuttle Fish Devilled",
        "Fish White Curry",
        "Fish Ambulthiyal",
      ],

      vegetables: [
        "Cashew Nut & Green Pea Curry",
        "Dhal Tempered / Curry",
        "Brinjal Moju",
        "Batter Fried Mushroom",
        "Beans Tempered",
        "Green Pea & Carrot Curry",
        "Vegetable Chopsuey",
        "Potato Tempered / Fried",
        "Stir Fried Kangkung",
      ],

      condiments: [
        "Lime Pickle",
        "Chutney Dry Fish",
        "Onion & Green Chillie in Vinegar",
        "Pappadam",
        "Dry Chillie",
        "Chillie Paste",
      ],

      desserts: [
        "Coffee Pudding",
        "Yogurt Pudding with Mango",
        "Ice Cream Vanilla",
        "Ice Cream Chocolate",
        "Ice Cream Strawberry",
        "Jelly with Custard",
        "Fresh Cut Fruits",
        "Fruit Salad",
        "Bread Pudding",
      ],

      extras: ["Free Iced Coffee"],
    },
  },
];

const inclusions = [
  "Beautiful banquet setting for your special day",
  "Curated menu options for every celebration style",
  "Warm hospitality and personalized coordination",
  "Ideal for weddings, engagements, and homecomings",
];

export default function Weddings() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <Container>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full " />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 py-32 text-center pb-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <Heart size={16} />
              Celebrate Your Dream Wedding
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
              Wedding Packages at
              <span className="block text-primary mt-2">Jade Green Hotel</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-black/65 leading-relaxed">
              Create unforgettable moments with elegant wedding menus, warm
              hospitality, and a refined celebration experience designed for
              your special day.
            </p>
          </motion.div>

          <div className="py-10">
            <BeSearchForm />
          </div>
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Wedding Experience
                </p>
                <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
                  A graceful setting for your once-in-a-lifetime celebration
                </h2>
              </div>

              <p className="text-black/65 leading-relaxed">
                From intimate ceremonies to grand receptions, Jade Green Hotel
                offers thoughtfully designed wedding dining experiences with
                multiple package options to suit your guest list and style.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {inclusions.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/8 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check size={16} />
                      </span>
                      <p className="text-sm text-black/70 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[420px] md:h-[520px] overflow-hidden rounded-[2rem] shadow-2xl"
            >
              <Image
                src="/assets/gallery/weddings/015.jpg"
                alt="Wedding celebration at Jade Green Hotel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-white/80">
                  Timeless Celebrations
                </p>
                <h3 className="mt-2 text-2xl md:text-3xl font-semibold">
                  Crafted menus for unforgettable wedding moments
                </h3>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-neutral-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Wedding Menus
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
              Choose the perfect package for your celebration
            </h2>
            <p className="mt-5 text-black/65 leading-relaxed">
              The uploaded menu brochure includes three package tiers Silver,
              Gold, and Platinum each with different choice counts across
            </p>
          </motion.div>

          <div className="grid xl:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="group overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${pkg.accent} opacity-70`}
                  />
                  <div className="absolute top-5 left-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow-sm">
                    {pkg.badge}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                    <p className="mt-1 text-lg font-medium">{pkg.price}</p>
                  </div>
                </div>

                <div className="p-7">
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {pkg.highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl bg-black/[0.03] px-3 py-2 text-xs font-medium text-black/70"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-black">
                        <GlassWater size={16} className="text-primary" />
                        Welcome Drinks
                      </div>
                      <p className="mt-2 text-sm text-black/65 leading-relaxed">
                        {pkg.sampleMenu.drink.join(" · ")}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-black">
                        <Soup size={16} className="text-primary" />
                        Soup Selection
                      </div>
                      <p className="mt-2 text-sm text-black/65 leading-relaxed">
                        {pkg.sampleMenu.soup.join(" · ")}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-black">
                        <Salad size={16} className="text-primary" />
                        Salads
                      </div>
                      <p className="mt-2 text-sm text-black/65 leading-relaxed">
                        {pkg.sampleMenu.salads.join(" · ")}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-black">
                        <UtensilsCrossed size={16} className="text-primary" />
                        Rice and Noodles
                      </div>
                      <p className="mt-2 text-sm text-black/65 leading-relaxed">
                        {pkg.sampleMenu.riceAndNoodles.join(" · ")}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-black">
                        <Drumstick size={16} className="text-primary" />
                        Chicken
                      </div>
                      <p className="mt-2 text-sm text-black/65 leading-relaxed">
                        {pkg.sampleMenu.chicken.join(" · ")}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-black">
                        <Fish size={16} className="text-primary" />
                        Seafood
                      </div>
                      <p className="mt-2 text-sm text-black/65 leading-relaxed">
                        {pkg.sampleMenu.seafood.join(" · ")}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-black">
                        <Leaf size={16} className="text-primary" />
                        Vegetables
                      </div>
                      <p className="mt-2 text-sm text-black/65 leading-relaxed">
                        {pkg.sampleMenu.vegetables.join(" · ")}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-black">
                        <Sparkles size={16} className="text-primary" />
                        Condiments
                      </div>
                      <p className="mt-2 text-sm text-black/65 leading-relaxed">
                        {pkg.sampleMenu.condiments.join(" · ")}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-black">
                        <IceCream size={16} className="text-primary" />
                        Desserts
                      </div>
                      <p className="mt-2 text-sm text-black/65 leading-relaxed">
                        {pkg.sampleMenu.desserts.join(" · ")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-black/6 bg-neutral-50 p-8 md:p-10 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <Sparkles className="text-primary" size={20} />
                <h3 className="text-2xl font-semibold">What’s Included</h3>
              </div>

              <div className="space-y-5 text-black/70">
                <div className="flex gap-3">
                  <Fish size={18} className="mt-1 text-primary shrink-0" />
                  <p>
                    All three menu tiers include welcome drinks, condiments, and
                    curated mains with chicken, seafood, vegetables, and
                    desserts, with more choices available as you move from
                    {/* Silver to Gold to Platinum. :contentReference[oaicite:3]{index=3} :contentReference[oaicite:4]{index=4} */}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Leaf size={18} className="mt-1 text-primary shrink-0" />
                  <p>
                    Vegetable selections listed in the brochure include dishes
                    such as dhal tempered/curry, brinjal moju, batter fried
                    mushroom, vegetable chopsuey, potato tempered/fried, and
                    {/* stir fried kangkung. :contentReference[oaicite:5]{index=5} */}
                  </p>
                </div>

                <div className="flex gap-3">
                  <IceCream size={18} className="mt-1 text-primary shrink-0" />
                  <p>
                    Dessert options shown include coffee pudding, yogurt pudding
                    with mango, jelly with custard, fresh cut fruits,
                    {/* fruit salad, bread pudding, and ice cream varieties. :contentReference[oaicite:6]{index=6} :contentReference[oaicite:7]{index=7} */}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="rounded-[2rem] bg-primary text-white p-8 md:p-10 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-6">
                Booking Conditions
              </h3>

              <div className="space-y-4 text-white/90 leading-relaxed">
                <p>
                  Hall charge is listed as <strong>Rs 50,000</strong> for
                  {/* functions with fewer than <strong>150 guests</strong>. :contentReference[oaicite:8]{index=8} */}
                </p>
                <p>
                  Booking confirmation requires a{" "}
                  {/* <strong>Rs 25,000 advance payment</strong>. :contentReference[oaicite:9]{index=9} */}
                </p>
                <p>
                  Full payment must be completed at least{" "}
                  {/* <strong>1 day before the function</strong>. :contentReference[oaicite:10]{index=10} */}
                </p>
                <p>
                  {/* A <strong>free room</strong> is provided for the function day. :contentReference[oaicite:11]{index=11} */}
                </p>
              </div>

              <div className="mt-8 rounded-2xl bg-white/10 p-5 border border-white/10">
                <p className="text-sm text-white/85">
                  Menus and package details on this page are based on the
                  uploaded brochure. Final arrangements, guest counts, and event
                  {/* customization can be confirmed directly with the hotel. :contentReference[oaicite:12]{index=12} */}
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-24 bg-neutral-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] overflow-hidden relative"
          >
            <div className="relative h-[420px] md:h-[520px]">
              {/* <Image
                src="/assets/gallery/weddings/084.jpg"
                alt="Wedding venue at Jade Green Hotel"
                fill
                className="object-cover"
              /> */}
              <div className="absolute inset-0 bg-black/55" />
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <div className="max-w-3xl text-white">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/75">
                    Reserve Your Celebration
                  </p>
                  <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
                    Let Jade Green turn your wedding day into a timeless memory
                  </h2>
                  <p className="mt-5 text-white/85 leading-relaxed">
                    Speak with our team for guest capacity, menu selection,
                    decoration options, and full wedding coordination details.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contactus"
                      className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
                    >
                      Inquire Now
                    </a>
                    <a
                      href="/gallery"
                      className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      View Wedding Gallery
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
