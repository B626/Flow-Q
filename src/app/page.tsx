"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { ArrowRight, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 992px)");
  return (
    <div className="overflow-hidden relative bg-dark-purple font-prompt">
      <header className="p-[24px_0]">
        <div className="m-[0_auto] relative sm:p-[0_20px] flex items-center gap-[10px] w-[100%] justify-between">
          <div className="flex gap-[4px] items-center">
            <Image src="/img/logo.svg" width={45} height={34} alt="flow q" />
            <p className="leading-[100%] text-[20px] text-green">
              Floral <br />
              boutique
            </p>
          </div>
          <nav className="flex gap-[27px] uppercase flex-wrap hidden 2md:flex">
            <Link
              className="text-green text-[18px] font-[500] font-['Prompt']"
              href="/home"
            >
              Home
            </Link>
            <Link
              className="text-green text-[18px] font-[500] font-['Prompt']"
              href="/about"
            >
              About us
            </Link>
            <Link
              className="text-green text-[18px] font-[500] font-['Prompt']"
              href="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="text-green text-[18px] font-[500] font-['Prompt']"
              href="/contacts"
            >
              Contacts
            </Link>
          </nav>
          <Link
            href="/order"
            className="text-[16px] text-dark-purple bg-green p-[8px_20px] font-[500] rounded-[16px] hidden 2md:flex"
          >
            Order now
          </Link>
          {isDesktop ? (
            <></>
          ) : (
            <Drawer direction="right">
              <DrawerTrigger>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent>
                <DialogTitle color="black" className="text-[#000]">
                  Menu
                </DialogTitle>
                <DialogDescription color="black" className="text-[#000]">
                  Description menu
                </DialogDescription>
                ?
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </header>
      <main className="min-h-[100vh] flex flex-col">
        <section className="w-[100%] pt-[30px] pb-[35px]">
          <div className="m-[0_auto] relative sm:p-[0_20px] w-[100%] flex justify-center flex-col items-center">
            <h1 className="leading-[110%] text-light-purple uppercase text-center font-montserrat font-[600] sm:text-[clamp(2.8125rem,-1.3125rem+27.5vw,6.25rem)]">
              Flowq
            </h1>
            <Image
              src="/img/hero/mobile-flower.png"
              width={400}
              height={363}
              alt="flower"
              className="w-[100%] rounded-[25px] object-cover relative top-[-40px]"
            />
            <div
              className="p-[20px] backdrop-filter backdrop-blur-[10px] bg-[#7a7a7a37] relative top-[-70px] rounded-[20px]
            sm:max-w-[320px] m-[0_80px_0_0px]"
            >
              <p>
                At Flow Q, we bring the artistry of floral design and the
                freshest, highest-quality flowers to every bouquet and
                arrangement
              </p>
              <Link
                href="/order"
                className="text-dark-purple text-[16px] p-[8px_60px] bg-light-green inline-block absolute
              bottom-[-25px] right-[-80px] font-prompt font-[500] rounded-[16px]"
              >
                Order now
              </Link>
            </div>
          </div>
        </section>
        <section className="pb-[30px]">
          <div className="m-[0_auto] relative sm:p-[0_20px] w-[100%]">
            <div>
              <p className="uppercase font-prompt color-light-beige text-center mb-[10px] text-[11px]">
                We provide
              </p>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem
                    className="flex justify-center flex-col p-[18px_0_5px] [border-top:1px_solid_#FCDDCD] [border-bottom:1px_solid_#FCDDCD]"
                    value="item-1"
                  >
                    <AccordionTrigger className="uppercase text-[25px] text-center leading-[120%] font-[300]">
                      Fresh bouqets
                    </AccordionTrigger>
                    <AccordionContent className="accordion-content mt-[15px] flex flex-col">
                      Brighten any moment with our hand-crafted bouquets,
                      perfect for birthdays, anniversaries, or just because. Our
                      florists create beautiful arrangements using the freshest
                      flowers of the season.
                      <Link
                        href={"/"}
                        className="block relative right-0 flex self-end text-[20px] text-light-purple items-center gap-[10px] mb-[10px]"
                      >
                        Learn more
                        <ArrowRight />
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    className="flex justify-center flex-col p-[18px_0_5px] [border-top:1px_solid_#FCDDCD] [border-bottom:1px_solid_#FCDDCD]"
                    value="item-2"
                  >
                    <AccordionTrigger className="uppercase text-[25px] text-center leading-[120%] font-[300]">
                      Event Floral Design
                    </AccordionTrigger>
                    <AccordionContent className="accordion-content mt-[15px] flex flex-col">
                      Brighten any moment with our hand-crafted bouquets,
                      perfect for birthdays, anniversaries, or just because. Our
                      florists create beautiful arrangements using the freshest
                      flowers of the season.
                      <Link
                        href={"/"}
                        className="block relative right-0 flex self-end text-[20px] text-light-purple items-center gap-[10px] mb-[10px]"
                      >
                        Learn more
                        <ArrowRight />
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    className="flex justify-center flex-col p-[18px_0_5px] [border-top:1px_solid_#FCDDCD] [border-bottom:1px_solid_#FCDDCD]"
                    value="item-3"
                  >
                    <AccordionTrigger className="uppercase text-[25px] text-center leading-[120%] font-[300]">
                      Flower Subscriptions
                    </AccordionTrigger>
                    <AccordionContent className="accordion-content mt-[15px] flex flex-col">
                      Brighten any moment with our hand-crafted bouquets,
                      perfect for birthdays, anniversaries, or just because. Our
                      florists create beautiful arrangements using the freshest
                      flowers of the season.
                      <Link
                        href={"/"}
                        className="block relative right-0 flex self-end text-[20px] text-light-purple items-center gap-[10px] mb-[10px]"
                      >
                        Learn more
                        <ArrowRight />
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    className="flex justify-center flex-col p-[18px_0_5px] [border-top:1px_solid_#FCDDCD] [border-bottom:1px_solid_#FCDDCD]"
                    value="item-4"
                  >
                    <AccordionTrigger className="uppercase text-[25px] text-center leading-[120%] font-[300]">
                      Custom Arrangements
                    </AccordionTrigger>
                    <AccordionContent className="accordion-content mt-[15px] flex flex-col">
                      Brighten any moment with our hand-crafted bouquets,
                      perfect for birthdays, anniversaries, or just because. Our
                      florists create beautiful arrangements using the freshest
                      flowers of the season.
                      <Link
                        href={"/"}
                        className="block relative right-0 flex self-end text-[20px] text-light-purple items-center gap-[10px] mb-[10px]"
                      >
                        Learn more
                        <ArrowRight />
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    className="flex justify-center flex-col p-[18px_0_5px] [border-top:1px_solid_#FCDDCD] [border-bottom:1px_solid_#FCDDCD]"
                    value="item-5"
                  >
                    <AccordionTrigger className="uppercase text-[25px] text-center leading-[120%] font-[300]">
                      Same-Day Delivery
                    </AccordionTrigger>
                    <AccordionContent className="accordion-content mt-[15px] flex flex-col">
                      Brighten any moment with our hand-crafted bouquets,
                      perfect for birthdays, anniversaries, or just because. Our
                      florists create beautiful arrangements using the freshest
                      flowers of the season.
                      <Link
                        href={"/"}
                        className="block relative right-0 flex self-end text-[20px] text-light-purple items-center gap-[10px] mb-[10px]"
                      >
                        Learn more
                        <ArrowRight />
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    className="flex justify-center flex-col p-[18px_0_5px] [border-top:1px_solid_#FCDDCD] [border-bottom:1px_solid_#FCDDCD]"
                    value="item-6"
                  >
                    <AccordionTrigger className="uppercase text-[25px] text-center leading-[120%] font-[300]">
                      Indoor Arrangements
                    </AccordionTrigger>
                    <AccordionContent className="accordion-content mt-[15px] flex flex-col">
                      Brighten any moment with our hand-crafted bouquets,
                      perfect for birthdays, anniversaries, or just because. Our
                      florists create beautiful arrangements using the freshest
                      flowers of the season.
                      <Link
                        href={"/"}
                        className="block relative right-0 flex self-end text-[20px] text-light-purple items-center gap-[10px] mb-[10px]"
                      >
                        Learn more
                        <ArrowRight />
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    className="flex justify-center flex-col p-[18px_0_5px] [border-top:1px_solid_#FCDDCD] [border-bottom:1px_solid_#FCDDCD]"
                    value="item-7"
                  >
                    <AccordionTrigger className="uppercase text-[25px] text-center leading-[120%] font-[300]">
                      Packages & Add-ons
                    </AccordionTrigger>
                    <AccordionContent className="accordion-content mt-[15px] flex flex-col">
                      Brighten any moment with our hand-crafted bouquets,
                      perfect for birthdays, anniversaries, or just because. Our
                      florists create beautiful arrangements using the freshest
                      flowers of the season.
                      <Link
                        href={"/"}
                        className="block relative right-0 flex self-end text-[20px] text-light-purple items-center gap-[10px] mb-[10px]"
                      >
                        Learn more
                        <ArrowRight />
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-[30px]  pb-[250px]">
          <div className="m-[0_auto] relative sm:p-[0_0px] w-[100%]">
            <div>
              <p className="uppercase font-prompt color-light-beige text-center mb-[10px] text-[11px]">
                About us
              </p>
              <h2
                className="uppercase text-[35px] font-prompt text-center 
              leading-[110%] mb-[25px]"
              >
                explore floral{" "}
                <span className="text-light-beige">world with flowQ</span>
              </h2>
              <div className="pr-[20px] relative">
                <Image
                  className="rounded-tr-[30px] rounded-br-[30px] h-[100%]"
                  src="/img/explore/img.jpg"
                  width={720}
                  height={569}
                  alt="flowers"
                />
                <div
                  className="p-[35px_30px_40px] absolute bottom-[-230px] left-[50%] 
                -translate-x-1/2 w-[80%] bg-[#7a7a7a30] rounded-[25px] backdrop-filter 
                backdrop-blur-[20px]"
                >
                  <p className="text-[16px] leading-[120%]">
                    Founded with a love for nature and a commitment to
                    sustainability, we work with local growers to bring you the
                    freshest blooms each season has to offer. Whether you’re
                    celebrating a special moment or simply adding beauty to your
                    day, we’re here to help make it memorable with flowers that
                    speak from the heart.
                  </p>
                  <Image
                    className="absolute bottom-0 right-0"
                    src="/img/icons/arrow-down-right.svg"
                    width={43}
                    height={43}
                    alt="see more"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-[70px] pb-[40px]">
          <div className="m-[0_auto] relative sm:p-[0_20px] w-[100%]">
            <p className="uppercase font-prompt color-light-beige text-center mb-[10px] text-[11px]">
              Achievments
            </p>
            <div className="flex flex-col gap-[60px] justify-center">
              <h2 className="uppercase text-[35px] font-prompt font-[300] leading-[110%]">
                Honoring Our Dedication to <br />
                <span className="text-light-beige">Floral Excellence</span>
              </h2>
              <div className="flex flex-col gap-[50px]">
                <div>
                  <div className="flex items-center justify-center">
                    <span className="text-[82px] text-light-green leading-[100%]">
                      100
                    </span>
                    <Image
                      src="/img/icons/leaf.svg"
                      width={77}
                      height={70}
                      alt="leaf"
                    />
                  </div>
                  <p className="text-center">eco-friendly certificated</p>
                </div>
                <hr />
                <div>
                  <div className="flex items-center justify-center">
                    <span className="text-[82px] text-light-green leading-[100%]">
                      50+
                    </span>
                  </div>
                  <p className="text-center">years working</p>
                </div>
                <hr />
                <div>
                  <div className="flex items-center justify-center">
                    <span className="text-[82px] text-light-green leading-[100%]">
                      12
                    </span>
                  </div>
                  <p className="text-center">floral design awards</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-[30px]">
          <div className="m-[0_auto] relative sm:p-[0_20px] w-[100%]">
            <p className="uppercase font-prompt color-light-beige text-center mb-[10px] text-[11px] mb-[10px]">
              Portfolio
            </p>
            <h2 className="uppercase text-[35px] font-prompt font-[300] leading-[110%] mb-[40px]">
              Portfolio of floral creativity
            </h2>
            <div className="flex flex-col justify-center align-center">
              <div className="grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr] mb-[25px]">
                <div>
                  <Image
                    src="/img/portfolio/1.jpg"
                    width={350}
                    height={350}
                    className="w-[100%] h-[100%] object-cover"
                    alt="bouqette 1"
                  />
                </div>
                <div className="w-[100%]">
                  <Image
                    src="/img/portfolio/2.jpg"
                    width={350}
                    height={350}
                    className="w-[100%] h-[100%] object-cover"
                    alt="bouqette 2"
                  />
                </div>
                <div className="w-[100%]">
                  <Image
                    src="/img/portfolio/3.jpg"
                    width={350}
                    height={350}
                    className="w-[100%] h-[100%] object-cover"
                    alt="bouqette 3"
                  />
                </div>
                <div className="w-[100%]">
                  <Image
                    src="/img/portfolio/4.jpg"
                    width={350}
                    height={350}
                    className="w-[100%] h-[100%] object-cover"
                    alt="bouqette 4"
                  />
                </div>
                <div className="w-[100%]">
                  <Image
                    src="/img/portfolio/5.jpg"
                    width={350}
                    height={350}
                    className="w-[100%] h-[100%] object-cover"
                    alt="bouqette 5"
                  />
                </div>
                <div className="w-[100%]">
                  <Image
                    src="/img/portfolio/6.jpg"
                    width={350}
                    height={350}
                    className="w-[100%] h-[100%] object-cover"
                    alt="bouqette 6"
                  />
                </div>
                <div className="w-[100%]">
                  <Image
                    src="/img/portfolio/7.jpg"
                    width={350}
                    height={350}
                    className="w-[100%] h-[100%] object-cover"
                    alt="bouqette 7"
                  />
                </div>
                <div className="w-[100%]">
                  <Image
                    src="/img/portfolio/8.jpg"
                    width={350}
                    height={350}
                    className="w-[100%] h-[100%] object-cover"
                    alt="bouqette 8"
                  />
                </div>
              </div>
              <Link
                href={"/"}
                className="uppercase font-prompt text-[18px] font-[300] text-center leading-[100%]
            border-[1px] border-[solid] border-[#ffffff68] p-[4px_12px] rounded-[16px] inline-flex self-center"
              >
                Show more
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative bottom-0 left-0 w-[100%]">Footer</footer>
    </div>
  );
}
