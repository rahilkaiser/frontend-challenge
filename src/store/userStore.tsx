import create from 'zustand';
import {persist} from "zustand/middleware";

interface UserDetails {
    forename: string;
    surname: string;
    email: string;
    phoneNumber: string;
}

interface UserState {
    userDetails: UserDetails;
    selectedSalaryRange: string;
    setSelectedSalaryRange: (salaryRange: string) => void;
    setUserDetails: (details: Partial<UserDetails>) => void;
}

const useStore = create<UserState>( persist(
    (set) => ({
        userDetails: {
            forename: '',
            surname: '',
            email: '',
            phoneNumber: '',
        },
        selectedSalaryRange: '',
        setUserDetails: (details) =>
            set((state) => ({ userDetails: { ...state.userDetails, ...details } })),
        setSelectedSalaryRange: (salaryRange) => set({ selectedSalaryRange: salaryRange }),
    }),
    {
        name: 'user-store',
    }
));

export default useStore;
