import { styled } from "@mui/system";
import { PickersDay } from "@mui/x-date-pickers";

const HighlightedDay = styled(PickersDay)(({ theme }) => ({
    "&.Mui-selected": {
        backgroundColor: "#30A8B8",
        color: "#FFF",
    },
}));

export const ServerDay = (props: any) => {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected =
        !props.outsideCurrentMonth &&
        highlightedDays.includes(day.format("YYYY-MM-DD"));

    return (
        <HighlightedDay
            {...other}
            outsideCurrentMonth={outsideCurrentMonth}
            day={day}
            selected={isSelected}
        />
    );
};