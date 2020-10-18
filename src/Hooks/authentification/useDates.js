import { useState } from 'react';


export function useDates() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();

    function changeDates(e) {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);

                break;
            case 'name':
                setName(e.target.value);
                break;
            case 'phone':
                setPhone(e.target.value);
                break;
            default:
                return null;
    } 
}
return({email, password, name, phone, changeDates})
}