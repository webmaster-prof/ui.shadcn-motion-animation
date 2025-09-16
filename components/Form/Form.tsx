import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const Form = () => {
  return (
    <section className="mt-[100px] mobile:mt-[50px]">
      <div className="container">
        <div>
          <h2 className="text-center text-orange-500 uppercase text-[35px] font-semibold mb-[30px]  laptop:mb-[20px]">
            Contacts
          </h2>
          <div className="flex flex-col gap-y-[20px] max-w-[700px] mx-auto">
            <div className="flex flex-col gap-y-[12px]">
              <Label
                htmlFor="username"
                className=" text-orange-500 text-[23px] font-mont"
              >
                Enter Your Name
              </Label>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                className="!text-[25px] placeholder:text-[20px] placeholder:text-gray-500 py-[25px]"
              />
            </div>
            <div className="flex flex-col gap-y-[12px]">
              <Label
                htmlFor="email"
                className=" text-orange-500 text-[23px] font-mont"
              >
                Enter Your Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                className="!text-[25px] placeholder:text-[20px] placeholder:text-gray-500 py-[25px]"
              />
            </div>
            <div className="flex flex-col gap-y-[12px]">
              <Label
                htmlFor="password"
                className=" text-orange-500 text-[23px] font-mont"
              >
                Enter Your Password
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                className="!text-[25px] placeholder:text-[20px] placeholder:text-gray-500 py-[25px]"
              />
            </div>
            <div className="flex flex-col gap-y-[12px]">
              <Textarea
                placeholder="Type your message here."
                className="!text-[25px] w-full h-[210px] min-h-[210px] max-h-[210px] placeholder:text-[20px] placeholder:text-gray-500 py-[25px]"
              />
            </div>
            <div className="flex justify-center">
              <Button className="bg-orange-500 text-white text-[16px] font-mont hover:bg-orange-800 hover:text-white">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
