import { useState, useEffect } from "react";

export const usePasswordValidation = ({ firstPassword = "", confirmPassword = "" }) => {

    const [validLength, setValidLength] = useState(null);
    const [hasNumber, setHasNumber] = useState(null);
    const [upperCase, setUpperCase] = useState(null);
    const [specialChar, setSpecialChar] = useState(null);
    const [match, setMatch] = useState(null);

    useEffect(() => {

        setValidLength(firstPassword.length >= 8 ? true : false);
        setUpperCase(firstPassword.toLowerCase() !== firstPassword);
        setHasNumber(/\d/.test(firstPassword));
        setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
        setMatch(firstPassword && firstPassword === confirmPassword);


    }, [firstPassword, confirmPassword]);
    return [validLength, hasNumber, upperCase, match, specialChar];
}

