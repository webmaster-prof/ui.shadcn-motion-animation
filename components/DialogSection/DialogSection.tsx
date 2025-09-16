import DialogWindow from "../DialogWindow/DialogWindow";

const DialogSection = () => {
  return (
    <section className="mt-[80px]">
      <div className="container">
        <div className="max-w-[850px] mx-auto">
          <h2 className="text-center text-orange-500 uppercase text-[35px] font-semibold mb-[30px]  laptop:mb-[20px]">
            Book a Tour
          </h2>
          <p className="text-orange-400 text-[18px] leading-[1.3] mb-[35px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            dignissimos eaque atque, nobis consectetur aut tenetur ullam vitae
            exercitationem qui sapiente suscipit doloremque aspernatur obcaecati
            animi dolor consequatur. Sint molestias voluptatum at sed saepe
            quasi sit iusto, libero tenetur exercitationem! Id iste nostrum
            numquam eaque dignissimos aut provident esse laborum.
          </p>
          <div className="flex justify-center">
            <DialogWindow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DialogSection;
