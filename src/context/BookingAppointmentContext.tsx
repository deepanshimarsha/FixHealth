import React, { createContext, useContext, useState, ReactNode } from "react";
import { Dispatch, SetStateAction } from "react";

interface BookingAppointmentContextProps {
  formData: {
    name: string;
    phone: string;
    age: string;
    city: string;
    company: string;
    complaints: string;
    experience: boolean;
  };

  setFormData: Dispatch<
    SetStateAction<{
      name: string;
      phone: string;
      age: string;
      city: string;
      company: string;
      complaints: string;
      experience: boolean;
    }>
  >;
}
interface BookingAppointmentProviderProps {
  children: ReactNode;
}

const BookingAppointmentContext = createContext<
  BookingAppointmentContextProps | undefined
>(undefined);

export const BookingAppointmentProvider: React.FC<
  BookingAppointmentProviderProps
> = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    city: "",
    company: "",
    complaints: "",
    experience: false,
  });

  return (
    <BookingAppointmentContext.Provider value={{ formData, setFormData }}>
      {children}
    </BookingAppointmentContext.Provider>
  );
};

export const useBookingAppointmentContext = () => {
  const context = useContext(BookingAppointmentContext);
  if (!context) {
    throw new Error(
      "useBookingAppointmentContext must be used within a BookingAppointmentProvider"
    );
  }
  return context;
};
