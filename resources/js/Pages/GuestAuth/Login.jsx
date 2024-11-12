import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm, Link } from "@inertiajs/react";
import { Button, Typography, useTheme } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const theme = useTheme();

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("user-login-post"));
    };
    return (
        <GuestLayout>
            <Head title="Log in" />
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: "0.8125rem",
                    mb: 1,
                }}
            >
                Sign in with Account
            </Typography>
            <Button
                component="a"
                href={route("login.google")}
                variant="outlined"
                sx={{
                    fontWeight: "600",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                    fontSize: "14px",
                    textDecoration: "none",
                    mb: 2,
                    py: 1,
                    textTransform: "none",
                    svg: {
                        fontSize: "20px",
                        marginRight: "10px",
                    },
                }}
            >
                <FcGoogle />
                Google
            </Button>
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: "0.8125rem",
                }}
            >
                or
            </Typography>
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("user-register")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Don't have an account? Sign up now
                    </Link>
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}

export default Login;
