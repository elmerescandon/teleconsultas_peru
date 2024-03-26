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
      const res = await fetch("/api/salufy/appointment", {
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
      throw Error;
    }
  };

  updateAppointmentStatus = async (
    id: string,
    type: "scheduled" | "pending"
  ) => {
    try {
      const response = await fetch(this.URL + "/appointment", {
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
}

export default SalufyService;
