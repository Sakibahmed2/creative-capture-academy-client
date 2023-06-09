import  { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {
    const { user, loading } = useContext(AuthContext);


    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/instructor/${user?.email}`);
            const data = await res.json()
            return data?.instructor;
        }
        
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;