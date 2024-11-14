import Image from 'next/image';

const DemoCard = () => {
  return (
    <div className="flex flex-col py-44 px-6 items-center gap-14">
      <div className="flex flex-col w-[70%] justify-start">
        <p className="text-4xl text-white">
          The simplest way to manage your money
        </p>
        <p className="text-xl text-white">
          Enter your credentials to access your account.
        </p>
      </div>

      <Image
        src="/assets/images/demo.png"
        alt="demo"
        width={400}
        height={400}
        className="rounded-3xl"
      />
    </div>
  );
};

export default DemoCard;
