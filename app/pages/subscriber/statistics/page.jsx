"use client";
import { api } from "@/app/config/api";
import { AuthContext } from "@/app/context/AuthContext";
import axios from "axios";
import React, { useContext, useEffect, useState ,useMemo} from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import moment from "moment";



function page() {


  const { auth } = useContext(AuthContext)
   const [queues,setQueues]=useState(null)

  const fetch_queues_for_place = async (placeId) => {
    try {
      
      const res = await axios.get(`${api.baseUrl}api/v1/fetch/queues/place/${placeId}`)
      setQueues(res.data.data)
      console.log(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetch_queues_for_employee = async ()=>{
    try {
      
      const res = await axios.get(`${api.baseUrl}api/v1/fetch/queues/place/${placeId}`)
      setQueues(res.data.data)
      console.log(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    const placeId = auth?.user?.user?.placeId;
    if (placeId) {
      fetch_queues_for_place(placeId);
      console.log(auth.user.user.placeId)
    }
   
  }, [auth]);



   // نحول البيانات لمخطط يومي
   const dailyData = useMemo(() => {
    const counts = {};
  
    if (Array.isArray(queues)) {
      queues.forEach(queue => {
        const date = moment(queue.createdAt).format("YYYY-MM-DD");
        counts[date] = (counts[date] || 0) + 1;
      });
    }
  
    return Object.entries(counts).map(([date, count]) => ({
      name: date,
      queues: count
    }));
  }, [queues]);






  const employeeData = useMemo(() => {
    const counts = {};
    if (Array.isArray(queues)) {
      queues.forEach(queue => {
        const employeeName = queue.employee?.name || "غير معروف";
        counts[employeeName] = (counts[employeeName] || 0) + 1;
      });
    }
    return Object.entries(counts).map(([name, count]) => ({
      name,
      queues: count
    }));
  }, [queues]);

  return (
    <div>


<h2 className="text-xl font-bold mt-10 mb-2"> </h2>
<ResponsiveContainer width="100%" height={300}>
        <BarChart data={dailyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="queues" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>




      <h2 className="text-xl font-bold mt-10 mb-2">عدد الصفوف لكل موظف</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={employeeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="queues" fill="#82ca9d" name="عدد الصفوف" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default page