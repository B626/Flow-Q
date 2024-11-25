"use client"

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
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
                  Menu nibba
                </DialogTitle>
                <DialogDescription color="black" className="text-[#000]">
                  Niaaaaa
                </DialogDescription>
                ?
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </header>
      <main className="min-h-[100vh] flex flex-col">
        <section className="w-[100%] pt-[30px] pb-[70px]">
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
        <section>
          <div className="m-[0_auto] relative sm:p-[0_20px] w-[100%]">
            <div>
              <p className="uppercase font-prompt color-light-beige text-center mb-[15px] text-[11px]">
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
                    <AccordionContent className="mt-[15px] flex flex-col">
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
                    <AccordionContent className="mt-[15px] flex flex-col">
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
                    <AccordionContent className="mt-[15px] flex flex-col">
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
                    <AccordionContent className="mt-[15px] flex flex-col">
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
                    <AccordionContent className="mt-[15px] flex flex-col">
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
                    <AccordionContent className="mt-[15px] flex flex-col">
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
                    <AccordionContent className="mt-[15px] flex flex-col">
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
      </main>
      <footer className="relative bottom-0 left-0 w-[100%]">Footer</footer>
    </div>
  );
}
