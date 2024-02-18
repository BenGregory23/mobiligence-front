
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import PresentationLeft from "./presentation-left"
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query"
import { login } from "@/api/login"
import { useNavigate } from "react-router-dom"


const formSchema = z.object({
    login: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

const onSucessFn = (data) => {
    
    console.log("SUCCESS")
}

const Login = () => {
    const navigate = useNavigate()
    const { user, setUser, isAuthenticated, setIsAuthenticated } = useAuth();
    const {status,data, mutate,  error } = useMutation({mutationFn: login, onSuccess: (data) => onSucessFn(data)})

   


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        const credentials = { login: values.login, password: values.password }
        try {
             mutate(credentials)
        
             
           
        
            // Handle successful login
            // setIsAuthenticated(true);
            // navigate("/")
        } catch (error) {
            // Handle login error
            console.error("Login failed:", error);
        }
    }
    return (
        <div className="flex flex-row">

            <PresentationLeft />

            <div className="flex flex-col w-1/2 relative items-center justify-center">
                <Link to="/register" className="absolute right-4 top-4">
                    <Button variant={"link"} className=" absolute right-4 top-4">Inscription</Button>
                </Link>


                <svg id="logo-15" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.5 12.75C24.5 18.9632 19.4632 24 13.25 24H2V12.75C2 6.53679 7.03679 1.5 13.25 1.5C19.4632 1.5 24.5 6.53679 24.5 12.75Z" class="ccustom" fill="#17CF97"></path> <path d="M24.5 35.25C24.5 29.0368 29.5368 24 35.75 24H47V35.25C47 41.4632 41.9632 46.5 35.75 46.5C29.5368 46.5 24.5 41.4632 24.5 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M2 35.25C2 41.4632 7.03679 46.5 13.25 46.5H24.5V35.25C24.5 29.0368 19.4632 24 13.25 24C7.03679 24 2 29.0368 2 35.25Z" class="ccustom" fill="#17CF97"></path> <path d="M47 12.75C47 6.53679 41.9632 1.5 35.75 1.5H24.5V12.75C24.5 18.9632 29.5368 24 35.75 24C41.9632 24 47 18.9632 47 12.75Z" className="ccustom" fill="#17CF97"></path> </svg>
                <h1 className="text-4xl font-semibold tracking-tight first:mt-0  ">
                    Connexion
                </h1>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 p-10 lg:w-1/2  items-center">
                        <FormField
                            control={form.control}
                            name="login"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Adresse email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="exemple@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Mot de passe</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Se connecter</Button>
                    </form>
                </Form>

                <div>
                    {error?.name && <p className="text-red-500">{error.message}</p>}
                </div>

            </div>

        </div>
    );
}


export default Login;