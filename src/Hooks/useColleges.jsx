import { useEffect, useState } from "react";

const useColleges = () => {
    const [colleges, setColleges] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("Data/colleges.json")
            .then((res) => res.json())
            .then((data) => {
                setColleges(data);
                setLoading(false);
            });
    }, []);
    if (loading) {
        return <h1>Loading...</h1>;
    }
    return { colleges, loading };
};

export default useColleges;
