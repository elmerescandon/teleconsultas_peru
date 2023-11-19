import { Switch } from "@mui/material";
import React from "react";

type SwitchAvailabilityProps = {
    title: string;
    check: boolean;
    setCheck: (check: boolean) => void;
};

const SwitchAvailability = ({
    title,
    check,
    setCheck,
}: SwitchAvailabilityProps) => {
    return (
        <div className="flex justify-between items-center">
            <p className="py-3 text-lg font-medium">{title}</p>
            <Switch
                checked={check}
                onChange={() => {
                    setCheck(!check);
                }}
                inputProps={{ "aria-label": "controlled" }}
                sx={
                    {
                        height: "45px",
                        width: "60px",
                        "& .MuiSwitch-thumb": {
                            height: "25px",
                            width: "25px",
                        },
                        "& .MuiSwitch-track": {
                            width: "80px",
                            borderRadius: "30px",
                        },
                        "& .MuiSwitch-colorPrimary.Mui-checked": {
                            color: "#2C99A7",
                        },
                    } as any
                }
            />
        </div>
    );
};

export default SwitchAvailability;
