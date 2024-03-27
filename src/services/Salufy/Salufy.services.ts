import IAppointment from "@/utils/Interfaces/reducers/IAppointment";

class SalufyService {
  private static instance: SalufyService;
  URL = "/api/salufy";

  static getInstance() {
    if (!SalufyService.instance) {
      SalufyService.instance = new SalufyService();
    }
    return SalufyService.instance;
  }

  constructor() {
    this.URL = process.env.NEXT_PUBLIC_MYPAGE_URL + this.URL;
  }

  createAppointment = async (
    appointment: IAppointment,
    id: string,
    type: "pre-reserved" | "scheduled" | "pending" = "pre-reserved"
  ): Promise<string> => {
    try {
      const res = await fetch(`${this.URL}/appointment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appointment: {
            ...appointment,
            patientId: id,
            status: type,
          },
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create appointment");
      }

      const resData = await res.json();
      const {appointmentId} = resData;
      return appointmentId as string;
    } catch (error) {
      throw error as Error;
    }
  };

  updateAppointmentStatus = async (
    id: string,
    type: "scheduled" | "pending"
  ) => {
    try {
      const response = await fetch(`${this.URL}/appointment`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          appointmentFields: {
            status: type,
          },
        }),
      });
      return response.json();
    } catch (error) {
      throw Error;
    }
  };

  updateAppointmentDoctorCanceled = async (
    id: string,
    appointment: IAppointment
  ) => {
    try {
      const response = await fetch(`${this.URL}/appointment`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          appointmentFields: {
            status: "pending",
            doctorId: appointment.doctorId,
            date: appointment.date,
            startDate: appointment.startDate,
            endDate: appointment.endDate,
          },
        }),
      });
      return response.json();
    } catch (error) {
      throw Error;
    }
  };

  getAppointment = async (id: string): Promise<IAppointment> => {
    try {
      console.log(`${this.URL}/appointment/${id}`);
      const res = await fetch(`${this.URL}/appointment/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch appointment");
      }
      const {appointment} = await res.json();
      return appointment as IAppointment;
    } catch (error) {
      throw error as Error;
    }
  };
}

export default SalufyService;
