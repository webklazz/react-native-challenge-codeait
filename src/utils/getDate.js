import { useEffect, useMemo, useState } from "react";



export const getDate = () => {
    const [date, setDate] = useState('');
    useEffect(() => {
        const newDate = new Date().toDateString().slice(0, 10);
        setDate(newDate);
      }, [date]);
      
    return {date};
}