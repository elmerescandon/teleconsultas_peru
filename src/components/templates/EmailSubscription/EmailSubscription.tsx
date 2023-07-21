"use client";

import Button from "@/components/atoms/Button/Button";
import "./EmailSubscription.scss";
import Input from "@/components/atoms/Input/Input";

const EmailSubscription = () => {
  return (
    <div className="big-email-subscription">
      <div className="email-subscription py-32 flex justify-center">
        <div className="w-max max-w-lg px-4">
          <h2 className="text-2xl md:text-5xl font-bold text-center py-8">
            Subscribe to our newsletter!
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <Input type="email" placeholder="Enter your email" />
            <Button
              content="SUBSCRIBE"
              onChangeFunction={() => console.log("On Click")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscription;
