import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { FcGoogle } from "@/components/atoms/icons";

const GoogleButton = () => {
  return (
    <Button size={"lg"} variant={"outline"} className={"rounded-xl"}>
      <FcGoogle size={20} />
      <ButtonText className={"text-light-foreground"}>
        Continue with google
      </ButtonText>
    </Button>
  );
};
export default GoogleButton;
