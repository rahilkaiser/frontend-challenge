import create from 'zustand';

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

const useStore = create<UserState>((set) => ({
    userDetails: {
        forename: '',
        surname: '',
        email: '',
        phoneNumber: '',
    },
    selectedSalaryRange: '',
    setUserDetails: (details) => set((state) => ({userDetails: {...state.userDetails, ...details}})),
    setSelectedSalaryRange: (salaryRange) => set({ selectedSalaryRange: salaryRange }),

}));

export default useStore;
