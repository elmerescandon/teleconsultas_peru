import SlotAppointmentVisible from '@/components/Atoms/SlotAppointmentVisible/SlotAppointmentVisible';
import IAvailabilitySlots from '@/utils/Interfaces/dataModel/IAvailabilitySlots';
import { dateToSpanish } from '@/utils/functions/utils';
import React from 'react'

type DaySlotAppointmentsProps = {
    availability: IAvailabilitySlots;
    doctorId: string;
    specialityId: string;
};

const DaySlotAppointments = ({ availability, doctorId, specialityId }: DaySlotAppointmentsProps) => {
    return (
        <div
            className="flex flex-col gap-5"
        >
            <p
                className="text-xl font-semibold
                        max-lg:text-lg"
            >
                {dateToSpanish(availability.date)}
            </p>
            <div className="flex gap-8 flex-wrap">
                {availability.slots.map(
                    (slot, index) => (
                        <SlotAppointmentVisible
                            key={index}
                            availableAppointment={slot}
                            date={availability.date}
                            doctorId={doctorId}
                            specialityId={specialityId}
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default DaySlotAppointments