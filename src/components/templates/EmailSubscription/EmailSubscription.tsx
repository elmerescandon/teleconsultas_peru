"use client";

import Button from "@/components/atoms/Button/Button";
import "./EmailSubscription.scss";
import Input from "@/components/atoms/Input/Input";

const EmailSubscription = () => {
  return (
    <div className="big-email-subscription">
      <div className="email-subscription py-32 flex justify-center">
        <div className="email-subscription__data flex flex-col items-center justify-center px-16 sm:px-64 py-8 rounded-2xl">
          <h2 className="text-2xl md:text-5xl font-bold text-center py-8">
            Subscribe to our newsletter!
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <Input type="email" placeholder="Enter your email" />
            <Button content="SUBSCRIBE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscription;
