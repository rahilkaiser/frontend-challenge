export const validateForename = (value: string) => {
    if (!value) return 'Forename is required';
    return '';
};

export const validateSurname = (value: string) => {
    if (!value) return 'Surname is required';
    return '';
};

export const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return 'E-Mail is required';
    if (!emailRegex.test(value)) return 'Invalid email format';
    return '';
};

export const validatePhoneNumber = (value: string) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!value) return 'Phone number is required';
    if (!phoneRegex.test(value)) return 'Invalid phone number format';
    return '';
};