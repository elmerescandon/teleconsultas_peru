import LinkPrimary from "@/components/Atoms/Links/LinkPrimary/LinkPrimary";
import PaymentLater from "@/components/Molecules/PaymentLater/PaymentLater";
import MercadoPagoPayment from "@/components/Organisms/MercadoPagoPayment/MercadoPagoPayment";
import PaymentReview from "@/components/Organisms/PaymentReview/PaymentReview";
import {isDateOlderThan24HoursFromNow} from "@/utils/functions/utils";
import usePayment from "@/utils/hooks/usePayment";
import Routes from "@/utils/routes/Routes";
import {useRouter} from "next/navigation";

const PaymentAppointmentSection2 = () => {
  const {appointment, pageState, handleUpload} = usePayment();
  const {date} = appointment;
  const router = useRouter();

  return (
    <div className="px-48 pb-10 max-lg:h-full max-lg:pt-24 max-lg:px-5">
      <div>
        <div className="flex justify-between items-center max-lg:flex-col-reverse max-lg:items-end">
          <div className="text-2xl font-semibold py-5">
            ¡Ya falta poco, completa los siguientes pasos!
          </div>
          <LinkPrimary to={Routes.RESERVE}>Atrás</LinkPrimary>
        </div>

        {pageState === "success" && (
          <div className="flex flex-col justify-center pt-5 gap-2 w-full">
            <PaymentReview appointment={appointment} />
            <div className="flex-col items-center justify-center">
              {<MercadoPagoPayment appointment={appointment} />}
              {date && isDateOlderThan24HoursFromNow(date) && (
                <PaymentLater
                  payLater={async () => {
                    await handleUpload("pending");
                    router.push(Routes.PATIENT_HOME);
                  }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentAppointmentSection2;
