import { usePage } from "@inertiajs/react";
import AuthLayout from "@/Layout/AuthLayout";
import StatModal from "./StatModal";

function Stat() {
    const { stats } = usePage().props;
    return (
        <AuthLayout sectionHeading="Statistic - Home">
            <div className="container">
                <div className="row">
                    {stats.map((stat) => (
                        <StatModal stat={stat} />
                    ))}
                </div>
            </div>
        </AuthLayout>
    );
}

export default Stat;
