import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="overflow-hidden relative bg-dark-purple font-montserrat">
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
          <div className="block 2md:hidden">
            <Image
              src="/img/icons/burger.svg"
              width={30}
              height={28}
              alt="burger menu"
            />
          </div>
        </div>
      </header>
      <main className="min-h-[100vh] flex ">
        <section className="w-[100%] pt-[60px] ">
          <div className="m-[0_auto] relative sm:p-[0_20px] w-[100%] flex justify-center flex-col items-center">
            <h1 className="leading-[110%] text-light-purple uppercase text-center font-montserrat font-[600] sm:text-[clamp(2.8125rem,-1.3125rem+27.5vw,6.25rem)]">
              Flowq
            </h1>
            <Image
              src="/img/hero/mobile-flower.png"
              width={400}
              height={363}
              alt="flower"
              className="w-[100%] h-[362px] rounded-[25px] object-cover relative top-[-50px]"
            />
            <div className="p-[20px] backdrop-filter backdrop-blur-[10px] bg-[#7a7a7a37] relative top-[-70px] rounded-[20px]
            sm:max-w-[320px] m-[0_80px_0_0px]">
              <p>
                At Flow Q, we bring the artistry of floral design and the
                freshest, highest-quality flowers to every bouquet and
                arrangement
              </p>
              <Link href="/order" className="text-dark-purple text-[16px] p-[8px_60px] bg-light-green inline-block absolute
              bottom-[-25px] right-[-80px] font-prompt font-[500] rounded-[16px]">
                Order now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative bottom-0 left-0 w-[100%]">Footer</footer>
    </div>
  );
}
