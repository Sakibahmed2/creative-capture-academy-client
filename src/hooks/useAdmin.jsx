import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);


    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://creative-capturea-academy.vercel.app/users/admin/${user?.email}`);
            const data = await res.json()
            return data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;