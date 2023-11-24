import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const useDeadlineCheck = (deadline) => {
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const checkExpiration = () => {
            const currentDate = dayjs(); // Get the current device's local date
            const deadlineDate = dayjs(deadline); // Parse the provided deadline date

            setIsExpired(currentDate.isAfter(deadlineDate)); // Compare the dates for expiration
        };

        checkExpiration(); // Initial check

        // Check expiration periodically (e.g., every minute)
        const interval = setInterval(checkExpiration, 60000); // Adjust the interval as needed

        // Clean up interval on unmount
        return () => clearInterval(interval);
    }, [deadline]);

    return isExpired;
};

export default useDeadlineCheck;