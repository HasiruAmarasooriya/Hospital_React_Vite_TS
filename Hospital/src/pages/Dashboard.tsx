import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Stethoscope, Calendar, DollarSign } from "lucide-react";

export default function Dashboard() {
  const [stats] = useState({
    patients: 320,
    doctors: 25,
    appointments: 87,
    revenue: "$125,000",
  });

  return (
    <div>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg border-none">
          <CardContent className="p-6 text-center flex flex-col items-center">
            <User size={36} className="mb-2" />
            <h2 className="text-lg font-semibold">Total Patients</h2>
            <p className="text-4xl font-bold">{stats.patients}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg border-none">
          <CardContent className="p-6 text-center flex flex-col items-center">
            <Stethoscope size={36} className="mb-2" />
            <h2 className="text-lg font-semibold">Total Doctors</h2>
            <p className="text-4xl font-bold">{stats.doctors}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg border-none">
          <CardContent className="p-6 text-center flex flex-col items-center">
            <Calendar size={36} className="mb-2" />
            <h2 className="text-lg font-semibold">Appointments Today</h2>
            <p className="text-4xl font-bold">{stats.appointments}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg border-none">
          <CardContent className="p-6 text-center flex flex-col items-center">
            <DollarSign size={36} className="mb-2" />
            <h2 className="text-lg font-semibold">Revenue</h2>
            <p className="text-4xl font-bold">{stats.revenue}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
