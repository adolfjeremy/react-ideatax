import { usePage } from "@inertiajs/react";
import AuthLayout from "@/Layout/AuthLayout";
import HeroModal from "./component/HeroModal";
import HeroEdit from "./component/HeroEdit";

function Hero() {
    const { heroes } = usePage().props;

    return (
        <AuthLayout sectionHeading="Hero - Home">
            <div className="container">
                <div className="row">
                    <HeroModal />
                </div>
                <div className="row">
                    {heroes.map((hero) => (
                        <HeroEdit key={hero.id} hero={hero} />
                    ))}
                </div>
            </div>
        </AuthLayout>
    );
}

export default Hero;
