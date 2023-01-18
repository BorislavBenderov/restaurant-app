import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationsSlice";

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
      }}
    >
      {name}
    </div>
  );
};
