import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationsSlice";
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardTypes {
  name: string;
  index: number;
}

export const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();

  return (
    <div
      className="reservation-card-container"
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            id: uuid(),
            name,
            food: [],
          })
        );
      }}
    >
      {name}
    </div>
  );
};
